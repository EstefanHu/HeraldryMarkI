
import React, { useState } from 'react';
import { Link, withRouter } from 'react-router-dom';

export const Register = withRouter(props => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    if (password.length < 8) return alert('Password is not long enough');
    if (password !== confirmPassword) return alert('Passwords do not match');

    fetch('http://localhost:4000/user/register', {
      credentials: 'include',
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        firstName,
        lastName,
        email,
        password,
      })
    })
      .then(res => res.json())
      .then(res => {
        if (res.error) {
          alert(res.error)
        } else {
          props.history.push('/app/dashboard');
        }
      })
      .catch(console.error);
  }

  return (
    <form onSubmit={handleSubmit} style={styles.container}>
      <h1>Become your ikon</h1>
      <p>or <a>log in to existing account</a></p>
      <input
        style={styles.input}
        type='text'
        value={firstName}
        onChange={e => setFirstName(e.target.value)}
        placeholder='First Name'
        required
      />
      <input
        style={styles.input}
        type='text'
        value={lastName}
        onChange={e => setLastName(e.target.value)}
        placeholder='Last Name'
        required
      />
      <input
        style={styles.input}
        type='email'
        value={email}
        onChange={e => setEmail(e.target.value)}
        placeholder='Email Address'
        required
      />
      <input
        style={styles.input}
        value={password}
        onChange={e => setPassword(e.target.value)}
        placeholder='Password'
        required
      />
      <input
        style={styles.input}
        type='password'
        value={confirmPassword}
        onChange={e => setConfirmPassword(e.target.value)}
        placeholder='Confirm Password'
        required
      />
      <input type='submit' value='Register' style={styles.submit} />
    </form>
  )
});

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
  },
  input: {
    padding: '8px 12px',
    fontSize: '1rem',
    marginBottom: '20px'
  },
  submit: {
    padding: '10px',
    fontSize: '1rem',
    fontWeight: 'bold',
    backgroundColor: '#ff9b3d',
    color: 'white',
    border: 'none'
  }
}