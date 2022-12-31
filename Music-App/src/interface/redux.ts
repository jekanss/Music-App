import { ChartsClass } from './charts';
import { PlaylistClass } from './playlist';

export interface RootState {
    music: MusicState
}

export interface MusicState {
    isLoading: boolean,
    charts: ChartsClass
    activePlaylist: PlaylistClass
}