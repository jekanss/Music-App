import React from 'react'

interface SeekBarProps {     
    min: any, 
    max : any,
    currentSongTime: number, 
    setCurrentSongTime: React.Dispatch<React.SetStateAction<number>>,
    setSeekTime: React.Dispatch<React.SetStateAction<number>>    
}

export const SeekBar = ( { currentSongTime, min, max, setSeekTime  }: SeekBarProps ) => {

    const getTime = (time: any) => `${Math.floor(time / 60)}:${(`0${Math.floor(time % 60)}`).slice(-2)}`;

  return (
    <div className="hidden sm:flex flex-row items-center">
     
      <input
        type="range"
        step="any"
        value={currentSongTime}
        min={min}
        max={max}  
        onChange={ (e) => setSeekTime(Number(e.target.value)) }          
        className="md:block w-24 md:w-56 2xl:w-96 h-1 mx-4 2xl:mx-6 rounded-lg"
      />
          
    </div>
  );
}
