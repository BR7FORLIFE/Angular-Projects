import { Component, Input, AfterViewInit, ViewChild, type ElementRef } from '@angular/core';
import { NgStyle, NgClass } from '@angular/common';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

@Component({
  imports: [NgStyle, NgClass],
  selector: 'app-label-info',
  template: ` <section
    #scene
    class="w-full flex justify-center items-center"
    [ngStyle]="{ height }"
  >
    <div
      #label
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
export class InfoLabel implements AfterViewInit {
  @Input() title!: string;
  @Input() complement?: string;
  @Input() paragraph!: string;
  @Input() height: string = '72vh';
  @Input() align: 'left' | 'right' = 'left';

  //elementos html
  @ViewChild('scene', { static: true }) scene!: ElementRef;
  @ViewChild('label', { static: true }) label!: ElementRef;

  ngAfterViewInit(): void {
    //animacion del label description
    gsap.registerPlugin(ScrollTrigger);

    const labelEl = this.label.nativeElement;
    const sceneEl = this.scene.nativeElement;

    gsap.set(labelEl, {
      xPercent: this.align === 'right' ? 100 : -100,
      autoAlpha: 0,
    });

    gsap.to(labelEl, {
      xPercent: 0,
      autoAlpha: 1,
      ease: 'power4.out',
      scrollTrigger: {
        trigger: this.scene.nativeElement,
        start: 'bottom bottom',
        toggleActions: 'play none none reverse',
        markers: true,
      },
    });
  }
}
