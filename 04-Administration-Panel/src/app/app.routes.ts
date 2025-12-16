import { Routes } from '@angular/router';

import Login from '@features/login/login';
import Register from '@features/login/register';

export const routes: Routes = [
  //{ path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: Login },
  { path: 'register', component: Register },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./features/dashboard/dashboard.routes').then((route) => route.DASHBOARD_ROUTES),
  },
  { path: '**', redirectTo: 'login' },
];
