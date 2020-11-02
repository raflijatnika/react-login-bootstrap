/* eslint-disable import/prefer-default-export */
import Axios from 'axios'
import User from './user'

const domain = 'localhost'
const port = 3000

const config = {
  baseURL: `http://${domain}:${port}`,
}

const api = Axios.create(config)

export function registerUser(params) {
  return api.post('/register', params)
}

export function loginUser(params) {
  return api.post('/login', params).then(
    (response) => {
      const { data } = response
      User.logIn(data.accessToken)
      return true
    },
    () => (false),
  )
}

export function createPost(params) {
  return api.post('/posts', params, {
    headers: {
      Authorization: `Bearer ${User.getToken()}`,
    },
  })
}

// export function getBooks() {
//   return api.get('/posts', {
//     headers: {
//       Authorization: `Bearer ${User.getToken()}`,
//     },
//   }).then(
//     (response) => {
//       const { data } = response
//       return data
//     },
//   )
// }
