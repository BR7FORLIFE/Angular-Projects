import {
  Component,
  type OnDestroy,
  OnInit,
  Output,
  EventEmitter,
  ChangeDetectorRef,
  ViewChild,
  ElementRef,
} from '@angular/core';


import { Playlist } from '@services/Playlist.services';
import { StructurePlaylist } from '@models/playlist.model';
import { Subscription } from 'rxjs';
import ColorThief from 'colorthief';
import { NgStyle } from '@angular/common';
import { SongComponent } from "../song/song";

type RGB = `RGB(${string}, ${string}, ${string})`;

@Component({
  selector: 'player',
  imports: [NgStyle, SongComponent],
  templateUrl: './player.html',
})
export class Player implements OnDestroy, OnInit {
  @Output() playlistStateChange = new EventEmitter<boolean>();
  @ViewChild('imagePresentation') $imgageRef!: ElementRef<HTMLImageElement>;

  protected structurePlaylist: StructurePlaylist;
  private subscription: Subscription | null = null;

  protected Rgb: RGB;

  constructor(private playlist: Playlist, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.subscription = this.playlist.playlist$.subscribe((newPlaylist) => {
      this.structurePlaylist = newPlaylist;

      Promise.resolve().then(() => {
        if (this.structurePlaylist) { 
          this.playlistStateChange.emit(true);
        }
      });

      // esperar a que Angular pinte el DOM antes de acceder al ViewChild
      setTimeout(() => {
        const $img = this.$imgageRef?.nativeElement;
        if ($img) {
          if ($img.complete) {
            this.getColors($img);
          } else {
            $img.addEventListener('load', () => this.getColors($img));
          }
        }
      });
    });
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  private getColors($img: HTMLImageElement) {
    const colorthief = new ColorThief();
    const [red, green, blue] = colorthief.getColor($img);
    this.Rgb = `RGB(${red}, ${green}, ${blue})`;
    this.cdr.detectChanges();
  }
}
