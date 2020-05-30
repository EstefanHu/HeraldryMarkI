import React from 'react'
import { Route, Link } from 'react-router-dom'

import { Landing } from '../views/landing.js'
import { Login } from '../views/login.js'
import { Register } from '../views/register.js'

export const Initial = () => (
  <>
    <nav>
      <h1>Project:House</h1>
      <Link to='/app/dashboard'>
        <button
        >Log in</button>
      </Link>
    </nav>
    <main>
      <Route exact path='/' component={Landing} />
      <Route path='/login' component={Login} />
      <Route path='/register' component={Register} />
    </main>
  </>
)