import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useMusic } from '../../hooks/useMusic';

export const CoverAlbumImage = () => {

   const { activeAlbum  } = useMusic();
 

  return (
    <div         
       className="relative w-full h-72 bg-red-300 mt-3  rounded-3xl overflow-hidden group">
        <img 
            className="absolute inset-0 w-full h-full object-cover duration-300 group-hover:scale-105 " 
            src={activeAlbum.cover_xl}
            alt="coverImage" />
        <div className="absolute inset-0 z-10 bg-black/60 duration-300 group-hover:bg-black/50"></div>
        <div className="flex flex-col justify-start absolute  bottom-3 left-3 z-20 ">
            <h3 className="Poppins-B text-6xl text-white"> {activeAlbum.title} </h3>
            <h3 className="heading-secondary text-white"> {activeAlbum.artist.name} </h3>
        </div>
    </div>
  )
}
