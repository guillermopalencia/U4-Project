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
        genres: 'rap'
      }
    }
  )
  callback(data.data)
}
export { getGenre }
