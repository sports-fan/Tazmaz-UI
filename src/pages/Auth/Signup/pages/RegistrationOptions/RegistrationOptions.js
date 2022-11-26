import { Typography, Grid, Divider } from '@mui/material'

import FormButton from '../../../../../components/FormButton'
import Container from '../../../components/Container'
import FormInput from '../../../../../components/FormInput'
import FormCheckbox from '../../../../../components/FormCheckbox'
import AuthLeftSide from '../../../components/AuthLeftSide'

import SignupLeftFG from '../../../../../assets/loginLogo.svg'
import AppleIcon from '../../../../../assets/apple.svg'
import GoogleIcon from '../../../../../assets/google.svg'
import LeftArrow from '../../../../../assets/leftArrow.svg'
import useStyles from './styles'
import AuthRightSide from '../../../components/AuthRightSide'

const RegistrationOptions = () => {
  const classes = useStyles()
  return (
    <Grid container>
      <Grid item md={4.5} sm={12} sx={12}>
        <AuthRightSide>
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
                      בהרשמה אני מאשר/ת שאני מקבל/ת 
                    </Typography>
                    <Typography variant='body2'>
                      השירות ומדיניות הפרטיות   
                    </Typography>
                  </div>
                  <FormCheckbox />
                </div>
              </Container>
            </Grid>
          </Grid>
        </AuthRightSide>
      </Grid>
      <Grid item md={7.5}>
        <AuthLeftSide icon={SignupLeftFG} title="3-5 דקות ביום ואתם מסודרים"/>
      </Grid>
    </Grid>
  )
}

export default RegistrationOptions
