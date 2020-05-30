import React, { useState, useEffect, useContext } from 'react'

import { Login } from '../components/login.js'
import { Register } from '../components/register.js'

export const LogReg = () => {
  const [hasAccount, setHasAccount] = useState(true)

  return (
    <section style={styles.container}>
      <header style={styles.header}>
        <button
        style={styles.toggler}
          onClick={() => setHasAccount(hasAccount => !hasAccount)}
        >
          {hasAccount ? 'Register' : 'Login'}
        </button>
      </header>
      {hasAccount ? <Login /> : <Register />}
    </section>
  )
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    position: 'fixed',
    right: 0,
    top: 0,
    bottom: 0,
    width: '450px',
    background: 'white',
    padding: '40px 30px 80px 30px'
  },
  header: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  toggler: {
    border: 'none',
    background: 'white',
    fontSize: '1rem',
    textDecoration: 'underline',
  }
}