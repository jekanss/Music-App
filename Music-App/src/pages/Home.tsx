import React, { useEffect } from 'react'
import { AlbumsSection } from '../components/HomePage/AlbumsSection';
import { ArtistsSection } from '../components/HomePage/ArtistSection';
import { PlaylistsSection } from '../components/HomePage/PlaylistsSection';
import { PrincipalCover } from '../components/HomePage/PrincipalCover';
import { Loader } from '../components/Loader/Loader';

import { useMusic } from '../hooks/useMusic';

export const Home = () => { 

  const { getCharts, isLoading } = useMusic()

  useEffect(() => {
    getCharts();
  }, []);  
  
  if(isLoading) return <Loader />
  
  return (   
        <div className="animate-fadeIn w-full h-full mb-10 px-2
                        md:px-12">
            <h2 className='heading-primary text-white'>Explora</h2>
            <PrincipalCover />
            <ArtistsSection />  
            <PlaylistsSection /> 
            <AlbumsSection />   
        </div>    
  )
}
