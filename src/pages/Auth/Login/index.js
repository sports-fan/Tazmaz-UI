import PrivateRoute from 'components/PrivateRoute';
import React from 'react'
import { Routes, Route } from 'react-router-dom';
import LoginForm from './LoginForm';
import TwofaForm from './TwofaForm';

const Login = () => {
  const has2fa = Boolean(localStorage.getItem('twofa'))
  return (
    <Routes>
      <Route path='/' element={<LoginForm />} />
      <Route path='/2fa' element={<PrivateRoute isAuthenticated={has2fa} component={TwofaForm}/>} />
    </Routes>
  )
}

export default Login
