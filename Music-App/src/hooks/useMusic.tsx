
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

import deezerApi from '../api/deezerApi';
import { ChartsResponse, RootState, PlaylistResponse } from '../interface';
import { Datum } from '../interface/playlist';
import { onGetCharts, onLoading, onPlayPause, onSetActivePlaylist, onSetActiveSong, onSetError } from '../redux/slices/musicSlice';

export const useMusic = () => {

  const { charts, isLoading, activePlaylist , error , isPlaying , activeSong } = useSelector( (state: RootState) => state.music );
  const dispatch = useDispatch();

  const getCharts = async() => {

      dispatch(onLoading(true));
      try {
        const { data }  = await deezerApi.get<ChartsResponse>('/charts' );         
        dispatch(onGetCharts(data.charts));
        dispatch(onLoading(false));        
      } catch (error) {
        console.log(error);
        dispatch(onSetError(error));
        dispatch(onGetCharts(null)) ; 
        dispatch(onLoading(false));
      }
  }

  const setActivePlaylist = async( idPlaylist: number ) => {

    dispatch(onLoading(true));
    try {
      const { data }  = await deezerApi.get<PlaylistResponse>(`/playlist/${idPlaylist}`);  
      console.log(data)       
      dispatch(onSetActivePlaylist(data.playlist));
      dispatch(onLoading(false));        
    } catch (error) {
      console.log(error);
      dispatch(onSetError(error));
      dispatch(onSetActivePlaylist(null)) ; 
      dispatch(onLoading(false));
    }
  }

  const setActiveSong = ( song: Datum ) => {
    dispatch(onSetActiveSong(song));
    dispatch(onPlayPause(false));
    setTimeout(() => {
      dispatch(onPlayPause(true));
    }, 200);
    
  }

  const playPause = ( state: boolean ) => {
    dispatch(onPlayPause(state));
  }

  return {
      //Propiedades
      charts,
      isLoading,
      activePlaylist,
      error,
      isPlaying,
      activeSong,

      //Metodos
      getCharts,
      setActivePlaylist,
      setActiveSong,
      playPause
  }
}
