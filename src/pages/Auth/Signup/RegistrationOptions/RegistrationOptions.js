import { useCallback, useEffect, useState, useContext } from 'react';
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

const authOptions = {
  clientId: process.env.REACT_APP_APPLE_CLIENT_ID,
  redirectURI: process.env.REACT_APP_APPLE_REDIRECT_URL,
  scope: 'email name',
  state: 'state',
  nonce: 'nonce',
  usePopup: true
}

const RegistrationOptions = ({t}) => {
  const classes = useStyles()
  const {registerPage} = useContext(AuthContext)
  const [checked, setChecked] = useState(false)
  const [error, setError] = useState('')
  const navigate = useNavigate()
  const matches = useMediaQuery('(max-width:600px)')
  const {control, handleSubmit, formState: {errors}} = useForm({
    resolver: yupResolver(schema),
    defaultValues: { email: ''}
  })
  // initialzie the client for google api
  useEffect(() => {
    const start = ()=> {
      gapi.client.init({
        clientId: process.env.REACT_PUBLIC_GOOGLE_CLIENT_ID,
        scope: 'email',
      });
    }

    gapi.load('client:auth2', start);
  }, []);

  const handlChekced = useCallback((e) => {
    setChecked(e.target.checked)
  },[])

  const handleTerms = useCallback(() => {
    window.open('/termsofservice','_blank').focus()
  }, [])

  const handlePolicy = useCallback(() => {
    window.open('/termsofservice','_blank').focus()
  }, [])

  const setMessage = useCallback(() => {
    setError('Please read our terms & policy')
  }, [])

  // handler for verifying email
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
          setError(res.data.message)
        }
      })
      .catch(err => {
        console.log(err)
        setError(err.response.data.message || err.response.data)
      })
    } else {
      setError('Please read our terms & policy')
    }
  }, [navigate, checked])

  // handler for google login
  const handleGoogleLogin = useCallback((res) => {
    sessionStorage.setItem('verifiedEmail', res.profileObj.email);
    sessionStorage.setItem('registerType', "GOOGLE")
    sessionStorage.setItem('providerAccessToken', res.tokenId)
    navigate("/auth/signup/2")
}, [navigate])

  const handleFailure = useCallback((res) => {
    console.log('Google login Failed!', res)
  }, [])

  // handler for apple login
  const handleAppleLogin = useCallback((res) => {
    const email  = res.consent.user.accountName
    sessionStorage.setItem('verifiedEmail', email);
    sessionStorage.setItem('registerType', "APPLE")
    sessionStorage.setItem('providerAccessToken', res.authorization.id_token)
    navigate("/auth/signup/2")
  }, [navigate])

  return (
    <Grid container>
      <Grid item md={4} sm={12} xs={12}>
        <AuthRightSide backURL='/auth/login' theme="dark" logo={matches ? TazmazLogoMobile:TazmazLogo}>
          <Grid container justifyContent='center' className={classes.loginForm}>
            <Grid item lg={8} sm={12}>
              <Container>
                <Typography variant='h5' mb={1.9} align='left'><b>{t('login.miyabaMichorev')}</b></Typography>
                <Typography variant='h6' align='left'>{t('login.description')}</Typography>
                <div className={classes.mb55} ></div>
                <AppleSignin // Customized apple login button
                  authOptions={authOptions}
                  onSuccess={handleAppleLogin}
                  onError={(error)=> console.error(error)}
                  render={(renderProps) => (
                    <Button
                      onClick={checked ? renderProps.onClick : setMessage}
                      endIcon={<img src={AppleIcon} alt="logo"/>}
                      color="secondary"
                      variant="outlined"
                    >{t('common.loginUsing')}</Button>
                  )}
                />
                <GoogleLogin // Customized google login button
                  clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
                  className={classes.loginWithGoogle}
                  onSuccess={handleGoogleLogin}
                  onFailure={handleFailure}
                  cookiePolicy={'single_host_origin'}
                  render={(renderProps) => (
                    <Button
                      onClick={checked ? renderProps.onClick : setMessage}
                      className={classes.loginWithGoogle}
                      endIcon={<img src={GoogleIcon} alt="logo"/>}
                      color="secondary"
                      variant="outlined"
                    >{t('common.loginUsing')}</Button>
                  )}
                />
                <Divider className={classes.divider} color='secondary'>או</Divider>
                <form onSubmit={handleSubmit(handleEmailVerification)}>
                  <Controller 
                    name="email" // email field on stage 1
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
                    <FormButton // login button for submitting form data
                      endIcon={<img src={LeftArrow} alt="logo"/>}
                      type="submit"
                      error={error}
                      text={t('registrationOption.button')}
                      color="primary"
                      variant="contained"
                    />
                  </div>
                  {/* Terms and policy */}
                  <div className={classes.termAndPolicy}>
                    <div className={classes.forgotText}>
                      <Typography variant='body2'>
                        {t('registrationOption.confirm')}
                      </Typography>
                      <div className={classes.underlined}>
                        <Typography variant='body2'>
                          <u className={classes.u} onClick={handleTerms}>
                            {t('registrationOption.terms')}  
                          </u>
                          <u className={classes.u} onClick={handlePolicy}>
                            {t('registrationOption.policy')}  
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
                {/* Navigate to login page */}
                <div className={classes.redirectToLogin}>
                  <Typography variant='body1'>
                    {t('registrationOption.registered')}
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
    </Grid>
  )
}

export default withTranslation()(RegistrationOptions)
