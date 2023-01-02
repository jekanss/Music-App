import React, { ChangeEvent, useState } from 'react'
import { Controls } from './Controls';
import { useMusic } from '../../hooks/useMusic';
import { Player } from './Player';
import { Track } from './Track';
import { VolumeBar } from './VolumeBar';
import { SeekBar } from './SeekBar';

export const MusicPlayer = () => {

    const { activeSong, isPlaying } = useMusic();    
 
    const [volume, setVolume] = useState(0.3); 
    const [shuffle, setShuffle] = useState(false);
    const [repeat, setRepeat] = useState(false); 
    const [seekTime, setSeekTime] = useState(0); 
    const [appTime, setAppTime] = useState(0);

    //Manejar el volumen de la canción
    const handleVolume = ( e: React.ChangeEvent<HTMLInputElement> ) => {       
        setVolume( Number(e.target.value));
    };
  
    

    return (
        <>
    
            {
                (activeSong.id)
                    &&
                    <div className="fixed z-20 bg-black/80 backdrop-blur-[5px] bottom-0 left-0 m:px-12 px-8 w-full flex items-center justify-between">          
                        <div className="flex-1 flex py-5 items-center justify-center">       
                            <Track />
                            <div className="flex flex-col justify-center items-center">
                                <Controls repeat={repeat} shuffle={shuffle}  setRepeat={setRepeat} setShuffle={setShuffle}  />  
                                <SeekBar value={seekTime} min={0} max={30} appTime={appTime} setSeekTime={setSeekTime} />
                                <Player seekTime={seekTime} song={activeSong.preview} isPlaying={isPlaying} volume={ volume } repeat={repeat} />  
                            </div>
                            <VolumeBar value={ volume } min={0} max={1} handleVolume={ handleVolume } />               
                        </div>
                    </div>
            }
        </>
    );


}
