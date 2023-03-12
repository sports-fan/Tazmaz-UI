import useStyles from './styles'
import TazmazIcon from '../../../../assets/tazmazLogWhite.svg'
import CustomStepper from 'components/CustomStepper'
import { Grid } from '@mui/material'

// reusable header component on stage 3 and stage 4
const SelectSubscriptionHeader = ({stepNum}) => {
  const classes = useStyles()
  return (
    <div className={classes.main}>
      <div className={classes.logo}>
        <img src={TazmazIcon} alt="Tazmaz log icon white" />
      </div>
      <Grid container justifyContent="center" className={classes.stepper}>
        <Grid item lg={4} md={4} sm={6} xs={12}>
          <CustomStepper stepNum={stepNum} />
        </Grid>
      </Grid>
    </div>
  )
}

export default SelectSubscriptionHeader
