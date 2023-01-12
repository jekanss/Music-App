
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

import deezerApi from '../api/deezerApi';
import { ChartsResponse, RootState, PlaylistResponse, ArtistSongsResponse } from '../interface';
import { Datum } from '../interface/playlist';
import { onGetCharts, onLoading, onNextSong, onPlayPause, onPrevSong, onSearching, onSetActiveAlbum, onSetActivePlaylist, onSetActiveSong, onSetActiveSongs, onSetArtistSongs, onSetCurrentSongIndex, onSetError, onSetSearchResults } from '../redux/slices/musicSlice';
import { Result, SearchResponse, SongResult, } from '../interface/search';
import { ArtistSong } from '../interface/artist';
import { AlbumResponse, SongDataAlbum } from '../interface/album';



export const useMusic = () => {
  
  const { charts, isLoading, activePlaylist , error , isPlaying , 
    activeSong, currentSongs, currentSongIndex, isSearching , results, artistSongs , activeAlbum } = useSelector( (state: RootState) => state.music );
    
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

  const setArtistSongs = async( idArtist: number ) => {

    dispatch(onLoading(true));
    try {
      const { data }  = await deezerApi.get<ArtistSongsResponse>(`/artistSongs/${idArtist}`);  
      console.log(data)       
      dispatch(onSetArtistSongs(data.songsArtist.data));     
      dispatch(onLoading(false));            
    } catch (error) {
      console.log(error);
      dispatch(onSetError(error));
      dispatch(onSetActivePlaylist(null)) ; 
      dispatch(onLoading(false));
    }
  }

  const setActiveAlbum = async( idAlbum: number ) => {

      dispatch(onLoading(true));

      try {
        const { data }  = await deezerApi.get<AlbumResponse>(`/album/${idAlbum}`);  
        console.log(data)       
        dispatch(onSetActiveAlbum(data.album));     
        dispatch(onLoading(false));            
      } catch (error) {
        console.log(error);
        dispatch(onSetError(error));
        dispatch(onSetActivePlaylist(null)) ; 
        dispatch(onLoading(false));
      }

  }

  const setActiveSong = ( song: Datum | SongResult | ArtistSong | SongDataAlbum ) => {
    dispatch(onSetActiveSong(song));
    dispatch(onPlayPause(false));
    setTimeout(() => {
      dispatch(onPlayPause(true));
    }, 200);
    
  }
  

  const setCurrentSongIndex = ( currentIndex: number ) => {
    dispatch(onSetCurrentSongIndex(currentIndex));
  }

  const setActiveSongs = ( songs: Datum[] | SongResult[] | ArtistSong[] | SongDataAlbum[] | null ) => {
    dispatch(onSetActiveSongs(songs))
  }

  const playPause = ( state: boolean ) => {
    dispatch(onPlayPause(state));
  }

  const nextSong = ( index: number ) => {
    dispatch(onPlayPause(false));
    dispatch(onNextSong(index))
  }

  const prevSong = ( index: number ) => {
    dispatch(onPlayPause(false));
    dispatch(onPrevSong(index))
  }

  const setSearchResults = ( result: Result | null) => {
     dispatch(onSetSearchResults(result));   
     dispatch(onSearching(false)); 
  }

  const searchByQuery = async( query: string ) => {

    dispatch(onSearching(true));

      try {

        const { data }  = await deezerApi.get<SearchResponse>(`/search/${query}`);     
        setSearchResults(data.result);        

      } catch (error) {
        console.log(error);
        dispatch(onSetError(error));
        setSearchResults(null);  
      }   
   
  }

  return {
      //Propiedades
      charts,
      isLoading,
      activePlaylist,
      error,
      isPlaying,
      activeSong,
      currentSongs,
      currentSongIndex,
      isSearching,
      results,
      artistSongs,
      activeAlbum,
      
      //Metodos
      getCharts,
      setActivePlaylist,
      setActiveSong,
      setActiveSongs,
      playPause,
      setCurrentSongIndex,
      nextSong,
      prevSong,
      searchByQuery,   
      setSearchResults,  
      setArtistSongs ,
      setActiveAlbum
  }
}
