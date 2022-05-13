import React from 'react'
import { useState } from 'react'
import { Search } from '../resource'

const SearchPage = () => {
  const [search, setSearch] = useState('')
  const [searchResults, setSearchResults] = useState([])

  const onChange = (e) => {
    setSearch(e.target.value)
  }

  const onSubmit = (e) => {
    e.preventDefault()
    Search(setSearchResults, search)
    console.log(searchResults)
  }

  return (
    <div>
      <h1 className="searchtitle">Discover Anime</h1>
      <div className="searchcontainer">
        <form className="searchform" onSubmit={onSubmit}>
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
