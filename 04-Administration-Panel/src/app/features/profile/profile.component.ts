import { Component, signal } from '@angular/core';
import { profileOptions } from '@features/profile/constants/profile.constant';

@Component({
  selector: 'app-profile',
  imports: [],
  template: ` <section class="ml-4 mt-4 flex h-auto w-full flex-col md:w-72">
    <article class="mb-4 flex h-14 flex-col">
      <div class="flex flex-row items-center gap-3">
        <img src="icons/profile.png" alt="profile png" class="h-auto w-8 object-contain" />

        <span>John Doe</span>
        <button (click)="toggle()">
          <img [class.rotate-90]="isOpenModal()" src="icons/mayor.png" alt="mayor icon" />
        </button>
      </div>

      @if (isOpenModal()) {
      <span>customerpop@gmail.com</span>
      }
    </article>

    <article>
      @for (option of profileOptions; track $index) {
      <section class="mb-4 flex flex-col">
        <span>{{ option.group }}</span>
        @for (resource of option.resources; track $index) {
        <div class="flex flex-row gap-3 rounded-xl p-3">
          <img [src]="resource.image.url" [alt]="resource.image.alt" />
          <span>{{ resource.item }}</span>
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
