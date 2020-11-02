import React from 'react'
import { useForm } from 'react-hook-form'
import { joiResolver } from '@hookform/resolvers/joi'
import Joi from 'joi'
import { createPost } from '../../services/api'

import Card from '../Card'
import InputText from '../input/Text'
import ButtonSubmit from '../button/ButtonSubmit'

const schema = Joi.object({
  title: Joi.string().min(2).required(),
  author: Joi.string().min(2).required(),
})

function CreatePost() {
  const { register, handleSubmit, errors } = useForm({
    resolver: joiResolver(schema),
  })

  return (
    <form onSubmit={handleSubmit(createPost)}>
      <Card title="Add Book">
        <InputText inputName="title" inputId="title" inputRef={register} labelText="Title :" error={errors.title && errors.title.message} />
        <InputText inputName="author" inputId="author" inputRef={register} labelText="Author :" error={errors.author && errors.author.message} />
        <ButtonSubmit>Save</ButtonSubmit>
      </Card>
    </form>
  )
}

export default CreatePost
