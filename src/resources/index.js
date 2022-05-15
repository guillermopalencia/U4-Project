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
  callback(data.items)
}

export { getGenre, getLikedTracks }
