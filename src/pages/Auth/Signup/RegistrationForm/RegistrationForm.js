import { useCallback, useEffect, useState } from 'react'
import { Typography, Grid } from '@mui/material'
import { withTranslation } from 'react-i18next';
import { useForm, Controller } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import AuthLeftSide from 'pages/Auth/components/AuthLeftSide'
import Container from 'pages/Auth/components/Container'
import AuthRightSide from 'pages/Auth/components/AuthRightSide'
import SignupLeftFG from 'assets/signupLogo2.svg'
import TazmazLogo from 'assets/tazmazLogWhite.svg'
import UserIcon from 'assets/userIcon.svg'
import KeyIcon from 'assets/keyIcon.svg'
import RightArrow from 'assets/rightArrow.svg'
import LeftArrow from 'assets/leftArrowPrimary.svg'
import useStyles from './styles'
import CustomStepper from 'components/CustomStepper'
import FormInput from 'components/FormInput'
import FormSelect from 'components/FormSelect'
import FormButton from 'components/FormButton'

const schema = yup.object({
  firstName: yup.string().required("מספר עוסק/ת.ז. שגוי"),
  lastName: yup.string().required("מספר עוסק/ת.ז. שגוי"),
  email: yup.string("מספר עוסק/ת.ז. שגוי"),
  password: yup.string().required("מספר עוסק/ת.ז. שגוי"),
  phonePrefix: yup.string().required("מספר עוסק/ת.ז. שגוי"),
  phoneNumber: yup.string().required("מספר עוסק/ת.ז. שגוי"),
  role: yup.string().required("מספר עוסק/ת.ז. שגוי"),
  businessName: yup.string().required("מספר עוסק/ת.ז. שגוי"),
  area: yup.string()
}).required()
 
const RegistrationForm = () => {
  const classes = useStyles()
  const [roleOptions, setRoleOptions] = useState([])
  const navigate = useNavigate()
  const { handleSubmit, formState: {errors}, control } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: localStorage.getItem('verifiedEmail'),
      password: '',
      phonePrefix: '',
      phoneNumber: '',
      role: '',
      businessName: '',
      area: ''
    }
  })

  useEffect(() => {
    axios({
      url: '/business/roles-options',
      method: "GET",
    })
    .then(res => {
      const options = res.data.data.map(item => ({
        value: item.key,
        label: item.key
      }))
      setRoleOptions(options)
    })
    .catch(err => {console.log(err)})
  })

  const handleRegister = useCallback(data => {
    axios({
      url: '/public/register',
      method: "POST",
      data: {
        firstName : data.firstName,
        lastName: data.lastName,
        email: data.email,
        password: data.password,
        tosVersionSigned: 1.0,
        privacyPolicySigned: 1.0,
        phoneNumber:"+".concat(data.phonePrefix).concat(data.phoneNumber),
        businessId:"528325833",
        businessName: data.businessName,
        rolePosition: data.role,
        registerType: 'DEFAULT'
      },
    })
    .then(res => {
      if (res.data.success) {
        navigate("/auth/signup/3")
        localStorage.setItem("userId", res.data.data.userId)
        localStorage.removeItem('verifiedEmail')
      }
    })
    .catch(err => {console.log(err)})
  }, [navigate])

  const handleBack = useCallback(() => {
    navigate("/auth/signup/1")
    localStorage.removeItem('verifiedEmail')
  }, [navigate])

  return (
    <Grid container>
      <Grid item md={4} sm={12} xs={12}>
        <AuthRightSide
          theme="light"
          bottomDisabled={true}
          logo={TazmazLogo}
          className={classes.logoBGColor}
          steper={<CustomStepper stepNum={1}/>}
        >
          <Grid container justifyContent='center' className={classes.loginForm}>
            <Grid item lg={10} sm={12}>
              <Container>
                <div className={classes.formTitle}>
                  <Typography variant='h5'>יאללה מתחילים!</Typography>
                  <Typography variant='h5'>בוא נכיר</Typography>
                </div>
                <form onSubmit={handleSubmit(handleRegister)}>
                  <Controller 
                    name="email"
                    control={control}
                    render={({field, formState}) =>
                      <FormInput
                        name="email"
                        disabled
                        readOnly={true}
                        id="signup-email-disabled"
                        className={classes.mb8}
                        icon={<img src={UserIcon} alt="logo"/>}
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
                        id="signup-password"
                        className={classes.mtb8}
                        icon={<img src={KeyIcon} alt="logo"/>}
                        placeholder="בחירת סיסמא"
                        error={errors?.password}
                        type="password"
                        autoComplete="current-password"
                        field={field}
                        form={formState}
                      />
                    }
                  />
                  <Grid container columnSpacing={2} className={classes.mb16t8}>
                    <Grid item lg={9.5} xs={8}>
                      <Controller 
                        name="phoneNumber"
                        control={control}
                        render={({field, formState}) =>
                        <FormInput
                          name="phoneNumber"
                          type="number"
                          helperClass={classes.phoneNumber}
                          id="signup-phone-number"
                          placeholder="מספר טלפון"
                          error={errors?.phoneNumber}
                          field={field}
                          form={formState}
                        />}
                      />
                    </Grid>
                    <Grid item lg={2.5} xs={4}>
                      <Controller 
                        name="phonePrefix"
                        control={control}
                        render={({field, formState}) =>
                          <FormSelect // area
                            options={[
                              {value: '050', label: '050'},
                              {value: '051', label: '051'},
                              {value: '052', label: '052'},
                              {value: '053', label: '053'},
                              {value: '054', label: '054'}
                            ]}
                            helperClass={classes.role}
                            error={errors?.phonePrefix}
                            field={field}
                            form={formState}
                          />
                        }
                      />
                    </Grid>
                  </Grid>
                  <Grid container rowSpacing={{xs:2}} columnSpacing={2} className={classes.names}>
                    <Grid item lg={6} xs={12}>
                      <Controller 
                        name="firstName"
                        control={control}
                        render={({field, formState}) =>
                          <FormInput
                            name="firstName"
                            id="signup-firstName"
                            helperClass={classes.firstName}
                            label="שם פרטי"
                            error={errors.firstName}
                            field={field}
                            form={formState}
                          />
                        }
                      />
                    </Grid>
                    <Grid item lg={6} xs={12}>
                      <Controller 
                        name="lastName"
                        control={control}
                        render={({field, formState}) =>
                          <FormInput
                            name="lastName"
                            id="signup-lastName"
                            helperClass={classes.lastName}
                            label="שם משפחה"
                            error={errors?.lastName}
                            field={field}
                            form={formState}
                          />
                        }
                      />
                    </Grid>
                  </Grid>
                  <Controller 
                    name="role"
                    control={control}
                    render={({field, formState}) =>
                      <FormSelect // role
                        name="role"
                        id="signup role"
                        className={classes.mtb8}
                        options={roleOptions}
                        error={errors?.role}
                        field={field}
                        form={formState}
                      />
                    }
                  />
                  <Controller 
                    name="businessName"
                    control={control}
                    render={({field, formState}) =>
                      <FormInput
                        name="businessName"
                        id="signup-business-name"
                        className={classes.mtb8}
                        placeholder="שם העסק"
                        error={errors?.businessName}
                        field={field}
                        form={formState}
                      />
                    }
                  />
                  <Controller 
                    name="area"
                    control={control}
                    render={({field, formState}) =>
                      <FormSelect // area
                        className={classes.mtb8}
                        options={[
                          {value: 'israel', label: 'Israel'},
                          {value: 'ukraine', label: 'Ukraine'}
                        ]}
                        placeholder="ענף/תחום"
                        error={errors?.area}
                        field={field}
                        form={formState}
                      />
                    }
                  />
                  <Grid container columnSpacing={2} className={classes.formActions} >
                    <Grid item lg={6} xs={6}>
                      <FormButton
                        type='submit'
                        text="המשך"
                        startIcon={<img src={RightArrow} alt="logo"/>}
                        variant="contained"
                        color="primary"
                      />
                    </Grid>
                    <Grid item lg={6} xs={6}>
                      <FormButton
                        text="חזרה"
                        variant="outlined"
                        color="primary"
                        endIcon={<img src={LeftArrow} alt="logo"/>}
                        onClick={handleBack}
                      />
                    </Grid>
                  </Grid>
                </form>
              </Container>
            </Grid>
          </Grid>
        </AuthRightSide>
      </Grid>
      <Grid item md={8}>
        <AuthLeftSide className={classes.leftBGColor} titleColor={classes.titleColor} icon={SignupLeftFG} title="היועצת הפיננסית מוכנה לפעולה!"/>
      </Grid>
    </Grid>
  )
}

export default withTranslation()(RegistrationForm)
