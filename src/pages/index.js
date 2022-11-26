import React from 'react'
import { Routes, Route } from 'react-router-dom';
import RegistrationOptions from './Auth/Signup/pages/RegistrationOptions';

const Pages = () => {
  return (
    <Routes>
      <Route path='/auth/signup/options' element={<RegistrationOptions />} />
    </Routes>
  )
}

export default Pages
