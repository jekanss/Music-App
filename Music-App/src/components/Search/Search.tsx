import React from 'react'
import { LoaderSearch } from '../Loader/LoaderSearch';
import { useMusic } from '../../hooks/useMusic';
import { Results } from './Results';

export const Search = () => {

  const { searchByQuery, setSearchResults , isSearching, results } = useMusic();

  //Variable que almacanera el timeout que va ser de ayuda para el efecto debouncing del input
  let filterTimeout: NodeJS.Timeout;

  //Función que busca ciudades de acuerdo a la información ingresada en le input
  const onHandleChange = ( e: React.ChangeEvent<HTMLInputElement>) => {

      //Desestructurar el value del input 
      const { value } = e.target;

      //Cada vez que cambia el valor del input o el usuario ingresa una nueva letra se limpia este timeout
      clearTimeout(filterTimeout);      

      //Si no hay nada en el input configuramos en null la ciudad
      if (value.length === 0) {
        return setSearchResults(null)
      }       

      filterTimeout = setTimeout(async() => {
        searchByQuery(value);
      }, 500);
      
  };  


  return (
    <div className="text-white py-6 px-4 flex flex-col h-screen">
      <h1 className="heading-secondary text-white">Buscar</h1>
      <div className="mt-2">     
        <label htmlFor="company-website" className="block sr-only text-sm font-medium text-gray-700">
            Buscar por canción o artista
        </label>   
        <div className="relative mt-1 rounded-md shadow-sm">         
          <input
            type="text"
            name="company-website"
            id="company-website"
            autoComplete="off"
            className="block w-full bg-transparent Poppins-R text-white placeholder:text-white/40 rounded-lg py-1.5 px-3 border-2 duration-300 border-white/50 focus:border-white focus:ring-white sm:text-sm"
            placeholder="Busca por artista o canción..."
            onChange={ onHandleChange }
          />
        </div>
      </div>

      {
        ( results === null || results.total === 0 )
            &&
             <p className="Poppins-R text-xs text-center mt-3 fadeIn" >Aún no has empezado a buscar o no se ha encontrado ningún resultado por tu criterio de búsqueda.</p>          
      }
      
      {
        (isSearching) 
          &&
            <div className="flex justify-center items-center mt-4 fadeIn">
              <LoaderSearch />
            </div>
          
      }  

      <Results />

    </div>
  );
}
