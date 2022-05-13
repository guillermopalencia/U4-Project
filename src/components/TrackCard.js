import React from 'react'

const TrackCard = ({ tracks }) => {
  let trackList = tracks
    ? tracks.map((track) => (
        <div key={track.id}>
          <img width="80" src={track.album.images[0].url} />
          <h1>{track.name}</h1>
          <h3>{track.album.artists.name}</h3>
        </div>
      ))
    : null

  return <div>{trackList}</div>
}

export default TrackCard
