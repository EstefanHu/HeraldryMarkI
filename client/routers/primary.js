import React from 'react'
import { Route } from 'react-router-dom'

import { Dashboard }

export const Primary = () => (
  <main>
    <Route exact path='/' component={Dashboard} />
  </main>
)