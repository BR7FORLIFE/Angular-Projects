import { Component, signal } from '@angular/core';
import { Login } from './features/login/login';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
  imports: [Login]
})
export class App {
  protected readonly title = signal('04-Administration-Panel');
}
