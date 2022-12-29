import React from "react";

interface AlbumCardProps {
    img?: string,
    artist?: string,
    almbumName?: string
}

export const AlbumCard = ( { img , artist, almbumName }:AlbumCardProps  ) => {
  return (
    <div className="w-48  rounded-2xl bg-gradient-to-bl from-gray-900/20 to-gray-800 p-4 transition-all duration-300 
        hover:scale-[1.01] hover:-translate-y-1 hover:shadow-md hover:shadow-purple-300/50 cursor-pointer">
      <div className="flex justify-center">
        <img
          className="rounded-lg w-full"
          src={img}
          alt="artistImage"
        />
      </div>
      <div className="text-center mt-4">
        <h2 className="Poppins-R text-white">{ almbumName }</h2>
        <h3 className="Poppins-B text-white">{ artist }</h3>
      </div>
    </div>
  );
};