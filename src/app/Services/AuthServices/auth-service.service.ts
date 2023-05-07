/*import { Injectable } from '@angular/core';
import userEmailLogin from '../types/userLogin';
import { Router } from '@angular/router';
import { createUserWithEmailAndPassword, getAuth, sendPasswordResetEmail, signInWithEmailAndPassword,signOut } from "firebase/auth";
import userEmailRegister from '../types/userRegister';
import { error } from 'console';


@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  constructor(private router : Router) { }


  isAuthenticated:boolean=false;  
  isLoading:boolean=true;

  Credential :any;

  
    

   // Sign In
    login(User: userEmailLogin){
        const auth = getAuth();
        signInWithEmailAndPassword(auth,User.Email,User.Password )
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          this.isAuthenticated=true;
          this.router.navigate(['tabs/home']);
          console.log(user);
          this.Credential=user;
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
        }).finally(()=>this.isLoading=false);

      };



      // Sign Up
      register(User :userEmailRegister){
           this.isLoading=true;
            const auth = getAuth();
            createUserWithEmailAndPassword(auth, User.Email, User.Password)
            .then((userCredential: any) => {
              this.isAuthenticated=true;
              this.router.navigate(['tabs/tab2'])
              console.log(userCredential);
               this.Credential=userCredential.user;
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              this.isAuthenticated=false;
              // ..
            }).finally(()=>this.isLoading=false);
      }




      // Sign Out
      SignOut(){
          const auth = getAuth();
          signOut(auth).then(() => {
            this.isAuthenticated=false;
            this.router.navigate(['tabs/tab1']);
             this.Credential=null;
          }).catch((error) => {
            // An error happened.
          });
      }



     sendResetEmail(currentemail:string){
         const auth = getAuth();
         sendPasswordResetEmail(auth,currentemail).then(()=>{
          currentemail="";
          alert("congratulation!!!");
         }).catch((error)=>{
          console.log(error);
         });
     }




}*/


import { Injectable, NgZone } from '@angular/core';
import * as auth from 'firebase/auth';

import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import {
  AngularFirestore,
  AngularFirestoreDocument,
} from '@angular/fire/compat/firestore';
import { User } from 'src/app/models/types/user';
import { AuthGuard } from 'src/app/guards/auth.guard';
@Injectable({
  providedIn: 'root',
})
export class AuthServiceService {
  userData: any;
  constructor(
    public afStore: AngularFirestore,
    public ngFireAuth: AngularFireAuth,
    public router: Router,
    public ngZone: NgZone
  ) {
    console.log("construct");
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


  isLoggedIn:boolean=false;
  isEmailVerified:boolean=false;

   // Returns true when user is looged in
 /* get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user'));
    return user !== null && user.emailVerified !== false ? true : false;
  }*/

  // Returns true when user's email is verified
  /* get isEmailVerified(): boolean {
    const user = JSON.parse(localStorage.getItem('user'));
    console.log(user.emailVerified);
    return user.emailVerified ;
  }
*/
  // Login in with email/password
  SignIn(email, password) {
    return this.ngFireAuth.signInWithEmailAndPassword(email, password).then(()=>{
      this.isLoggedIn=true;
      this.router.navigate(['/tabs/home']);
    });
  }

  // Register user with email/password
  RegisterUser(email, password) {
    return this.ngFireAuth.createUserWithEmailAndPassword(email, password);
  }
  // Email verification when new user register
  SendVerificationMail() {
    return this.ngFireAuth.currentUser.then((user) => {
      return user.sendEmailVerification().then(() => {
        this.router.navigate(['/tabs/tab1/verify-email']);
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
        window.alert(error);
      });
  }


 

  // Sign in with Gmail
  GoogleAuth() {
    return this.AuthLogin(new auth.GoogleAuthProvider());
  }

  // Auth providers
  AuthLogin(provider) {
    return this.ngFireAuth
      .signInWithPopup(provider)
      .then((result) => {
        this.ngZone.run(() => {
          this.isLoggedIn=true;
          this.router.navigate(['/tabs/home']);
        });
        this.SetUserData(result.user);
      })
      .catch((error) => {
        window.alert(error);
      });
  }
  
  // Store user in localStorage
  SetUserData(user) {
    const userRef: AngularFirestoreDocument<any> = this.afStore.doc(
      `users/${user.uid}`
    );
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
      this.isLoggedIn=false;
      this.router.navigate(['tabs/tab1']);
    });
  }
}




/*
The constructor subscribes to the authState observable of the ngFireAuth service. The authState observable emits an event whenever the authentication state of the user changes, for example, when a user logs in or logs out. The subscribe method takes a callback function that is called whenever the authState observable emits an event.
*/ 