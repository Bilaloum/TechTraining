import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CategoryCoursesPageRoutingModule } from './category-courses-routing.module';

import { CategoryCoursesPage } from './category-courses.page';
import { CourseCardModule } from '../components/course-card/course-card.module';
import { DetailsHeaderModule } from '../components/details-header/details-header.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CategoryCoursesPageRoutingModule,
    CourseCardModule,
    DetailsHeaderModule
  ],
  declarations: [CategoryCoursesPage]
})

export class CategoryCoursesPageModule {}
