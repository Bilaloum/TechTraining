import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PanierPage } from './panier.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { PanierPageRoutingModule } from './panier-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    PanierPageRoutingModule
  ],
  declarations: [PanierPage]
})
export class PanierPageModule {}
