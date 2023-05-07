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
  {
    path: 'home',
    canActivate:[AuthGuard],
    loadChildren: () => import('./home.module').then( m => m.HomePageModule)
  },
  {
    path: ':id',
    canActivate:[AuthGuard],
    loadChildren: () => import('./course-details/course-details.module').then( m => m.CourseDetailsPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
