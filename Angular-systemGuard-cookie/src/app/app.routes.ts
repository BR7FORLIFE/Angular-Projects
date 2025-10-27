import { Routes } from '@angular/router';
import { Login } from './features/auth/components/login/login';
import { Dashboard } from './features/auth/components/dashboard/dashboard';
import { AuthGuard } from './core/guards/auth.guard';

export const routes: Routes = [
  {
    path: '**',
    redirectTo: 'login',
  },
  {
    path: 'login',
    component: Login,
  },
  {
    path: 'dashboard',
    component: Dashboard,
    canActivate: [AuthGuard],
  },
];
