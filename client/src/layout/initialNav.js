import React from 'react'
import { BsShieldShaded } from 'react-icons/bs'

export const InitialNav = () => {
  return (
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
  )
}

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