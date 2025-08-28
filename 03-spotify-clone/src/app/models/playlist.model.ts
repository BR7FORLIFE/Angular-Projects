import { Song } from '@models/song.model';

export interface StructurePlaylist {
  id: number;
  presentacionImage: string;
  name: string;
  description: string;
  songs: Song[];
}
