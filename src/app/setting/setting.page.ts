import { style, transition, trigger,animate } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { AuthServiceService } from '../Services/AuthServices/auth-service.service';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.page.html',
  styleUrls: ['./setting.page.scss'],
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
export class SettingPage implements OnInit {

  constructor(private loginService:AuthServiceService,private router:Router) { }

  ngOnInit() {
  }
  /* 
  curentEmail='';

  checkBeforeNavigate(){
    if(this.loginService.isAuthenticated==true){
     this.router.navigate(['/tabs/tab2']);
    }else{
     this.router.navigate(['../']);
    }
  }

  ResetEmail(){
    this.loginService.sendResetEmail(this.curentEmail);
  }
*/


 ResetEmail(email){
    this.loginService.PasswordRecover(email.value)
  }

  checkBeforeNavigate(){
    if(this.loginService.isLoggedIn==true){
     this.router.navigate(['./tabs/Profile']);
    }else{
     this.router.navigate(['./tabs/tab1/login']);
    }
  }






}
