import React from 'react'
import { useParams } from 'react-router'
import { useState, useEffect } from 'react'
import TrackCard from './TrackCard'
import axios from 'axios'
import { useNavigate } from 'react-router'

const PlaylistDetail = () => {
  const { id } = useParams()
  const [tracks, setTracks] = useState([])
  const [token, setToken] = useState([])
  const navigate = useNavigate()

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

  const nav = () => {
    navigate('/home')
  }

  const update = () => {
    navigate(`/updateplaylist/${id}`)
  }
  const deletePlaylist = async (callback) => {
    const data = await axios.delete(
      `https://api.spotify.com/v1/playlists/${id}/followers`,
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    )
    nav()
    callback(data)
  }

  useEffect(() => {
    setToken(window.localStorage.getItem('token'))
    getPlaylistTracks(setTracks)
  }, [getPlaylistTracks])

  let trackList = tracks
    ? tracks.map((track) => (
        <div key={track.track.id} className="trackCard">
          <img
            className="trackImage"
            width="200"
            height="auto"
            src={track.track.album.images[0].url}
          />
          <div className="trackInfo">
            <h1>{track.track.name}</h1>
            <h3>{track.track.album.artists.name}</h3>
          </div>
        </div>
      ))
    : null

  return (
    <div className="mainContainer">
      <button onClick={deletePlaylist}>Delete Playlist</button>
      <button onClick={update}>Update Playlist</button>
      <div className="trackContainer">{trackList}</div>
    </div>
  )
}

export default PlaylistDetail
