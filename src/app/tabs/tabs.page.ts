import { Component } from '@angular/core';
import { AuthServiceService } from '../Services/AuthServices/auth-service.service';


@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  constructor(private loginService : AuthServiceService) {}

   isAuthenticated(){
      return this.loginService.isLoggedIn;
    }


 }