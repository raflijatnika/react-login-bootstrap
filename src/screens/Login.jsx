import React from 'react'
import Helmet from 'react-helmet'

import Loginform from '../components/form/Login'

function Login() {
  return (
    <>
      <Helmet>
        <title>React | Login</title>
      </Helmet>
      <Loginform />
    </>
  )
}

export default Login
