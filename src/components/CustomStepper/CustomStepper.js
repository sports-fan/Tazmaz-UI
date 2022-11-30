import { Box, Stepper, Step, StepLabel, Typography } from "@mui/material";
import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';
import { styled } from '@mui/material/styles';
import useStyles, { useLabelStyles } from './styles'

const CustomStepper = ({stepNum}) => {
  const classes = useStyles()
  const labelStyles = useLabelStyles()
  const steps = [
    'פרטי עסק',
    'בחירת מנוי',
    'ברוכים הבאים',
  ]

  const CustomStepConnector = styled(StepConnector)(({ theme }) => ({
    [`&.${stepConnectorClasses.alternativeLabel}`]: {
      top: 18,
      left: 'calc(-50% + 17px)',
      right: 'calc(50% + 17px)',
      borderColor: 'rgba(255, 255, 255, 0.2)'
    },
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: theme.palette.mode === 'dark' ? theme.palette.grey[800] : '#eaeaf0',
      borderTopWidth: 3,
      borderRadius: 1,
    },
  }));

  const StepButton = (props) => {
    const {completed, icon} = props
    return (
      <div className={completed ? classes.completed : classes.active}>
        <Typography variant="body1" color={completed ? "primary" : "secondary"}>{icon}</Typography>
      </div>
    )
  }

  return (
    <Box className={classes.main}>
      <Stepper alternativeLabel activeStep={stepNum} connector={<CustomStepConnector />}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel classes={labelStyles} StepIconComponent={StepButton}>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  )
}

export default CustomStepper
