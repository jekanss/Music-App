import React from 'react'
import { useEffect } from 'react';

interface PlayerProps {
    song?: string,
    isPlaying?: boolean,
    volume: number,
    repeat: boolean,
    seekTime: number
}

export const Player = ( { song, isPlaying,volume, repeat, seekTime }: PlayerProps ) => {

   const refPlayer = React.useRef<HTMLAudioElement>(null);

    useEffect(() => {

        (isPlaying)
                ? refPlayer.current!.play()
                : refPlayer.current!.pause();       
      
    }, [isPlaying, song ]);

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
        />     
    )

}
