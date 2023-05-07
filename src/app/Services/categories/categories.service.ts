import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Category } from '../../models/Category';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private firestore: Firestore) {
  }

  getCetegories():Observable<Category[]>{
    const categoriesRef = collection(this.firestore, "categories");
    return collectionData(categoriesRef,{idField: "id"}) as Observable<Category[]>;
  }



}
