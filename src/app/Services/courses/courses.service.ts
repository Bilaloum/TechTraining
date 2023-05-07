import { Injectable } from '@angular/core';
import { Firestore, collectionData,collection, doc, docData } from "@angular/fire/firestore";
import { Course } from '../../models/Course';
import { Observable, map } from 'rxjs';
import { Storage } from '@angular/fire/storage';
// import { collection } from 'firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {


  constructor(private firestore: Firestore, private fireStorage: Storage ) { }

  getCourses(){
    
    const coursesRef = collection(this.firestore, "courses");
    let courses = collectionData(coursesRef,{idField: "id"})

    return courses as Observable<Course[]>;
  }

  getCourseById(id: string):Observable<Course>{
    
    const courseRef = doc(this.firestore,`courses/${id}`);

    return docData(courseRef,{idField: "id"}) as Observable<Course>; 
  }

  // getImageStorageUrl(image: any){
  //   const imgRef = 
  // }
}
