import React from 'react'
import {
  GiCrossShield,
  GiEyeShield,
  GiBrokenShield,
  GiFireShield
} from 'react-icons/gi'

export const Houses = () => {

  return (
    <section style={styles.container}>
      <GiCrossShield style={styles.crest} />
      <GiEyeShield style={styles.crest} />
      <GiBrokenShield style={styles.crest} />
      <GiFireShield style={styles.crest} />
    </section>
  )
}

const styles = {
  container: {
    background: 'rgb(255,126,0)',
    background: 'radial-gradient(circle, rgba(255,126,0,1) 6%, rgba(255,96,0,1) 100%)',
    width: '100%',
  },
  crest: {
    width: '60%',
    height: '60%'
  }
}