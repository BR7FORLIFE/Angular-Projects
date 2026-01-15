import { Component, signal } from '@angular/core';
import { options } from './constants/options';
import { NgClass } from '@angular/common';

interface MovieInfo {
  id: number;
  selector: string;
  imageUrl: string;
  alt: string;
}

@Component({
  selector: 'app-root',
  imports: [NgClass],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('06-netflix-responsive');
  protected options = options;
  protected numberImages = Array.from({ length: 4 });

  protected movieInfo: MovieInfo[] = [
    {
      id: 1,
      selector: 'Reproducir',
      imageUrl: '/images/play.svg',
      alt: 'play icon',
    },
    {
      id: 2,
      selector: 'Más información',
      imageUrl: '/images/info.svg',
      alt: 'info icon',
    },
  ];
}
