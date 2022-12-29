import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { ArtistCard } from './ArtistCard';
import { useMusic } from '../../hooks/useMusic';
import { responsive } from '../../assets/constants';

export const Artists = () => {

  const { charts } = useMusic();

  return (
        <div className="py-5 w-full">
            <h2 className='heading-secondary text-white/90'>Artistas</h2>
            {
              (charts.artists)
                  &&
                    <>
                      <Carousel
                          className="mt-3"
                          responsive={responsive}
                          autoPlay={true}
                          >                                                 
                            {
                              charts.artists.data.map( artist => (
                                  <ArtistCard key={artist.id} img={artist.picture} name={artist.name} />
                              ))
                            }
                                                        
                      </Carousel>
                    </>
            }
        </div>

  )
}
