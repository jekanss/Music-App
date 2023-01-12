import React from "react";
import { ArtistSong } from "../../interface/artist";
import { useMusic } from '../../hooks/useMusic';
import { useNavigate } from "react-router-dom";

interface ArtistCardProps {
    img?: string,
    name?: string
    idArtist: number
}

export const ArtistCard = ( { img , name, idArtist }:ArtistCardProps  ) => {
  
  const { setArtistSongs } = useMusic()

  const navigate = useNavigate();

  const handleClickArtist = async( ) => {
    await setArtistSongs(idArtist)
    navigate('/artists', {
      replace: true
    })
  }

  return (
    <div 
        onClick={ handleClickArtist }
        className="w-48 h-auto rounded-2xl bg-gradient-to-bl from-gray-900/20 group to-gray-800 p-4 transition-all duration-300 
        hover:scale-[1.01] hover:-translate-y-1 hover:shadow-md hover:shadow-green-300/50 cursor-pointer active:scale-110 active:bg-purple-800/10">
      <div className="flex justify-center">
        <img
          className="rounded-full duration-300 group-hover:scale-105"
          src={img}
          alt="artistImage"
        />
      </div>
      <div className="text-center mt-2">
        <h2 className="Poppins-R text-white">Artista</h2>
        <h3 className="Poppins-B text-white">{name}</h3>
      </div>
    </div>
  );
};
