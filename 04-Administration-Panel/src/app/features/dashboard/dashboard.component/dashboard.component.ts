import { Component, signal, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FilmType } from '@core/schemas/film.schema';
import { FilmService } from '@core/services/film.service';
import MenuDashboard from '@features/menu-dashboard/menu-dashboard';
import Profile from '@features/profile/profile.component';

@Component({
  selector: 'app-dashboard.component',
  imports: [MenuDashboard, Profile, RouterOutlet],
  template: `
    <div class="h-screen w-screen overflow-hidden bg-[#949494] p-4">
      <div class="relative min-h-screen md:flex md:gap-4">
        <app-menu-dashboard></app-menu-dashboard>
        <div class="flex-1 flex flex-col md:flex-row min-h-screen gap-4">
          <app-profile></app-profile>

          <section class="flex-1 overflow-auto">
            <router-outlet></router-outlet>
          </section>
        </div>
      </div>
    </div>
  `,
})
export default class DashboardComponent {
  films = signal<FilmType[] | null>(null);

  private film = inject(FilmService);
}
