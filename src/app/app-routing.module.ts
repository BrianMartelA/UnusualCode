import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard, redirectUnauthorizedTo } from '@angular/fire/auth-guard';
import { RoleGuard } from './role.guard';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['login']);

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./main/login/login.module').then(m => m.LoginPageModule),
    canActivate: [AuthGuard],
    data: { authGuardPipe: redirectUnauthorizedToLogin }
  },
  {
    path: 'home',
    loadChildren: () => import('./main/home/home.module').then(m => m.HomePageModule),
    canActivate: [AuthGuard],
    data: { authGuardPipe: redirectUnauthorizedToLogin }
  },
  {
    path: 'register',
    loadChildren: () => import('./main/register/register.module').then( m => m.RegisterPageModule), canActivate: [AuthGuard],
    data: {authGuardPipe: redirectUnauthorizedToLogin}
  },
  {
    path: 'client',
    loadChildren: () => import('./main/client/client.module').then(m => m.ClientPageModule),
    canActivate: [AuthGuard, RoleGuard],
    data: { authGuardPipe: redirectUnauthorizedToLogin, typeuser: 2 }
  },
  {
    path: 'programmer',
    loadChildren: () => import('./main/programmer/programmer.module').then(m => m.ProgrammerPageModule),
    canActivate: [AuthGuard, RoleGuard],
    data: { authGuardPipe: redirectUnauthorizedToLogin, typeuser: 3 }
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

