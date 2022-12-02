import { useTranslation } from 'react-i18next';
import IosArrow from '../../../../assets/iosArrow.svg'
import IosArrowWhilte from '../../../../assets/iosArrowWhite.svg'
import useStyles from './styles'

const AuthHeader = ({logo, theme, backURL='/auth/signup/1'}) => {
  const classes = useStyles()
  const { t } = useTranslation();
  return (
    <div className={theme==='light' ? classes.header : classes.headerDark}>
      <div className={theme==='light' ? classes.backToHome : classes.backToHomeDark}>
        <a href={backURL} className={theme==='light' ? classes.textLight : classes.textDark}>{t('common.backToHome')}</a>
        <img src={theme==='light' ? IosArrowWhilte : IosArrow} className={classes.ml} alt='logo'/>
      </div>
      <div className={theme==='light' ? classes.logo : classes.logoDark}>
        <img src={logo} alt='tazmaz logo' />
      </div>
    </div>
  )
}

export default AuthHeader
