import React from 'react'
import Helmet from 'react-helmet'

import RegisterForm from '../components/form/Register'

function Register() {
  return (
    <>
      <Helmet>
        <title>React | Register</title>
      </Helmet>
      <RegisterForm />
    </>
  )
}

export default Register
