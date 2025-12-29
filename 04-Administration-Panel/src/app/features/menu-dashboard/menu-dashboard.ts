import { Component, signal } from '@angular/core';
import { images } from '@features/menu-dashboard/constants/images.contants';

@Component({
  selector: 'app-menu-dashboard',
  imports: [],
  template: `
    <section class="flex h-screen py-2">
      <aside
        class="fixed inset-y-0 left-0 ml-4 flex h-2/3 w-16 flex-col items-center rounded-xl bg-[#a6a6a6] transition-transform duration-300 md:static md:translate-x-0 z-30"
        [class.-translate-x-96]="!isOpen()"
        [class.translate-x-0]="isOpen()"
      >
        <article
          class="my-4 flex h-3/4 w-2/3 flex-col items-center justify-center gap-4 rounded-xl  bg-[#242426]"
        >
          @for(image of images; track $index){
          <div>
            <img
              (click)="toogle()"
              [src]="image.url"
              [alt]="image.alt"
              class="h-auto w-6 object-contain text-white"
            />
          </div>
          } @if (isOpen()) {
          <div class="fixed inset-0 bg-black/40 z-30 md:hidden" (click)="isOpen.set(false)"></div>
          }
        </article>
      </aside>
      <div class="flex-1">
        <img [src]="'icons/menu.svg'" [alt]="'menu icon'" class="h-auto w-8 md:hidden" />
      </div>
    </section>
  `,
})
export default class MenuDashboard {
  protected images = images;
  protected isOpen = signal<boolean>(false);

  toogle() {
    this.isOpen.update((v) => !v);
    console.log(this.isOpen())
  }
}
