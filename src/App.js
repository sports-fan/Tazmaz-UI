import React from 'react'
import { CssBaseline } from '@mui/material'

import FormButton from './components/FormButton'
import AppleIcon from './assets/apple.svg'
import GoogleIcon from './assets/google.svg'
import useStyles from './styles'

function App() {
  const classes = useStyles()
  return (
    <React.Fragment>
      <CssBaseline />
      <FormButton
        styles={classes.loginWithIcon}
        startIcon={<img src={AppleIcon} alt="logo"/>}
        endIcon={<img src={GoogleIcon} alt="logo"/>}
        text='התחברות באמצעות'
      />
    </React.Fragment>
  );
}

export default App;
