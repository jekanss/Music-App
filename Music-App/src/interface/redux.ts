import { ChartsClass } from './charts';
import { Datum, PlaylistClass } from './playlist';
import { Result } from './search';

export interface RootState {
    music: MusicState
}

export interface MusicState {
    isLoading: boolean,
    charts: ChartsClass
    activePlaylist: PlaylistClass,
    currentSongIndex: number,
    error: any,
    isPlaying: boolean,
    isSearching: boolean,
    activeSong: Datum,
    currentSongs: Datum[]
    results: Result | null
}



