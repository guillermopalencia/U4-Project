import React from 'react'

const LikedTracksCard = ({ likedTracks }) => {
  let trackList = likedTracks
    ? likedTracks.map((track) => (
        <div key={track.track.id} className="trackCard">
          <div>
            <img
              className="trackImage"
              width="200"
              height="auto"
              src={track.track.album.images[0].url}
            alt="trackimage"/>
          </div>
          <div className="trackInfo">
            <h6>{track.track.name}</h6>
            <p>{track.track.artists[0].name}</p>
          </div>
        </div>
      ))
    : null

  return <div className="trackContainer">{trackList}</div>
}

export default LikedTracksCard
