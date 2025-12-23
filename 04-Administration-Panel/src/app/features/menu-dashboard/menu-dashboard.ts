import { Component } from '@angular/core';
import { images } from '@features/menu-dashboard/constants/images.contants';

@Component({
  selector: 'app-menu-dashboard',
  imports: [],
  template: `
    <section class="h-screen flex py-2">
      <aside
        class="fixed inset-y-0 left-0 w-16 h-2/3 bg-[#a6a6a6] text-black rounded-xl transform transition-transform -translate-x-96 ml-4 flex flex-col items-center md:translate-x-0 md:static"
      >
        <article
          class="my-4 w-2/3 h-3/4 flex flex-col gap-4 justify-center items-center rounded-xl  bg-[#242426]"
        >
          @for(image of images; track $index){
          <div>
            <img
              [src]="image.url"
              [alt]="image.alt"
              class="w-6 h-auto object-contain text-white"
            />
          </div>
          }
        </article>
      </aside>
      <div class="flex-1">
        <img [src]="'icons/menu.svg'" [alt]="'menu icon'" class="w-8 h-auto md:hidden" />
      </div>
    </section>
  `,
})
export default class MenuDashboard {
  protected images = images;
}
