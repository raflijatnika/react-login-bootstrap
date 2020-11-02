import React from 'react'
import Helmet from 'react-helmet'

import CreatePostForm from '../components/form/CreatePost'

function Home() {
  return (
    <>
      <Helmet>
        <title>Home | Add Book</title>
      </Helmet>
      <CreatePostForm />
    </>
  )
}

export default Home
