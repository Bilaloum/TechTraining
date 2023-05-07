import { Component } from '@angular/core';
import { AuthServiceService } from '../tab1/Services/auth-service.service';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  constructor(private loginService : AuthServiceService,) {}

  isAuthenticated(){
      return this.loginService.isAuthenticated;
  }


    }