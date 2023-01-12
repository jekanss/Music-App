import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom';
import { Home, Playlist, Albums, Podcasts, Artists } from '../pages';

export const AppRoutes = () => {

  return (

    <Routes>
      
        <Route path="home" element={ <Home />} /> 
        <Route path="artists" element={ <Artists />} /> 
        <Route path="playlists" element={ <Playlist />} /> 
        <Route path="albums" element={ <Albums />} /> 
        <Route path="podcasts" element={ <Podcasts />} /> 

        <Route path="/*" element={ <Navigate to="/home" replace /> }  />

    </Routes>  
  )
}
