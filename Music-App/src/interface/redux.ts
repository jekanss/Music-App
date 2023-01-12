import { Album } from './album';
import { ArtistSong } from './artist';
import { ArtistElement, ChartsClass } from './charts';
import { Datum, PlaylistClass } from './playlist';
import { Result } from './search';

export interface RootState {
    music: MusicState
}

export interface MusicState {
    activeAlbum: Album,
    activePlaylist: PlaylistClass,   
    activeSong: Datum,
    artistSongs: null | ArtistSong[]
    charts: ChartsClass
    currentSongIndex: number,
    currentSongs: Datum[]
    error: any,   
    isLoading: boolean,
    isPlaying: boolean,
    isSearching: boolean,
    results: Result | null
}



