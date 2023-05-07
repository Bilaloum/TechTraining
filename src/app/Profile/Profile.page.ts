import { Component } from '@angular/core';

import { Router } from '@angular/router';
import { animate, style, transition, trigger } from '@angular/animations';
import { AuthServiceService } from '../Services/AuthServices/auth-service.service';

@Component({
  selector: 'app-Profile',
  templateUrl: 'Profile.page.html',
  styleUrls: ['Profile.page.scss'],
  animations: [
    trigger('wrapperAnimation', [
      transition(':enter', [
        style({ transform: 'translateY(100%)' }),
        animate('500ms ease-out', style({ transform: 'translateX(0%)' }))
      ])
    ]),
    trigger('headerAnimation',[transition(':enter',[
      style({transform:'translateY(-100%)'}),
      animate('500ms ease-out',style({transfrom:'translateY(0%)'}))
    ])
  ]),
  ],
})
export class Tab2Page {
  constructor(private loginService : AuthServiceService, private router: Router) {}

  /*
  getUsername(){
    return this.loginService.Credential.email.split('@')[0];
  }
  
  LogOut(){
    this.loginService.SignOut();
  }
  */


  LogOut(){
     this.loginService.SignOut();
  }




}
