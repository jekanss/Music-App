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

export const MusicApp = () => {

  return (
    <Provider store={ store }>
      <BrowserRouter>
        <div className='h-screen w-full flex'>
            <div className="h-full w-auto sm:w-[20em] bg-black">
              <Navigation />
            </div>
            <div className="h-auto w-full overflow-y-auto py-6 bg-black music-scroll">
              <AppRoutes />
            </div>         
            <div className='h-full hidden sm:block w-[35em] bg-black'>
            </div>
        </div>
            {/* <MusicPlayer /> */}
      </BrowserRouter>
    </Provider>
  )
}
