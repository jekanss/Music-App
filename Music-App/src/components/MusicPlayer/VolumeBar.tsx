import React from 'react'
import { BsFillVolumeUpFill, BsVolumeDownFill, BsFillVolumeMuteFill } from 'react-icons/bs';

interface VolumeBarProps {
    value : number,
    min? : number,
    max? : number,
    handleVolume: (e: React.ChangeEvent<HTMLInputElement>) => void,
    setVolume?: any
}

export const VolumeBar = ( { value, handleVolume, setVolume } : VolumeBarProps) => {
  return (
    <div className="hidden lg:flex flex-1 items-center justify-end">
    {value <= 1 && value > 0.5 && <BsFillVolumeUpFill size={25} color="#FFF" onClick={() => setVolume(0)} />}
    {value <= 0.5 && value > 0 && <BsVolumeDownFill size={25} color="#FFF" onClick={() => setVolume(0)} />}
    {value === 0 && <BsFillVolumeMuteFill size={25} color="#FFF" onClick={() => setVolume(1)} />}
    <input
      type="range"
      step="any"
      value={value}
      min="0"
      max="1"
      onChange={ (e) => handleVolume(e)}
      className="2xl:w-40 lg:w-32 md:w-32 h-1 ml-2 bg-purple-300/70 appearance-none"
    />
  </div>
  )
}
