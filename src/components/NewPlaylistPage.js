import React, { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'
import { getUserProfile } from '../resources'
import { useNavigate } from 'react-router'

const NewPlaylistPage = () => {
  const [name, setName] = useState([])
  const [user, setUser] = useState([])
  const [token, setToken] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    setToken(window.localStorage.getItem('token'))
    getUserProfile(setUser)
  }, [])

  const nav = () => {
    navigate('/home')
  }

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
    nav()
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
