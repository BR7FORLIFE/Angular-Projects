import { Component, OnInit, signal } from '@angular/core';
import { Statistics } from '@shared/IU/components/statistics/statistics';
import { FilmType } from '@core/schemas/film.schema';
import { FilmService } from '@core/services/film.service';

@Component({
  selector: 'app-dashboard.component',
  imports: [Statistics],
  template: `
    <div class="w-screen h-screen flex flex-row">
      <aside class="w-1/5 bg-[#ffffff] flex flex-col justify-between items-center">
        <div>
          <img
            src="https://image.similarpng.com/file/similarpng/original-picture/2021/08/Business-Finance-logo-design-on-transparent-background-PNG.png"
            alt="business icon"
          />
        </div>
        <div></div>
        <div></div>
      </aside>
      <main class="w-4/5 bg-[#f3f3f3]">
        <app-statistics [data]="films()"></app-statistics>
      </main>
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
