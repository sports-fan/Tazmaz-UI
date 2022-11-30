import useStyles from './styles'
import TazmazIcon from '../../../../assets/tazmazLogWhite.svg'
import CustomStepper from 'components/CustomStepper'

const SelectSubscriptionHeader = ({stepNum}) => {
  const classes = useStyles()
  return (
    <div className={classes.main}>
      <div className={classes.logo}>
        <img src={TazmazIcon} alt="Tazmaz log icon white" />
      </div>
      <CustomStepper stepNum={stepNum} />
    </div>
  )
}

export default SelectSubscriptionHeader
