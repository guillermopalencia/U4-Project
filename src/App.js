import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router'
import SearchPage from './components/SearchPage'
import Login from './components/LoginPage'
import Home from './components/HomePage'
import NavBar from './components/NavBar'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <div>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/search" element={<SearchPage />} />
          </Routes>
        </div>
      </header>
    </div>
  )
}

export default App
