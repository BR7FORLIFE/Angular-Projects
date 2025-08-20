import { Component, Output , EventEmitter} from '@angular/core';
import { listOfMusic } from '@app/core/constant/ListOfMusic';
import { Song } from '@models/song.model';

@Component({
  selector: 'playlistcomponent',
  imports: [],
  templateUrl: './playlistcomponent.html',
})
export class Playlistcomponent {
  @Output() sendSongs = new EventEmitter<Song[]>();
  public musics = listOfMusic;

  getAllSongsByPlaylist(songs: Song[]) {
    this.sendSongs.emit(songs);
  }
}
