import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PanierPage } from './panier.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { PanierPageRoutingModule } from './panier-routing.module';
import { CustomHeaderModule } from '../components/custom-header/custom-header.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    PanierPageRoutingModule,
    CustomHeaderModule
  ],
  declarations: [PanierPage]
})
export class PanierPageModule {}
