import { Component, Input, OnInit, Output } from '@angular/core';
import { Course } from 'src/app/models/Course';

@Component({
  selector: 'ion-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.scss'],
})
export class CourseCardComponent  implements OnInit {

  @Input() course: Course;

  constructor() { }

  ngOnInit() {}

}
