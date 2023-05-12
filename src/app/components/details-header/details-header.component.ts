import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ion-details-header',
  templateUrl: './details-header.component.html',
  styleUrls: ['./details-header.component.scss'],
})
export class DetailsHeaderComponent  implements OnInit {

  @Input() title: string;
  @Input() defaultHref: string; 

  constructor() { }

  ngOnInit() {}

}
