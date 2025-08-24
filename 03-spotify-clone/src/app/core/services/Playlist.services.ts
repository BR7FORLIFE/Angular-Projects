import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { StructurePlaylist } from '@models/playlist.model';
import { Song } from '@models/song.model';

@Injectable({
  providedIn: 'root',
})
export class Playlist {
  private currentPlaylist = new BehaviorSubject<StructurePlaylist | null>(null);
  public playlist$ = this.currentPlaylist.asObservable();

  setPlaylist(structurePlaylist: StructurePlaylist) {
    this.currentPlaylist.next(structurePlaylist);
  }
}
