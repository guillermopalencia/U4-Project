import axios from 'axios'

const Search = async (e) => {
  e.preventDefault()
  const { data } = await axios.get('https://api.spotify.com/v1/search', {
    headers: {
      Authorization: `Bearer ${token}`
    },
    params: {
      q: searchKey,
      type: 'artist'
    }
  })
  console.log(data)
}

export { Search }
