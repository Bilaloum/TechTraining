import { Injectable } from '@angular/core';
import { Firestore, collectionData,collection, doc, docData, query, where, orderBy, limit, getDocs, collectionGroup } from "@angular/fire/firestore";
import { Course } from '../../models/Course';
import { Observable, filter, map } from 'rxjs';
import { Storage, ref } from '@angular/fire/storage';
import { getDownloadURL } from 'firebase/storage';
// import { collection } from 'firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {


  constructor(private firestore: Firestore, private fireStorage: Storage ) { }

  getCourses(){
    
    const coursesRef = collection(this.firestore, "courses");
    let courses = collectionData(coursesRef,{idField: "id"}) as Observable<Course[]>;
    
    return courses ;
  }

  getCourseById(id: string):Observable<Course>{
    
    const courseRef = doc(this.firestore,`courses/${id}`);  

    return docData(courseRef,{idField: "id"}) as Observable<Course>; 

  }

  //recomended courses (get the TOP 5 ranked courses)
  getRecomendedCourses(): Observable<Course[]>{
    
    const coursesRef = collection(this.firestore,"courses");
    const q = query(coursesRef, orderBy("rating","desc"), limit(5));

    return collectionData(q,{idField: "id"}) as Observable<Course[]>;
  }
  
  getCourseseByCategory(category_id: string):Observable<Course[]> {
    
    const coursesRef = collection(this.firestore, "courses");
    const q = query(coursesRef, where("category","==",category_id));

    return collectionData(q,{idField: "id"}) as Observable<Course[]>;
  }

}
