import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { ArtistCard } from './ArtistCard';
import { useMusic } from '../../hooks/useMusic';
import { responsive } from '../../assets/constants';
import { AlbumCard } from './AlbumCard';
import { PodcastCard } from './PodcastCard';

export const Podcasts = () => {

  const { charts } = useMusic();

  return (
        <div className="w-full mt-2 pb-12">
            <h2 className='heading-secondary text-white/90'>Podcasts</h2>
            {
              (charts.podcasts)
                  &&
                    <>
                      <Carousel
                          className="mt-3"
                          autoPlaySpeed={10000}
                          responsive={responsive}
                          autoPlay={true}
                          >                                                 
                            {
                              charts.podcasts.data.map( podcast => (
                                  <PodcastCard key={podcast.id} img={podcast.picture} title={podcast.title} description={podcast.description} />
                              ))
                            }
                                                        
                      </Carousel>
                    </>
            }
        </div>

  )
}