import React from 'react'
import { MdSkipNext, MdSkipPrevious } from "react-icons/md";
import { useState } from 'react';
import { useMusic } from '../../hooks/useMusic';
import {
  BsArrowRepeat,
  BsFillPauseFill,
  BsFillPlayFill,
  BsShuffle,
} from "react-icons/bs";

interface ControlsProps {
  shuffle : boolean,
  repeat : boolean,
  setShuffle : React.Dispatch<React.SetStateAction<boolean>>,
  setRepeat : React.Dispatch<React.SetStateAction<boolean>>
}

export const Controls = ( { shuffle, repeat, setShuffle, setRepeat } : ControlsProps )  => {

    const { isPlaying , playPause } = useMusic();

    //TODO: estados que no hacen nada

    const [currentSongs, setCurrentSongs] = useState([]);  
    

  return (
    <div className="flex items-center justify-around md:w-36 lg:w-52 2xl:w-80">
    <BsArrowRepeat
      size={20}        
      className= {`hidden sm:block cursor-pointer duration-500 ${repeat ? 'text-purple-500 scale-110' : 'text-white'}`}
      onClick={ () => setRepeat(!repeat) }
    />
  
    <MdSkipPrevious
    size={30}
    color="#FFF"
    className="cursor-pointer"   
    />
    
    {isPlaying ? (
      <BsFillPauseFill
        size={45}
        color="#FFF"       
        className="cursor-pointer"
        onClick={ () => playPause(false) }
      />
    ) : (
      <BsFillPlayFill
        size={45}
        color="#FFF"       
        className="cursor-pointer"
        onClick={ () => playPause(true) }
      />
    )}
   
    <MdSkipNext
    size={30}
    color="#FFF"
    className="cursor-pointer"      
    />
    
    <BsShuffle
      size={20}          
      className={`hidden sm:block cursor-pointer duration-500 ${shuffle ? 'text-purple-500 scale-110' : 'text-white'}`}
      onClick={ () => setShuffle(!shuffle) }
    />
  </div>
  )
}
