import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PanierPage } from './panier.page';
import { AuthGuard } from '../guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: PanierPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PanierPageRoutingModule {}
