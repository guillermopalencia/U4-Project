import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import ArtistCard from './ArtistCard'
import TrackCard from './TrackCard'

const SearchPage = () => {
  const [search, setSearch] = useState('')
  const [artists, setArtists] = useState([])
  const [tracks, setTracks] = useState([])
  const [token, setToken] = useState('')

  const onChange = (e) => {
    setSearch(e.target.value)
  }

  useEffect(() => {
    setToken(window.localStorage.getItem('token'))
  })

  const Search = async (e) => {
    e.preventDefault()
    const { data } = await axios.get('https://api.spotify.com/v1/search', {
      headers: {
        Authorization: `Bearer ${token}`
      },
      params: {
        query: search,
        type: 'track,artist',
        limit: 6
      }
    })
    setArtists(data.artists.items)
    setTracks(data.tracks.items)
    setSearch('')
    console.log(artists)
    console.log(tracks)
  }

  return (
    <div>
      <h1 className="searchtitle">Discover Music</h1>
      <div className="searchcontainer">
        <form className="searchform" onSubmit={Search}>
          <input
            className="searchinput"
            type="text"
            name="search"
            value={search}
            placeholder="Search"
            onChange={onChange}
          ></input>
          <button className="searchbutton" type="submit"></button>
        </form>
        <h1>Top Result</h1>
      <div className='searchResults'>
        <div>
          <ArtistCard artists={artists} />
          <div>
            <TrackCard tracks={tracks} />
          </div>
      </div>
        </div>
      </div>
    </div>
  )
}

export default SearchPage
