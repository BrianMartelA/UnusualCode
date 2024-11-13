import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./main/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./main/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./main/register/register.module').then( m => m.RegisterPageModule)
  },  {
    path: 'profile',
    loadChildren: () => import('./main/profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'client',
    loadChildren: () => import('./main/client/client.module').then( m => m.ClientPageModule)
  },
  {
    path: 'programmer',
    loadChildren: () => import('./main/programmer/programmer.module').then( m => m.ProgrammerPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
