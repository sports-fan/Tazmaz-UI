import { useCallback, useContext, useEffect, useState } from 'react'
import { Typography, Grid, useMediaQuery } from '@mui/material'
import { withTranslation } from 'react-i18next';
import { useForm, Controller } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { yupResolver } from '@hookform/resolvers/yup';
import axios from "axios";
import * as yup from "yup";

import AuthLeftSide from 'pages/Auth/components/AuthLeftSide'
import Container from 'pages/Auth/components/Container'
import AuthRightSide from 'pages/Auth/components/AuthRightSide'
import TazmazLogo from 'assets/tazmazLogWhite.svg'
import TazmazLogoMobile from 'assets/tazmazLogoMobileWhite.svg'
import UserIcon from 'assets/userIcon.svg'
import KeyIcon from 'assets/keyIcon.svg'
import RightArrow from 'assets/rightArrow.svg'
import LeftArrow from 'assets/leftArrowPrimary.svg'
import useStyles from './styles'
import CustomStepper from 'components/CustomStepper'
import NumberInput from 'components/NumberInput';
import FormInput from 'components/FormInput'
import FormSelect from 'components/FormSelect'
import FormButton from 'components/FormButton'
import ConfirmModal from 'components/ConfirmModal';
import { AuthContext } from 'contexts/AuthContext';
import FormPasswordInput from 'components/FormPasswordInput';

const schema = yup.object({
  firstName: yup.string()
    .matches(/^[\u0590-\u05fe]+$/i,'Should be Latin letters')
    .required("מספר עוסק/ת.ז. שגוי"),
  lastName: yup.string()
    .matches(/^[\u0590-\u05fe]+$/i,'Should be Latin letters')
    .required("מספר עוסק/ת.ז. שגוי"),
  email: yup.string("מספר עוסק/ת.ז. שגוי"),
  password: yup.string()
    .min(8, '8 characters minimum')
    .matches(/^[A-Za-z0-9]\w{7,20}$/, ' A-Z, a-z, 0-9, 20 characters maximum')
    .required("מספר עוסק/ת.ז. שגוי"),
  phonePrefix: yup.string().required(""),
  phoneNumber: yup.string()
    .min(7, 'חייב להכיל 7 ספרות')
    .required("מספר עוסק/ת.ז. שגוי"),
  role: yup.string().required("מספר עוסק/ת.ז. שגוי"),
  businessName: yup.string().required("מספר עוסק/ת.ז. שגוי"),
  businessId: yup.string()
    .matches(/^[0-9]/, "only numbers")
    .required("מספר עוסק/ת.ז. שגוי"),
  area: yup.string().required("מספר עוסק/ת.ז. שגוי")
}).required()
 
const RegistrationForm = ({t}) => {
  const classes = useStyles()
  const { registerDetailsPage } = useContext(AuthContext)
  const [roleOptions, setRoleOptions] = useState([])
  const [sectorOptions, setSectorOptions] = useState([])
  const [modalOpen, setModalOpen] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [alertInfo, setAlertInfo] = useState({
    status: '',
    message: ''
  })
  const navigate = useNavigate()
  const matches = useMediaQuery('(max-width:600px)')
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
      businessId: '',
      businessName: '',
      area: ''
    }
  })
  //get the role and sector options when loading the page.
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
      console.log(res.data)

      const options = res.data.data.map(item => ({
        value: item.key,
        label: item.key
      }))
      setSectorOptions(options)
    })
    .catch(err => {console.log(err)})
  }, [])

  // handler for showing password
  const handleMouseDownPassword = useCallback(e => {
    e.preventDefault()
  }, [])

  const handleClickShowPassword = useCallback(() => {
    setShowPassword(prevState => !prevState)
  }, [])
  
  // handler for registration
  const handleRegister = useCallback(data => {
    const registerType = localStorage.getItem("registerType") || "DEFAULT"
    const providerAccessToken = localStorage.getItem("providerAccessToken") || undefined

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
        phoneNumber: data.phonePrefix + data.phoneNumber,
        businessId:data.businessId,
        businessName: data.businessName,
        rolePosition: data.role,
        registerType,
        providerAccessToken
      },
    })
    .then(res => {
      console.log(res.data)
      if (res.data.success) {
        localStorage.setItem("userId", res.data.result.account.userId)
        localStorage.setItem('accessToken', res.data.access_token)
        localStorage.setItem('refreshToken', res.data.refresh_token)
        navigate("/auth/signup/3")
      } else {
        setAlertInfo({
          status: 'warning',
          message: res.data.message
        })
      }
    })
    .catch(err => {
      console.log(err)
      setAlertInfo({
        status: 'error',
        message: err.response.data.message.join(", ") || err.response.data
      })
    })
  }, [navigate])

  const handleBack = useCallback(() => {
    localStorage.removeItem('verifiedEmail')
    if (localStorage.getItem('registerType')) {
      localStorage.removeItem('registerType')
      localStorage.removeItem('providerAccessToken')
    }
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
        <AuthRightSide // right side form of stage 2
          theme="light" // Specifies light logo icon, by default dark.
          bottomDisabled={true}
          logo={matches? TazmazLogoMobile:TazmazLogo}
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
                  <Controller // email field on stage 2
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
                  <Controller // password field on stage2
                    name="password"
                    control={control}
                    render={({field, formState}) =>
                      <FormPasswordInput
                        name="password"
                        id="signup-password"
                        showPassword={showPassword}
                        icon={<img src={KeyIcon} alt="logo"/>}
                        placeholder={t('registrationForm.password')}
                        error={errors?.password}
                        autoComplete="current-password"
                        field={field}
                        form={formState}
                        onMouseDownPassword={handleMouseDownPassword}
                        onClickShowPassword={handleClickShowPassword}
                      />
                    }
                  />
                  <Grid container columnSpacing={2}>
                    <Grid item md={8} lg={8} xl={9} xs={8}>
                      <Controller // phone number field on stage2
                        name="phoneNumber"
                        control={control}
                        render={({field, formState}) =>
                        <NumberInput
                          name="phoneNumber"
                          mask="0000000"
                          id="signup-phone-number"
                          placeholder={t('registrationForm.phone')}
                          error={errors?.phoneNumber}
                          field={field}
                          form={formState}
                        />}
                      />
                    </Grid>
                    <Grid item md={4} lg={4} xl={3} xs={4}>
                      <Controller // phone prefix field on stage2
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
                              {value: '1', label: '1'},
                            ]}
                            placeholder="קידומת"
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
                      <Controller // first name field on stage2
                        name="firstName"
                        control={control}
                        render={({field, formState}) =>
                          <FormInput
                            name="firstName"
                            id="signup-firstName"
                            placeholder={t('registrationForm.firstName')}
                            label={t('registrationForm.firstName')}
                            error={errors.firstName}
                            field={field}
                            form={formState}
                          />
                        }
                      />
                    </Grid>
                    <Grid item lg={6} xs={12}>
                      <Controller // last name field on stage2
                        name="lastName"
                        control={control}
                        render={({field, formState}) =>
                          <FormInput
                            name="lastName"
                            id="signup-lastName"
                            placeholder={t('registrationForm.lastName')}
                            label={t('registrationForm.lastName')}
                            error={errors?.lastName}
                            field={field}
                            form={formState}
                          />
                        }
                      />
                    </Grid>
                  </Grid>
                  <Controller // role options on stage2
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
                  <Controller // business id field on stage2
                    name="businessId"
                    control={control}
                    render={({field, formState}) =>
                      <NumberInput
                        name="businessId"
                        mask={Number}
                        id="signup-business-id"
                        placeholder={t('registrationForm.businessId')}
                        error={errors?.businessId}
                        field={field}
                        form={formState}
                      />
                    }
                  />
                  <Controller // business name field on stage2
                    name="businessName"
                    control={control}
                    render={({field, formState}) =>
                      <FormInput
                        name="businessName"
                        id="signup-business-name"
                        placeholder={t('registrationForm.businessName')}
                        error={errors?.businessName}
                        field={field}
                        form={formState}
                      />
                    }
                  />
                  <Controller 
                    name="area" // sector options field on stage2
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
                        type='submit' // register button for submitting form data
                        error={alertInfo.message}
                        text={t('registrationForm.button1')}
                        startIcon={<img src={RightArrow} alt="logo"/>}
                        variant="contained"
                        color="primary"
                      />
                    </Grid>
                    <Grid item lg={6} xs={6}>
                      <FormButton // button to go back
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
      {/* left side of page whch is dynamic by response */}
      <Grid item md={8}>
        <AuthLeftSide bgColor={registerDetailsPage.background} titleColor={classes.titleColor} icon={registerDetailsPage.image} title={registerDetailsPage.title}/>
      </Grid>
      <ConfirmModal 
        open={modalOpen}
        title="Are you sure to go back?"
        onClose={handleModalClose}
        onClick={handleBack}
      />
    </Grid>
  )
}

export default withTranslation()(RegistrationForm)
