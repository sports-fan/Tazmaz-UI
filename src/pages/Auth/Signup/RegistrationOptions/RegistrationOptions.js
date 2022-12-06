import { useCallback, useEffect, useMemo, useState, useContext } from 'react';
import { Typography, Grid, Divider, Button, useMediaQuery } from '@mui/material'
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
import FormCheckbox from 'components/FormCheckbox'
import AuthLeftSide from 'pages/Auth/components/AuthLeftSide'
import AuthRightSide from 'pages/Auth/components/AuthRightSide'
import { AuthContext } from 'contexts/AuthContext';

import TazmazLogoMobile from 'assets/tazmazLogoMobile.svg'
import TazmazLogo from 'assets/tazmazLogo.svg'
import AppleIcon from 'assets/apple.svg'
import GoogleIcon from 'assets/google.svg'
import LeftArrow from 'assets/leftArrow.svg'
import useStyles from './styles'

const schema = yup.object({
  email: yup.string().email("Invalid email format").required("שדה חובה"),
})

const RegistrationOptions = ({t}) => {
  const classes = useStyles()
  const {registerPage} = useContext(AuthContext)
  console.log(registerPage)
  const [checked, setChecked] = useState(false)
  const [open, setOpen] = useState(false)
  const [errRes, setErrRes] = useState({})
  const navigate = useNavigate()
  const matches = useMediaQuery('(max-width:600px)')
  const {control, handleSubmit, formState: {errors}} = useForm({
    resolver: yupResolver(schema),
    defaultValues: { email: ''}
  })

  const handlChekced = useCallback((e) => {
    setChecked(e.target.checked)
  },[])
  
  const authOptions = useMemo(() => ({
      clientId: process.env.REACT_APP_APPLE_CLIENT_ID,
      redirectURI: process.env.REACT_APP_APPLE_REDIRECT_URL,
      scope: 'email name',
      state: 'state',
      nonce: 'nonce',
      usePopup: true
  }), [])

  useEffect(() => {
    if (checked) {
      window.open('/term&policy','_blank').focus()
    }

    const start = ()=> {
      gapi.client.init({
        clientId: process.env.REACT_PUBLIC_GOOGLE_CLIENT_ID,
        scope: 'email',
      });
    }

    gapi.load('client:auth2', start);
  }, [checked]);

  const handleEmailVerification = useCallback((data) => {
    if (checked) {
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
        console.log(res.data)
        if (res.data.success) {
          sessionStorage.setItem('verifiedEmail', data.email);
          navigate("/auth/signup/2")
        } else {
          setOpen(true)
          setErrRes(res.data)
        }
      })
      .catch(err => {
        console.log(err)
        setOpen(true)
        setErrRes(err.response.data)
      })
    } else {
      setOpen(true)
    }
  }, [navigate, checked])

  const handleLogin = useCallback((res) => {
    console.log('successfully logedin with Google' , res, '========')
    sessionStorage.setItem('verifiedEmail', res.profileObj.email);
    navigate("/auth/signup/2")
  }, [navigate])

  const handleFailure = useCallback((res) => {
    console.log('Google login Failed!', res)
  }, [])

  const handleAppleLogin = useCallback((res) => {
    console.log('successfully loged in Apple', res, '******')
    navigate("/auth/signup/2")
  }, [navigate])

  return (
    <Grid container>
      <Grid item md={4} sm={12} xs={12}>
        <AuthRightSide backURL='/auth/login' theme="dark" logo={matches ? TazmazLogoMobile:TazmazLogo}>
          <Grid container justifyContent='center' className={classes.loginForm}>
            <Grid item lg={8} sm={12}>
              <Container>
                <Typography variant='h5' mb={1.8} align='left'><b>{t('login.miyabaMichorev')}</b></Typography>
                <Typography variant='h6' align='left'>{t('login.description')}</Typography>
                <div className={classes.mb6} ></div>
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
                    >התחברות באמצעות</Button>
                  )}
                />
                <GoogleLogin
                  clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
                  className={classes.loginWithGoogle}
                  onSuccess={handleLogin}
                  onFailure={handleFailure}
                  cookiePolicy={'single_host_origin'}
                  render={(renderProps) => (
                    <Button
                      onClick={renderProps.onClick}
                      className={classes.loginWithGoogle}
                      endIcon={<img src={GoogleIcon} alt="logo"/>}
                      text='התחברות באמצעות'
                      color="secondary"
                      variant="outlined"
                    >התחברות באמצעות</Button>
                  )}
              />
                <Divider className={classes.divider} color='secondary'>או</Divider>
                <form onSubmit={handleSubmit(handleEmailVerification)}>
                  <Controller 
                    name="email"
                    control={control}
                    render={({field, formState}) =>
                      <FormInput
                        name="email"
                        placeholder={t('registrationOption.email')}
                        id="signup-email"
                        error={errors?.email}
                        field={field}
                        form={formState}
                      />
                    }
                  />
                  <div className={classes.formButton}>
                    <FormButton
                      endIcon={<img src={LeftArrow} alt="logo"/>}
                      type="submit"
                      text={t('registrationOption.button')}
                      color="primary"
                      variant="contained"
                    />
                  </div>
                  <div className={classes.forgotPassword}>
                    <div className={classes.forgotText}>
                      <Typography variant='body2'>
                        {t('registrationOption.confirm')}
                      </Typography>
                      <div className={classes.underlined}>
                        <Typography variant='body2'>
                          <u className={classes.u}>
                            {t('registrationOption.termsAndPolicy')}  
                          </u>                      
                        </Typography>
                      </div>
                    </div>
                    <FormCheckbox
                      value={checked}
                      onClick={handlChekced}
                    />
                  </div>
                </form>
                <div className={classes.register}>
                  <Typography variant='body1'>{t('registrationOption.registered')}
                    <Link to="/auth/login" className={classes.returnTologin}>{t('registrationOption.connect')}</Link>
                  </Typography>
                </div>
              </Container>
            </Grid>
          </Grid>
        </AuthRightSide>
      </Grid>
      <Grid item md={8}>
        <AuthLeftSide bgColor={registerPage.background} titleColor={classes.titleColor} icon={registerPage.image} title={registerPage.title}/>
      </Grid>
      <Notification
        open={open}
        message={errRes?.message || 'Please read our terms & policy'}
        onClose={() => setOpen(false)}
      />
    </Grid>
  )
}

export default withTranslation()(RegistrationOptions)
