import useStyles from './styles'
import TazmazIcon from '../../../../assets/tazmazLogWhite.svg'
import CustomStepper from 'components/CustomStepper'

const SelectSubscriptionHeader = () => {
  const classes = useStyles()
  return (
    <div className={classes.main}>
      <img src={TazmazIcon} alt="Tazmaz log icon white" />
      <CustomStepper />
    </div>
  )
}

export default SelectSubscriptionHeader
