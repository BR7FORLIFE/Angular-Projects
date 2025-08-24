import { Component } from '@angular/core';
import { Player } from "@app/shared/components/player/player";

@Component({
  selector: 'app-main-layout',
  imports: [Player],
  templateUrl: './main-layout.html',
})
export class MainLayout {
  isActivePlaylist = true

  togglePlaylistState(isActive: boolean){
    this.isActivePlaylist = isActive
  }
}
