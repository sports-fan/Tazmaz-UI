import React from 'react'
import { Routes, Route } from 'react-router-dom';
import RegistrationForm from './Auth/Signup/pages/RegistrationForm';
import RegistrationOptions from './Auth/Signup/pages/RegistrationOptions';
import SelectSubscription from './Auth/Signup/pages/SelectSubscription';
import Welcome from './Auth/Signup/pages/Welcome';

const Pages = () => {
  return (
    <Routes>
      <Route path='/auth/signup/1' element={<RegistrationOptions />} />
      <Route path='/auth/signup/2' element={<RegistrationForm />} />
      <Route path='/auth/signup/3' element={<SelectSubscription />} />
      <Route path='/auth/signup/4' element={<Welcome />} />
    </Routes>
  )
}

export default Pages
