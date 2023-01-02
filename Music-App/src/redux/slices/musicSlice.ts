import { createSlice } from "@reduxjs/toolkit";
import { MusicState } from "../../interface/redux";

const initialState = {
  isLoading: false,
  charts: {},
  activePlaylist : {},
  error: null,
  isPlaying: false,
  activeSong: {},
  activeSongs : []
} as unknown as MusicState

export const musicSlice = createSlice({
  name: "music",
  initialState,
  reducers: {    
    onLoading: (state , { payload }) => {     
      state.isLoading = payload 
    },
    onGetCharts: (state , { payload }) => { 
      state.charts = payload 
    },
    onSetActivePlaylist: (state , { payload }) => { 
      state.activePlaylist = payload 
    },
    onSetError: (state , { payload }) => { 
      state.error = payload 
    },    
    onSetActiveSong: (state , { payload }) => { 
      state.activeSong = payload 
    },  
    onPlayPause: ( state, { payload } ) => { 
      state.isPlaying = payload
    },    
    
  },
});

//Action creators are generated for each case reducer function
export const { onGetCharts, onLoading, onSetActivePlaylist, onSetError, onSetActiveSong, onPlayPause } = musicSlice.actions;
