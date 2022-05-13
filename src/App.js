import './App.css'
import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router'
import SearchPage from './components/SearchPage'
import Login from './components/LoginPage'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path="/" element={<Login />} />
        </Routes>
      </header>
    </div>
  )
}

export default App
