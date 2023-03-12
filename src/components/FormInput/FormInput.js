import { FormHelperText, InputAdornment, TextField } from "@mui/material"
import cn from 'classnames'
import useStyles from './styles'
// import * as R from 'ramda'

const FormInput = ({helperClass, field, error, name, form, label, startAdornment, endAdornment, icon, className, id, readOnly, ...props}) => {
  const classes = useStyles()
  return (
    <div className={cn(classes.main, className)}>
      <TextField
        id={id}
        dir='rtl'
        label={label}
        error={Boolean(error)}
        className={cn(classes.input)}
        InputLabelProps={{ shrink: true }}
        InputProps={{
          endAdornment: (icon && <InputAdornment position="end">{icon}</InputAdornment>)
        }}
        {...field}
        {...props}
      />
      {error && 
        <FormHelperText className={cn(classes.helperText, helperClass)} error={Boolean(error)}>
          {error.message}
        </FormHelperText>
      }
    </div>
  )
}

export default FormInput
