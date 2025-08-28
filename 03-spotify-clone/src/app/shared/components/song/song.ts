import { Component, OnInit, OnDestroy } from '@angular/core';
import { Song } from '@models/song.model';
import { Subscription } from 'rxjs';
import { Playlist } from '@services/Playlist.services';

@Component({
  selector: 'Song',
  templateUrl: './song.html',
})
export class SongComponent implements OnInit, OnDestroy {
  protected songs: Song[] = [];

  private subscription: Subscription | null;
  constructor(private playlist: Playlist) {}
  ngOnInit() {
    this.subscription = this.playlist.playlist$.subscribe((playlist) => {
      playlist.songs.forEach((song) => {
        this.songs.push(song);
      });
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
