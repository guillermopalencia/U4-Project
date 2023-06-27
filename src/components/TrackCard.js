import React from 'react'

const TrackCard = ({ tracks }) => {
  let trackList = tracks
    ? tracks.map((track) => (
        <div key={track.id} className="trackCard">
          <img
            className="trackImage"
            width="200"
            height="auto"
            src={track.album.images[0].url}
            alt="trackimage"
          />
          <div className="trackInfo">
            <h1>{track.name}</h1>
            <h3>{track.album.artists.name}</h3>
          </div>
        </div>
      ))
    : null

  return <div>{trackList}</div>
}

export default TrackCard
