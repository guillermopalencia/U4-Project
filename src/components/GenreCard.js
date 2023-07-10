import React from 'react'

const GenreCard = ({ genres }) => {
  let genreList = genres
    ? genres.map((genre) => (
        <div key={genre.id}>
          <h1>{genre}</h1>
        </div>
      ))
    : null
  genreList ? genreList.slice(0, 20) : null
  return genreList ? <div>{genreList.slice(0, 20)}</div> : null
}

export default GenreCard
