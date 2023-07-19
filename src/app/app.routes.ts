import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    redirectTo: '',
    pathMatch: 'full',
  },
  {
    path: '',
    loadComponent: () => import('./page/splash-screen/splash-screen.page').then(m => m.SplashScreenPage)
  },
  {
    path: 'start',
    loadComponent: () => import('./page/start-screen/start-screen.page').then(m => m.StartScreenPage)
  },

];
