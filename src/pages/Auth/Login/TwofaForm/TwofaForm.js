import { useCallback } from 'react';
import { Typography, Grid } from '@mui/material'
import { withTranslation } from 'react-i18next';
import { useForm, Controller } from 'react-hook-form';
import axios from "axios";

import FormButton from 'components/FormButton'
import Container from 'pages/Auth/components/Container'
import FormInput from 'components/FormInput'
import AuthLeftSide from 'pages/Auth/components/AuthLeftSide'
import TazmazLogo from 'assets/tazmazLogoLogin.svg'
import LoginLeftFG from 'assets/loginLogo2.svg'
import useStyles from './styles'
import AuthRightSide from 'pages/Auth/components/AuthRightSide'

const TwofaForm = () => {
  const classes = useStyles()
  const {control, handleSubmit, formState: {errors}} = useForm({})

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
    })
    .catch(err => {console.log(err)})
  }, [])

  return (
    <Grid container>
      <Grid item md={4} sm={12} xs={12}>
        <AuthRightSide theme="dark" logo={TazmazLogo}>
          <Grid container justifyContent='center' className={classes.main}>
            <Grid item lg={10} sm={12}>
              <Container>
                <Typography variant='h5' mb={1} align='left'><b>,םיאבה םיכורב</b></Typography>
                <Typography variant='h6' align='left'>TazMaz היועצת הפיננסית לעסק שלך</Typography>
                <div className={classes.mb} ></div>
                <Typography variant='body1' align='left'>
                  ברגעים אלו ממש נשלח למכשירך קוד סודי בן 4 ספרות לצורך אימות.
                  אנא הכנס/י את הקוד להשלמת תהליך ההתחברות.
                </Typography>
              </Container>
              <form onSubmit={handleSubmit(handleTwofa)}>
                <Grid container justifyContent='center' columnSpacing={4} className={classes.codes}>
                  <Grid item lg={1.7}>
                    <Controller 
                      name="code1"
                      control={control}
                      render={({field, formState}) =>
                        <FormInput
                          name="code1"
                          id="login-code1"
                          error={errors?.email}
                          field={field}
                          form={formState}
                        />
                      }
                    />
                  </Grid>
                  <Grid item lg={1.7}>
                    <Controller 
                      name="code2"
                      control={control}
                      render={({field, formState}) =>
                        <FormInput
                          name="code2"
                          id="login-code2"
                          error={errors?.email}
                          field={field}
                          form={formState}
                        />
                      }
                    />
                  </Grid>
                  <Grid item lg={1.7}>
                    <Controller 
                      name="code3"
                      control={control}
                      render={({field, formState}) =>
                        <FormInput
                          name="code3"
                          id="login-code3"
                          error={errors?.email}
                          field={field}
                          form={formState}
                        />
                      }
                    />
                  </Grid>
                  <Grid item lg={1.7}>
                    <Controller 
                      name="code4"
                      control={control}
                      render={({field, formState}) =>
                        <FormInput
                          name="code4"
                          id="login-code4"
                          error={errors?.email}
                          field={field}
                          form={formState}
                        />
                      }
                    />
                  </Grid>
                  <Grid item lg={1.7}>
                    <Controller 
                      name="code5"
                      control={control}
                      render={({field, formState}) =>
                        <FormInput
                          name="code5"
                          id="login-code5"
                          error={errors?.email}
                          field={field}
                          form={formState}
                        />
                      }
                    />
                  </Grid>
                  <Grid item lg={1.7} sm={12}>
                    <Controller 
                      name="code6"
                      control={control}
                      render={({field, formState}) =>
                        <FormInput
                          name="code6"
                          id="login-code6"
                          error={errors?.email}
                          field={field}
                          form={formState}
                        />
                      }
                    />
                  </Grid>
                </Grid>
                <Grid container  justifyContent='center' columnSpacing={1.5} className={classes.actions}>
                  <Grid item lg={2}>
                    <FormButton
                      text="חזור"
                      variant="contained"
                      color="black"
                    />
                  </Grid>
                  <Grid item lg={8}>
                    <FormButton
                      text="אישור והתחברות"
                      variant="contained"
                      color="primary"
                    />
                  </Grid>
                </Grid>
              </form>
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

export default withTranslation()(TwofaForm)
