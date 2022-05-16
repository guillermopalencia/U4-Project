import { getPlaylists } from '../resources'
import { useNavigate } from 'react-router'

const PlaylistCard = ({ playlists }) => {
  const navigate = useNavigate()

  const nav = (id) => {
    navigate(`/playlist/${id}`)
  }
  let playlistarray = playlists
    ? playlists.map((playlist) => (
        <div
          key={playlist.id}
          className="playlistCard"
          onClick={() => nav(playlist.id)}
        >
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
