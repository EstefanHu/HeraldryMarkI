import React, { useState } from 'react'

export const Login = ({props}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    fetch('http://localhost:4000/user/login', {
      credentials: 'include',
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email,
        password
      })
    })
      .then(res => res.json())
      .then(res => {
        if (res.error) return alert(res.error);
        props.history.push('/app/dashboard');
      })
      .catch(console.error);
  }

  return (
    <form onSubmit={handleSubmit} style={styles.container}>
      <h1 style={styles.title}>Sign in</h1>
      <p style={styles.create}>or <a href=''>create an account</a></p>
      <input
        className='landing__form--input'
        type='email'
        value={email}
        onChange={e => setEmail(e.target.value)}
        placeholder='Email Address'
        required
      />
      <input
        className='landing__form--input'
        type='password'
        value={password}
        onChange={e => setPassword(e.target.value)}
        placeholder='Password'
        required
      />
      <input type='submit' value='Log in' />
    </form>
  )
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
  },
  title: {

  }
}