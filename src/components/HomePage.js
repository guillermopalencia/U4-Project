import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { getGenre, getLikedTracks } from '../resources'
import GenreCard from './GenreCard'

const Home = () => {
  const [genres, setGenres] = useState([])
  const [token, setToken] = useState([])
  const [songs, setSongs] = useState([])

  useEffect(() => {
    setToken(window.localStorage.getItem('token'))
    getGenre(setGenres)
    getLikedTracks(setSongs)
  }, [])
  console.log(genres)
  console.log(songs)

  // const Genre = async (callback) => {
  //   const data = await axios.get(
  //     'https://api.spotify.com/v1/recommendations/available-genre-seeds',
  //     {
  //       headers: {
  //         Authorization: `Bearer ${token}`
  //       },
  //       params: {
  //         genres: 'rap'
  //       }
  //     }
  //   )
  //   callback(data.data)
  // }
  return (
    <div className="mainContainer">
      <div>
        <h1>Welcome to Cantabile</h1>
        <div>
          <GenreCard genres={genres} />
        </div>
      </div>
    </div>
  )
}

export default Home
