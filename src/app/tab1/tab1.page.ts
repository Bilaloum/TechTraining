import { Component} from '@angular/core';
import { style, transition, trigger ,animate} from '@angular/animations';
import {  Router } from '@angular/router';
import { AuthServiceService } from '../Services/AuthServices/auth-service.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
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
  ]
})
export class Tab1Page  {
  constructor(public authService:AuthServiceService,private router : Router) {}
   GoogleAuth(){
      this.authService.GoogleAuth().then(()=>{
      this.authService.isAuth=true;
      this.router.navigate(['/tabs/home']);
    }).catch((error)=>{
           console.log(error);
    });
  }
}
