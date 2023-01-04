import React from "react";
import { HiPlay } from "react-icons/hi";
import { useMusic } from '../../hooks/useMusic';

interface PlaylistItemProps {
  img: string;
  title: string;
  id: number;
}

export const PlaylistItem = ({ img, title, id}: PlaylistItemProps) => {

  const { setActivePlaylist } = useMusic();   
  
  const onClickPlaylist = ( id:number ) => {
    setActivePlaylist(id);   
  }

  return (
    <div 
        onClick={ () => onClickPlaylist(id) }
        className="relative h-32 w-full overflow-hidden rounded-2xl cursor-pointer duration-300 hover:scale-[1.02] group mt-6">
      <div className="relative h-32 w-full">
        <img
          className="absolute inset-0 h-32 z-10 w-full object-cover"
          src={img}
          alt="picturePlaylist"
        />
        <div className="absolute inset-0 h-32 w-full z-10 bg-black/70"></div>
      </div>
      <h1 className="absolute top-5 left-5 heading-primary z-20 text-white">
        {title}
      </h1>
      <HiPlay
        className="absolute bottom-5 opacity-0 right-5 w-10 h-10 text-yellow-400 text-right z-20
                        duration-500 group-hover:opacity-100 group-hover:scale-110"
      />
    </div>
  );
};
