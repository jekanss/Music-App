import React, { MutableRefObject, useRef } from 'react'
import { NavLink } from 'react-router-dom'
import { HiHome, HiUser, HiMusicNote, HiPlay, HiSearch } from 'react-icons/hi';
import { BsMusicNote } from "react-icons/bs";
import { useUI } from '../hooks/useUI';

export const Navigation = () => {

  const { isSearchingMobile, onSetIsSearchingMobile } = useUI(); 

  return (
        <nav className="flex flex-col py-2 justify-between h-full" >        
            <ul className="mt-3 w-auto flex flex-row justify-around                                   
                           md:flex-col md:justify-center">              

                <li >
                    <NavLink to='/home' 
                         className={ ( { isActive }) => `flex py-3 px-2 text-white Poppins-B text-base  justify-start items-center gap-3 rounded-full mx-2 
                                                            sm:rounded-lg transition-all duration-300  hover:bg-white/10 active:scale-110                                                               
                                                            ${ isActive && 'bg-gradient-to-l from-transparent to-gray-200/30 '}` } >
                         <HiHome className='w-6 h-6 sm:w-8 text-white' />
                         <span className="hidden sm:block">Inicio</span>
                    </NavLink>
                </li>   

                <li>
                    <NavLink to='/artists' 
                         className={ ( { isActive }) => `flex py-3 px-2 text-white Poppins-B text-base justify-start items-center gap-3 rounded-full mx-2 
                                                            sm:rounded-lg transition-all duration-300  hover:bg-white/10 active:scale-110                                                               
                                                            ${ isActive && 'bg-gradient-to-l from-transparent to-gray-200/30 '}` } >
                         <HiUser className='w-6 h-6 sm:w-8 text-white' />
                         <span className="hidden sm:block">Artistas</span>
                    </NavLink>
                </li>      
                
                <li>
                    <NavLink to='/playlists' 
                         className={ ( { isActive }) => `flex py-3 px-2 text-white Poppins-B text-basejustify-start items-center gap-3 rounded-full mx-2 
                                                            sm:rounded-lg transition-all duration-300  hover:bg-white/10 active:scale-110
                                                            ${ isActive && 'bg-gradient-to-l from-transparent to-gray-200/30 '}` } >
                         <HiMusicNote className='w-6 h-6 sm:w-8 text-white' />
                         <span className="hidden sm:block">Playlists</span>
                    </NavLink>
                </li>    

                <li>
                    <NavLink to='/albums' 
                         className={ ( { isActive }) => `flex py-3 px-2 text-white Poppins-B text-basejustify-start items-center gap-3 rounded-full 
                                                            mx-2 sm:rounded-lg transition-all duration-300 hover:bg-white/10 active:scale-110
                                                            ${ isActive && 'bg-gradient-to-l from-transparent to-gray-200/30 '}` } >
                         <HiPlay className='w-6 h-6 sm:w-8 text-white' />
                         <span className="hidden sm:block">Álbumes</span>
                    </NavLink>
                </li>  

                <li   
                    onClick={ () => onSetIsSearchingMobile(true)}
                    className="block md:hidden active:scale-110 cursor-pointer">
                    <div 
                         className={ `flex py-3 px-2 text-white Poppins-B text-basejustify-start items-center gap-3 rounded-full 
                                                            mx-2 sm:rounded-lg transition-all duration-300 hover:bg-white/10   ` } >
                         <HiSearch className='w-6 h-6 sm:w-8 text-white' />
                         <span className="hidden sm:block">Buscar</span>
                    </div>
                </li>  
                
            </ul>          
        </nav>
    )
}
