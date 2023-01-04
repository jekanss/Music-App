import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';

interface PlayerProps {
    song?: string,
    isPlaying?: boolean,
    volume: number,
    repeat: boolean,
    seekTime: number,
    setCurrentSongTime: React.Dispatch<React.SetStateAction<number>>,
    handleNextSong: () => void,
}

export const Player = ( { song, isPlaying,volume, repeat, seekTime, setCurrentSongTime, handleNextSong }: PlayerProps ) => {

   const refPlayer = React.useRef<HTMLAudioElement>(null);
   const [timeSong, setTimeSong] = useState(0)

    useEffect(() => {

        (isPlaying)
                ? refPlayer.current!.play()
                : refPlayer.current!.pause();       
      
    }, [isPlaying, song ]);
    
    const timeUpdate = ( e: React.SyntheticEvent<HTMLAudioElement, Event> ) => {     
        setCurrentSongTime( refPlayer.current!.currentTime )
    }

    useEffect(() => {
        refPlayer.current!.volume = volume;
    }, [volume]);

    useEffect(() => {
        refPlayer.current!.currentTime = seekTime;      
    }, [seekTime]);
    
    return (     
        <audio
            ref={ refPlayer }
            src={ song }  
            loop={ repeat }   
            onTimeUpdate={ timeUpdate } 
            onEnded = { handleNextSong }           
        />     
    )

}
