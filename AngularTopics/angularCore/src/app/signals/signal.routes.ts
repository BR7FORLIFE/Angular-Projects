import { Routes } from '@angular/router';
import { SignalHome } from './pages/signal-home/signal-home';
import { Exercises } from './pages/exercises/exercises';

export const SIGNALS_ROUTES: Routes = [
  { path: '', component: SignalHome },
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
  { path: 'examples', component: Exercises },
];
