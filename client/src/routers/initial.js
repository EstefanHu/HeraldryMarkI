import React from 'react'
import { Route } from 'react-router-dom'

import { Landing } from '../views/landing.js'

export const Initial = () => (
  <main>
    <Route exact path='/' component={Landing} />
  </main>
)