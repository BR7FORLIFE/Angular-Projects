import { Routes } from '@angular/router';
import DashboardComponent from '@features/dashboard/dashboard.component/dashboard.component';
import Analytics from '@features/analytics/analytics.component';

export const DASHBOARD_ROUTES: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'analytics',
        component: Analytics,
      },
    ],
  },
];
