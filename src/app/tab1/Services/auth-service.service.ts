import { Injectable } from '@angular/core';
import userEmailLogin from '../types/userLogin';
import { Router } from '@angular/router';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword,signOut } from "firebase/auth";
import userEmailRegister from '../types/userRegister';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  constructor(private router : Router) { }


  isAuthenticated:boolean=false;  
  isLoading:boolean=true;

   // Sign In
    login(User: userEmailLogin){
        const auth = getAuth();
        signInWithEmailAndPassword(auth,User.Email,User.Password )
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          this.isAuthenticated=true;
          this.router.navigate(['tabs/tab2']);
          console.log(user);
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
            // Sign-out successful.
          }).catch((error) => {
            // An error happened.
          });
      }

}
