import React from 'react'
import { Routes, Route } from 'react-router-dom';
import RegistrationForm from './Auth/Signup/pages/RegistrationForm';
import RegistrationOptions from './Auth/Signup/pages/RegistrationOptions';

const Pages = () => {
  return (
    <Routes>
      <Route path='/auth/signup/1' element={<RegistrationOptions />} />
      <Route path='/auth/signup/2' element={<RegistrationForm />} />
    </Routes>
  )
}

export default Pages
