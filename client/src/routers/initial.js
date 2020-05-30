import React from 'react'
import { Route, Link } from 'react-router-dom'

import { InitialNav } from '../layout/initialNav.js'
import { Landing } from '../views/landing.js'
import { LogReg } from '../layout/logReg.js'

export const Initial = () => (
  <>
    <InitialNav />
    <main>
      <Landing />
      <LogReg />
    </main>
  </>
)