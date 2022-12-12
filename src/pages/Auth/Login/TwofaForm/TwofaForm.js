import { useCallback, useContext, useState, useEffect } from 'react';
import { Typography, Grid } from '@mui/material'
import { withTranslation } from 'react-i18next';
import { useForm, Controller } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';
import axios from "axios";

import Notification from 'components/Notification';
import FormButton from 'components/FormButton'
import Container from 'pages/Auth/components/Container'
import AuthLeftSide from 'pages/Auth/components/AuthLeftSide'
import TazmazLogo from 'assets/tazmazLogoLogin.svg'
import useStyles from './styles'
import AuthRightSide from 'pages/Auth/components/AuthRightSide'
import Passcode from 'components/Passcode';
import { AuthContext } from 'contexts/AuthContext';

const schema = yup.object({
  passcode: yup.string()
    .min(6, 'Must be exactly 6 digits')
    .max(6, 'Must be exactly 6 digits')
    .required('Required')
})

const TwofaForm = ({t}) => {
  const classes = useStyles()
  const {control, handleSubmit, formState: {errors}} = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      passcode: ''
    }
  })
  const navigate = useNavigate()
  const { loginPage } = useContext(AuthContext)
  const [alertInfo, setAlertInfo] = useState({
    status: '',
    message: ''
  })
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (sessionStorage.getItem("twofaId")=== null) {
      navigate('/auth/login')
    }
  }, [navigate])

  const handleResend = useCallback((e) => {
    e.preventDefault()
    axios({
      url: '/api/auth/resend-twofa',
      method: "POST",
      headers: {
        "accept": 'application/json',
        "content-type": 'application/json'
      },
      data: {
        twofaId: sessionStorage.getItem('twofaId'),
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
        message: err.response.data 
      })
    })
  }, [])

  const handleTwofa = useCallback((data) => {
    console.log(data.passcode)
    axios({
      url: '/api/auth/twofa',
      method: "POST",
      headers: {
        "accept": 'application/json',
        "content-type": 'application/json'
      },
      data: {
        twofaId: sessionStorage.getItem('twofaId'),
        code: data.passcode
      },
    })
    .then(res => {
      console.log(res.data)
      if (res.data.success) {
        sessionStorage.setItem('access_token', res.data.access_token)
        sessionStorage.setItem('refresh_token', res.data.access_token)
        sessionStorage.removeItem('twofaId')
        navigate('/')
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
        message: err.response.data 
      })
    })
  }, [navigate])

  const handleBack = useCallback(() => {
    navigate('/auth/login')
  }, [navigate])

  return (
    <Grid container>
      <Grid item md={4} sm={12} xs={12}>
        <AuthRightSide theme="dark" login={true} logo={TazmazLogo}>
          <Grid container justifyContent='center' className={classes.main}>
            <Grid item lg={8.5} sm={12}>
              <Container>
                <Typography variant='h3' mb={2} align='left'><b>{t('login.miyabaMichorev')}</b></Typography>
                <Typography variant='h6' align='left'>{t('login.description')}</Typography>
                <div className={classes.mb} ></div>
                <Typography variant='body1' align='left'>
                  {t('2fa.description')}
                </Typography>
              </Container>
              <form onSubmit={handleSubmit(handleTwofa)}>
                <Controller
                  name="passcode"
                  control={control}
                  render={({field, formState}) =>
                    <Passcode
                      className={classes.passcode}
                      name="passcode"
                      error={errors?.passcode}
                      field={field}
                      form={formState}
                    />
                  }
                />
                <Grid container  justifyContent='center' columnSpacing={{lg: 1.5, sm: 8, md: 10, xs: 8}} className={classes.actions}>
                  <Grid item lg={3} xl={2} md={2} sm={1} xs={2}>
                    <FormButton
                      text={t('2fa.button1')}
                      variant="contained"
                      color="black"
                      onClick={handleBack}
                    />
                  </Grid>
                  <Grid item lg={9} md={8} sm={5} xs={8}>
                    <FormButton
                      type="submit"
                      error={alertInfo.message}
                      text={t('2fa.button2')}
                      variant="contained"
                      color="primary"
                    />
                  </Grid>
                </Grid>
              </form>
              <div className={classes.text}>
                <Typography variant='subtitle2'>
                  {t('2fa.message')}
                  <Link to='/' className={classes.resend} onClick={handleResend}>
                    <b>{t('2fa.boldMessage')}</b>
                  </Link>
                </Typography>
              </div>
            </Grid>
          </Grid>
        </AuthRightSide>
      </Grid>
      <Grid item md={8}>
        <AuthLeftSide bgColor={loginPage.background} titleColor={classes.titleColor} icon={loginPage.image} title={loginPage.title}/>
      </Grid>
      <Notification
        open={open}
        variant={alertInfo.status}
        message={alertInfo.message}
        onClose={() => setOpen(false)}
      />
    </Grid>
  )
}

export default withTranslation()(TwofaForm)
