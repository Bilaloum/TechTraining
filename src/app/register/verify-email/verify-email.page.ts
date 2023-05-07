import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from 'src/app/Services/AuthServices/auth-service.service';

@Component({
  selector: 'app-verify-email',
  templateUrl: './verify-email.page.html',
  styleUrls: ['./verify-email.page.scss'],
})
export class VerifyEmailPage implements OnInit {

  constructor(public authService: AuthServiceService) { }

  ngOnInit() {
  }

}
