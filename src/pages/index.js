import React from 'react'
import { Routes, Route } from 'react-router-dom';
import LoginForm from './Auth/Login/LoginForm';
import RegistrationForm from './Auth/Signup/RegistrationForm';
import RegistrationOptions from './Auth/Signup/RegistrationOptions';
import SelectSubscription from './Auth/Signup/SelectSubscription';
import Welcome from './Auth/Signup/Welcome';

const Pages = () => {
  return (
    <Routes>
      <Route path='/auth/signup/1' element={<RegistrationOptions />} />
      <Route path='/auth/signup/2' element={<RegistrationForm />} />
      <Route path='/auth/signup/3' element={<SelectSubscription />} />
      <Route path='/auth/signup/4' element={<Welcome />} />
      <Route path='/auth/login' element={<LoginForm />} />
    </Routes>
  )
}

export default Pages
