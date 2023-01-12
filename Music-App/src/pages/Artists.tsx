import React from "react";
import { useMusic } from "../hooks/useMusic";
import { useEffect } from "react";
import { ArtistsSection } from "../components/HomePage/ArtistSection";
import { ActiveArtist } from "../components/ArtistPage/ActiveArtist";
import { Loader } from '../components/Loader/Loader';

export const Artists = () => {

  const { artistSongs, setArtistSongs , charts, getCharts, isLoading } = useMusic();
  
   /**
    * Si recargan la página desde artistas y las charts son undefined hacemos la petición de nuevo a la api
    * de lo contrario trabajamos con la información que ya está en el store de music
   */
   
   useEffect(() => {
      if(!charts.artists){        
          getCharts();       
      }
   }, [charts]); 


  useEffect(() => {   
    
      //id del artista daftpunk
      if(!artistSongs){
        setArtistSongs(27);
      }
    
  }, []);
  
  if(isLoading) return <Loader />

  return (
    <div       
      className="animate-fadeIn w-full h-full mb-36 px-12">
      <h2 className="heading-primary text-white">Artistas</h2>      

      { (artistSongs)  &&  <ActiveArtist />  }
      
      <ArtistsSection />      

    </div>
  );
};
