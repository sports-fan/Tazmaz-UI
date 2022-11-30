import { Typography } from '@mui/material'
import useMediaQuery from '@mui/material/useMediaQuery'

import GirlIcon from '../../../../assets/girlIcon.svg'
import GirlIconMobile from '../../../../assets/girlIconMobile.svg'
import useStyles from './styes'
import AuthHeader from '../AuthHeader'

const AuthRightSide = ({children, steper, logo, bottomDisabled, className, theme}) => {
  const classes = useStyles()
  const matches = useMediaQuery('(max-width:600px)')
  return (
    <div>
      <div className={className}>
        <AuthHeader theme={theme} logo={logo} />
        {steper}
      </div>
      {children}
      {!bottomDisabled && (<div className={classes.bottomLogo}>
        <div className={classes.register}>
          <Typography variant='body1'> נרשמת כבר בעבר<u>? להתחברות</u></Typography>
        </div>
        <img src={matches ? GirlIconMobile : GirlIcon} alt='girl' />
      </div>)}
    </div>
  )
}

export default AuthRightSide
