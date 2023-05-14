import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';
import { SwiperModule } from 'swiper/angular';
import { CourseCardModule } from '../components/course-card/course-card.module';
import { ProfileHeaderModule } from '../components/profile-header/profile-header.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    SwiperModule,
    CourseCardModule,
    ProfileHeaderModule
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
