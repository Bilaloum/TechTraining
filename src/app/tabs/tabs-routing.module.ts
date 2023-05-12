import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';


const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        loadChildren: () => import('../tab1/tab1.module').then(m => m.Tab1PageModule)
      },
     
        path: 'home',
        loadChildren: () => import('../home/home.module').then(m => m.HomePageModule)
      },
      {
        path: 'home/:id',
        loadChildren: () => import('../course-details/course-details.module').then(m => m.CourseDetailsPageModule)
      },
      {
        path: 'Profile',
        loadChildren: () => import('../Profile/Profile.module').then(m => m.Tab2PageModule)
      },
      {
        path: 'tab3',
        loadChildren: () => import('../tab3/tab3.module').then(m => m.Tab3PageModule)
      },
      {
        path: 'categories',
        loadChildren: () => import('../categories/categories.module').then( m => m.CategoriesPageModule),
      },
      {
        path: 'categories/:id',
        loadChildren: () => import('../category-courses/category-courses.module').then( m => m.CategoryCoursesPageModule)
      },
      {
        path: 'categories/:id/:id',
        loadChildren: () => import('../course-details/course-details.module').then( m => m.CourseDetailsPageModule),
        canActivate:[AuthGuard],
      },
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
