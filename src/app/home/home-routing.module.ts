import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePage } from './home.page';
import { AuthGuard } from '../guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    canActivate:[AuthGuard],
    component: HomePage,
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
