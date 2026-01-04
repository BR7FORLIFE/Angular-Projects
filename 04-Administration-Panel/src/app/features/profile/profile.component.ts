import { Component, signal, inject } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { profileOptions, OptionsGroup } from '@features/profile/constants/profile.constant';

@Component({
  selector: 'app-profile',
  imports: [],
  template: ` <section
    class="flex h-auto flex-col rounded-xl bg-[#a8a8a8] p-4 md:w-full shadow-[23px_27px_15px_-11px_rgba(122,122,122,0.96)]"
  >
    <article class="flex h-14 flex-col">
      <div class="flex flex-row items-center gap-3">
        <img src="icons/profile.png" alt="profile png" class="h-auto w-8 object-contain" />

        <span>John Doe</span>
        <button (click)="toggle()">
          <img [class.rotate-90]="isOpenModal()" src="icons/mayor.png" alt="mayor icon" />
        </button>
      </div>

      @if (isOpenModal()) {
      <span class="text-neutral-600">customerpop@gmail.com</span>
      }
    </article>

    <article>
      @for (option of profileOptions; track $index) {
      <section class="flex flex-col">
        <span class="text-neutral-500">{{ option.group }}</span>
        @for (resource of option.resources; track $index) {
        <button
          (click)="navigate(resource)"
          class="group relative flex items-center gap-3 overflow-hidden rounded-xl border-2 border-transparent  p-3 hover:border-white/60 active:border-white/60 hover:shadow-[32px_12px_20px_-16px_rgba(192,253,255,0.75)]"
        >
          <div
            class="absolute inset-0 z-0 rounded-xl bg-linear-to-r from-[#aaaaaa] via-[#b0b4b3] to-[#c3ccc9] opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-active:opacity-100"
          ></div>

          <img class="relative z-10" [src]="resource.image.url" [alt]="resource.image.alt" />

          <span class="relative z-10 text-sm">
            {{ resource.item }}
          </span>

          <span
            class="
          relative z-10 ml-auto
          inline-flex size-4
          translate-x-2 items-center justify-center
          rounded-xl bg-white/60 text-xs
          font-medium opacity-0
          transition-all duration-200
          group-hover:translate-x-0 group-hover:opacity-100
          group-active:translate-x-0 group-active:opacity-100"
          >
            o
          </span>
        </button>
        }
      </section>
      }
    </article>
  </section>`,
})
export default class Profile {
  protected isOpenModal = signal<boolean>(false);
  protected profileOptions = profileOptions;
  private router = inject(Router);
  private route = inject(ActivatedRoute);

  toggle() {
    this.isOpenModal.update((v) => !v);
  }
  navigate(event: OptionsGroup) {
    this.router.navigate([event.endpointUrl], {
      relativeTo: this.route,
    });
  }
}
