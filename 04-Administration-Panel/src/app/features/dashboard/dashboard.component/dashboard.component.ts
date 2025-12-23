import { Component, OnInit, signal } from '@angular/core';
import { FilmType } from '@core/schemas/film.schema';
import { FilmService } from '@core/services/film.service';
import MenuDashboard from '@features/menu-dashboard/menu-dashboard';
import { Statistics } from '@shared/IU/components/statistics/statistics';

@Component({
  selector: 'app-dashboard.component',
  imports: [Statistics, MenuDashboard],
  template: `
    <div class="w-screen h-screen bg-[#949494]">
      <div class="flex flex-col gap-2 md:flex-row">
        <app-menu-dashboard></app-menu-dashboard>
      </div>
    </div>
  `,
})
export default class DashboardComponent implements OnInit {
  films = signal<FilmType[] | null>(null);

  constructor(private film: FilmService) {}
  ngOnInit(): void {
    //this.film.getAllFilms().subscribe((films) => this.films.set(films));
  }
}
