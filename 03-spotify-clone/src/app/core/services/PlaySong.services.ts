import { Injectable} from '@angular/core';
import { Song } from '@models/song.model';

@Injectable({
  providedIn: 'root',
})
export class PlaysongService{
  private audio = new Audio();

  startSong(urlsSongs: Song[]) {
    
  }

  pauseSong() {
    this.audio.pause();
  }
}
