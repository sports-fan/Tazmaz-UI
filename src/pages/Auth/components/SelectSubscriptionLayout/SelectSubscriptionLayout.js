import { Typography } from '@mui/material'
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
        <Typography variant='body1' className={classes.backLetter} mr={1}>חזרה לדף הבית</Typography>
        <img src={matches ? IosArrowWhilte : IosArrow} alt='logo'/>
      </div>
      {children}
    </div>   
  )
}

export default SelectSubscriptionLayout
