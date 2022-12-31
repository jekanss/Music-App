import React from 'react'
import { Loader } from '../components/Loader/Loader';
import { useMusic } from '../hooks/useMusic';
import { useEffect } from 'react';
import { HiClock, HiPlay } from 'react-icons/hi'

export const Playlist = () => {

   const { charts, isLoading , getCharts, setActivePlaylist, activePlaylist } = useMusic();
  

   /**
    * Si recargan la página desde playlist y las charts son undefined hacemos la petición de nuevo a la api
    * de lo contrario trabajamos con la información que ya está en el store de music
   */
   
    useEffect(() => {
        if(!charts.playlists){        
            getCharts();       
        }
    }, [charts]);

    useEffect(() => {        

        //si charts es diferente de undefined:
        if(charts.playlists){
                    
            const playlists = charts.playlists?.data;
            const randomIndex = Math.floor(Math.random() * playlists?.length);
            setActivePlaylist(playlists[randomIndex].id);
     
        }

    }, [charts]);    
    
    
    if(isLoading) return <Loader />
   
  return (
    <div className="animate-fadeIn w-full h-full mb-10 px-12">
        <h2 className='heading-primary text-white'>Playlists</h2>
            {
                (activePlaylist)
                    &&
                        <div className="flex gap-6">                                    
                            <img className="h-96 w-1/2 rounded-3xl mt-4" src={activePlaylist?.picture_xl} alt="imagePlaylist" />                         
                            <div className="block max-h-96 w-1/2">
                                <h1 className="heading-tertiary text-white mt-1">Canciones</h1>
                                <div className="overflow-y-auto overflow-x-hidden block max-h-96 music-scroll">
                                    <table className="w-full  ">
                                        <thead className="sticky bg-black top-0" >
                                            <tr>
                                                <th scope="col" className="px-3 Poppins-SB py-3.5 text-left text-base font-semibold text-white/90">Título</th>                                         
                                                <th scope="col" className="px-3 py-3.5 flex justify-center text-sm font-semibold text-gray-900">
                                                    <HiClock className='w-6 h-6 text-white text-right'/>                                                    
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-300/30 h-96 overflow-y-auto  ">                                    
                                            {
                                                activePlaylist.tracks?.data.map( track => (
                                                    <tr className="cursor-pointer hover:scale-[1.02] group  duration-300 " >
                                                        <td className="whitespace-nowrap flex items-center gap-3 Poppins-R py-4 text-sm font-medium text-white/80 px-3">
                                                            <div className="w-12 h-12 relative overflow-hidden rounded-lg">
                                                                <img className="absolute inset-0 object-cover " src={track.album.cover_small} alt="playlistImage" />
                                                                <div className="absolute inset-0 hidden group-hover:flex bg-black/10 backdrop-blur-[1px] z-10  justify-center items-center">
                                                                    <HiPlay className='w-6 h-6 text-white text-right'/>   
                                                                </div>
                                                            </div>
                                                            <div className="flex flex-col w-56 ">
                                                                <p className="Poppins-SB text-white truncate">{track.title}</p>
                                                                <p className="text-xs">{track.artist.name}</p>
                                                            </div>
                                                        </td>                                                   
                                                        <td className="whitespace-nowrap text-center Poppins-R py-4 text-sm font-medium text-white/80 px-3">
                                                            0:30
                                                        </td>
                                                    </tr>
                                                ))
                                            }
                                        
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>             
            }
        <div className="mt-12 pb-20">
            {
                charts.playlists?.data.map( playlist => (
                    <div className="relative h-32 w-full overflow-hidden rounded-2xl cursor-pointer duration-300 hover:scale-[1.02] group mt-6">
                        <div className="relative h-32 w-full">
                            <img
                                className="absolute inset-0 h-32 z-10 w-full object-cover" 
                                src={playlist.picture_xl} alt="picturePlaylist" 
                            />
                            <div className="absolute inset-0 h-32 w-full z-10 bg-black/70" >                       
                            </div>
                        </div>
                        <h1 className= "absolute top-5 left-5 heading-primary z-20 text-white">{playlist.title}</h1>
                        <HiPlay className="absolute bottom-5 opacity-0 right-5 w-10 h-10 text-yellow-400 text-right z-20
                                            duration-500 group-hover:opacity-100 group-hover:scale-110" />   
                    </div>   
                ))
            }
        </div>
    </div>
  )
}
