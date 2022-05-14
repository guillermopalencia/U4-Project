import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { getGenre } from '../resources'

const Home = () => {
  const [genres, setGenres] = useState([])
  const [token, setToken] = useState([])

  useEffect(() => {
    setToken(window.localStorage.getItem('token'))
    getGenre(setGenres)
  }, [])

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
        <div></div>
      </div>
    </div>
  )
}

export default Home
