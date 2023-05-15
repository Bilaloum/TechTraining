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
      {
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
        path: 'panier',
        loadChildren: () => import('../panier/panier.module').then(m => m.PanierPageModule)
      },
      {
        path: 'about_us',
        loadChildren: () => import('../about_us/about_us.module').then(m => m.AboutUsPageModule)
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
