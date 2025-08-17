import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderLayout } from "./core/Layout/header-layout/header-layout";
import { AsideLayout } from "./core/Layout/aside-layout/aside-layout";
import { MainLayout } from "./core/Layout/main-layout/main-layout";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderLayout, AsideLayout, MainLayout],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('03-spotify-clone');
}
