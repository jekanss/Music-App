import React from 'react'

export const MusicPlayer = () => {

    const refPlayer = React.useRef<HTMLAudioElement>(null);

    const play = () => {
        refPlayer.current?.play()
    }
  return (
    <div className='bg-white h-16 w-full'>
        <audio
            ref={ refPlayer }
            src="https://cdns-preview-d.dzcdn.net/stream/c-deda7fa9316d9e9e880d2c6207e92260-10.mp3"                    
        />     
        <button onClick={ play }>
            play
        </button>       
    </div>
  )
}
