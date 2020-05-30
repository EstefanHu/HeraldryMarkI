import React from 'react'
import { BsArrowDown } from 'react-icons/bs'

export const Landing = () => {
  return (
    <section style={styles.container}>
      <section style={styles.hero}>
        <h1 style={styles.title}>:ikon</h1>
        <h2 style={styles.pitch}></h2>
        <p style={styles.bit}>:ikon is the worlds first closed social organizor.
        We bring all your communties projects, events and networking into one
        location. And we help you design, organize and execute your vision,
          showing off every noteworthy feature.</p>
        <BsArrowDown style={styles.downArrow}/>
      </section>
    </section>
  )
}

const styles = {
  container: {
    background: 'rgb(255,147,0)',
    background: 'radial-gradient(circle, rgba(255,147,0,1) 8%, rgba(255,113,0,1) 100%)',
    backgroundColor: '#ff9b3d',
    height: '100vh',
    padding: '300px 0 0 70px',
  },
  hero: {

  },
  title: {

  },
  pitch: {

  },
  bit: {
    color: 'white',
    width: '500px',
    fontSize: '1.3rem',
  },
  downArrow: {
    fontSize: '4rem'
  }
}