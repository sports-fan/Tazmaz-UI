import { Typography, Grid } from '@mui/material'
import AuthLeftSide from '../../../components/AuthLeftSide'
import Container from '../../../components/Container'
import AuthRightSide from '../../../components/AuthRightSide'
import SignupLeftFG from '../../../../../assets/signupLogo2.svg'
import TazmazLogo from '../../../../../assets/tazmazLogWhite.svg'
import UserIcon from '../../../../../assets/userIcon.svg'
import KeyIcon from '../../../../../assets/keyIcon.svg'
import RightArrow from '../../../../../assets/rightArrow.svg'
import LeftArrow from '../../../../../assets/leftArrowPrimary.svg'
import useStyles from './styles'
import CustomStepper from '../../../../../components/CustomStepper'
import FormInput from 'components/FormInput'
import FormSelect from 'components/FormSelect'
import FormButton from 'components/FormButton'

const RegistrationForm = () => {
  const classes = useStyles()
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
                <FormInput //Email text field disabled
                  disabled
                  id="signup-email-disabled"
                  className={classes.mb8}
                  icon={<img src={UserIcon} alt="logo"/>}
                  startAdornment="olivia@tazmaz.com"
                />
                <FormInput // Password field
                  id="signup-password"
                  className={classes.mtb8}
                  icon={<img src={KeyIcon} alt="logo"/>}
                  startAdornment="בחירת סיסמא"
                />
                <Grid container columnSpacing={2} className={classes.mb16t8}>
                  <Grid item lg={9.5} xs={8}>
                    <FormInput // phone number
                      id="signup-phone-number"
                      endAdornment="מספר טלפון"
                    />
                  </Grid>
                  <Grid item lg={2.5} xs={4}>
                    {/* phone prefix */}
                    <FormSelect
                      options={['053']}
                    /> 
                  </Grid>
                </Grid>
                <Grid container rowSpacing={{xs: 2}} columnSpacing={2} className={classes.mb8}>
                  <Grid item lg={6} xs={12}>
                    <FormInput
                      id="signup-unknown-left"
                      label="שם פרטי"
                    />
                  </Grid>
                  <Grid item lg={6} xs={12}>
                    <FormInput
                      id="signup-unknown-right"
                      label="שם משפחה"
                    />
                  </Grid>
                </Grid>
                <FormInput // role
                  id="signup role"
                  className={classes.mtb8}
                  startAdornment="תפקיד"
                />
                <FormInput // business name
                  id="signup-business-name"
                  className={classes.mtb8}
                  startAdornment="שם העסק"
                />
                <FormSelect // area
                  className={classes.mtb8}
                  options={['Israel', 'Ukraine']}
                  adorementText="ענף/תחום"
                />
                <Grid container columnSpacing={2} className={classes.formActions} >
                  <Grid item lg={6} xs={6}>
                    <FormButton
                      text="המשך"
                      startIcon={<img src={RightArrow} alt="logo"/>}
                      variant="contained"
                      color="primary"
                    />
                  </Grid>
                  <Grid item lg={6} xs={6}>
                    <FormButton
                      text="חזרה"
                      endIcon={<img src={LeftArrow} alt="logo"/>}
                      variant="outlined"
                      color="primary"
                    />
                  </Grid>
                </Grid>
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

export default RegistrationForm
