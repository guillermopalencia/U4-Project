import axios from 'axios'

const token = window.localStorage.getItem('token')

const getGenre = async (callback) => {
  const data = await axios.get(
    'https://api.spotify.com/v1/recommendations/available-genre-seeds',
    {
      headers: {
        Authorization: `Bearer ${token}`
      },
      params: {
        genres: ['rap', 'samba']
      }
    }
  )
  callback(data.data.genres)
}

const getLikedTracks = async (callback) => {
  const data = await axios.get('https://api.spotify.com/v1/me/tracks', {
    headers: {
      Authorization: `Bearer ${token}`
    },
    params: {
      limit: 10,
      offset: 0
    }
  })
  callback(data.data.items)
}

const getPlaylists = async (callback) => {
  try {
    const data = await axios.get('https://api.spotify.com/v1/me/playlists', {
      headers: {
        Authorization: `Bearer ${token}`
      },
      params: {
        limit: 6,
        offset: 0
      }
    })
    callback(data.data.items)
  } catch (error) {
    throw error
  }
}

const getUserProfile = async (callback) => {
  const data = await axios.get('https://api.spotify.com/v1/me', {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
  callback(data.data)
}

const getPlaybackState = async (callback) => {
  const data = await axios.get('https://api.spotify.com/v1/me/player', {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
  callback(data.data)
}

const startPlayback = async (callback, uri) => {
  const data = await axios.put('https://api.spotify.com/v1/me/player/play', {
    headers: {
      Authorization: `Bearer ${token}`
    },
    params: {
      context_uri: `${uri}`
    }
  })
  callback(data)
}

export {
  getGenre,
  getLikedTracks,
  getPlaylists,
  getUserProfile,
  getPlaybackState,
  startPlayback
}
