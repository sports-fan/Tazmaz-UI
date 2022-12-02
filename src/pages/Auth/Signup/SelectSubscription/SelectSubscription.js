import { useCallback, useEffect, useMemo, useState } from "react";
import { Grid, Typography } from "@mui/material"
import { withTranslation } from 'react-i18next';
import useMediaQuery from '@mui/material/useMediaQuery'
import { useNavigate } from 'react-router-dom';
import axios from "axios";

import CustomSwitch from "components/CustomSwitch"
import FormButton from "components/FormButton"
import FormInput from "components/FormInput"
import SelectSubscriptionHeader from "pages/Auth/components/SelectSubscriptionHeader"
import SelectSubscriptionLayout from "pages/Auth/components/SelectSubscriptionLayout"
import Subscription from "pages/Auth/components/Subscription"
import SubscriptionLogo5 from 'assets/subscritionLogo5.svg'
import { compareSubscription } from "helper/utils";
import useStyles from './styles'

const SelectSubscription = () => {
  const classes = useStyles()
  const [subcriptions, setSubcriptions] = useState([])
  const [filter, setFilter] = useState('MONTHLY')
  const navigate = useNavigate()
  const matches = useMediaQuery('(max-width:600px)')
  
  const handleSubscriptionClick = useCallback((id) => {
    navigate('/auth/signup/4')
    // setSubcriptionId(id)
  }, [navigate])

  const handleSwitchChange = useCallback((e) => {
    if (e.target.checked)
      setFilter('YEARLY')
    else
      setFilter('MONTHLY')
  }, [])

  useEffect(() => {
    axios({
      url: '/public/subscriptions',
      method: "GET",
    })
    .then(res => {
      setSubcriptions(res.data.data)
    })
    .catch(err => {console.log(err)})
  }, [])

  const filteredSubscriptions = useMemo(() => {
    const sorted = subcriptions.sort(compareSubscription)
    const filtered = sorted.filter(item => item.type === filter)
    return filtered
  }, [filter, subcriptions])
  
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
        <div className={classes.mt}></div>
        <Grid container rowSpacing={5}  direction="row-reverse" alignItems="center" className={classes.formContainer}>
          <Grid item lg={4} xs={12}/>
          <Grid item lg={4} xs={12} className={classes.switch}>
            <CustomSwitch
              onChange={handleSwitchChange}
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
                    placeholder="הזנת קוד הטבה"
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
        <Grid container rowSpacing={matches ? 1 : 3} columnSpacing={matches ? 1:4.1} justifyContent='center' alignItems="flex-end" className={classes.subscriptions}>
          {filteredSubscriptions.map((subcription, id) =>
            <Grid key={id} item lg={2.4} xs={12} sm={12} md={12}>
              <Subscription
                key={id}
                subscription={subcription}
                icon={SubscriptionLogo5}
                onClick={() => handleSubscriptionClick(id)}
              />
            </Grid>
          )}
        </Grid>
      </SelectSubscriptionLayout>
    </div>
  )
}

export default withTranslation()(SelectSubscription)
