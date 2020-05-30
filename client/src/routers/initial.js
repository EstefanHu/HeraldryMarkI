import React from 'react'
import { Route, Link } from 'react-router-dom'

import { Landing } from '../views/landing.js'
import { LogReg } from '../layout/logReg.js'

export const Initial = () => (
  <>
    <header style={styles.header}>
      <h1>Project:ikon</h1>
      <p></p>
    </header>
    <main>
      <Landing />
      <LogReg />
    </main>
  </>
)

const styles = {
  header: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    height: '60px',
    display: 'flex',
    padding: '20px',
  }
}