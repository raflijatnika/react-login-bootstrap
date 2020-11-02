import React, { useState } from 'react'
import { useSelector } from 'react-redux'

import { Link } from 'react-router-dom'

import ButtonLogout from '../button/ButtonLogout'

const style = {
  position: 'fixed',
  right: '10px',
  bottom: '10px',

}

const nav = [
  ['/login', 'Login'],
  ['/register', 'Register'],
]

function HelperNavigation() {
  const [show, setShow] = useState(false)
  const isLogin = useSelector(state => state.login.isLogIn)

  function showButtonHandler() {
    setShow(!show)
  }

  return (
    <nav style={style}>
      <div className="list-group">
        {
          isLogin ? show && <ButtonLogout /> : show && nav.map(([to, path], index) => (
            <Link key={`${index + 1}`} className="list-group-item" to={to}>{path}</Link>
          ))
        }
        <button type="button" onClick={showButtonHandler} className="btn btn-info">{show ? 'Hide' : 'Show'}</button>
      </div>
    </nav>
  )
}

export default HelperNavigation
