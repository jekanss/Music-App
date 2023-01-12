import { createSlice } from "@reduxjs/toolkit";
import { MusicState } from "../../interface/redux";

const initialState = {
  isLoading: false,
  charts: {},
  activePlaylist : {},
  error: null,
  isSearching: false,
  isPlaying: false,
  currentSongIndex: 0,
  activeSong: {}, 
  activeAlbum : null,
  artistSongs : null,  
  results: null,
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
    onSetCurrentSongIndex: (state , { payload }) => { 
      state.currentSongIndex = payload    
    },  
    onPlayPause: ( state, { payload } ) => { 
      state.isPlaying = payload
    },
    onSetActiveSongs: ( state, { payload } ) => { 
      state.currentSongs = payload
    }, 
    onSetArtistSongs: ( state, { payload } ) => { 
      state.artistSongs = payload
    },       
    onSetActiveAlbum: ( state, { payload } ) => { 
      state.activeAlbum = payload
    },       
    onNextSong: ( state, { payload } ) => {
      //Si hay canciones en el estado de currentSongs, quiere decir hay canciones en el arreglo, le damos a la siguiente  
      if(state.currentSongs.length !==0 ){
        state.activeSong = state.currentSongs[payload];
        state.currentSongIndex = payload
      }
      state.isPlaying = true     
    },   
    onPrevSong: ( state, { payload } ) => { 
      if(state.currentSongs.length !==0 ){
        state.activeSong = state.currentSongs[payload];
        state.currentSongIndex = payload
      }
      state.isPlaying = true 
    },  
    onSearching: (state , { payload }) => {     
      state.isSearching = payload 
    },
    onSetSearchResults: ( state, { payload } ) => { 
      state.results = payload
    },     
    
  },
});

//Action creators are generated for each case reducer function
export const { 
  onGetCharts, 
  onLoading, 
  onPlayPause , 
  onSetActivePlaylist, 
  onSetActiveSong, 
  onSetActiveSongs,
  onSetError,
  onSetCurrentSongIndex,
  onNextSong,
  onPrevSong,
  onSetSearchResults,
  onSearching,  
  onSetArtistSongs,
  onSetActiveAlbum
} = musicSlice.actions;
