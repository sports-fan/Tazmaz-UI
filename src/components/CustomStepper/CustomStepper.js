import { Grid, Stepper, Step, StepLabel, Typography } from "@mui/material";
import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';
import { useTranslation } from 'react-i18next';
import { styled } from '@mui/material/styles';
import useStyles, { useLabelStyles } from './styles'

const CustomStepper = ({stepNum}) => {
  const { t } = useTranslation()
  const classes = useStyles()
  const labelStyles = useLabelStyles()
  const steps = [
    t('common.step1'),
    t('common.step2'),
    t('common.step3'),
  ]

  const CustomStepConnector = styled(StepConnector)(({ theme, ...others }) => ({
    [`&.${stepConnectorClasses.alternativeLabel}`]: {
      top: 18,
      left: 'calc(-50% + 20px)',
      right: 'calc(50% + 20px)',
    },
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: 'rgba(255, 255, 255, 0.2)',
      borderTopWidth: 3,
      borderRadius: 1,
    },
    [`&.${stepConnectorClasses.completed}`]: {
      [`& .${stepConnectorClasses.line}`]: {
        borderColor: '#ffffff'
      },
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
    <Grid container justifyContent='center' className={classes.main}>
      <Grid item lg={12} md={12} sm={12} xs={12}>
        <Stepper alternativeLabel activeStep={stepNum} connector={<CustomStepConnector />}>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel classes={labelStyles} StepIconComponent={StepButton}>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </Grid>
    </Grid>
  )
}

export default CustomStepper
