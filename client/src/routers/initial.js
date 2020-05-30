import React from 'react'
import { Route, Link } from 'react-router-dom'

import { Landing } from '../views/landing.js'
import { LoginReg } from '../layout/loginReg.js'

export const Initial = () => (
  <main>
    <Landing />
    <LoginReg />
  </main>
)