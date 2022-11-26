import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom';
import Signup from './Signup'

const Auth = () => {
  const {pathname} = useLocation()
  return (
    <Routes>
      <Route path={`${pathname}/signup`} element={<Signup />} />
    </Routes>
  )
}

export default Auth
