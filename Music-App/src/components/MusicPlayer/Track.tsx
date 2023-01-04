import React from 'react'
import { useMusic } from '../../hooks/useMusic';

export const Track = (  ) => {

  const { activeSong, isPlaying } = useMusic();
  
  return (
    <div key={ activeSong.id } className="flex-1 flex items-center justify-start animate-fadeIn">
      <div className={`${isPlaying  ? 'animate-pulse' : ''} hidden sm:block h-16 w-16 mr-4 `}>
        <img src={activeSong?.album.cover_small} alt="cover art" className="rounded-full mt-1" />
      </div>
      <div className="w-[50%]">
        <p className="truncate Poppins-B text-white font-bold text-base">
          {activeSong?.title}
        </p>
        <p className="truncate Poppins-R text-sm text-gray-300">
          {activeSong.artist.name}
        </p>
      </div>
    </div>
  )
}
