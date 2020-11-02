import Cookies from 'js-cookie'

function logIn(token) {
  Cookies.set('token', token)
}

function logOut() {
  Cookies.remove('token')
}

function getToken() {
  return Cookies.get('token')
}

function isLogin() {
  return !!getToken()
}

export default {
  logOut,
  logIn,
  getToken,
  isLogin,
}
