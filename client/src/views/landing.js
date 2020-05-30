import React from 'react'
import { BsArrowDown } from 'react-icons/bs'
import { Houses } from '../components/houses'

export const Landing = () => {
  return (
    <section style={styles.container}>
      <section style={styles.hero}>
        <h1 style={styles.title}>:Heraldry</h1>
        <h2 style={styles.pitch}>Focus on the<br />work that<br />matters</h2>
        <p style={styles.bit}>:Heraldry is the worlds first closed social organizor.
        We bring all your communties projects, events and networking into one
        location. And we help you design, organize and execute your vision,
          showing off every noteworthy feature.</p>
        <BsArrowDown style={styles.downArrow} />
      </section>
      <Houses />
    </section>
  )
}

const styles = {
  container: {
    backgroundColor: '#ff9b3d',
    background: 'radial-gradient(circle, rgba(255,143,0,1) 6%, rgba(255,130,0,1) 100%)',
    padding: '250px 0 0 70px',
  },
  hero: {

  },
  title: {
    fontSize: '2rem',
  },
  pitch: {
    fontSize: '8vw',
    letterSpacing: '-1px',
    fontWeight: 'bold',
    fontFamily: 'Ubuntu',
    lineHeight: '0.95',
    margin: '10px 0 60px 0',
  },
  bit: {
    color: 'white',
    width: '500px',
    fontSize: '1.3rem',
  },
  downArrow: {
    fontSize: '4rem',
    margin: '20px 0 60px 0'
  }
}