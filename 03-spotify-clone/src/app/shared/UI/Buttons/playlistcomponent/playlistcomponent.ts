import { Component, Input } from '@angular/core';
import { StructurePlaylist } from '../../../../models/playlist.model';
import { Playlist } from '@services/Playlist.services';

@Component({
  selector: 'playlistcomponent',
  imports: [],
  templateUrl: './playlistcomponent.html',
})
export class Playlistcomponent {
  @Input() public listOfSongs: StructurePlaylist[] = [];

  constructor(private PlayerServices: Playlist) {}

  loadPlayList(index: number) {
    this.PlayerServices.setPlaylist(this.listOfSongs[index]);
  }
}