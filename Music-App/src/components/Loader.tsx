import React from 'react'

export const Loader = () => {
  return (
    <div className="h-screen fixed w-full top-0 left-0 z-30 bg-black flex justify-center items-center">
        <h1 className="heading-primary text-white" >Cargando</h1>
    </div>
  )
}
