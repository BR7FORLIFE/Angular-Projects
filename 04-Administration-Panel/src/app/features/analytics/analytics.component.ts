import { Component } from '@angular/core';

@Component({
  selector: 'app-analytics',
  imports: [],
  template: `<section>
    <div>
      <span class="text-xl font-sans">Analytics</span>
      <span>{{ timezone }}</span>
      <div>
        <img [src]="'icons/sun.svg'" alt="sun icon" />
        <div>
          <span></span>
          <span></span>
        </div>
        <img [src]="'icons/moon.svg'" alt="moon icon" />
      </div>
    </div>
  </section>`,
})
export default class Analytics {
  protected timezone = new Date().toDateString();
}
