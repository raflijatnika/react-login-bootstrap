import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'

// Helper
import HelperNavigation from './helper/HelperNavigation'

// Screen
import Home from '../screens/Home'
import Login from '../screens/Login'
import Register from '../screens/Register'

// Secure
import RedirectLogin from './secure/RedirectLogin'
import RedirectHome from './secure/RedirectHome'

function Base() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <RedirectLogin>
            <Home />
          </RedirectLogin>
        </Route>
        <Route path="/login">
          <RedirectHome>
            <Login />
          </RedirectHome>
        </Route>
        <Route path="/register">
          <RedirectHome>
            <Register />
          </RedirectHome>
        </Route>
      </Switch>
      <HelperNavigation />
    </Router>
  )
}

export default Base
