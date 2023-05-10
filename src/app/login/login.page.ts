import { Component, OnInit } from '@angular/core';

import userEmailLogin from '../models/types/userLogin';
import { trigger, transition, style, animate } from '@angular/animations';
import { Router } from '@angular/router';
import { AuthServiceService } from '../Services/AuthServices/auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  animations: [
    trigger('wrapperAnimation', [
      transition(':enter', [
        style({ transform: 'translateY(100%)' }),
        animate('500ms ease-out', style({ transform: 'translateY(0%)' }))
      ])
    ]),
    trigger('headerAnimation',[transition(':enter',[
      style({transform:'translateY(-100%)'}),
      animate('500ms ease-out',style({transfrom:'translateY(0%)'}))
    ])
  ]),
  ]
})
export class LoginPage implements OnInit {
/*
  constructor(private loginService:AuthServiceService) { }

  ngOnInit() {
  }

 


  isLoading():boolean{
    return this.loginService.isLoading;
  }
*/
 /* login(){
    if(this.user.Email=="" || this.user.Password=="") {
      console.log("Empty");
      return;
    }
       this.loginService.(this.user);
       this.user.Email="";
        this.user.Password="";
  }*/


   constructor(
    public authService: AuthServiceService,
    public router: Router
  ) {}


  ngOnInit() {}

   // Login function

  logIn(email, password) {
    this.authService.SignIn(email.value, password.value);
  }





}
