import { createSlice } from "@reduxjs/toolkit";
import { MusicState } from "../../interface/redux";

const initialState = {
  isLoading: false,
  charts: {}
} as unknown as MusicState

export const musicSlice = createSlice({
  name: "music",
  initialState,
  reducers: {    
    onGetCharts: (state , { payload }) => { 
      state.charts = payload 
    },
    onLoading: (state , { payload }) => {     
      state.isLoading = payload 
    },
  },
});

//Action creators are generated for each case reducer function
export const { onGetCharts, onLoading } = musicSlice.actions;
