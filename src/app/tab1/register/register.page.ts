import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../Services/auth-service.service';
import userEmailRegister from '../types/userRegister';
import { style, transition, trigger ,animate} from '@angular/animations';

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

  constructor(private RegisterService:AuthServiceService) { }

ngOnInit() {
}

user:userEmailRegister ={
  Email:'',
  Password:'',
  ConfirmedPassword:''
}
  

register(){
   if(this.user.ConfirmedPassword=="" || this.user.Email=="" || this.user.Password=="") {
      console.log("Empty");
      return;
    }else if(this.user.ConfirmedPassword!=this.user.Password){
      console.log("the password and the confirmed password are not the same !!");
      return;
    }else{
        this.RegisterService.register(this.user);
        this.user.Email="";
        this.user.Password="";
        this.user.ConfirmedPassword="";
    }
}

}
