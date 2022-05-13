import React from 'react'

const ArtistCard = ({ artists }) => {
  let artistList = artists
    ? artists.map((artist) => (
        <div key={artist.id}>
          <h1>{artist.name}</h1>
          {artist.images.length ? (
            <img width="300" src={artist.images[0].url} alt="" />
          ) : null}
        </div>
      ))
    : null

  return <div>{artistList[0]}</div>
}

export default ArtistCard
