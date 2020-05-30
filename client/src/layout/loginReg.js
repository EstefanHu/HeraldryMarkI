import React, { useState, useEffect, useContext } from 'react'

import { Login } from '../components/login.js'
import  { Register } from '../components/register.js'

export const LoginReg = () => {
  const [hasAccount, setHasAccount] = useState(true)

  return hasAccount ? <Login /> : <Register />
}