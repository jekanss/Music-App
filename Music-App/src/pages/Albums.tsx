import React from 'react'
import { useMusic } from '../hooks/useMusic';
import { useEffect } from 'react';
import { HiClock, HiPlay } from 'react-icons/hi';
import { CoverAlbumImage } from '../components/AlbumPage/CoverAlbumImage';
import { AlbumSongs } from '../components/AlbumPage/AlbumSongs';
import { AlbumsSection } from '../components/HomePage/AlbumsSection';
import { Loader } from '../components/Loader/Loader';

export const Albums = () => {

  const { setActiveAlbum, activeAlbum , getCharts, charts, isLoading } = useMusic()

   /**
    * Si recargan la página desde artistas y las charts son undefined hacemos la petición de nuevo a la api
    * de lo contrario trabajamos con la información que ya está en el store de music
   */
   
   useEffect(() => {
    if(!charts.albums){        
        getCharts();       
    }
  }, [charts]); 

  useEffect(() => {

    if(!activeAlbum){
      //id de daftpunk
      setActiveAlbum(302127)
    }


  }, [])
  
  if(isLoading) return <Loader />

  return (

    <div className="animate-fadeIn w-full h-full mb-96 px-12">
        <h2 className='heading-primary text-white'>Albums</h2>

        {/* Cover Image */}
        { (activeAlbum) && <CoverAlbumImage /> }
        

        {/* TableSongs */}
        { (activeAlbum) && <AlbumSongs /> }

        <AlbumsSection />
      
    </div>  
  )
}
