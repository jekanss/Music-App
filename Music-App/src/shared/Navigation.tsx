import React, { MutableRefObject, useRef } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { HiHome, HiMicrophone, HiMusicNote, HiNewspaper, HiPlay } from 'react-icons/hi'

export const Navigation = () => {

 
  //Saber el patha ctual de la aplicación
  const location = useLocation(); 

  return (
        <nav>        
            <ul className="px-2 mt-8 flex flex-col gap-2">
              
                <li>
                    <NavLink to='/home' 
                         className={ ( { isActive }) => `flex py-3 px-2 text-white Poppins-B text-base justify-start items-center gap-3 rounded-full mx-2 
                                                            sm:rounded-lg transition-all duration-300 duration-300 hover:bg-white/10                                                                
                                                            ${ isActive && 'bg-gradient-to-l from-transparent to-gray-200/30 '}` } >
                         <HiHome className='w-5 h-5 sm:w-8 text-white' />
                         <span className="hidden sm:block">Inicio</span>
                    </NavLink>
                </li>      
                
                <li>
                    <NavLink to='/playlist' 
                         className={ ( { isActive }) => `flex py-3 px-2 text-white Poppins-B text-basejustify-start items-center gap-3 rounded-full mx-2 
                                                            sm:rounded-lg transition-all duration-300 duration-300 hover:bg-white/10
                                                            ${ isActive && 'bg-gradient-to-l from-transparent to-gray-200/30 '}` } >
                         <HiMusicNote className='w-5 h-5 sm:w-8 text-white' />
                         <span className="hidden sm:block">Playlists</span>
                    </NavLink>
                </li>    

                <li>
                    <NavLink to='/playlist' 
                         className={ ( { isActive }) => `flex py-3 px-2 text-white Poppins-B text-basejustify-start items-center gap-3 rounded-full 
                                                            mx-2 sm:rounded-lg transition-all duration-300 duration-300 hover:bg-white/10
                                                            ${ isActive && 'bg-gradient-to-l from-transparent to-gray-200/30 '}` } >
                         <HiPlay className='w-5 h-5 sm:w-8 text-white' />
                         <span className="hidden sm:block">Álbumes</span>
                    </NavLink>
                </li>    

                <li>
                    <NavLink to='/playlist' 
                         className={ ( { isActive }) => `flex py-3 px-2 text-white Poppins-B text-basejustify-start items-center gap-3 rounded-full 
                                                            mx-2 sm:rounded-lg transition-all duration-300 duration-300 hover:bg-white/10
                                                            ${ isActive && 'bg-gradient-to-l from-transparent to-gray-200/30 '}` } >
                         <HiMicrophone className='w-5 h-5 sm:w-8 text-white' />
                         <span className="hidden sm:block">Podcasts</span>
                    </NavLink>
                </li>    
                
            </ul>
        </nav>
    )
}
