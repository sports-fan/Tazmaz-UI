import { Divider, Typography } from '@mui/material'
import FormButton from 'components/FormButton'
import { useTranslation } from 'react-i18next'
import TickIcon from '../../../../assets/tick.svg'
import SubscriptionHeaderLogo from '../../../../assets/subscriptionHeaderLogo.svg'
import useStyles from './styles'

const Subscription = ({icon, onClick, subscription}) => {
  const classes = useStyles()
  const { t } = useTranslation()
  const { mostPopular, price, trialDays, name, description, type, features } = subscription
  return (
    <div className={mostPopular ? classes.container2 : classes.container1}>
      {mostPopular && <img className={classes.logo} src={SubscriptionHeaderLogo} alt="logo" />}
      <div className={classes.main}>
        {mostPopular ?
          <div className={classes.clickedHeader}>
            <Typography variant='body1'>{t('subscription.header')}</Typography>
          </div> :
          <div className={classes.header}/>
        }
        <div className={classes.upper}>
          <img src={icon} alt="logo" />
          <Typography variant='h6' mt={1.7}>{name}</Typography>
          <Typography variant='caption' align='center'>{description}</Typography>
          <div className={classes.price}>
            <Typography variant='h2'>{price}</Typography>
            <Typography variant='body1' ml={0.5}>₪</Typography>
            <Typography variant='caption' color="secondary" ml={0.5}>/</Typography>
            <Typography variant='caption' color="secondary" ml={0.5}>{type}</Typography>
          </div>
          <div className={classes.priceBelow}>
            <Typography variant='body2' color="primary" pl={0.7} pr={0.7}>{trialDays} ימים נסיון חינם</Typography>
          </div>
          <Divider className={classes.divider}/>
        </div>
        <div className={classes.lower}>
          {features.map((feature, idx) => (
            <div key={idx}>
              <img src={TickIcon} alt="logo" />
              <Typography variant='caption' ml={1.2}>{feature.title}</Typography>
            </div>
          ))}
        </div>
        <div className={classes.formButton}>
          <FormButton
            className={classes.button}
            text={t('subscription.subButton')}
            variant="contained"
            color="primary"
            onClick={onClick}
            sx={{
              ':hover': {
                bgcolor: '#1A94B6', // theme.palette.primary.main
              },
            }}
          />
        </div>
      </div>
    </div>
  )
}

export default Subscription
