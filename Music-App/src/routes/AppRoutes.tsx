import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Home, Playlist } from '../pages'


export const AppRoutes = () => {
  return (
    <Routes>
      
        <Route path="home" element={ <Home />} /> 
        <Route path="playlists" element={ <Playlist />} /> 

        <Route path="/*" element={ <Navigate to="/home" replace /> }  />

    </Routes>  
  )
}
