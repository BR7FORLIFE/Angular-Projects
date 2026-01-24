import { Component, Input } from '@angular/core';
import { NgStyle, NgClass } from '@angular/common';

@Component({
  imports: [NgStyle, NgClass],
  selector: 'app-label-info',
  template: ` <section class="w-full flex justify-center items-center" [ngStyle]="{ height }">
    <div
      class="w-2/3 h-44 flex flex-col items-start justify-center gap-4
               border-orange-400"
      [ngClass]="{
        'border-l-4': align !== 'right',
        'border-r-4 text-right': align === 'right',
      }"
    >
      <h3 class="ml-4 text-4xl font-semibold font-sans">
        {{ title }}<br />
        @if (complement) {
          {{ complement }}
        }
      </h3>

      <p class="ml-4 text-2xl text-neutral-300 font-thin">
        {{ paragraph }}
      </p>
    </div>
  </section>`,
})
export class InfoLabel {
  @Input() title!: string;
  @Input() complement?: string;
  @Input() paragraph!: string;
  @Input() height: string = '72vh';
  @Input() align: 'left' | 'right' = 'left';
}
