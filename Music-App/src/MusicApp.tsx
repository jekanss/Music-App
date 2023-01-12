import React, { useEffect, useState } from 'react'
import { genres } from './assets/constants';
import deezerApi from './api/deezerApi';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { Navigation } from './shared/Navigation';
import { AppRoutes } from './routes/AppRoutes';
import { BrowserRouter } from 'react-router-dom';
import { useMusic } from './hooks/useMusic';
import { MusicPlayer } from './components/MusicPlayer/MusicPlayer';
import { ErrorPage } from './pages/ErrorPage';
import { Search } from './components/Search/Search';

export const MusicApp = () => {

  const { error } = useMusic();

  if(error) return <ErrorPage />

  return (
   
      <BrowserRouter>
        <div className='h-screen w-full flex flex-col 
                        md:flex-row'>
            <div className="h-auto py-2 bg-black w-auto 
                            md:h-full md:w-[20em]">
              <Navigation />
            </div>
            <div className="h-auto w-full  overflow-y-auto py-6 bg-black music-scroll">
              <AppRoutes />
            </div>         
            <div className='h-full hidden sm:block w-[35em] bg-black'>
              <Search />
            </div>
        </div>
            <MusicPlayer />
      </BrowserRouter>
    
  )
}
