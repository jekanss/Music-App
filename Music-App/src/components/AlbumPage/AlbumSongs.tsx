import React from "react";
import { HiClock, HiPlay } from "react-icons/hi";
import { useMusic } from "../../hooks/useMusic";
import { SongDataAlbum } from "../../interface/album";

export const AlbumSongs = () => {

  const { activeAlbum, activeSong, setActiveSong, setActiveSongs, setCurrentSongIndex } = useMusic();

  const handleClickSong = (song: SongDataAlbum, songIndex: number) => {
    setActiveSong(song);
    setActiveSongs(activeAlbum.tracks.data);
    setCurrentSongIndex(songIndex);
  };

  return (
    <div className="block music-scroll mt-2">
      <table className="w-full  ">
        <thead className="bg-black top-0 z-10">
          <tr>
            <th
              scope="col"
              className="px-3 Poppins-SB py-3.5 text-left text-base font-semibold text-white/90"
            >
              Título
            </th>
            <th
              scope="col"
              className="px-3 py-3.5 flex justify-center text-sm font-semibold text-gray-900"
            >
              <HiClock className="w-6 h-6 text-white text-right" />
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-300/30">
          {activeAlbum.tracks.data.map((song, songIndex) => (
            <tr
                key={song.id}
                onClick={() => handleClickSong(song, songIndex)}
                className={`cursor-pointer group  duration-300
                                            ${
                                              activeSong.id === song.id
                                                ? "shadow-lg shadow-purple-400/30"
                                                : ""
                                            }
                                                    }`}
            >
              <td className="whitespace-nowrap flex items-center gap-3 Poppins-R py-4 text-sm font-medium text-white/80 px-3">
                <div className="w-12 h-12 relative overflow-hidden rounded-lg">
                  <img
                    className="absolute inset-0 object-cover "
                    src={song.album.cover_small}
                    alt="playlistImage"
                  />
                  <div className="absolute inset-0 hidden group-hover:flex bg-black/10 backdrop-blur-[1px] z-10  justify-center items-center">
                    <HiPlay className="w-6 h-6 text-white text-right" />
                  </div>
                </div>
                <div className="flex flex-col w-56 ">
                  <p
                    className={`Poppins-SB truncate ${
                      activeSong.id === song.id
                        ? "text-purple-300"
                        : "text-white"
                    }`}
                  >
                  {song.title}
                  </p>
                  <p className="text-xs">{song.artist.name}</p>
                </div>
              </td>
              <td className="whitespace-nowrap text-center Poppins-R py-4 text-sm font-medium text-white/80 px-3">
                0:30
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
