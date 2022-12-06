import AuthRoute from 'components/AuthRoute';
import PrivateRoute from 'components/PrivateRoute';
import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Login from './Auth/Login';
import Signup from './Auth/Signup';
import Dashboard from './Dashboard';

const Pages = () => {
  const isAuthenticated = Boolean(sessionStorage.getItem('access_token'))
  return (
    <Routes>
      <Route
        path='/'
        element={
          <PrivateRoute isAuthenticated={() => Boolean(sessionStorage.getItem('access_token'))} component={Dashboard} />
        }
      />
      <Route
        path='/auth/login/*'
        element={
          <AuthRoute isAuthenticated={isAuthenticated} component={Login} />
        }
      />
      <Route
        path='/auth/signup/*'
        element={
          <AuthRoute isAuthenticated={isAuthenticated} component={Signup} />
        }
      />
    </Routes>
  )
}

export default Pages
