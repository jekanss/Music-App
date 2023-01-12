import React from 'react'
import { HiPlay } from 'react-icons/hi'
import { useMusic } from '../../hooks/useMusic';
import { SongResult } from '../../interface/search';

export const Results = () => {

   const { results, setActiveSong, setActiveSongs, setCurrentSongIndex, activeSong } =  useMusic();

   //Configura la canción de la lista seleccionada como canción activa y todos los resultados como canciones activas
   const setResultActiveSong = ( songResultItem: SongResult, songIndex: number ) => {
     setActiveSong(songResultItem);
     setActiveSongs(results!.data);
     setCurrentSongIndex(songIndex);
   }
 
  return (
    <ul className="mt-2 flex-grow overflow-y-auto overflow-x-hidden music-scroll mb-24  ">     
        {
            results?.data.map( (result, i) => (

                <li key={ result.id }
                    onClick = { () => setResultActiveSong(result, i ) }
                    style={{ "--i": `${i/15}s` } as React.CSSProperties}
                    className={`flex justify-between w-full items-center rounded-lg  group cursor-pointer duration-300 shadow-md 
                                 shadow-gray-800/50 py-2 px-2 hover:bg-gradient-to-bl hover:from-gray-900/20 to-gray-800 hover:scale-105
                                ${
                                    activeSong.id ===
                                    result.id
                                    ? "bg-gradient-to-bl from-gray-900/20 to-gray-800 toBlink"
                                    : ""
                                }`} >
                    <div className="flex items-center w-ful justify-start gap-2">
                        <img
                            className="w-14 h-14 object-cover rounded-md"
                            src={result.album.cover}
                            alt="resultImage"
                        />
                        <div className="w-24">
                            <h3 className="text-xs Poppins-B">{result.title}</h3>
                            <p className="text-xs Poppins-R text-white/80">{result.artist.name}</p>
                            <p className="text-xs Poppins-R truncate text-white/90" >{result.album.title}</p>
                        </div>
                    </div>
                    <HiPlay
                            className=" opacity-0 w-10 h-10 text-violet-800 text-right z-20
                                duration-500 group-hover:opacity-100 group-hover:scale-110"
                    />
                </li>
                
            ))
        }
    </ul>
  )
}
