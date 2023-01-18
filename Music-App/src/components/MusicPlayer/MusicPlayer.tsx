import React, { ChangeEvent, useState } from 'react'
import { Controls } from './Controls';
import { useMusic } from '../../hooks/useMusic';
import { Player } from './Player';
import { Track } from './Track';
import { VolumeBar } from './VolumeBar';
import { SeekBar } from './SeekBar';

export const MusicPlayer = () => {

    const { activeSong, isPlaying, nextSong, currentSongs, currentSongIndex, prevSong } = useMusic();    
 
    const [volume, setVolume] = useState(0.3); 
    const [shuffle, setShuffle] = useState(false);
    const [repeat, setRepeat] = useState(false); 
    const [currentSongTime, setCurrentSongTime] = useState(0);
    const [seekTime, setSeekTime] = useState(0);
  

    //Manejar el volumen de la canción
    const handleVolume = ( e: React.ChangeEvent<HTMLInputElement> ) => {       
        setVolume( Number(e.target.value));
    };


    //siguiente canción
    const handleNextSong = () => {  

        //Si está activada la reproducción aleatoria
        (shuffle)   
                ? nextSong(Math.floor(Math.random() * currentSongs.length))
                : nextSong((currentSongIndex + 1) % currentSongs.length)       
               
    };


    //Canción anterior
    const handlePrevSong = () => {

        //Si la canción anterior llega a la primera canción de lista devolvemos el index de la última de la lista
        if (currentSongIndex === 0) {
          return prevSong(currentSongs.length - 1);
        } 

        (shuffle)   
                ? prevSong(Math.floor(Math.random() * currentSongs.length))
                : prevSong(currentSongIndex - 1);           
       
    };


    return (
        <>
    
            {
                (activeSong.id)
                    &&
                    <div className="fixed z-40 flex items-center justify-between px-4 bottom-20 bg-gradient-to-r from-gray-900/80 to-black backdrop-blur-[5px] left-0 w-full 
                                    md:bottom-0 md:px-12">          
                        <div className="flex-1 flex py-4 items-center justify-center">       
                            <Track />
                            <div className="flex flex-col justify-center items-center gap-2">
                                <Controls repeat={repeat} shuffle={shuffle}  setRepeat={setRepeat} setShuffle={setShuffle} handleNextSong={handleNextSong} handlePrevSong={handlePrevSong}  />  
                                <SeekBar currentSongTime={currentSongTime} min={0} max={30} setSeekTime={setSeekTime} setCurrentSongTime={setCurrentSongTime} />
                                <Player seekTime={seekTime} song={activeSong.preview} isPlaying={isPlaying} volume={ volume } repeat={repeat} setCurrentSongTime={setCurrentSongTime} handleNextSong={ handleNextSong } />  
                            </div>
                            <VolumeBar value={ volume } min={0} max={1} handleVolume={ handleVolume } />               
                        </div>
                    </div>
            }
        </>
    );


}
