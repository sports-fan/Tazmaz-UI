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
import AuthLeftSide from 'pages/Auth/components/AuthLeftSide'
import GoogleIcon from 'assets/google.svg'
import TazmazLogo from 'assets/tazmazLogoLogin.svg'
import PenIcon from 'assets/penIcon.svg'
import PasswordIcon from 'assets/passwordIcon.svg'
import LoginLeftFG from 'assets/loginLogo2.svg'
import AppleIcon from 'assets/apple.svg'
import useStyles from './styles'
import AuthRightSide from 'pages/Auth/components/AuthRightSide'

const schema = yup.object({
  email: yup.string().required("מספר עוסק/ת.ז. שגוי"),
  password: yup.string().required("מספר עוסק/ת.ז. שגוי")
})

const LoginForm = () => {
  const classes = useStyles()
  const navigate = useNavigate()
  const {control, handleSubmit, formState: {errors}} = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      email: '',
      password: ''
    }
  })

  const handleEmailVerification = useCallback((data) => {
    axios({
      url: '/public/login',
      method: "POST",
      headers: {
        "accept": 'application/json',
        "content-type": 'application/json'
      },
      data: {
        email: data.email,
        password: data.password,
        loginType: "DEFAULT"
      },
    })
    .then(res => {
      console.log(res.data)
      if (res.data.success) {
        navigate("/auth/signup/2fa")
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
                <Typography variant='h5' mb={1} align='left'><b>,םיאבה םיכורב</b></Typography>
                <Typography variant='h6' align='left'>TazMaz היועצת הפיננסית לעסק שלך</Typography>
                <div className={classes.mb} ></div>
                <Typography variant='body1' mb={1} align='left'>תכרעמל הסינכ</Typography>
                <FormButton
                  endIcon={<img src={AppleIcon} alt="logo"/>}
                  text='התחברות באמצעות'
                  color="secondary"
                  variant="outlined"
                />
                <FormButton
                  endIcon={<img src={GoogleIcon} alt="logo"/>}
                  className={classes.loginWithGoogle}
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
                        placeholder='שם משתמש/אימייל'
                        icon={<img src={PenIcon} alt="pen logo"/>}
                        id="signup-email"
                        helperClass={classes.email}
                        error={errors?.email}
                        field={field}
                        form={formState}
                      />
                    }
                  />
                  <Controller 
                    name="password"
                    control={control}
                    render={({field, formState}) =>
                      <FormInput
                        name="password"
                        type="password"
                        placeholder='סיסמא'
                        className={classes.loginWithGoogle}
                        icon={<img src={PasswordIcon} alt="password logo"/>}
                        id="login-password"
                        helperClass={classes.password}
                        error={errors?.password}
                        field={field}
                        form={formState}
                      />
                    }
                  />
                  <FormButton
                    className={classes.loginWithInput}
                    type="submit"
                    text='שלב הבא'
                    color="primary"
                    variant="contained"
                  />
                </form>
                <div className={classes.forgetText}>
                  <Typography align='center' variant='caption'>
                    שכחת את הסיסמא שלך?
                  </Typography>
                </div>
              </Container>
            </Grid>
          </Grid>
        </AuthRightSide>
      </Grid>
      <Grid item md={8}>
        <AuthLeftSide className={classes.leftBGColor} titleColor={classes.titleColor} icon={LoginLeftFG} title="3-5 דקות ביום ואתם מסודרים"/>
      </Grid>
    </Grid>
  )
}

export default withTranslation()(LoginForm)
