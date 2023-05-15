import { Component, OnInit } from '@angular/core';

import userEmailLogin from '../models/types/userLogin';
import { trigger, transition, style, animate } from '@angular/animations';
import { Router } from '@angular/router';
import { AuthServiceService } from '../Services/AuthServices/auth-service.service';
import { PanierService } from "../Services/Panier/panier.service";
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

   constructor(
    public authService: AuthServiceService,
    public router: Router,
    private panierService:PanierService
  ) {}


  ngOnInit() {}

   // Login function

  logIn(email, password) {
    this.authService.SignIn(email.value, password.value).then(()=>{
      this.authService.isAuth=true;
      this.panierService.checkCart()
      this.router.navigate(['/tabs/home']);
      //this.authService.getUserCredentials();
    }).catch((error)=>{
      alert("username or password are not correcte !!")
    });
  }
}
