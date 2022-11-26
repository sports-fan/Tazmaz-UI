import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import RegistrationOptions from './pages/RegistrationOptions'

const Signup = () => {
  const {pathname} = useLocation()

  return (
    <Routes>
      <Route path={`${pathname}/options}`} element={<RegistrationOptions />} />
    </Routes>
  )
}

export default Signup
