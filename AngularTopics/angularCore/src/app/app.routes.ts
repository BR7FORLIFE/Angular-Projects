import { Routes } from '@angular/router';
import { Home } from './home/pages/home/home';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: Home,
  },
  {
    path: 'signals',
    loadChildren: () => import('./signals/signal.routes').then((s) => s.SIGNALS_ROUTES),
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];
