import { Component, signal, inject } from '@angular/core';
import { FilmType } from '@core/schemas/film.schema';
import { FilmService } from '@core/services/film.service';
import MenuDashboard from '@features/menu-dashboard/menu-dashboard';
import Profile from '@features/profile/profile.component';

@Component({
  selector: 'app-dashboard.component',
  imports: [MenuDashboard, Profile],
  template: `
    <div class="h-screen w-screen bg-[#949494]">
      <div class="flex min-h-screen flex-col gap-2  md:flex-row">
        <app-menu-dashboard></app-menu-dashboard>
        <app-profile></app-profile>
      </div>
    </div>
  `,
})
export default class DashboardComponent {
  films = signal<FilmType[] | null>(null);

  private film = inject(FilmService);
}
