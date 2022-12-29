import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { ArtistCard } from './ArtistCard';
import { useMusic } from '../../hooks/useMusic';
import { responsive } from '../../assets/constants';
import { AlbumCard } from './AlbumCard';
import { PlayListCard } from './PlaylistCard';

export const Playlists = () => {

  const { charts } = useMusic();

  return (
        <div className="w-full">
            <h2 className='heading-secondary text-white/90'>Playlists</h2>
            {
              (charts.playlists)
                  &&
                    <>
                      <Carousel
                          className="mt-3"
                          autoPlaySpeed={5000}
                          responsive={responsive}
                          autoPlay={true}
                          >                                                 
                            {
                              charts.playlists.data.map( playlist => (
                                  <PlayListCard key={playlist.id} img={playlist.picture} title={playlist.title} />
                              ))
                            }
                                                        
                      </Carousel>
                    </>
            }
        </div>

  )
}
