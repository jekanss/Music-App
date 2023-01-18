import React from 'react'
import SVGLoader from './SVGLoader'

export const Loader = () => {
  return (
    <div className="h-screen fixed w-full top-0 left-0 z-50 bg-black backdrop-blur-[5px] flex justify-center items-center
                  lg:bg-black/60 ">
      <div className="flex flex-col lg:flex-row justify-center items-center gap-6">
        <SVGLoader classes="w-24 h-24 lg:h-24 lg:w-24" />
        <h1 className="heading-tertiary lg:heading-secondary text-white" >Cargando...</h1>
      </div>
    </div>
  )
}
