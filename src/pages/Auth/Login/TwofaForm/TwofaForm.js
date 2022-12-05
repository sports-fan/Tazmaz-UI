import { useCallback, useContext, useState } from 'react';
import { Typography, Grid } from '@mui/material'
import { withTranslation } from 'react-i18next';
import { useForm, Controller } from 'react-hook-form';
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

const TwofaForm = ({t}) => {
  const classes = useStyles()
  const {control, handleSubmit, formState: {errors}} = useForm({})
  const { loginPage } = useContext(AuthContext)
  const [errRes, setErrRes] = useState({})
  const [open, setOpen] = useState(false)

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
        twofaId: localStorage.getItem('twofaId'),
      },
    })
    .then(res => {
      console.log(res.data)
      localStorage.setItem('token', res.data.access_token)
    })
    .catch(err => {
      console.log(err)
      setOpen(true)
      setErrRes(err.response.data)
    })
  }, [])

  const handleTwofa = useCallback((data) => {
    axios({
      url: '/api/auth/twofa',
      method: "POST",
      headers: {
        "accept": 'application/json',
        "content-type": 'application/json'
      },
      data: {
        twofaId: localStorage.getItem('twofaId'),
        code: "123456"
      },
    })
    .then(res => {
      console.log(res.data)
      localStorage.setItem('token', res.data.access_token)
    })
    .catch(err => {
      console.log(err)
      setOpen(true)
      setErrRes(err.response.data)
    })
  }, [])

  return (
    <Grid container>
      <Grid item md={4} sm={12} xs={12}>
        <AuthRightSide theme="dark" logo={TazmazLogo}>
          <Grid container justifyContent='center' className={classes.main}>
            <Grid item lg={8.5} sm={12}>
              <Container>
                <Typography variant='h5' mb={2} align='left'><b>{t('login.miyabaMichorev')}</b></Typography>
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
                    />
                  </Grid>
                  <Grid item lg={9} md={8} sm={5} xs={8}>
                    <FormButton
                      type="submit"
                      text={t('2fa.button2')}
                      variant="contained"
                      color="primary"
                    />
                  </Grid>
                </Grid>
              </form>
              <div className={classes.text}>
                <Typography variant='caption'>
                  <a href='/' className={classes.resend} onClick={handleResend}>
                    {t('2fa.message')}
                  </a>
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
        message={errRes?.message || ''}
        onClose={() => setOpen(false)}
      />
    </Grid>
  )
}

export default withTranslation()(TwofaForm)
