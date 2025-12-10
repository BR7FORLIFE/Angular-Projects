import { Component, OnInit, signal } from '@angular/core';
import { Statistics } from '@shared/IU/components/statistics/statistics';
import { FilmType } from '@core/schemas/film.schema';
import { FilmService } from '@core/services/film.service';

@Component({
  selector: 'app-dashboard.component',
  imports: [Statistics],
  template: `
    <div>
      <header></header>
      <div>
        <aside></aside>
        <main>
          <app-statistics [data]="films()"></app-statistics>
        </main>
      </div>
    </div>
  `,
})
export default class DashboardComponent implements OnInit {
  films = signal<FilmType[] | null>(null);

  constructor(private film: FilmService) {}
  ngOnInit(): void {
    this.film.getAllFilms().subscribe((films) => this.films.set(films));
  }
}
