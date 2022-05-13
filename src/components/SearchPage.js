import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import ArtistCard from './ArtistCard'

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
        type: 'track,artist'
      }
    })
    setArtists(data.artists.items)
    setTracks(data.tracks.items)
    setSearch('')
    console.log(artists)
    console.log(tracks)
  }

  // let artistList = artists
  //   ? artists.map((artist) => (
  //       <div key={artist.id}>
  //         <h1>{artist.name}</h1>
  //         {artist.images.length ? (
  //           <img width="300" src={artist.images[0].url} alt="" />
  //         ) : null}
  //       </div>
  //     ))
  //   : null

  let trackList = tracks
    ? tracks.map((track) => (
        <div key={track.id}>
          <img width="80" src={track.album.images[0].url} />
          <h1>{track.name}</h1>
          <h3>{track.album.artists.name}</h3>
        </div>
      ))
    : null

  return (
    <div>
      <h1 className="searchtitle">Discover Anime</h1>
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
        <div className="artistContainer">
          <h1>Top Result</h1>
          <ArtistCard artists={artists} />
          <div>{trackList}</div>
        </div>
      </div>
    </div>
  )
}

export default SearchPage
