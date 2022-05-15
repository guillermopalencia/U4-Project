import { getPlaylists } from '../resources'

const PlaylistCard = ({ playlists }) => {
  let playlistarray = playlists
    ? playlists.map((playlist) => (
        <div key={playlist.id} className="playlistCard">
          <div className="playlistsLeft">
            {playlist.images.length ? (
              <img src={playlist.images[0].url} />
            ) : null}
          </div>
          <div className="playlistsRight">
            <h4>{playlist.name}</h4>
          </div>
        </div>
      ))
    : null
  return <div className="playlistContainer">{playlistarray}</div>
}

export default PlaylistCard
