import { Component, Input, Output, EventEmitter, OnChanges, OnDestroy } from '@angular/core';
import { StructurePlaylist } from '@models/playlist.model';
import { Song } from '@models/song.model';

@Component({
  selector: 'ModalPlayerSong',
  templateUrl: './PlayerSong.html',
})
export class PlayerSong implements OnChanges, OnDestroy {
  @Input() structurePlaylist: StructurePlaylist;
  @Output() sendBooleanModal = new EventEmitter<boolean>();

  private songsPlaylist: Song[] = [];

  ngOnChanges(): void {
    if (this.structurePlaylist) {
      this.songsPlaylist = this.structurePlaylist.songs;
    }
  }
  getAllSongs() {}
  ngOnDestroy(): void {
    this.songsPlaylist = [];
  }

  protected emitBoolean() {
    this.sendBooleanModal.emit(false);
  }
}
