import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Play } from "./play/play";
import { Turn } from "./turn/turn";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Play, Turn],
  templateUrl: './app.html',
  styleUrl: './app.css'
})  
export class App {
  protected readonly title = signal('02-Rock-Paper-Scissors');
}
