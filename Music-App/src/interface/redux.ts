import { Charts, ChartsClass } from './charts';

export interface RootState {
    music: MusicState
}

export interface MusicState {
    isLoading: boolean,
    charts: ChartsClass
}