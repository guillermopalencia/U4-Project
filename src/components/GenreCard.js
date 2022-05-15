import React from 'react'

const GenreCard = ({ genres }) => {
  let genreList = genres
    ? genres.map((genre) => (
        <div key={genre.id}>
          <h1>{genre}</h1>
        </div>
      ))
    : null
  return <div>{genreList}</div>
}

export default GenreCard
