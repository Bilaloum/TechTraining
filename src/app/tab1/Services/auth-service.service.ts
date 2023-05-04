import { Injectable } from '@angular/core';
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




}
