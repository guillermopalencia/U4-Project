import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { getGenre, getLikedTracks, getPlaylists } from '../resources'
import GenreCard from './GenreCard'
import ArtistCard from './ArtistCard'
import LikedTracksCard from './LikedTracks'
import PlaylistCard from './PlaylistCard'

const Home = () => {
  const [genres, setGenres] = useState([])
  const [token, setToken] = useState([])
  const [songs, setSongs] = useState([])
  const [playlists, setPlaylists] = useState([])

  useEffect(() => {
    setToken(window.localStorage.getItem('token'))
    getGenre(setGenres)
    getLikedTracks(setSongs)
    getPlaylists(setPlaylists)
  }, [])
  console.log(playlists)

  return (
    <div className="mainContainer">
      <div className="headerContainer">
        <h2 className="playlistHeader">Your Playlists</h2>
      </div>
      <div>
        <PlaylistCard playlists={playlists} />
      </div>
      {/* <div>
          <GenreCard genres={genres} />
        </div> */}
      <div>
        <LikedTracksCard likedTracks={songs} />
      </div>
    </div>
  )
}

export default Home
