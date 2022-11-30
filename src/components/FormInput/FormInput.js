import { FormHelperText, InputAdornment, OutlinedInput, FormControl, InputLabel } from "@mui/material"
import cn from 'classnames'
import useStyles from './styles'
// import * as R from 'ramda'

const FormInput = ({helperClass, field, error, name, form, label, startAdornment, endAdornment, icon, className, id, readOnly, ...props}) => {
  const classes = useStyles()
  return (
    <FormControl fullWidth  className={classes.main}>
      {label && <InputLabel htmlFor={id}>{label}</InputLabel>}
      <OutlinedInput
        id={id}
        dir='rtl'
        label={label}
        color='secondary'
        error={Boolean(error)}
        className={cn(classes.input, className)}
        endAdornment={icon && <InputAdornment position="end">{icon}</InputAdornment>}
        inputProps={
          readOnly
            ? {
                readOnly: true
              }
            : {
            }
        }
        {...field}
        {...props}
      />
      {error && 
        <FormHelperText className={cn(classes.helperText, helperClass)} error={Boolean(error)}>
          {error.message}
        </FormHelperText>
      }
    </FormControl>
  )
}

export default FormInput
