import React from 'react'


// const refPlayer = React.useRef<HTMLAudioElement>(null);

// const play = () => {
//     refPlayer.current?.play()
// }
// return (
// <div className='bg-white h-16 w-full'>
//     <audio
//         ref={ refPlayer }
//         src="https://cdns-preview-d.dzcdn.net/stream/c-deda7fa9316d9e9e880d2c6207e92260-10.mp3"                    
//     />     
//     <button onClick={ play }>
//         play
//     </button>       
// </div>
// )

export const MusicPlayer = () => {

    return (
        <div className="fixed z-20 bg-black/50 backdrop-blur-[5px] bottom-0 left-0 m:px-12 px-8 w-full flex items-center justify-between">          
            <div className="flex-1 flex flex-col items-center justify-center">        
                <h1 className="Poppins-B text-xl text-white">Hola Mundo</h1>
                    
            </div>
        </div>
    );


}
