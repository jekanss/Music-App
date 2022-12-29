import React from "react";

interface ArtistCardProps {
    img?: string,
    name?: string
}

export const ArtistCard = ( { img , name }:ArtistCardProps  ) => {
  return (
    <div className="w-48 h-auto rounded-2xl bg-gradient-to-bl from-gray-900/20 to-gray-800 p-4 transition-all duration-300 
        hover:scale-[1.01] hover:-translate-y-1 hover:shadow-md hover:shadow-green-300/50 cursor-pointer">
      <div className="flex justify-center">
        <img
          className="rounded-full"
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
