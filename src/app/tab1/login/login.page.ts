import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../Services/auth-service.service';
import userEmailLogin from '../types/userLogin';
import { trigger, transition, style, animate } from '@angular/animations';

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

  constructor(private loginService:AuthServiceService) { }

  ngOnInit() {
  }

  user:userEmailLogin={
    Email: '',
    Password: ''
  }


  isLoading():boolean{
    return this.loginService.isLoading;
  }

  login(){
    if(this.user.Email=="" || this.user.Password=="") {
      console.log("Empty");
      return;
    }
       this.loginService.login(this.user);
  }
}
