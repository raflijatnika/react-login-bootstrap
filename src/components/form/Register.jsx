import React from 'react'
import { useForm } from 'react-hook-form'
import Joi from 'joi'
import { joiResolver } from '@hookform/resolvers/joi'

import { registerUser } from '../../services/api'

import Card from '../Card'
import InputEmail from '../input/Email'
import InputPassword from '../input/Password'
import ButtonSubmit from '../button/ButtonSubmit'

const schema = Joi.object({
  password: Joi.string().regex(/^[a-zA-Z0-9!@#$%&*]{3,25}$/).required(),
  email: Joi.string().email({ tlds: { allow: false } }).required(),
})

function Register() {
  const { register, handleSubmit, errors } = useForm({
    resolver: joiResolver(schema),
  })

  return (
    <Card title="Register">
      <form onSubmit={handleSubmit(registerUser)}>
        <InputEmail inputName="email" inputId="email" inputRef={register} labelText="Email :" error={errors.email && errors.email.message} />
        <InputPassword inputName="password" inputId="password" inputRef={register} error={errors.password && errors.password.message} labelText="Password :" />
        <ButtonSubmit>Register</ButtonSubmit>
      </form>
    </Card>
  )
}

export default Register
