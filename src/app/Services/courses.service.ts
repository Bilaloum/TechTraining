import { Injectable } from '@angular/core';
import { Firestore, collectionData } from "@angular/fire/firestore";
import { collection } from 'firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor(private firestore: Firestore ) { }

  getCourses(){
    const courseRef = collection(this.firestore, "courses");
    return collectionData(courseRef);
  }

}
