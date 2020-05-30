import React from 'react'
import { Route, Link } from 'react-router-dom'
import { BsShieldShaded } from 'react-icons/bs'

import { Landing } from '../views/landing.js'
import { LogReg } from '../layout/logReg.js'

export const Initial = () => (
  <>
    <header style={styles.header}>
      <h1><BsShieldShaded style={{ color: 'black' }} /> :Heraldry</h1>
      <ul style={styles.links}>
        <li>
          <a
            style={styles.link}
            href='#'
          >For teams</a>
        </li>
        <li>
          <a
            style={styles.link}
            href='#'
          >For Individuals</a>
        </li>
      </ul>
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
    alignItems: 'center',
    padding: '45px 30px',
    color: 'white',
  },
  links: {
    display: 'flex',
    listStyle: 'none',
  },
  link: {
    color: 'white',
    textDecoration: 'none',
    marginLeft: '40px',
    // fontWeight: 'bold',
    fontSize: '1.2rem',
  }
}