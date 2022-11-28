import { useCallback, useState } from 'react'
import { Grid, Typography } from "@mui/material"
import useMediaQuery from '@mui/material/useMediaQuery'
import CustomSwitch from "components/CustomSwitch"
import FormButton from "components/FormButton"
import FormInput from "components/FormInput"
import SelectSubscriptionHeader from "pages/Auth/components/SelectSubscriptionHeader"
import SelectSubscriptionLayout from "pages/Auth/components/SelectSubscriptionLayout"
import Subscription from "pages/Auth/components/Subscription"
import SubscriptionLogo1 from '../../../../../assets/subscritionLogo1.svg'
import SubscriptionLogo2 from '../../../../../assets/subscritionLogo2.svg'
import SubscriptionLogo3 from '../../../../../assets/subscritionLogo3.svg'
import SubscriptionLogo4 from '../../../../../assets/subscritionLogo5.svg'
import SubscriptionLogo5 from '../../../../../assets/subscritionLogo5.svg'
import useStyles from './styles'

const subcriptions = [
  {icon: SubscriptionLogo1, price: 30},
  {icon: SubscriptionLogo2, price: 50},
  {icon: SubscriptionLogo3, price: 50},
  {icon: SubscriptionLogo4, price: 120},
  {icon: SubscriptionLogo5, price: 199},
]

const SelectSubscription = () => {
  const classes = useStyles()
  const [subscriptionId, setSubcriptionId] = useState(null)
  const matches = useMediaQuery('(max-width:600px)')
  
  const handleSubscriptionClick = useCallback((id) => {
    setSubcriptionId(id)
  }, [])

  return (
    <div>
      <SelectSubscriptionHeader stepNum={2}/>
      <SelectSubscriptionLayout>
        <Grid container justifyContent="center">
          <Grid item lg={4} xs={12}>
            <div className={classes.title}>
              <Typography textAlign="center" variant="h4">תבחרו את המנוי המתאים ביותר עבורכם</Typography>
            </div>
          </Grid>
        </Grid>
        <Grid container rowSpacing={5}  direction="row-reverse" alignItems="flex-end">
          <Grid item lg={4} xs={12}/>
          <Grid item lg={4} xs={12} className={classes.switch}>
            <CustomSwitch
              right={
                <Typography variant="subtitle1" color="primary">חודשי</Typography>
              }
              left={
                <div className={classes.switchLeft}>
                  <Typography variant="subtitle1" color="primary">שנתי</Typography>
                  <Typography variant="caption" color="primary">חיסכו 30%</Typography>
                </div>
              }
            />
          </Grid>
          <Grid item lg={4} xs={12} className={classes.formAction}>
            <Grid container columnSpacing={2} rowSpacing={{xs:1}} alignItems="flex-end">
              <Grid item lg={8}  xs={12}>
                <div className={classes.formTitle}>
                  <Typography variant="body1">רגע, יש לך אולי קוד הטבה?</Typography>
                </div>
                <div className={classes.formInput}>
                  <FormInput
                    id="signup-subscrition-input"
                    startAdornment="הזנת קוד הטבה"
                  />
                </div>
              </Grid>
              <Grid item lg={4}  xs={12}>
                <div className={classes.formButton}>
                  <FormButton
                    color="primary"
                    variant="contained"
                    text="הזנת קוד הטבה"              
                  />
                </div>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <div className={classes.mt}/>
        <Grid container rowSpacing={matches ? 1 : 3} columnSpacing={matches ? 1:4.1} alignItems="flex-end" className={classes.subscriptions}>
          {subcriptions.map((subcription, id) => (
            <Grid key={id} item lg={2.4} xs={12} sm={12} md={12}>
              <Subscription
                key={id}
                className={id === subscriptionId ? classes.clicked : null}
                clicked={id === subscriptionId ? true : false}
                icon={subcription.icon}
                price={subcription.price}
                onClick={() => handleSubscriptionClick(id)}
              />
            </Grid>
          ))}
        </Grid>
      </SelectSubscriptionLayout>
    </div>
  )
}

export default SelectSubscription
