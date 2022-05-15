import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { useState } from 'react'

const NavBar = () => {
  const [token, setToken] = useState('')

  let navigate = useNavigate()

  const logout = () => {
    setToken('')
    window.localStorage.removeItem('token')
    navigate('/')
  }

  return (
    <div className="navbar">
      <NavLink
        className="nav"
        to="/home"
        style={({ isActive }) =>
          isActive ? { color: 'goldenrod' } : { color: 'white' }
        }
      >
        Home
      </NavLink>

      <NavLink
        className="nav"
        to="/search"
        style={({ isActive }) =>
          isActive ? { color: 'goldenrod' } : { color: 'white' }
        }
      >
        Search
      </NavLink>
    </div>
  )
}

export default NavBar
