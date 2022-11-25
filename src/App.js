import React from 'react'
import { CssBaseline } from '@mui/material'

import LoginPage from './pages/Login'
// import FormButton from './components/FormButton'
// import AppleIcon from './assets/apple.svg'
// import GoogleIcon from './assets/google.svg'
// import useStyles from './styles'

function App() {
  // const classes = useStyles()
  return (
    <React.Fragment>
      <CssBaseline />
      <LoginPage />
      {/* <FormButton
        styles={classes.loginWithIcon}
        startIcon={<img src={AppleIcon} alt="logo"/>}
        endIcon={<img src={GoogleIcon} alt="logo"/>}
        text='התחברות באמצעות'
        color="secondary"
        variant="outlined"
      /> */}
    </React.Fragment>
  );
}

export default App;
