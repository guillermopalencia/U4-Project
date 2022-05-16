import React from 'react'
import { useParams } from 'react-router'
import { useState, useEffect } from 'react'
import TrackCard from './TrackCard'
import axios from 'axios'

const PlaylistDetail = () => {
  const { id } = useParams()
  const [tracks, setTracks] = useState([])
  const [token, setToken] = useState([])

  const getPlaylistTracks = async (callback) => {
    const data = await axios.get(
      `https://api.spotify.com/v1/playlists/${id}/tracks`,
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    )
    callback(data.data.items)
  }

  // const deletePlaylist = async (callback) => {
  //   const data = await axios.get(
  //     `https://api.spotify.com/v1/playlists/${id}/followers`,
  //     {
  //       headers: {
  //         Authorization: `Bearer ${token}`
  //       }
  //     }
  //   )
  //   callback(data)
  // }

  useEffect(() => {
    setToken(window.localStorage.getItem('token'))
    getPlaylistTracks(setTracks)
  }, [getPlaylistTracks])

  // const config = {
  //   headers: {
  //     'Content-Type': 'application/json',
  //     Authorization: `Bearer ${token}`
  //   }
  // }

  // const data = {
  //   playlist_id: `${id}`
  // }

  // const getPlaylistTracks = async () => {
  //   await axios.get(
  //     `https://api.spotify.com/v1/playlists/${id}/tracks`,
  //     JSON.stringify(data),
  //     config
  //   )
  // }

  return (
    <div className="mainContainer">
      <button>Delete Playlist</button>
      <div className="trackContainer">{trackList}</div>
    </div>
  )
}

export default PlaylistDetail
