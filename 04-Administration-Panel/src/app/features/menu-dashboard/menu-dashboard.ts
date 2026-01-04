import { Component, signal } from '@angular/core';
import { images } from '@features/menu-dashboard/constants/images.contants';

@Component({
  selector: 'app-menu-dashboard',
  imports: [],
  template: `
    <section>
      <aside
        class="pointer-events-auto fixed top-4 left-4 z-30 flex h-2/3 w-16 flex-col items-center justify-between rounded-xl bg-[#a6a6a6] transition-transform duration-300 md:static md:h-[calc(100vh-2rem)] md:translate-x-0 shadow-[8px_2px_61px_7px_rgba(139,139,139,1)]"
        [class.-translate-x-96]="!isOpen()"
        [class.translate-x-0]="isOpen()"
      >
        <article
          class="my-4 flex h-3/4 w-2/3 flex-col items-center justify-start gap-2 rounded-xl bg-[#242426] p-2"
        >
          @for(image of images; track $index){
          <div>
            <button (click)="toogle()">
              <img
                [src]="image.url"
                [alt]="image.alt"
                class="h-auto w-6 object-contain text-white"
              />
            </button>
          </div>
          }
        </article>
        <article
          class="my-4 flex w-2/3 flex-col items-center justify-start rounded-xl bg-[#242426] p-2"
        >
          <button (click)="toogle()">
            <img
              class="auto w-6 object-contain text-white"
              [src]="'icons/settings.svg'"
              alt="settings icon"
            />
          </button>
        </article>
      </aside>
      <div>
        <button (click)="toogle()">
          <img
            [class.opacity-0]="isOpen()"
            [src]="'icons/menu.svg'"
            [alt]="'menu icon'"
            class="h-auto w-8 md:hidden"
          />
        </button>
      </div>
    </section>
  `,
})
export default class MenuDashboard {
  protected images = images;
  protected isOpen = signal<boolean>(false);

  toogle() {
    this.isOpen.update((v) => !v);
  }
}
