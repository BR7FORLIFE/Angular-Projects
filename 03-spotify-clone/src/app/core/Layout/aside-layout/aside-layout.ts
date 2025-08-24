import { Component } from '@angular/core';
import { Playlistcomponent } from '@app/shared/UI/Buttons/playlistcomponent/playlistcomponent';
import { listOfMusic } from '@constant/ListOfMusic';
import { StructurePlaylist } from '@models/playlist.model';

@Component({
  selector: 'app-aside-layout',
  imports: [Playlistcomponent],
  templateUrl: './aside-layout.html',
})
export class AsideLayout {
  public playlist: StructurePlaylist[] = listOfMusic;

  public numberOfPlaylist: number = listOfMusic.length;

  getNumberOfPlaylist(){
    return Array(this.numberOfPlaylist).fill(0);
  }
}
