import { Grid } from '@mui/material'
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

import TazmazLogo from '../../assets/tazmazLogo.svg'
import useStyles from './styes'

const LoginHeader = () => {
  const classes = useStyles()
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('md'));
  return (
    <Grid container justifyContent={matches ? 'flex-end' : 'center'}>
      <Grid item lg={8}  md={12} className={classes.main}>
        <img src={TazmazLogo} alt='tazmaz logo' />
      </Grid>
    </Grid>
  )
}

export default LoginHeader
