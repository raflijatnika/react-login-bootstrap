import React, { Fragment } from 'react'
import { useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'

function RedirectLogin({ children }) {
  const isLogin = useSelector(state => state.login.isLogIn)

  return (
    <Fragment>
      {
        isLogin ? children : <Redirect to="/login" />
      }
    </Fragment>
  )
}

export default RedirectLogin
