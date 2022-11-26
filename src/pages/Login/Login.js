import { Typography, Grid, Divider } from '@mui/material'

import FormButton from '../../components/FormButton'
import useStyles from './styles'
import LoginIcon from '../../assets/loginLogo.svg'
import IosArrow from '../../assets/iosArrow.svg'
import AppleIcon from '../../assets/apple.svg'
import GoogleIcon from '../../assets/google.svg'
import LeftArrow from '../../assets/leftArrow.svg'
import GirlIcon from '../../assets/girlIcon.svg'
import FormInput from '../../components/FormInput'
import FormCheckbox from '../../components/FormCheckbox'
import LoginHeader from '../../components/LoginHeader'
import Container from '../../components/Container'

const Login = () => {
  const classes = useStyles()
  return (
    <div className={classes.main}>
      <Grid container>
        <Grid item md={7.5} className={classes.leftSide}>
          <div className={classes.leftSide}>
            <div className={classes.titleDiv}>
              <Typography variant='h5' className={classes.title}>3-5 דקות ביום ואתם מסודרים</Typography>
            </div>
            <div className={classes.imageDiv}>
              <img className={classes.image} src={LoginIcon} alt='logo' />
            </div>
          </div>
        </Grid>
        <Grid item md={4.5} sm={12} sx={12}>
          <div className={classes.backToHome}>
            <img src={IosArrow} alt='logo'/>
            <div>
              <Typography variant='body1' ml={1}>חזרה לדף הבית</Typography>
            </div>
          </div>
          <LoginHeader />
          <Grid container justifyContent='center' className={classes.loginForm}>
            <Grid item lg={8} sm={12}>
              <Container>
                <Typography variant='h5' align='left'><b>הרשמה למערכת </b></Typography>
                <Typography variant='h6' align='left'>TazMaz היועצת הפיננסית לעסק שלך</Typography>
                <div className={classes.mb6} ></div>
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
                <div className={classes.forgotPassword}>
                  <div className={classes.forgotText}>
                    <Typography variant='body2'>
                      השירות ומדיניות הפרטיות   
                    </Typography>
                    <Typography variant='body2'>
                      בהרשמה אני מאשר/ת שאני מקבל/ת 
                    </Typography>
                  </div>
                  <FormCheckbox />
                </div>
                <div className={classes.bottomLogo}>
                  <div className={classes.register}>
                    <Typography variant='body2'> נרשמת כבר בעבר<u>? להתחברות</u></Typography>
                  </div>
                  <img src={GirlIcon} alt='girl' />
                </div>
              </Container>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  )
}

export default Login
