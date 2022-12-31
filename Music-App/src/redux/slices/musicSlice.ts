import { createSlice } from "@reduxjs/toolkit";
import { MusicState } from "../../interface/redux";

const initialState = {
  isLoading: false,
  charts: {},
  activePlaylist : {}
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
  },
});

//Action creators are generated for each case reducer function
export const { onGetCharts, onLoading, onSetActivePlaylist } = musicSlice.actions;
