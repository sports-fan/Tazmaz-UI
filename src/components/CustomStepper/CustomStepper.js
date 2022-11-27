import { Box, Stepper, Step, StepLabel } from "@mui/material";
import useStyles from './styes'

const CustomStepper = () => {
  const classes = useStyles()
  const steps = [
    'פרטי עסק',
    'בחירת מנוי',
    'ברוכים הבאים',
  ]

  return (
    <Box className={classes.main}>
      <Stepper className={classes.root} activeStep='1' alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel

            >
              {label}
            </StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  )
}

export default CustomStepper
