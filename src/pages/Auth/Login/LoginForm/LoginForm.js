import { useCallback, useState, useEffect, useMemo, useContext } from 'react';
import { Typography, Grid, Divider, Button } from '@mui/material'
import { withTranslation } from 'react-i18next';
import { Link, useNavigate } from "react-router-dom";
import { useForm, Controller } from 'react-hook-form';
import GoogleLogin from 'react-google-login';
import { gapi } from 'gapi-script';
import AppleSignin from 'react-apple-signin-auth';
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
import AppleIcon from 'assets/apple.svg'
import useStyles from './styles'
import AuthRightSide from 'pages/Auth/components/AuthRightSide'
import { AuthContext } from 'contexts/AuthContext';

const schema = yup.object({
  email: yup.string().email("Invalid email format").required("מספר עוסק/ת.ז. שגוי"),
  password: yup.string().required("מספר עוסק/ת.ז. שגוי")
    // .min(2, '8 characters minimum')
    // .matches(/^[A-Za-z0-9]\w{7,20}$/, ' A-Z, a-z, 0-9, 20 characters maximum')
})

const LoginForm = ({t}) => {
  const classes = useStyles()
  const navigate = useNavigate()
  const { loginPage } = useContext(AuthContext)
  const {control, watch, handleSubmit, formState: {errors}} = useForm({
    resolver: yupResolver(schema),
    mode: 'onBlur',
    defaultValues: {
      email: '',
      password: ''
    }
  })
  const [alertInfo, setAlertInfo] = useState({
    status: '',
    message: ''
  })
  const [open, setOpen] = useState(false)

  const authOptions = useMemo(() => ({
    clientId: process.env.REACT_APP_APPLE_CLIENT_ID,
    redirectURI: process.env.REACT_APP_APPLE_REDIRECT_URL,
    scope: 'email name',
    state: 'state',
    nonce: 'nonce',
    usePopup: true
  }), [])

  useEffect(() => {
    const start = ()=> {
      gapi.client.init({
        clientId: process.env.REACT_PUBLIC_GOOGLE_CLIENT_ID,
        scope: 'email',
      });
    }

    gapi.load('client:auth2', start);
  }, []);

  const handleForgetPassword = useCallback((e) => {
    e.preventDefault()
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
      setOpen(true)
      setAlertInfo({
        status: 'success',
        message: res.data.message
      })
    })
    .catch(err => {
      console.log(err)
      setOpen(true)
      setAlertInfo({
        status: 'error',
        message: err.response.data.message || err.response.data
      })
    })
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
        sessionStorage.setItem('twofaId', res.data.data.twofaId);
        navigate("/auth/login/2fa")
      } else {
        setOpen(true)
        setAlertInfo({
          status: 'warning',
          message: res.data.message
        })
      }
    })
    .catch(err => {
      console.log(err)
      setOpen(true)
      setAlertInfo({
        status: 'error',
        message: err.response.data.message || err.response.data
      })
    })
  }, [navigate])

  const handleGoogleLogin = useCallback((res) => {
    console.log('successfully logedin with Google' , res, '========')
    const tokenId = res.tokenId
    const email = res.profileObj.email
    axios({
      url: '/public/login',
      method: "POST",
      headers: {
        "accept": 'application/json',
        "content-type": 'application/json'
      },
      data: {
        email,
        providerAccessToken: tokenId,
        loginType: "GOOGLE"
      },
    })
    .then(res => {
      if (res.data.success) {
        // sessionStorage.setItem('twofaId', res.data.data.twofaId);
        navigate("/auth/login/2fa")
      } else {
        setOpen(true)
        setAlertInfo({
          status: 'warning',
          message: res.data.message
        })
      }
    })
    .catch(err => {
      console.log(err)
      setOpen(true)
      setAlertInfo({
        status: 'error',
        message: err.response.data.message || err.response.data
      })
    })
  }, [navigate])

  const handleFailure = useCallback((res) => {
    console.log('Google login Failed!', res)
    setOpen(true)
      setAlertInfo({
        status: 'error',
        message: res.response.data
      })
  }, [])

  const handleAppleLogin = useCallback((res) => {
    console.log('successfully loged in Apple', res, '******')
    navigate("/auth/signup/2")
  }, [navigate])

  return (
    <Grid container>
      <Grid item md={4} sm={12} xs={12}>
        <AuthRightSide theme="dark" logo={TazmazLogo} login={true}>
          <Grid container justifyContent='center' className={classes.loginForm}>
            <Grid item lg={8} sm={12}>
              <Container>
                <Typography variant='h3' mb={2} align='left'><b>{t('login.miyabaMichorev')}</b></Typography>
                <Typography variant='h6' align='left'>{t('login.description')}</Typography>
                <div className={classes.mb} ></div>
                <Typography variant='body1' className={classes.caramelize} mb={1.25} align='left'>{t('login.caramelizeTheSync')}</Typography>
                <AppleSignin
                  authOptions={authOptions}
                  onSuccess={handleAppleLogin}
                  onError={(error)=> console.error(error)}
                  render={(renderProps) => (
                    <Button
                      onClick={renderProps.onClick}
                      endIcon={<img src={AppleIcon} alt="logo"/>}
                      color="secondary"
                      variant="outlined"
                    >
                      {t('common.loginUsing')}
                    </Button>
                  )}
                />
                <GoogleLogin
                  clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
                  className={classes.loginWithGoogle}
                  onSuccess={handleGoogleLogin}
                  onFailure={handleFailure}
                  cookiePolicy={'single_host_origin'}
                  render={(renderProps) => (
                    <Button
                      onClick={renderProps.onClick}
                      className={classes.loginWithGoogle}
                      endIcon={<img src={GoogleIcon} alt="logo"/>}
                      color="secondary"
                      variant="outlined"
                    >
                      {t('common.loginUsing')}
                    </Button>
                  )}
                />
                <Divider className={classes.divider} color='secondary'>או</Divider>
                <form onSubmit={handleSubmit(handleLogin)}>
                  <Controller 
                    name="email"
                    control={control}
                    render={({field, formState}) =>
                      <FormInput
                        name="email"
                        placeholder={t('login.email')}
                        icon={<img src={PenIcon} alt="pen logo"/>}
                        id="signup-email"
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
                  <div className={classes.submitButton}>
                    <FormButton
                      type="submit"
                      text={t('login.manageTheBusiness')}
                      color="primary"
                      variant="contained"
                    />
                  </div>
                </form>
                <div className={classes.forgetText}>
                  <Typography>
                    <Link to='/' className={classes.forgetTag} onClick={handleForgetPassword}>
                      {t('login.forgetYourPassword')}
                    </Link>
                  </Typography>
                </div>
                <div className={classes.register}>
                  <Typography variant='body1' mr={1}>{t('login.notRegistered')}</Typography>
                  <Link className={classes.u} to="/auth/signup/1">{t('login.forQuickRegistration')}</Link>
                </div>
              </Container>
            </Grid>
          </Grid>
        </AuthRightSide>
      </Grid>
      <Grid item md={8}>
        <AuthLeftSide bgColor={loginPage.background} titleColor={classes.titleColor} icon={loginPage.image} title={loginPage.title}/>
      </Grid>
      <Notification
        open={open}
        message={alertInfo.message}
        variant={alertInfo.status}
        onClose={() => setOpen(false)}
      />
    </Grid>
  )
}

export default withTranslation()(LoginForm)
