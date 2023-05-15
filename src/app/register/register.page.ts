import { Component, OnInit } from '@angular/core';
import { style, transition, trigger ,animate} from '@angular/animations';
import { Router } from '@angular/router';
import { AuthServiceService } from '../Services/AuthServices/auth-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
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
export class RegisterPage implements OnInit {
constructor(
    public authService: AuthServiceService,
    public router: Router
  ) { }

  ngOnInit(){}
  signUp(email, password,confirmedPassword){
    if(email.ConfirmedPassword=="" || password.Email=="" || confirmedPassword.Password=="") {
      window.alert("All fields are required. Please fill in all inputs.")
      return;
    }else if(email.ConfirmedPassword!=password.Password){
      window.alert("The password and confirmed password do not match.");
      return;
    }else{
       this.authService.RegisterUser(email.value, password.value)
      .then((res) => {
        this.authService.SendVerificationMail();
      }).catch((error) => {
        window.alert(error.message)
      })
    }  
  }
}