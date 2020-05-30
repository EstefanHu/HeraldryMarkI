import React from 'react'
import { Link } from 'react-router-dom'

export const FourOhFour = () => (
  <main>
    <Link
      style={styles.error}
      to='/app/dashboard'
    >
      <p>404</p>
    </Link>
  </main>
)

const styles = {
  error: {
    fontSize: '10rem',
    color: 'var(--color-accent)',
    margin: '50vh auto',
  }
}