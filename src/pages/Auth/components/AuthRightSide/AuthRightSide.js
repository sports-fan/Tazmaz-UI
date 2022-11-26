import { Grid, Typography } from '@mui/material'


import TazmazLogo from '../../../../assets/tazmazLogo.svg'
import IosArrow from '../../../../assets/iosArrow.svg'
import GirlIcon from '../../../../assets/girlIcon.svg'
import useStyles from './styes'

const AuthRightSide = ({children}) => {
  const classes = useStyles()
  return (
    <>
      <div className={classes.backToHome}>
        <img src={IosArrow} alt='logo'/>
        <Typography variant='body1' ml={1}>חזרה לדף הבית</Typography>
      </div>
      <Grid container>
        <Grid item lg={10} md={12} sm={12} xs={12} className={classes.main}>
          <img src={TazmazLogo} alt='tazmaz logo' />
        </Grid>
      </Grid>
      {children}
      <div className={classes.bottomLogo}>
        <div className={classes.register}>
          <Typography variant='body2'> נרשמת כבר בעבר<u>? להתחברות</u></Typography>
        </div>
        <img src={GirlIcon} alt='girl' />
      </div>
    </>
  )
}

export default AuthRightSide
