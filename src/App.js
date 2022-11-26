import React from 'react'
import { CssBaseline } from '@mui/material'
import Pages from './pages'
import useStyles from './styles'

function App() {
  const classes = useStyles()
  return (
    <React.Fragment className={classes.main}>
      <CssBaseline />
      <Pages />
    </React.Fragment>
  );
}

export default App;
