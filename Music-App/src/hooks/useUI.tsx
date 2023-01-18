import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../interface/redux';
import { setIsSearchingMobile } from '../redux/slices/uiSlice';

export const useUI = () => {

  const { isSearchingMobile } = useSelector( ( state: RootState ) => state.ui);
  const dispatch = useDispatch();

  const onSetIsSearchingMobile = ( state: boolean ) => {
    dispatch(setIsSearchingMobile(state))
  }

  return {
    //propiedades
    isSearchingMobile,

    //Metodos
    onSetIsSearchingMobile
  }
}
