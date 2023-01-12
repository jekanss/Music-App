import React from 'react'
import { HiPlay } from 'react-icons/hi'
import { useNavigate } from 'react-router-dom';
import { useMusic } from '../../hooks/useMusic';

export const PrincipalCover = () => {

  const { setActiveAlbum} = useMusic()

  const navigate = useNavigate();

  const handleClickPrincipalCover = async( ) => {
    await setActiveAlbum(302127)
    navigate('/albums', {
      replace: true
    })
  }

  return (
    <div 
        onClick={ handleClickPrincipalCover }
        className="relative w-full h-96 bg-red-300 mt-3 overflow-hidden group cursor-pointer rounded-3xl">
        <img 
            className="absolute inset-0 w-full h-full object-cover duration-300 group-hover:scale-105 " 
            src="https://e-cdns-images.dzcdn.net/images/artist/f2bc007e9133c946ac3c3907ddc5d2ea/1000x1000-000000-80-0-0.jpg"
            alt="coverImage" />
        <div className="absolute inset-0 z-10 bg-black/60 duration-300 group-hover:bg-black/50"></div>
        <div className="flex flex-col justify-start absolute  bottom-3 right-3 z-20 ">
            <h3 className="Poppins-B text-6xl text-white"> DaftPunk </h3>            
        </div>
        <HiPlay className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 duration-500 opacity-0 group-hover:opacity-100 w-16 h-16 text-white text-right z-30" />
    </div>
  )
}
