import { createSlice } from "@reduxjs/toolkit";
import { UIState } from "../../interface/redux";

const initialState = {
  isSearchingMobile: false, 
} as unknown as UIState

export const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {    
    setIsSearchingMobile: (state , { payload }) => {     
      state.isSearchingMobile = payload 
    }, 
  },
});

//Action creators are generated for each case reducer function
export const { 
    setIsSearchingMobile
} = uiSlice.actions;