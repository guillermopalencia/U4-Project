import React from 'react'

const ArtistCard = ({ artists }) => {
  let artistList = artists
    ? artists.map((artist) => (
        <div key={artist.id} className="artistCard">
          <h1>{artist.name}</h1>
          {artist.images.length ? (
            <img
              className="artistImage"
              width="200"
              height="auto"
              src={artist.images[0].url}
              alt=""
            />
          ) : null}
        </div>
      ))
    : null

  return <div>{artistList[0]}</div>
}

export default ArtistCard
