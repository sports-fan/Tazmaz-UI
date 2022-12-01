import useMediaQuery from '@mui/material/useMediaQuery';

import useStyles from './styles'
import IosArrow from '../../../../assets/iosArrow.svg'
import IosArrowWhilte from '../../../../assets/iosArrowWhite.svg'

const SelectSubscriptionLayout = ({children}) => {
  const classes = useStyles()
  const matches = useMediaQuery('(max-width:600px)')
  return (
    <div className={classes.main}>
      <div className={classes.back}>
        <a href='/auth/signup/1' className={classes.text}>חזרה לדף הבית</a>
        <img src={matches ? IosArrowWhilte : IosArrow} alt='logo'/>
      </div>
      {children}
    </div>   
  )
}

export default SelectSubscriptionLayout
