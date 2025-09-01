import { Component, OnInit, OnDestroy } from '@angular/core';
import { infoSlug, interrogationImageUrl } from '../constants/slags';
import { Slug } from '../interfaces/Slug';
import { STATE_CARDS } from '../enums/State';

@Component({
  selector: 'app-table',
  imports: [],
  templateUrl: './table.html',
})
export class Table implements OnInit, OnDestroy {
  protected cards: Slug[] = [];
  protected interrogationImage = interrogationImageUrl;
  protected state: boolean[] = [];

  protected blockTable: boolean = false;
  ngOnInit(): void {
    this.cards = [...infoSlug, ...infoSlug];
    this.state = Array(this.cards.length).fill(false);
  }

  ChangeState(index: number) {
    if (this.blockTable || this.state[index]) return;

    this.state[index] = true;

    const indexToReveal = this.state
      .map((state, index) => (state ? index : -1))
      .filter((index) => index !== -1);

    if (indexToReveal.length === 2) {
      this.blockTable = true;
      if (this.verifiedPair(indexToReveal)) {
        this.blockTable = false;
      } else {
        setTimeout(() => {
          this.restartCards(indexToReveal);
          this.blockTable = false;
        }, 1000);
      }
    }
  }

  verifiedPair(indexToReveal: number[]): boolean {
    return this.cards[indexToReveal[0]].id === this.cards[indexToReveal[1]].id;
  }

  restartCards(indexToReveal: number[]) {
    for (const idx of indexToReveal) {
      this.state[idx] = false;
    }
  }

  ngOnDestroy(): void {}
}
