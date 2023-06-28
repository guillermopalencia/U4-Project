import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'

const Login = () => {
  const CLIENT_ID = '183f5935087c4ce685d71e8467ce5711'
  const REDIRECT_URI = 'http://localhost:3000'
  const AUTH_BASE_URL = 'https://accounts.spotify.com/authorize?'
  const RESPONSE_TYPE = 'token'
  const SCOPES =
    'streaming user-read-email user-read-private user-library-read user-library-modify user-read-playback-state user-modify-playback-state playlist-modify-private playlist-modify-public'

  const [token, setToken] = useState('')

  const urlSearch = new URLSearchParams(window.location.hash.replace('#', '?'))

  useEffect(() => {

    setToken(urlSearch.get('access_token'))
    window.localStorage.setItem('token', token)
    console.log(token)
  }, [token])

  const logout = () => {
    setToken('')
    window.localStorage.removeItem('token')
  }

  let navigate = useNavigate('')
  const redirect = () => {
    navigate('/home')
    window.location.reload()
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to Cantabile</h1>
        <p>Your first choice for Music</p>
        {!token ? (
          <a
            className="spotify"
            href={`${AUTH_BASE_URL}client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPES}`}
          >
            Login Via Spotify
          </a>
        ) : null}
        <div className="gradient"></div>
        {token ? redirect() : null}
      </header>
    </div>
  )
}

export default Login
