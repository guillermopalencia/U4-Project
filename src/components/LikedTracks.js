import React from 'react'

const LikedTracksCard = ({ likedTracks }) => {
  let trackList = likedTracks
    ? likedTracks.map((track) => (
        <div key={track.track.id}>
          <div>
            <img width="80" src={track.track.album.images[0].url} />
          </div>
          <div>
            <h1>{track.track.name}</h1>
            <h3>{track.track.album.artists.name}</h3>
          </div>
        </div>
      ))
    : null

  return <div>{trackList}</div>
}

export default LikedTracksCard
