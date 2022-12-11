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
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object({
  coupon: yup.string().required("מספר עוסק/ת.ז. שגוי")
})

const SelectSubscription = ({t}) => {
  const classes = useStyles()
  const [subcriptions, setSubcriptions] = useState([])
  const [couponStatus, setCouponStatus] = useState(false)
  const [couponLabel, setCouponLabel] = useState('')
  const [filter, setFilter] = useState('MONTHLY')
  const navigate = useNavigate()
  const matches = useMediaQuery('(max-width:600px)')
  const [alertInfo, setAlertInfo] = useState({
    status: '',
    message: ''
  })
  const {control, handleSubmit, formState: {errors}} = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      coupon: ''
    }
  })

  const handleCancelCoupon = useCallback(e => {
    e.preventDefault()
    setCouponStatus(false)
  }, [])

  const handleSubmitCoupon = useCallback((data) => {
    const couponCode = data.coupon
    const accessToken = sessionStorage.getItem("accessToken")
    axios({
      url: '/business/subscription/validate-copoun',
      method: "POST",
      headers: {
        "accept": 'application/json',
        "content-type": 'application/json',
        "x-api-key": "wDXZ9APVd3y2J7HzfP0YLVxLjCE9Lt",
        "Authorization": "Bearer " + accessToken
      },
      data: { couponCode },
    })
    .then(res => {
      console.log(res.data)
      if (res.data.success) {
        setSubcriptions(res.data.data)
        setCouponStatus(true)
        setCouponLabel(res.data.message)
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
        message: err.response.data.message || err.response.data
      })
    })
  }, [])
  
  const handleSubscriptionClick = useCallback((id) => {
    const accessToken = sessionStorage.getItem("accessToken")
    axios({
      url: '/business/subscription/change',
      method: "POST",
      headers: {
        "accept": 'application/json',
        "content-type": 'application/json',
        "x-api-key": "wDXZ9APVd3y2J7HzfP0YLVxLjCE9Lt",
        "Authorization": "Bearer " + accessToken
      },
      data: { subscriptionId: subcriptions[id].subscriptionId },
    })
    .then(res => {
      console.log(res.data)
      if (res.data.success) {
        navigate('/auth/signup/4')
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
        message: err.response.data.message || err.response.data
      })
    })
  }, [navigate, subcriptions])

  const handleSwitchChange = useCallback((e) => {
    if (e.target.checked)
      setFilter('YEARLY')
    else
      setFilter('MONTHLY')
  }, [])

  useEffect(() => {
    if (couponStatus) return
    console.log("UseEffect called")
    axios({
      url: '/public/subscriptions',
      method: "GET",
    })
    .then(res => {
      setSubcriptions(res.data.data)
    })
    .catch(err => {console.log(err)})
  }, [couponStatus])

  const filteredSubscriptions = useMemo(() => {
    const sorted = subcriptions.sort(compareSubscription)
    const filtered = sorted.filter(item => item.type === filter)
    return filtered
  }, [filter, subcriptions])
  
  return (
    <div className={classes.main}>
      <SelectSubscriptionHeader stepNum={2}/>
      <SelectSubscriptionLayout>
        <Grid container justifyContent="center">
          <Grid item lg={4} xs={12}>
            <div className={classes.title}>
              <Typography textAlign="center" variant="h4">{t('subscription.description')}</Typography>
            </div>
          </Grid>
        </Grid>
        <div className={classes.mt36}></div>
        <div className={classes.formTitle}>
          <Typography variant="body1">{couponLabel || t('subscription.couponLabel')}</Typography>
        </div>
        <form onSubmit={handleSubmit(handleSubmitCoupon)}>
          <Grid container rowSpacing={5}  direction="row-reverse" alignItems="flex-start">
            <Grid item lg={4} xs={12}/>
            <Grid item lg={4} xs={12} className={classes.switch}>
              <div className={classes.switchDiv}>
                <CustomSwitch
                  onChange={handleSwitchChange}
                  right={
                    <Typography variant="subtitle1" color="primary">{t('subscription.monthly')}</Typography>
                  }
                  left={
                    <div className={classes.switchLeft}>
                      <Typography variant="subtitle1" color="primary">{t('subscription.yearly')}</Typography>
                      <Typography variant="caption" color="primary">{t('subscription.30%')}</Typography>
                    </div>
                  }
                />
              </div>
            </Grid>
            <Grid item lg={4} xs={12} className={classes.formAction}>
              <Grid container columnSpacing={2} alignItems="flex-start">
                <Grid item lg={8}  xs={12}>
                  <div className={classes.formInput}>
                    <Controller 
                      name="coupon"
                      control={control}
                      render={({field, formState}) =>
                        <FormInput
                          className={couponStatus ? classes.couponInput : undefined}
                          id="signup-subscrition-input"
                          disabled={couponStatus}
                          readOnly={couponStatus}
                          placeholder={t('subscription.couponInput')}
                          error={errors.coupon}
                          field={field}
                          form={formState}
                        />
                    }
                    />
                  </div>
                </Grid>
                <Grid item lg={4}  xs={12}>
                  <div className={classes.formButton}>
                  {couponStatus ?
                    <FormButton
                      color="error"
                      type="button"
                      variant="contained"
                      error={alertInfo.message}
                      onClick={handleCancelCoupon}
                      text={t('subscription.couponCancel')}
                    /> :
                    <FormButton
                      color="primary"
                      type="submit"
                      variant="contained"
                      error={alertInfo.message}
                      text={t('subscription.couponButton')}
                    />
                  }
                  </div>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </form>
        <div className={classes.mt}></div>
        <Grid container rowSpacing={matches ? 0 : 3} columnSpacing={matches ? 1:4.1} justifyContent='center' alignItems="flex-end" className={classes.subscriptions}>
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
