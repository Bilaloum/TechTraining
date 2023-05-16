import { Component, Input, OnInit } from '@angular/core';
import { AuthServiceService } from 'src/app/Services/AuthServices/auth-service.service';

@Component({
  selector: 'ion-profile-header',
  templateUrl: './profile-header.component.html',
  styleUrls: ['./profile-header.component.scss'],
})
export class ProfileHeaderComponent  implements OnInit {

  // @Input() profileImg: string;
  // @Input() userName: string; 
  displayName:string ;
  photoURL: string;

  constructor(private authService: AuthServiceService) { }
    
  ngOnInit() {
    this.InisialiseUserDate()
  }

  ionViewWillEnter() {
        this.InisialiseUserDate()
  }

  InisialiseUserDate(){
        this.authService.getUser().subscribe((profile)=> {
            this.displayName= profile.data().displayName?profile.data().displayName:profile.data().email.split('@')[0];
            this.photoURL= profile.data().photoURL?profile.data().photoURL:'https://ionicframework.com/docs/img/demos/avatar.svg';
        });
    }

}
