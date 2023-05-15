import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { animate, style, transition, trigger } from '@angular/animations';
import { AuthServiceService } from '../Services/AuthServices/auth-service.service';
import { NavController } from '@ionic/angular';


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
export class Tab2Page implements OnInit {
  constructor(private loginService : AuthServiceService, private router: Router,public navCtrl: NavController) {
    this.InisialiseUserDate();
  }

  photoURL:string;
  displayName:string;
  email:string;

  ngOnInit(): void {
    this.InisialiseUserDate()
  }



  ClearInputs(){
     this.photoURL='';
     this.displayName='';
     this.email='';
  }

   ionViewWillEnter() {
    this.InisialiseUserDate()
   }
   

  InisialiseUserDate(){
    this.loginService.getUser().subscribe((profile)=> {
      this.displayName=profile.data().displayName?profile.data().displayName:profile.data().email.split('@')[0];
      this.photoURL= profile.data().photoURL?profile.data().photoURL:'https://ionicframework.com/docs/img/demos/avatar.svg';
      this.email=profile.data().email;
    });
}

   Updete(Name,URL){
    this.loginService.UpdeteUserDate(Name.value,URL.value);
    this.InisialiseUserDate();
    this.ClearInputs();
    } 

  LogOut(){
     this.loginService.SignOut();
  }

}
