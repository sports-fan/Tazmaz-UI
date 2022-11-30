import { useCallback } from 'react';
import { Typography, Grid, Divider } from '@mui/material'
import { withTranslation } from 'react-i18next';
import { useNavigate } from "react-router-dom";
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import axios from "axios";

import FormButton from 'components/FormButton'
import Container from 'pages/Auth/components/Container'
import FormInput from 'components/FormInput'
import FormCheckbox from 'components/FormCheckbox'
import AuthLeftSide from 'pages/Auth/components/AuthLeftSide'

import TazmazLogo from 'assets/tazmazLogo.svg'
import SignupLeftFG from 'assets/loginLogo.svg'
import AppleIcon from 'assets/apple.svg'
import GoogleIcon from 'assets/google.svg'
import LeftArrow from 'assets/leftArrow.svg'
import useStyles from './styles'
import AuthRightSide from 'pages/Auth/components/AuthRightSide'

const schema = yup.object({
  email: yup.string().required("מספר עוסק/ת.ז. שגוי")
})

const RegistrationOptions = () => {
  const classes = useStyles()
  const navigate = useNavigate()
  const {control, handleSubmit, formState: {errors}} = useForm({
    resolver: yupResolver(schema),
    defaultValues: { email: ''}
  })

  const handleEmailVerification = useCallback((data) => {
    axios({
      url: '/public/validate-email',
      method: "POST",
      headers: {
        "accept": 'application/json',
        "content-type": 'application/json'
      },
      data: {email: data.email},
    })
    .then(res => {
      if (res.data.success) {
        navigate("/auth/signup/2")
        localStorage.setItem('verifiedEmail', data.email);
      }
    })
    .catch(err => {console.log(err)})
  }, [navigate])

  return (
    <Grid container>
      <Grid item md={4} sm={12} xs={12}>
        <AuthRightSide theme="dark" logo={TazmazLogo}>
          <Grid container justifyContent='center' className={classes.loginForm}>
            <Grid item lg={8} sm={12}>
              <Container>
                <Typography variant='h5' mb={1.5} align='left'><b>הרשמה למערכת </b></Typography>
                <Typography variant='h6' align='left'>TazMaz היועצת הפיננסית לעסק שלך</Typography>
                <div className={classes.mb6} ></div>
                <FormButton
                  endIcon={<img src={AppleIcon} alt="logo"/>}
                  text='התחברות באמצעות'
                  color="secondary"
                  variant="outlined"
                />
                <FormButton
                  className={classes.loginWithGoogle}
                  endIcon={<img src={GoogleIcon} alt="logo"/>}
                  text='התחברות באמצעות'
                  color="secondary"
                  variant="outlined"
                />
                <Divider className={classes.divider} color='secondary'>או</Divider>
                <form onSubmit={handleSubmit(handleEmailVerification)}>
                  <Controller 
                    name="email"
                    control={control}
                    render={({field, formState}) =>
                      <FormInput
                        name="email"
                        placeholder='הזנת אימייל'
                        id="signup-email"
                        helperClass={classes.email}
                        error={errors?.email}
                        field={field}
                        form={formState}
                      />
                    }
                  />
                  <FormButton
                    className={classes.loginWithInput}
                    endIcon={<img src={LeftArrow} alt="logo"/>}
                    type="submit"
                    text='שלב הבא'
                    color="primary"
                    variant="contained"
                  />
                </form>
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
      <Grid item md={8}>
        <AuthLeftSide className={classes.leftBGColor} titleColor={classes.titleColor} icon={SignupLeftFG} title="3-5 דקות ביום ואתם מסודרים"/>
      </Grid>
    </Grid>
  )
}

export default withTranslation()(RegistrationOptions)
