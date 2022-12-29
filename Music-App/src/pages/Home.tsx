import React, { useEffect } from 'react'
import { Albums } from '../components/HomePage/Albums';
import { Artists } from '../components/HomePage/Artists';
import { Playlists } from '../components/HomePage/Playlists';
import { Podcasts } from '../components/HomePage/Podcasts';
import { Loader } from '../components/Loader';

import { useMusic } from '../hooks/useMusic';

export const Home = () => { 

  const { getCharts, isLoading } = useMusic()

  useEffect(() => {
    getCharts();
  }, []);  
  
  if(isLoading) return <Loader />
  
  return (   
        <div className="animate-fadeIn w-full h-full mb-10 px-12">
            <h2 className='heading-primary text-white'>Explora</h2>
            <Artists />  
            <Playlists /> 
            <Albums />    
            <Podcasts />        
        </div>    
  )
}
