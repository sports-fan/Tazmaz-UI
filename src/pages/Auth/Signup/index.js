import React from 'react'
import { Routes, Route } from 'react-router-dom';
import PrivateRoute from 'components/PrivateRoute';
import RegistrationForm from './RegistrationForm';
import RegistrationOptions from './RegistrationOptions';
import SelectSubscription from './SelectSubscription';
import Welcome from './Welcome';

const Signup = () => {
  return (
    <Routes>
      <Route path='/1' element={<RegistrationOptions />} />
      <Route
        path='/2'
        element={
          <PrivateRoute
            isAuthenticated={() => Boolean(localStorage.getItem("verifiedEmail"))}
            redirectTo="/auth/signup/1"
            component={RegistrationForm}
          />
        }
      />
      <Route
        path='/3'
        element={
          <PrivateRoute
            isAuthenticated={() => Boolean(localStorage.getItem("userId"))}
            redirectTo="/auth/signup/1"
            component={SelectSubscription}
          />
        } 
      />
      <Route
        path='/4'
        element={
          <PrivateRoute
            isAuthenticated={() => localStorage.getItem("PassedStage3")}
            redirectTo="/auth/signup/1"
            component={Welcome}
          />
        }
      />
    </Routes>
  )
}

export default Signup
