import React from "react";
import { useNavigate } from "react-router-dom";
import { useMusic } from '../../hooks/useMusic';

interface PlayListCardProps {
    img?: string,
    title?: string,  
    id: number 
}

export const PlayListCard = ( { img, title, id }:PlayListCardProps  ) => {

  const { setActivePlaylist } = useMusic();

  const navigate = useNavigate();

  const onClickPlaylist = async() => {
    await setActivePlaylist(id);   
    navigate('/playlists', {
      replace: true
    })
  }

  return (
    <div 
        onClick={ onClickPlaylist }
        className="w-48  rounded-2xl bg-gradient-to-bl from-gray-900/20 to-gray-800 p-4 transition-all duration-300 
        hover:scale-[1.01] hover:-translate-y-1 hover:shadow-md hover:shadow-red-300/50 cursor-pointer">
      <div className="flex justify-center">
        <img
          className="rounded-full w-full"
          src={img}
          alt="artistImage"
        />
      </div>
      <div className="text-center mt-4">        
        <h3 className="Poppins-B text-white">{ title }</h3>
      </div>
    </div>
  );
};