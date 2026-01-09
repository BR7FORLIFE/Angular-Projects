import { Component } from '@angular/core';
import ChartArea from '@features/analytics/series/area/charts-area.component';
import { InfoAreaChart } from '@features/analytics/constants/data-info';

@Component({
  selector: 'app-analytics',
  imports: [ChartArea],
  template: `<main class="flex h-auto w-full flex-col gap-4">
    <section class="flex w-full flex-row justify-between">
      <!--Title and Timezone-->
      <article class="inline-flex flex-row items-center justify-center gap-3">
        <span class="font-sans font-semibold">Analytics</span>
        <div class="inline-flex h-7 items-center justify-center gap-2 rounded-xl bg-white/60 p-2">
          <span class="text-[10px] font-medium">{{ timezone }}</span>
          <img [src]="'icons/schedule.svg'" alt="schedule icon" class="h-auto w-6 object-contain" />
        </div>
      </article>
      <!-- slider para modo oscuro y modo claro-->
      <button
        class="inline-flex w-24 cursor-pointer items-center justify-between"
        (click)="toggleTheme()"
      >
        <img src="icons/sun.svg" alt="sun icon" class="h-auto w-4" />

        <div class="relative h-5 w-10 rounded-full bg-gray-200 transition-colors dark:bg-gray-700">
          <span
            class="absolute top-0.5 left-0.5 h-4 w-4 rounded-full bg-white/70 transition-transform duration-300"
            [class.translate-x-5]="isDark"
          ></span>
        </div>

        <img src="icons/moon.svg" alt="moon icon" class="h-auto w-4" />
      </button>

      <!--account-->
      <article class="inline-flex flex-row items-center justify-center gap-2 px-2">
        <img [src]="'icons/profile-2.svg'" alt="profile icon" class="h-auto w-5 object-contain" />
        <span class="text-neutral-800">user@example.com</span>
      </article>
    </section>

    <app-area-component [params]="infoAreaParams"></app-area-component>
  </main>`,
})
export default class Analytics {
  protected timezone = new Date().toDateString();
  protected infoAreaParams = InfoAreaChart;
  protected isDark = false;
  toggleTheme() {
    this.isDark = !this.isDark;
  }
}
