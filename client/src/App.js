import React, { useState, useEffect } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'
import Cookie from 'js-cookie'

import './App.css'

const checkAuth = () => {
  const cookie = Cookie.get('houseCookie')
  if (!cookie) return false
  return true
}

const AuthRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    checkAuth() ? (
      <Component {...props} />
    ) : (
        <Redirect to={{ pathname: '/login' }} />
      )
  )} />
)

function App() {
  const [community, setCommunity] = useState(null)

  useEffect(() => {
    fetch('http://ip-api.com/json')
      .then(res => res.json())
      .then(res => {
        setCommunity(res.city)
      })
      .catch(console.error)
  }, [])

  return (
    <Router>
      <Switch>
        <Route exact path='/(|register|login|privacy|terms|forgot)' component={Initial} />
        <AuthRoute exact path='/app/(dashboard|new|community|settings)' component={Primary} />
        <Route component={FourOhFour} />
      </Switch>
    </Router>
  )
}

export default App
