import { Typography } from '@mui/material'

import useStyles from './styles'
import IosArrow from '../../../../assets/iosArrow.svg'

const SelectSubscriptionLayout = ({children}) => {
  const classes = useStyles()
  return (
    <div className={classes.main}>
      <div className={classes.back}>
        <Typography variant='body1' mr={1}>חזרה לדף הבית</Typography>
        <img src={IosArrow} alt='logo'/>
      </div>
      {children}
    </div>   
  )
}

export default SelectSubscriptionLayout
