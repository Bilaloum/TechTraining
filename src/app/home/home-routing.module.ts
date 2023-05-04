import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path: 'home',
    loadChildren: () => import('./home.module').then( m => m.HomePageModule)
  },
  {
    path: ':id',
    loadChildren: () => import('./course-details/course-details.module').then( m => m.CourseDetailsPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
