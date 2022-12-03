import useMediaQuery from '@mui/material/useMediaQuery'

import GirlIcon from '../../../../assets/girlIcon.svg'
import GirlIconMobile from '../../../../assets/girlIconMobile.svg'
import useStyles from './styes'
import AuthHeader from '../AuthHeader'

const AuthRightSide = ({children, backURL, steper, logo, bottomDisabled, className, theme}) => {
  const classes = useStyles()
  const matches = useMediaQuery('(max-width:600px)')
  return (
    <div className={classes.main}>
      <div className={className}>
        <AuthHeader backURL={backURL} theme={theme} logo={logo} />
        {steper}
      </div>
      {children}
      {!bottomDisabled && (<div className={classes.bottomLogo}>
        <img src={matches ? GirlIconMobile : GirlIcon} alt='girl' />
      </div>)}
    </div>
  )
}

export default AuthRightSide
