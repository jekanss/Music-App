
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import deezerApi from '../api/deezerApi';
import { ChartsResponse, RootState, PlaylistResponse } from '../interface';
import { onGetCharts, onLoading, onSetActivePlaylist } from '../redux/slices/musicSlice';

export const useMusic = () => {

  const { charts, isLoading, activePlaylist } = useSelector( (state: RootState) => state.music );
  const dispatch = useDispatch();

  const getCharts = async() => {

      dispatch(onLoading(true));
      try {
        const { data }  = await deezerApi.get<ChartsResponse>('/charts' );         
        dispatch(onGetCharts(data.charts));
        dispatch(onLoading(false));        
      } catch (error) {
        console.log(error);
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
      dispatch(onSetActivePlaylist(null)) ; 
      dispatch(onLoading(false));
    }
}

  return {
      //Propiedades
      charts,
      isLoading,
      activePlaylist,

      //Metodos
      getCharts,
      setActivePlaylist 
  }
}
