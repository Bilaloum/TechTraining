import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CourseDetailsPageRoutingModule } from './course-details-routing.module';

import { CourseDetailsPage } from './course-details.page';
import { CustomHeaderModule } from '../components/custom-header/custom-header.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CourseDetailsPageRoutingModule,
    CustomHeaderModule
  ],
  declarations: [CourseDetailsPage]
})
export class CourseDetailsPageModule {}
