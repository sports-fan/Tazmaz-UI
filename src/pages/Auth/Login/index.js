import PrivateRoute from 'components/PrivateRoute';
import React from 'react'
import { Routes, Route } from 'react-router-dom';
import LoginForm from './LoginForm';
import TwofaForm from './TwofaForm';

const Login = () => {
  return (
    <Routes>
      <Route path='/' element={<LoginForm />} />
      <Route path='/2fa' element={
        <PrivateRoute isAuthenticated={() => Boolean(sessionStorage.getItem('twofaId'))} component={TwofaForm}/>}
      />
    </Routes>
  )
}

export default Login
