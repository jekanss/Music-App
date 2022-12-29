
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import deezerApi from '../api/deezerApi';
import { RootState } from '../interface';
import { onGetCharts, onLoading } from '../redux/slices/musicSlice';
import { Charts } from '../interface/charts';



export const useMusic = () => {

  const { charts, isLoading } = useSelector( (state: RootState) => state.music );
  const dispatch = useDispatch();

  const getCharts = async() => {

      dispatch(onLoading(true));

      try {
        const { data }  = await deezerApi.get<Charts>('/charts' );         
        dispatch(onGetCharts(data.charts));
        dispatch(onLoading(false));        
      } catch (error) {
        console.log(error);
        dispatch(onGetCharts(null)) ; 
        dispatch(onLoading(false));
      }
  }

  return {
      //Propiedades
      charts,
      isLoading,

      //Metodos
      getCharts    
  }
}
