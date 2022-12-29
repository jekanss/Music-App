import React from "react";

interface PlayListCardProps {
    img?: string,
    title?: string,   
}

export const PlayListCard = ( { img, title }:PlayListCardProps  ) => {
  return (
    <div className="w-48  rounded-2xl bg-gradient-to-bl from-gray-900/20 to-gray-800 p-4 transition-all duration-300 
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