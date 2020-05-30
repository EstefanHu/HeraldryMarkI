import React from 'react'
import { Route, Link } from 'react-router-dom'

import { Landing } from '../views/landing.js'
import { LogReg } from '../layout/logReg.js'

export const Initial = () => (
  <main>
    <Landing />
    <LogReg />
  </main>
)