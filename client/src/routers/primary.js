import React, { useContext } from 'react'
import { Route } from 'react-router-dom'
import { LocationContext } from '../providers/locationProvider.js'

import { Dashboard } from '../views/dashboard.js'
import { Nav } from '../layout/nav.js'

export const Primary = () => {
  const { community } = useContext(LocationContext);
 
  return (
    <main style={styles.container}>
      <Nav />
      <Route exact path='/app/dashboard' component={Dashboard} />
    </main>
  )
}

const styles = {
  container: {
    height: '100vh',
    width: '100vw'
  }
}