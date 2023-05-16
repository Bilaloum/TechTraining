import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ion-custom-header',
  templateUrl: './custom-header.component.html',
  styleUrls: ['./custom-header.component.scss'],
})
export class CustomHeaderComponent  implements OnInit {

  @Input() title: string;
  @Input() defaultHref: string; 
  @Input() hasBackButton:boolean =false

  constructor() { }

  ngOnInit() {}

}
