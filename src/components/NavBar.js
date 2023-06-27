import React, { useEffect } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { getUserProfile } from '../resources'

const NavBar = () => {
  const [token, setToken] = useState('')
  const [user, setUser] = useState([])

console.log(token)

  let navigate = useNavigate()

  // const logout = () => {
  //   setToken('')
  //   window.localStorage.removeItem('token')
  //   navigate('/')
  // }

  useEffect(() => {
    getUserProfile(setUser)
  }, [])

  return (
    <div className="navbar">
      <h2 className="nav">{user.display_name}</h2>
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
      <NavLink
        className="nav"
        to={`/newplaylist/${user.id}`}
        style={({ isActive }) =>
          isActive ? { color: 'goldenrod' } : { color: 'white' }
        }
      >
        Create Playlist
      </NavLink>
    </div>
  )
}

export default NavBar
