import {
  Component,
  signal,
  computed,
  effect,
  DestroyRef,
  inject,
} from '@angular/core';

import { infoSlug, interrogationImageUrl } from '../constants/slags';
import { Slug } from '../interfaces/Slug';

@Component({
  selector: 'app-table',
  standalone: true,
  template: `
    <section class="container size-auto grid grid-cols-4 gap-3">
      @for (card of cards(); track $index) {
      <button (click)="changeState($index)">
        <article
          class="size-28 flex justify-center items-center bg-white p-2 rounded-4xl transform hover:scale-110 transition duration-200 ease-in-out origin-center"
        >
          @if (state()[$index]) {
          <img [src]="card.imagesrc" alt="icon" class="w-16 h-auto bg-cover" />
          } @else {
          <img
            [src]="interrogationImage"
            alt="icon"
            class="w-16 h-auto bg-cover"
          />
          }
        </article>
      </button>
      }
    </section>
  `,
})
export class Table {
  private destroyRef = inject(DestroyRef);
  interrogationImage = interrogationImageUrl;
  cards = signal<Slug[]>([]);
  state = signal<boolean[]>([]);
  blockTable = signal<boolean>(false);
  revealedIndexes = computed(() =>
    this.state()
      .map((isOn, idx) => (isOn ? idx : -1))
      .filter((idx) => idx !== -1)
  );
  constructor() {
    effect(() => {
      const revealed = this.revealedIndexes();
      if (revealed.length === 2) {
        this.handlePair(revealed);
      }
    });
  }
  ngOnInit(): void {
    const duplicated = [...infoSlug, ...infoSlug];
    this.cards.set(duplicated);
    this.state.set(Array(duplicated.length).fill(false));
  }
  changeState(index: number) {
    if (this.blockTable() || this.state()[index]) return;
    this.state.update((arr) => {
      const copy = [...arr];
      copy[index] = true;
      return copy;
    });
  }
  private handlePair(indexes: number[]) {
    this.blockTable.set(true);
    const isPair = this.verifyPair(indexes);
    if (isPair) {
      this.blockTable.set(false);
    } else {
      setTimeout(() => {
        this.resetCards(indexes);
        this.blockTable.set(false);
      }, 1000);
    }
  }
  private verifyPair(indexes: number[]): boolean {
    const [i1, i2] = indexes;
    return this.cards()[i1].id === this.cards()[i2].id;
  }
  private resetCards(indexes: number[]) {
    this.state.update((arr) => {
      const copy = [...arr];
      for (const idx of indexes) copy[idx] = false;
      return copy;
    });
  }
}
