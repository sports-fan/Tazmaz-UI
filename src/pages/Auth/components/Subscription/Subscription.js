import { Divider, Typography } from '@mui/material'
import FormButton from 'components/FormButton'
import TickIcon from '../../../../assets/tick.svg'
import SubscriptionHeaderLogo from '../../../../assets/subscriptionHeaderLogo.svg'
import useStyles from './styles'

const Subscription = ({icon, price, onClick, clicked}) => {
  const classes = useStyles()
  
  return (
    <div className={classes.container}>
      {clicked && <img className={classes.logo} src={SubscriptionHeaderLogo} alt="logo" />}
      <div className={classes.main}>
        {clicked ?
          <div className={classes.clickedHeader}>
            <Typography>הכי פופולרי</Typography>
          </div> :
          <div className={classes.header}/>
        }
        <div className={classes.upper}>
          <img src={icon} alt="logo" />
          <Typography variant='h6' mt={1.7}>אימפריה</Typography>
          <Typography variant='p'>מנוי אימפריה לורם איפסוום</Typography>
          <div className={classes.price}>
            <Typography variant='h3'>{price}</Typography>
            <Typography variant='p' ml={0.5}>₪</Typography>
            <Typography variant='p' color="secondary" ml={0.5}>/</Typography>
            <Typography variant='p' color="secondary" ml={0.5}>חודשי</Typography>
          </div>
          <div className={classes.priceBelow}>
            <Typography variant='p' color="primary" pl={0.7} pr={0.7}>14 ימים נסיון חינם</Typography>
          </div>
          <Divider className={classes.divider}/>
        </div>
        <div className={classes.lower}>
          <div>
            <img src={TickIcon} alt="logo" />
            <Typography variant='p' ml={1.2}><b>1</b> חשבון בנק</Typography>
          </div>
          <div>
            <img src={TickIcon} alt="logo" />
            <Typography variant='p' ml={1.2}>תמיכה באמצעות<b> דוא״ל + WhatsApp</b></Typography>
          </div>
          <div>
            <img src={TickIcon} alt="logo" />
            <Typography variant='p' ml={1.2}>ארכיון נתונים<b> לשנה</b></Typography>
          </div>
        </div>
        <div className={classes.formButton}>
          <FormButton
            text="יאללה, מתאים לי"
            variant="contained"
            color={ clicked ? "info" : "primary"}
            onClick={onClick}
          />
        </div>
      </div>
    </div>
  )
}

export default Subscription
