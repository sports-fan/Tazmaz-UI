import { Typography, Grid, Divider } from '@mui/material'

import FormButton from '../../components/FormButton'
import useStyles from './styles'
import LoginIcon from '../../assets/loginLogo.svg'
import IosArrow from '../../assets/iosArrow.svg'
import TazmazLogo from '../../assets/tazmazLogo.svg'
import AppleIcon from '../../assets/apple.svg'
import GoogleIcon from '../../assets/google.svg'
import LeftArrow from '../../assets/leftArrow.svg'
import GirlIcon from '../../assets/girlIcon.svg'
import FormInput from '../../components/FormInput'
import FormCheckbox from '../../components/FormCheckbox'

const Login = () => {
  const classes = useStyles()
  return (
    <div className={classes.main}>
      <Grid container>
        <Grid item xs={8}>
          <div className={classes.logo}>
            <div className={classes.titleDiv}>
              <Typography variant='h5' className={classes.title}>3-5 דקות ביום ואתם מסודרים</Typography>
            </div>
            <div className={classes.imageDiv}>
              <img className={classes.image} src={LoginIcon} alt='logo' />
            </div>
          </div>
        </Grid>
        <Grid item xs={4}>
          <div>
            <div className={classes.header}>
              <div className={classes.headerLeft}>
                <img src={IosArrow} alt='logo'/>
                <div>
                  <Typography variant='body1' ml={1}>חזרה לדף הבית</Typography>
                </div>
              </div>
              <div className={classes.headerRight}>
                <img src={TazmazLogo} alt='tazmaz logo' />
              </div>
            </div>
            <div className={classes.title2}>
              <Typography variant='h5' align='right'><b>הרשמה למערכת </b></Typography>
              <Typography variant='h6' align='right'>TazMaz היועצת הפיננסית לעסק שלך</Typography>
            </div>
            <div className={classes.loginForm}>
              <FormButton
                styles={classes.loginWithApple}
                startIcon={<img src={AppleIcon} alt="logo"/>}
                text='התחברות באמצעות'
                color="secondary"
                variant="outlined"
              />
              <FormButton
                styles={classes.loginWithGoogle}
                startIcon={<img src={GoogleIcon} alt="logo"/>}
                text='התחברות באמצעות'
                color="secondary"
                variant="outlined"
              />
              <Divider className={classes.divider} color='secondary'>או</Divider>
              <FormInput
                styles={classes.loginField}
                adorementText='הזנת אימייל'
              />
              <FormButton
                styles={classes.loginWithInput}
                startIcon={<img src={LeftArrow} alt="logo"/>}
                text='שלב הבא'
                color="primary"
                variant="contained"
              />
            </div>
            <div className={classes.formRedirect}>
              <Typography variant='body2'>
                בהרשמה אני מאשר/ת שאני מקבל/ת את תנאי השירות ומדיניות הפרטיות.
              </Typography>
              <FormCheckbox />
            </div>
            <div className={classes.formRedirect2}>
              <Typography variant='body2'> נרשמת כבר בעבר<u>? להתחברות</u></Typography>
              <img src={GirlIcon} alt='girl' />
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  )
}

export default Login
