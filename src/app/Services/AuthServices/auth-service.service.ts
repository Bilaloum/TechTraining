//Imports
import { Injectable, NgZone } from '@angular/core';
import * as auth from 'firebase/auth';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import {AngularFirestore,} from '@angular/fire/compat/firestore';
import { User } from 'src/app/models/types/user';


@Injectable({
  providedIn: 'root',
})

export class AuthServiceService {
  user:User;
  userData: any;
  constructor(
    public afStore: AngularFirestore,
    public ngFireAuth: AngularFireAuth,
    public router: Router,
    public ngZone: NgZone
  ) {
    this.ngFireAuth.authState.subscribe((user) => {
      if (user) {
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(this.userData));
        JSON.parse(localStorage.getItem('user'));
      } else {
        localStorage.setItem('user', null);
        JSON.parse(localStorage.getItem('user'));
      }
    });
  }

public isAuth:boolean=false;

   // Returns true when user is looged in
 get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user'));
    return user !== null  !== false ? true : false;
  }

  // Returns true when user's email is verified
  
 get isEmailVerified(): boolean {
    const user = JSON.parse(localStorage.getItem('user'));
    console.log(user.emailVerified);
    return user.emailVerified ;
  }

  // Login in with email/password
  SignIn(email, password) {
    return this.ngFireAuth.signInWithEmailAndPassword(email, password).then(()=>{
      this.isAuth=true;
    });
  }

  // Register user with email/password
  RegisterUser(email, password) {
    return this.ngFireAuth.createUserWithEmailAndPassword(email, password).then((result)=>{
      this.router.navigate(['/tab1/register/verify-email']);
    });
  }
  // Email verification when new user register
  SendVerificationMail() {
    return this.ngFireAuth.currentUser.then((user) => {
      return user.sendEmailVerification().then(() => {
        this.SetUserData(user);
      }).catch((error)=>{
        window.alert("Failed to send message to this email.");
      });
    });
  }

  // Recover password
  PasswordRecover(passwordResetEmail) {
    return this.ngFireAuth
      .sendPasswordResetEmail(passwordResetEmail)
      .then(() => {
        window.alert(
          'Password reset email has been sent, please check your inbox.'
        );
      })
      .catch((error) => {
        window.alert('This email is not associated with any account.');
      });
  }

  // Sign in with Google 
  GoogleAuth() {
    return this.AuthLogin(new auth.GoogleAuthProvider());
  }

  // Auth providers
  AuthLogin(provider) {
    return this.ngFireAuth
      .signInWithPopup(provider)
      .then((result) => {

          /*const db = this.afStore;
          var userRef = db.collection('users').doc(result.user.uid);

          if(!userRef){
          this.SetUserData(result.user);
          }else{
            console.log(userRef);
          }
         */

           this.SetUserData(result.user);
          // this.router.navigate(['/tabs//home']);

        this.ngZone.run(() => {
        this.router.navigate(['/tabs/home']);
        });
      })
      .catch((error) => {
        window.alert(error);
      });
  }

  // Store the new user as a document in users collectin  at fierstore 
  SetUserData(user) {

  const db = this.afStore;
  var userRef = db.collection('users').doc(user.uid);

  
    const userData: User = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      emailVerified: user.emailVerified,
    };
    return userRef.set(userData, {
      merge: true,
    });
  
  
    
  }

  // Sign-out
  SignOut() {
    return this.ngFireAuth.signOut().then(() => {
      localStorage.removeItem('user');
      this.router.navigate(['/tab1']);
    });
  }

  getUser() : any{
    const user = JSON.parse(localStorage.getItem('user'));
    if (user !== null) {
        return this.afStore.collection('users').doc(user.uid).get();
    }
  }

  UpdeteUserDate(Name,URL){
    const user = JSON.parse(localStorage.getItem('user'));
    if (user !== null) {
        this.afStore.collection('users').doc(user.uid).update({
          displayName:Name as string,photoURL:URL as string
          }).then(()=>{
          
          }).catch((error)=>{
            console.log(error);
          })

    }
    
    
  }
}


