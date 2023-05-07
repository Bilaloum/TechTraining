import { Injectable } from '@angular/core';
import { Firestore, collectionData,collection, doc, docData } from "@angular/fire/firestore";
import { Course } from '../../models/Course';
import { Observable, map } from 'rxjs';
import { Storage } from '@angular/fire/storage';
import { AngularFirestore } from '@angular/fire/compat/firestore';
// import { collection } from 'firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {


  constructor(private firestore: AngularFirestore, private fireStorage: Storage ) { }

  getCourses(){
    return this.firestore.collection("courses").get()
  }

  getCourseById(id: string){
    return this.firestore.doc(`courses/${id}`).get();
  }

  // getImageStorageUrl(image: any){
  //   const imgRef = 
  // }
}
