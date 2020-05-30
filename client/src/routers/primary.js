import React from 'react'
import { Route } from 'react-router-dom'

import { Dashboard } from '../views/dashboard.js'

export const Primary = () => (
  <main>
    <Route exact path='/' component={Dashboard} />
  </main>
)