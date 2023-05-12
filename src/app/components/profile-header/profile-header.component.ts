import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ion-profile-header',
  templateUrl: './profile-header.component.html',
  styleUrls: ['./profile-header.component.scss'],
})
export class ProfileHeaderComponent  implements OnInit {

  @Input() profileImg: string;
  @Input() userName: string; 

  constructor() { }

  ngOnInit() {}

}
