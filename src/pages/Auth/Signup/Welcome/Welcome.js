import { Typography, Grid } from '@mui/material'
import useMediaQuery from '@mui/material/useMediaQuery';
import { withTranslation } from 'react-i18next';

import FormButton from 'components/FormButton'
import SelectSubscriptionHeader from 'pages/Auth/components/SelectSubscriptionHeader'
import SelectSubscriptionLayout from 'pages/Auth/components/SelectSubscriptionLayout'
import WelcomeLogo from 'assets/welcomeLogo.svg'
import WelcomeMobileLogo from 'assets/welcomeMobileLogo.svg'
import LeftArrow from 'assets/leftArrow.svg'
import useStyles from './styles'

const Welcome = ({t}) => {
  const classes = useStyles()
  const matches = useMediaQuery('(max-width:600px)');
  return (
    <div className={classes.container}>
      <SelectSubscriptionHeader stepNum={3}/> {/* header of stage 4 */}
      <SelectSubscriptionLayout className={classes.mainDiv}> {/* body of stage 4 */}
        <div className={classes.main}>
          <div className={classes.title}>
            <Typography variant='h3' color="primary" mb={matches?1.5:2.5}>{t('welcome.des1')}</Typography>
            <Typography variant={matches ? 'subtitle1': 'h5'} mb={matches?1.5:2.5}>{t('welcome.des2')}</Typography>
            <Typography variant={matches ? 'subtitle1': 'h5'}>{t('welcome.des3')}</Typography>
          </div>
          <div className={classes.logo}>
            <img src={matches ? WelcomeMobileLogo : WelcomeLogo} alt="welcome-log" />
          </div>
        </div>
        <Grid container justifyContent="center">
          <Grid item lg={4} xs={12}>
            <Grid container columnSpacing={3} rowSpacing={matches? 2.3:3}>
              <Grid item lg={6} xs={12}>
                <FormButton
                  variant="contained"
                  color="primary"
                  text={t('welcome.buttonRight')}
                  endIcon={<img src={LeftArrow} alt="welcome-log" />}
                />
              </Grid>
              <Grid item lg={6} xs={12}>
                <FormButton
                  variant="contained"
                  color="info"
                  text={t('welcome.buttonLeft')}
                  endIcon={<img src={LeftArrow} alt="welcome-log" />}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <div className={classes.bottom}></div>
      </SelectSubscriptionLayout>
    </div>
  )
}

export default withTranslation()(Welcome)
