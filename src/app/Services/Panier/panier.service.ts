import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { getAuth } from 'firebase/auth';
import { Observable, forkJoin, map, of, switchMap } from 'rxjs';
import { Course } from 'src/app/models/Course';
import firebase from 'firebase/compat/app';
import { Panier } from 'src/app/models/Panier/Panier';
import { CoursesService } from '../courses/courses.service';
import { ref } from 'firebase/storage';


@Injectable({
  providedIn: 'root'
})

export class PanierService {


  constructor(private db : AngularFirestore,private courseServ : CoursesService ) { }


  // Recuperer les cours
  getCourses(): Observable<Course[]> {
    return this.db.collection<Course>('courses').valueChanges({ idField: 'id' });
  }

  getCoursesById(id_courses){

  }




  // creer le panier
  CreateCart() {
    const id = this.getUserId();
    const cartRef = this.db.collection('cart').doc(id);
    cartRef.set({}); // create an empty document with the specified ID
  }



  // Recuprerer ID de user
  getUserId(){
    const auth = getAuth();
    const user = auth.currentUser;
    return user.uid;
  }


    // Recuprer le panier
  getCartForUser() {
    var docRef = this.db.collection("cart").doc(this.getUserId());
    console.log("this")
    docRef.get().subscribe((doc) => {
    if (doc.exists) {
        console.log(doc);
    } else {
        console.log("No such document!");
    }
    })
  }


  // Ajouter un element au panier
  addCourseToCart(title:String){
    this.db.collection('cart')
    .doc(this.getUserId())
    .update(
      {
        titles : firebase.firestore.FieldValue.arrayUnion(title)
      }
    )
  }

  removeCourseToCart(title:String){
    this.db.collection('cart')
    .doc(this.getUserId())
    .update(
      {
        titles : firebase.firestore.FieldValue.arrayRemove(title)
      }
    )
  }

  getCart(){
    return this.db.collection("cart").doc(this.getUserId()).valueChanges();
  }


  getCoursesCart(){
    this.getCart().pipe(
      map(data =>{
        console.log(data)
      })
    )
  }

  getCoursesForUser(): Observable<Course[]> {
    return this.db.collection("cart").doc(this.getUserId()).valueChanges().pipe(
      switchMap((data: Panier) => {
        if (data.titles.length === 0) {
          return of([]);
        }
        return this.db.collection("courses", ref => ref.where('uid', 'in', data.titles)).valueChanges() as Observable<Course[]>;
      })
    );


  }

  getPanierTitles(): Observable<string[]> {
    return this.db.collection('cart').doc(this.getUserId()).valueChanges().pipe(
      map((p: Panier) => {
        return p.titles;
      })
    );
  }

  justTest(): Observable<Course[]> {
    return this.getPanierTitles().pipe(
      switchMap((titles: string[]) => {
        return this.db.collection<Course>("courses", ref => ref.where('title', 'in', titles)).valueChanges({ idField: 'id' });
      })
    );
  }
  
  
  





}
