import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router'
import SearchPage from './components/SearchPage'
import Login from './components/LoginPage'
import Home from './components/HomePage'
import NavBar from './components/NavBar'
import NewPlaylistPage from './components/NewPlaylistPage'

function App() {
  const [token, setToken] = useState([])

  useEffect(() => {
    setToken(localStorage.getItem('token'))
  })

  return (
    <div className="App">
      {token === 'null' ? null : <NavBar />}
      <div>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/newplaylist/:id" element={<NewPlaylistPage />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
