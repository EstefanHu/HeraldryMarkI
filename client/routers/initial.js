import React from 'react'
import { Route } from 'react-router-dom'

export const Initial = () => (
  <main>
    <Route exact path='/' component={landing} />
  </main>
)