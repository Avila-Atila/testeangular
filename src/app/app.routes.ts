import { Routes } from '@angular/router';
import { autenticarGuard } from './services/autenticar.guard';
export const routes: Routes = [
  {
    path: 'login',
    pathMatch: 'full',
    loadComponent() {
      return import('./pages/login/login.component').then(
        (component) => component.LoginComponent
      );
    },
  },
  {
    path: 'home',
    pathMatch: 'full',
    loadComponent() {
      return import('./pages/home/home.component').then(
        (component) => component.HomeComponent
      );
    },
    canActivate: [autenticarGuard],
  },
  {
    path: 'dashboard',
    pathMatch: 'full',
    loadComponent() {
      return import('./pages/dashboard/dashboard.component').then(
        (component) => component.DashboardComponent
      );
    },
    canActivate: [autenticarGuard],
  },
  {
    path: '**',
    redirectTo: 'login',
  },
];
