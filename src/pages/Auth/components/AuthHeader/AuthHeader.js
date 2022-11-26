import { Grid, Typography } from '@mui/material'
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

import TazmazLogo from '../../assets/tazmazLogo.svg'
import IosArrow from '../../assets/iosArrow.svg'
import useStyles from './styes'

const AuthHeader = () => {
  const classes = useStyles()
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('md'));
  return (
    <>
      <div className={classes.backToHome}>
        <img src={IosArrow} alt='logo'/>
        <Typography variant='body1' mr={1}>חזרה לדף הבית</Typography>
      </div>
      <Grid container justifyContent={matches ? 'flex-end' : 'center'}>
        <Grid item lg={8}  md={12} className={classes.main}>
          <img src={TazmazLogo} alt='tazmaz logo' />
        </Grid>
      </Grid>
    </>
  )
}

export default AuthHeader
