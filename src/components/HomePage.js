import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {
  getGenre,
  getLikedTracks,
  getPlaylists,
  getPlaybackState
} from '../resources'
import GenreCard from './GenreCard'
import ArtistCard from './ArtistCard'
import LikedTracksCard from './LikedTracks'
import PlaylistCard from './PlaylistCard'

const Home = () => {
  const [genres, setGenres] = useState([])
  const [token, setToken] = useState([])
  const [songs, setSongs] = useState([])
  const [playlists, setPlaylists] = useState([])
  const [playbackState, setPlaybackState] = useState([])

  useEffect(() => {
    setToken(window.localStorage.getItem('token'))
    getGenre(setGenres)
    getLikedTracks(setSongs)
    getPlaylists(setPlaylists)
    getPlaybackState(setPlaybackState)
  }, [])
  console.log(playbackState)

  return (
    <div className="mainContainer">
      <div className="backdrop">
        <div className="headerContainer">
          <h3 className="playlistHeader">Your Playlists</h3>
          <div className="playlist">
            <PlaylistCard playlists={playlists} />
          </div>
        </div>
      </div>
      <div>
        <h3 className="tracksHeader">Liked Songs</h3>
      </div>
      <div>
        <LikedTracksCard likedTracks={songs} />
      </div>
    </div>
  )
}

export default Home
