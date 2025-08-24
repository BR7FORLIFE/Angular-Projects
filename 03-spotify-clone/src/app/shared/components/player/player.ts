import { Component, type OnDestroy, OnInit, Output, EventEmitter } from '@angular/core';
import { Playlist } from '@services/Playlist.services';
import { StructurePlaylist } from '@models/playlist.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'player',
  imports: [],
  templateUrl: './player.html',
})
export class Player implements OnDestroy, OnInit {
  @Output() playlistStateChange = new EventEmitter<boolean>();

  protected structurePlaylist: StructurePlaylist;
  private subscription: Subscription | null = null;

  constructor(private playlist: Playlist) {}

  ngOnInit(): void {
    this.subscription = this.playlist.playlist$.subscribe((newPlaylist) => {
      this.structurePlaylist = newPlaylist;

      this.playlistStateChange.emit(!!newPlaylist)
    });
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}
