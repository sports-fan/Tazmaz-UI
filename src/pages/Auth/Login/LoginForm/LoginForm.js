import { useCallback, useState } from 'react';
import { Typography, Grid, Divider, Button } from '@mui/material'
import { withTranslation } from 'react-i18next';
import { useNavigate } from "react-router-dom";
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import axios from "axios";

import Notification from 'components/Notification';
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
  email: yup.string().email("Invalid email format").required("מספר עוסק/ת.ז. שגוי"),
  password: yup.string()
    .min(8, '8 characters minimum.')
    .matches(/^[A-Za-z0-9]\w{7,20}$/, ' A-Z, a-z, 0-9, 20 characters maximum')
    .required("מספר עוסק/ת.ז. שגוי")
})

const LoginForm = (props) => {
  const classes = useStyles()
  const navigate = useNavigate()
  const {control, watch, handleSubmit, formState: {errors}} = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      email: '',
      password: ''
    }
  })
  const {t} = props
  console.log({props})
  const [loginRes, setLoginRes] = useState({})
  const [open, setOpen] = useState(false)
  
  const handleForgetPassword = useCallback(() => {
    const email  = watch('email')
    axios({
      url: '/public/forgot-password',
      method: "POST",
      headers: {
        "accept": 'application/json',
        "content-type": 'application/json'
      },
      data: {
        email: email
      },
    })
    .then(res => {
      console.log(res.data)
    })
    .catch(err => {console.log(err)})
  }, [watch])

  const handleLogin = useCallback((data) => {
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
      if (res.data.success) {
        localStorage.setItem('twofaId', res.data.data.twofaId);
        navigate("/auth/login/2fa")
      }
    })
    .catch(err => {
      console.log(err)
      setOpen(true)
      setLoginRes(err.response.data)
    })
  }, [navigate])

  return (
    <Grid container>
      <Grid item md={4} sm={12} xs={12}>
        <AuthRightSide theme="dark" logo={TazmazLogo}>
          <Grid container justifyContent='center' className={classes.loginForm}>
            <Grid item lg={8} sm={12}>
              <Container>
                <Typography variant='h5' mb={1} align='left'><b>{t('login.miyabaMichorev')}</b></Typography>
                <Typography variant='h6' align='left'>{t('login.description')}</Typography>
                <div className={classes.mb} ></div>
                <Typography variant='body1' mb={1} align='left'>{t('login.caramelizeTheSync')}</Typography>
                <FormButton
                  endIcon={<img src={AppleIcon} alt="logo"/>}
                  text={t('common.loginUsing')}
                  color="secondary"
                  variant="outlined"
                />
                <FormButton
                  endIcon={<img src={GoogleIcon} alt="logo"/>}
                  className={classes.loginWithGoogle}
                  text={t('common.loginUsing')}
                  color="secondary"
                  variant="outlined"
                />
                <Divider className={classes.divider} color='secondary'>או</Divider>
                <form onSubmit={handleSubmit(handleLogin)}>
                  <Controller 
                    name="email"
                    control={control}
                    render={({field, formState}) =>
                      <FormInput
                        name="email"
                        type="email"
                        placeholder={t('login.email')}
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
                        placeholder={t('login.password')}
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
                    type="submit"
                    text={t('login.manageTheBusiness')}
                    color="primary"
                    variant="contained"
                  />
                </form>
                <div className={classes.forgetText}>
                  <Button onClick={handleForgetPassword}>
                    {t('login.forgetYourPassword')}
                  </Button>
                </div>
                <div className={classes.register}>
                  <Typography variant='body1'>{t('login.notRegistered')}</Typography>
                  <a className={classes.u} href="signup/1">{t('login.forQuickRegistration')}</a>
                </div>
              </Container>
            </Grid>
          </Grid>
        </AuthRightSide>
      </Grid>
      <Grid item md={8}>
        <AuthLeftSide className={classes.leftBGColor} titleColor={classes.titleColor} icon={LoginLeftFG} title={t('common.leftSideDescription')}/>
      </Grid>
      <Notification
        open={open}
        message={loginRes?.message || ''}
        onClose={() => setOpen(false)}
      />
    </Grid>
  )
}

export default withTranslation()(LoginForm)
