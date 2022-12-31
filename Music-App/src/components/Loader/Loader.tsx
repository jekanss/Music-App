import React from 'react'
import SVGLoader from './SVGLoader'

export const Loader = () => {
  return (
    <div className="h-screen fixed w-full top-0 left-0 z-30 bg-black/60 backdrop-blur-[5px] flex justify-center items-center">
      <div className="flex justify-center items-center gap-6">
        <SVGLoader classes="h-24 w-24" />
        <h1 className="heading-secondary text-white" >Cargando...</h1>
      </div>
    </div>
  )
}
