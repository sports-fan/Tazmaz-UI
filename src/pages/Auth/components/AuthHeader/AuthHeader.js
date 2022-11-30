import { Typography } from '@mui/material'

import IosArrow from '../../../../assets/iosArrow.svg'
import IosArrowWhilte from '../../../../assets/iosArrowWhite.svg'
import useStyles from './styes'

const AuthHeader = ({logo, theme}) => {
  const classes = useStyles()
  return (
    <div className={theme==='light' ? classes.header : classes.headerDark}>
      <div className={theme==='light' ? classes.backToHome : classes.backToHomeDark}>
        <Typography variant='body1' className={theme==='light' ? classes.textLight : classes.textDark} mr={1}>חזרה לדף הבית</Typography>
        <img src={theme==='light' ? IosArrowWhilte : IosArrow} alt='logo'/>
      </div>
      <div className={theme==='light' ? classes.logo : classes.logoDark}>
        <img src={logo} alt='tazmaz logo' />
      </div>
    </div>
  )
}

export default AuthHeader
