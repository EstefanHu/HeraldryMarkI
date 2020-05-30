import React from 'react'

export const Nav = () => {
  return (
    <nav style={styles.container}>
      <h1>:ikon</h1>
    </nav>
  )
}

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    height: '55px',
    backgroundColor: '#ff8400'
  }
}