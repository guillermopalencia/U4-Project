import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
// import { Search } from '../resources'

const SearchPage = () => {
  const [search, setSearch] = useState('')
  const [searchResults, setSearchResults] = useState([])
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
    setSearchResults(data)
  }

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
            placeholder="Search Anime"
            onChange={onChange}
          ></input>
          <button className="searchbutton" type="submit"></button>
        </form>
      </div>
    </div>
  )
}

export default SearchPage
