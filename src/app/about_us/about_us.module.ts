import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AboutUsPage } from './about_us.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { AboutUsPageRoutingModule } from './about_us-routing.module';
import { CustomHeaderModule } from '../components/custom-header/custom-header.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    AboutUsPageRoutingModule,
    CustomHeaderModule
  ],
  declarations: [AboutUsPage]
})
export class AboutUsPageModule {}
