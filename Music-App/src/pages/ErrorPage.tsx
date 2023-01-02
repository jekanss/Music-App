import React from 'react'
import { HiOutlineExclamation } from 'react-icons/hi'

export const ErrorPage = () => {
  return (
    <div className="h-screen flex flex-col gap-2 justify-center bg-black items-center">
        <HiOutlineExclamation className="w-20 h-20 text-white" />
        <p className="text-white Poppins-B text-2xl px-12  text-center">
            Lo sentimos, ocurrió un error en el momento de cargar la información de la música, quizá existe algún problema con el
            servidor o con la API de Deezer, por favor vuelve a intentarlo más tarde
        </p>
    </div>
  )
}
