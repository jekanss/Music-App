import React from 'react'
import { Loader } from '../components/Loader/Loader';
import { useMusic } from '../hooks/useMusic';
import { useEffect } from 'react';
import { ActivePlaylist } from '../components/PlaylistPage/ActivePlaylist';
import { PlaylistItem } from '../components/PlaylistPage/PlaylistItem';
import { PlaylistsDatum } from '../interface/charts';

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

        if(activePlaylist.id){
            setActivePlaylist(activePlaylist.id)
        }else if((charts.playlists)){
            const playlists = charts.playlists?.data;  
            setActivePlaylist(playlists[0].id);
        }                  

    }, [charts]);    

    //Mostrar las playlist menos la actual
    const playlistsExceptActiveOne: PlaylistsDatum[] =  charts.playlists?.data.filter( playlist => playlist.id !== activePlaylist.id  ) ;      
    
   if(isLoading) return <Loader />
   
  return (
    <div className="animate-fadeIn w-full h-full mb-10 px-2
                    md:px-12">
        <h2 className='heading-primary text-white'>Playlists</h2>

        {  (activePlaylist) && <ActivePlaylist />     }

        <div className="mt-12 pb-20">
            {
                playlistsExceptActiveOne?.map( playlist => (                  
                    <PlaylistItem key={ playlist.id }  img={playlist.picture_xl} title={ playlist.title } id={playlist.id} />  
                ))
            }
        </div>
    </div>
  )
}
