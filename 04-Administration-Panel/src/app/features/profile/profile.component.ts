import { Component, signal } from '@angular/core';
import { profileOptions } from '@features/profile/constants/profile.constant';

@Component({
  selector: 'app-profile',
  imports: [],
  template: ` <section class="mt-4 ml-4 flex h-auto w-full flex-col md:w-72">
    <article class="flex h-14 flex-col">
      <div class="flex flex-row items-center gap-3">
        <img src="icons/profile.png" alt="profile png" class="h-auto w-8 object-contain" />

        <span>John Doe</span>
        <button (click)="toggle()">
          <img [class.rotate-90]="isOpenModal()" src="icons/mayor.png" alt="mayor icon" />
        </button>
      </div>

      @if (isOpenModal()) {
      <span class="ml-11 text-neutral-600">customerpop@gmail.com</span>
      }
    </article>

    <article>
      @for (option of profileOptions; track $index) {
      <section class="flex flex-col">
        <span class="text-neutral-500">{{ option.group }}</span>
        @for (resource of option.resources; track $index) {
        <div
          class="group relative flex items-center gap-3 p-3 rounded-xl border-2 border-transparent  hover:border-white/60 overflow-hidden"
        >
          <div
            class="absolute inset-0 rounded-xl bg-linear-to-r from-[#aaaaaa] via-[#b0b4b3] to-[#c3ccc9] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"
          ></div>

          <img class="relative z-10" [src]="resource.image.url" [alt]="resource.image.alt" />

          <span class="relative z-10">
            {{ resource.item }}
          </span>

          <span
            class="
          relative z-10 ml-auto
          size-4 rounded-xl
          bg-white/60 text-xs font-medium
          inline-flex items-center justify-center
          opacity-0 translate-x-2
          group-hover:opacity-100 group-hover:translate-x-0
          transition-all duration-200"
          >
            o
          </span>
        </div>
        }
      </section>
      }
    </article>
  </section>`,
})
export default class Profile {
  protected isOpenModal = signal<boolean>(false);
  protected profileOptions = profileOptions;

  toggle() {
    this.isOpenModal.update((v) => !v);
  }
}
