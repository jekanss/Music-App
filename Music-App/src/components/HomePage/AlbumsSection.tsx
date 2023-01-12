import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { ArtistCard } from './ArtistCard';
import { useMusic } from '../../hooks/useMusic';
import { responsive } from '../../assets/constants';
import { AlbumCard } from './AlbumCard';

export const AlbumsSection = () => {

  const { charts } = useMusic();

  return (
        <div className="w-full mt-2">
            <h2 className='heading-secondary text-white/90'>Álbumes</h2>
            {
              (charts.albums)
                  &&
                    <>
                      <Carousel
                          className="mt-3"
                          autoPlaySpeed={7000}
                          responsive={responsive}
                          autoPlay={true}
                          >                                                 
                            {
                              charts.albums.data.map( album => (
                                  <AlbumCard key={album.id} idAlbum={album.id} img={album.cover} artist={album.artist.name} almbumName={album.title} />
                              ))
                            }
                                                        
                      </Carousel>
                    </>
            }
        </div>

  )
}
