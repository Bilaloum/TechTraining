import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsHeaderComponent } from './details-header.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [DetailsHeaderComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports:[DetailsHeaderComponent]
})
export class DetailsHeaderModule { }
