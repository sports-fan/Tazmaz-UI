import { useCallback, useState } from 'react';
import { Typography, Grid, Divider } from '@mui/material'
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
  email: yup.string().email("Invalid email format").required("מספר עוסק/ת.ז. שגוי"),
})

const RegistrationOptions = ({t}) => {
  const classes = useStyles()
  const [checked, setChecked] = useState(false)
  const [open, setOpen] = useState(false)
  const navigate = useNavigate()
  const {control, handleSubmit, formState: {errors}} = useForm({
    resolver: yupResolver(schema),
    defaultValues: { email: ''}
  })

  const handlChekced = useCallback((e) => {
    setChecked(e.target.checked)
    window.open('/term&policy','_blank').focus()
  },[])

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
          localStorage.setItem('verifiedEmail', data.email);
          navigate("/auth/signup/2")
        }
      })
      .catch(err => {console.log(err)})
    } else {
      setOpen(true)
    }
  }, [navigate, checked])

  return (
    <Grid container>
      <Grid item md={4} sm={12} xs={12}>
        <AuthRightSide backURL='/auth/login' theme="dark" logo={TazmazLogo}>
          <Grid container justifyContent='center' className={classes.loginForm}>
            <Grid item lg={8} sm={12}>
              <Container>
                <Typography variant='h5' mb={1.5} align='left'><b>{t('login.miyabaMichorev')}</b></Typography>
                <Typography variant='h6' align='left'>{t('login.description')}</Typography>
                <div className={classes.mb6} ></div>
                <FormButton
                  endIcon={<img src={AppleIcon} alt="logo"/>}
                  text={t('common.loginUsing')}
                  color="secondary"
                  variant="outlined"
                />
                <FormButton
                  className={classes.loginWithGoogle}
                  endIcon={<img src={GoogleIcon} alt="logo"/>}
                  text={t('common.loginUsing')}
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
                        type="email"
                        placeholder={t('registrationOption.email')}
                        id="signup-email"
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
                    text={t('registrationOption.button')}
                    color="primary"
                    variant="contained"
                  />
                  <div className={classes.forgotPassword}>
                    <div className={classes.forgotText}>
                      <Typography variant='body2'>
                        {t('registrationOption.confirm')}
                      </Typography>
                      <Typography variant='body2'>
                        <u className={classes.u}>
                          {t('registrationOption.policy')}
                        </u>                      
                      </Typography>
                      <Typography variant='body2'>
                        <u className={classes.u}>
                          {t('registrationOption.terms')}  
                        </u>                      
                      </Typography>
                    </div>
                    <FormCheckbox
                      value={checked}
                      onClick={handlChekced}
                    />
                  </div>
                </form>
                <div className={classes.register}>
                  <Typography variant='body1'>{t('registrationOption.registered')}<u  className={classes.u}>{t('registrationOption.connect')}</u></Typography>
                </div>
              </Container>
            </Grid>
          </Grid>
        </AuthRightSide>
      </Grid>
      <Grid item md={8}>
        <AuthLeftSide className={classes.leftBGColor} titleColor={classes.titleColor} icon={SignupLeftFG} title={t('common.leftSideDescription')}/>
      </Grid>
      <Notification
        open={open}
        message='You should check the Terms & Policy first'
        onClose={() => setOpen(false)}
      />
    </Grid>
  )
}

export default withTranslation()(RegistrationOptions)
