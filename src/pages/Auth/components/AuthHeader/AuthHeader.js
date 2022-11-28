import { Grid, Typography } from '@mui/material'

import IosArrow from '../../../../assets/iosArrow.svg'
import useStyles from './styes'

const AuthHeader = ({logo}) => {
  const classes = useStyles()
  return (
    <Grid container justifyContent='center' direction="row-reverse">
      <Grid item lg={4} className={classes.backToHome}>
        <Typography variant='body1' mr={1}>חזרה לדף הבית</Typography>
        <img src={IosArrow} alt='logo'/>
      </Grid>
      <Grid item lg={6} className={classes.logo}>
        <img src={logo} alt='tazmaz logo' />
      </Grid>
    </Grid>
  )
}

export default AuthHeader
