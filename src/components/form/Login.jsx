import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import Joi from 'joi'
import { joiResolver } from '@hookform/resolvers/joi'

import { loginUser } from '../../services/api'

import Card from '../Card'
import InputEmail from '../input/Email'
import InputPassword from '../input/Password'
import ButtonSubmit from '../button/ButtonSubmit'

const schema = Joi.object({
  password: Joi.string().required(),
  email: Joi.string().email({ tlds: { allow: false } }).required(),
})

function Login() {
  const { register, handleSubmit, errors } = useForm({
    resolver: joiResolver(schema),
  })

  const dispatch = useDispatch()

  function callLoginUser(data) {
    loginUser(data).then(
      (isLogin) => {
        if (isLogin) {
          dispatch({ type: 'loggedIn' })
        }
      },
    )
  }

  return (
    <form onSubmit={handleSubmit(callLoginUser)}>
      <Card title="Login">
        <InputEmail inputName="email" inputId="email" inputRef={register} labelText="Email :" error={errors.email && errors.email.message} />
        <InputPassword inputName="password" inputId="password" inputRef={register} labelText="Password :" error={errors.password && errors.password.message} />
        <ButtonSubmit>Login</ButtonSubmit>
      </Card>
    </form>
  )
}

export default Login
