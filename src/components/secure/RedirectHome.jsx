import React, { Fragment } from 'react'
import { useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'

function RedirectHome({ children }) {
  const isLogin = useSelector(state => state.login.isLogIn)

  return (
    <Fragment>
      {
        isLogin ? <Redirect to="/" /> : children
      }
    </Fragment>
  )
}

export default RedirectHome
