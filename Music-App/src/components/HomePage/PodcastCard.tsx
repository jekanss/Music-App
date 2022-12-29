import React from "react";

interface AlbumCardProps {
    img?: string,
    title?: string,
    description?: string
}

export const PodcastCard = ( { img , title, description }:AlbumCardProps  ) => {
  return (
    <div className="w-48  rounded-2xl bg-gradient-to-bl from-gray-900/20 to-gray-800 p-4 transition-all duration-300 
        hover:scale-[1.01] hover:-translate-y-1 hover:shadow-md hover:shadow-yellow-300/50 cursor-pointer">
      <div className="flex justify-center">
        <img
          className="rounded-lg w-full"
          src={img}
          alt="artistImage"
        />
      </div>
      <div className="text-center mt-4 overflow-hidden">
        <h2 className="Poppins-SB text-sm text-white">{ title }</h2>
        <h3 className="Poppins-R text-xs text-white/80 truncate mt-1">{ description }</h3>
      </div>
    </div>
  );
};