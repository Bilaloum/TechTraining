import { Component } from '@angular/core';
import { AuthServiceService } from '../tab1/Services/auth-service.service';
import { Router } from '@angular/router';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
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

  getUsername(){
    return this.loginService.Credential.email.split('@')[0];
  }
  
  LogOut(){
    this.loginService.SignOut();
  }

}
