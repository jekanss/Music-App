import { ChartsClass } from './charts';
import { Datum, PlaylistClass } from './playlist';

export interface RootState {
    music: MusicState
}

export interface MusicState {
    isLoading: boolean,
    charts: ChartsClass
    activePlaylist: PlaylistClass,
    error: any,
    isPlaying: boolean,
    activeSong: Datum,
}