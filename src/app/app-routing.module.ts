import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { LoggedInAuthGuardGuard } from './guards/logged-in-auth-guard.guard';

const routes: Routes = [

{
  path: 'tabs',
  canActivate: [AuthGuard],
  loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule),
},
{
  path: 'tab1',
  canActivate:[LoggedInAuthGuardGuard],
  loadChildren: () => import('./tab1/tab1.module').then(m => m.Tab1PageModule),
},
{
path: '**',
 redirectTo:'/tabs/home',
 pathMatch:'full',
},
=======
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
