import { Routes } from '@angular/router';

import Login from '@features/login/login';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: Login },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./features/dashboard/dashboard.routes').then((route) => route.DASHBOARD_ROUTES),
  },
  { path: '**', redirectTo: 'login' },
];
