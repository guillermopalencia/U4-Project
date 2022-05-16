import React, { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useParams } from 'react-router'
import { getUserProfile } from '../resources'
import { useNavigate } from 'react-router'

const UpdatePlaylist = () => {
  const [name, setName] = useState([])
  const [token, setToken] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    setToken(window.localStorage.getItem('token'))
    updatePlaylist()
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

  const onChange = (e) => {
    setName(e.target.value)
  }

  return (
    <div className="searchcontainer">
      <form className="searchform" onSubmit={updatePlaylist}>
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

export default UpdatePlaylist
