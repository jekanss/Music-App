import React, { MutableRefObject, useRef } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { HiHome, HiMicrophone, HiMusicNote, HiPlay, HiSearch } from 'react-icons/hi'
import { BsMusicNote } from "react-icons/bs";

export const Navigation = () => {

  return (
        <nav className="flex flex-col justify-between h-full" >        
            <ul className="px-2 mt-3 w-auto flex flex-row justify-center md:flex-col gap-2">               
              
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
                    <NavLink to='/artists' 
                         className={ ( { isActive }) => `flex py-3 px-2 text-white Poppins-B text-base justify-start items-center gap-3 rounded-full mx-2 
                                                            sm:rounded-lg transition-all duration-300 duration-300 hover:bg-white/10                                                                
                                                            ${ isActive && 'bg-gradient-to-l from-transparent to-gray-200/30 '}` } >
                         <HiHome className='w-5 h-5 sm:w-8 text-white' />
                         <span className="hidden sm:block">Artistas</span>
                    </NavLink>
                </li>      
                
                <li>
                    <NavLink to='/playlists' 
                         className={ ( { isActive }) => `flex py-3 px-2 text-white Poppins-B text-basejustify-start items-center gap-3 rounded-full mx-2 
                                                            sm:rounded-lg transition-all duration-300 duration-300 hover:bg-white/10
                                                            ${ isActive && 'bg-gradient-to-l from-transparent to-gray-200/30 '}` } >
                         <HiMusicNote className='w-5 h-5 sm:w-8 text-white' />
                         <span className="hidden sm:block">Playlists</span>
                    </NavLink>
                </li>    

                <li>
                    <NavLink to='/albums' 
                         className={ ( { isActive }) => `flex py-3 px-2 text-white Poppins-B text-basejustify-start items-center gap-3 rounded-full 
                                                            mx-2 sm:rounded-lg transition-all duration-300 duration-300 hover:bg-white/10
                                                            ${ isActive && 'bg-gradient-to-l from-transparent to-gray-200/30 '}` } >
                         <HiPlay className='w-5 h-5 sm:w-8 text-white' />
                         <span className="hidden sm:block">Álbumes</span>
                    </NavLink>
                </li>  
                
            </ul>
            <div className="flex justify-center items-center py-3 gap-1 mb-2 px-2 mx-2">
                    <BsMusicNote className="w-10 h-10 animate-colors" />
                    <h1 className="Poppins-B text-base animate-colors text-center ">Music Jean App</h1>                 
            </div>
        </nav>
    )
}
