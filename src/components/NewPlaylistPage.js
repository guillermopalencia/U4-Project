import React, { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useParams } from 'react-router'
import { getUserProfile } from '../resources'

const NewPlaylistPage = () => {
  const [name, setName] = useState([])
  const [user, setUser] = useState([])
  const [token, setToken] = useState([])

  useEffect(() => {
    setToken(window.localStorage.getItem('token'))
    getUserProfile(setUser)
  }, [])

  // const createPlaylist = async (e) => {
  //   e.preventDefault()
  //   const results = await axios.post(
  //     `https://api.spotify.com/v1/users/${user.id}/playlists`,
  //     {
  //       headers: {
  //         'Content-Type': 'application/json',
  //         Authorization: `Bearer ${token}`
  //       },
  //       data: {
  //         name: `${name}`
  //       }
  //     }
  //   )
  //   console.log(results)
  // }

  const data = {
    name: `${name}`
  }

  const config = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    }
  }

  const createPlaylist = async (e) => {
    e.preventDefault()
    await axios.post(
      `https://api.spotify.com/v1/users/${user.id}/playlists`,
      JSON.stringify(data),
      config
    )
  }

  const onChange = (e) => {
    setName(e.target.value)
  }

  return (
    <div className="searchcontainer">
      <form className="searchform" onSubmit={createPlaylist}>
        <input
          className="searchinput"
          type="text"
          name="Playlist name"
          value={name}
          placeholder="Playlist name"
          onChange={onChange}
        ></input>
        <button className="searchbutton" type="submit"></button>
      </form>
    </div>
  )
}

export default NewPlaylistPage
