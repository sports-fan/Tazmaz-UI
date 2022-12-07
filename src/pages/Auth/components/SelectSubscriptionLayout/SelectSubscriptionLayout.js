import useMediaQuery from '@mui/material/useMediaQuery';
import { useTranslation } from 'react-i18next';

import useStyles from './styles'
import IosArrow from '../../../../assets/iosArrow.svg'
import IosArrowWhilte from '../../../../assets/iosArrowWhite.svg'
import { Link } from 'react-router-dom';

const SelectSubscriptionLayout = ({children}) => {
  const classes = useStyles()
  const { t } = useTranslation()
  const matches = useMediaQuery('(max-width:600px)')
  return (
    <div className={classes.main}>
      <div className={classes.back}>
        <Link to='/auth/signup/1' className={classes.text}>{t('common.backToHome')}</Link>
        <img src={matches ? IosArrowWhilte : IosArrow} alt='logo'/>
      </div>
      {children}
    </div>   
  )
}

export default SelectSubscriptionLayout
