import { useCallback, useContext, useEffect, useState } from 'react'
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
import Notification from 'components/Notification';
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
import ConfirmModal from 'components/ConfirmModal';
import { AuthContext } from 'contexts/AuthContext';

const schema = yup.object({
  firstName: yup.string()
    .required("מספר עוסק/ת.ז. שגוי")
    .matches(/^[\u0590-\u05fe]+$/i,'Shoudl be Latin letters.'),
  lastName: yup.string()
    .required("מספר עוסק/ת.ז. שגוי")
    .matches(/^[\u0590-\u05fe]+$/i,'Shoudl be Latin letters.'),
  email: yup.string("מספר עוסק/ת.ז. שגוי"),
  password: yup.string()
    .min(8, '8 characters minimum.')
    .required("מספר עוסק/ת.ז. שגוי")
    .matches(/^[A-Za-z0-9]\w{7,20}$/, ' A-Z, a-z, 0-9, 20 characters maximum'),
  phonePrefix: yup.string().required("required"),
  phoneNumber: yup.string()
    .matches(/^[0-9]\w{8}$/, 'only numbers, 9 digits')
    .required("מספר עוסק/ת.ז. שגוי"),
  role: yup.string().required("מספר עוסק/ת.ז. שגוי"),
  businessName: yup.string().required("מספר עוסק/ת.ז. שגוי"),
  area: yup.string().required("מספר עוסק/ת.ז. שגוי")
}).required()
 
const RegistrationForm = ({t}) => {
  const classes = useStyles()
  const { registerDetailsPage } = useContext(AuthContext)
  console.log(registerDetailsPage)
  const [roleOptions, setRoleOptions] = useState([])
  const [sectorOptions, setSectorOptions] = useState([])
  const [modalOpen, setModalOpen] = useState(false)
  const [open, setOpen] = useState(false)
  const [errRes, setErrRes] = useState({})
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

    axios({
      url: '/business/sectors',
      method: "GET",
    })
    .then(res => {
      const options = res.data.data.map(item => ({
        value: item.key,
        label: item.key
      }))
      setSectorOptions(options)
    })
    .catch(err => {console.log(err)})
  }, [])

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
      console.log(res.data)
      if (res.data.success) {
        localStorage.setItem("userId", res.data.data.userId)
        localStorage.removeItem('verifiedEmail')
        navigate("/auth/signup/3")
      }
    })
    .catch(err => {
      console.log(err)
      setOpen(false)
      setErrRes(err.response.data)
    })
  }, [navigate])

  const handleBack = useCallback(() => {
    navigate("/auth/signup/1")
  }, [navigate])

  const handleModalOpen = useCallback(() => {
    setModalOpen(true)
  }, [])

  const handleModalClose = useCallback(() => {
    setModalOpen(false)
  }, [])

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
                  <Typography variant='h5'>{t('registrationForm.description1')}</Typography>
                  <Typography variant='h5'>{t('registrationForm.description2')}</Typography>
                </div>
                <form onSubmit={handleSubmit(handleRegister)}>
                  <Controller 
                    name="email"
                    control={control}
                    render={({field, formState}) =>
                      <FormInput
                        name="email"
                        type="email"
                        disabled
                        readOnly
                        id="signup-email-disabled"
                        className={classes.email}
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
                        type="password"
                        id="signup-password"
                        icon={<img src={KeyIcon} alt="logo"/>}
                        placeholder={t('registrationForm.password')}
                        error={errors?.password}
                        autoComplete="current-password"
                        field={field}
                        form={formState}
                      />
                    }
                  />
                  <Grid container columnSpacing={2}>
                    <Grid item lg={9.5} xs={9}>
                      <Controller
                        name="phoneNumber"
                        control={control}
                        render={({field, formState}) =>
                        <FormInput
                          name="phoneNumber"
                          type="number"
                          helperClass={classes.phoneNumber}
                          id="signup-phone-number"
                          placeholder={t('registrationForm.phone')}
                          error={errors?.phoneNumber}
                          field={field}
                          form={formState}
                        />}
                      />
                    </Grid>
                    <Grid item lg={2.5} xs={3}>
                      <Controller 
                        name="phonePrefix"
                        control={control}
                        render={({field, formState}) =>
                          <FormSelect
                            options={[
                              {value: '050', label: '050'},
                              {value: '051', label: '051'},
                              {value: '052', label: '052'},
                              {value: '053', label: '053'},
                              {value: '054', label: '054'},
                              {value: '055', label: '055'},
                              {value: '056', label: '056'},
                              {value: '057', label: '057'},
                              {value: '058', label: '058'},
                              {value: '059', label: '059'},
                              {value: '038', label: '038'},
                              {value: '1', label: '1'},
                            ]}
                            helperClass={classes.phonePrefix}
                            error={errors?.phonePrefix}
                            field={field}
                            form={formState}
                          />
                        }
                      />
                    </Grid>
                  </Grid>
                  <Grid container columnSpacing={2}>
                    <Grid item lg={6} xs={12}>
                      <Controller 
                        name="firstName"
                        control={control}
                        render={({field, formState}) =>
                          <FormInput
                            name="firstName"
                            id="signup-firstName"
                            helperClass={classes.firstName}
                            label={t('registrationForm.firstName')}
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
                            label={t('registrationForm.lastName')}
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
                        placeholder={t('registrationForm.role')}
                        id="signup role"
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
                        placeholder={t('registrationForm.business')}
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
                        options={sectorOptions}
                        placeholder={t('registrationForm.sector')}
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
                        text={t('registrationForm.button1')}
                        startIcon={<img src={RightArrow} alt="logo"/>}
                        variant="contained"
                        color="primary"
                      />
                    </Grid>
                    <Grid item lg={6} xs={6}>
                      <FormButton
                        text={t('registrationForm.button2')}
                        variant="outlined"
                        color="primary"
                        endIcon={<img src={LeftArrow} alt="logo"/>}
                        onClick={handleModalOpen}
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
        <AuthLeftSide bgColor={registerDetailsPage.background} titleColor={classes.titleColor} icon={registerDetailsPage.image} title={registerDetailsPage.title}/>
      </Grid>
      <ConfirmModal 
        open={modalOpen}
        title="Are you sure to go back?"
        onClose={handleModalClose}
        onClick={handleBack}
      />
      <Notification
        open={open}
        message={errRes?.message || 'Please read our terms & policy'}
        onClose={() => setOpen(false)}
      />
    </Grid>
  )
}

export default withTranslation()(RegistrationForm)
