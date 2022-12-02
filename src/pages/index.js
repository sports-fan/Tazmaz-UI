import AuthRoute from 'components/AuthRoute';
import PrivateRoute from 'components/PrivateRoute';
import React, { useMemo } from 'react'
import { Routes, Route } from 'react-router-dom';
import Login from './Auth/Login';
import Signup from './Auth/Signup';
import Dashboard from './Dashboard';

const Pages = () => {
  const isAuthenticated = useMemo(() => Boolean(localStorage.getItem('token')), [])
  return (
    <Routes>
      <Route
        path='/'
        element={
          <PrivateRoute isAuthenticated={isAuthenticated} component={Dashboard} />
        }
      />
      <Route
        path='/auth/login/*' 
        element={
          <AuthRoute isAuthenticated={isAuthenticated} component={Login} />
        }
      />
      <Route path='/auth/signup/*' element={<Signup />} />
      <Route path='/dashboard' element={<Dashboard />} />
    </Routes>
  )
}

export default Pages
