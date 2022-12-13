import { FormHelperText, InputAdornment, IconButton, TextField } from "@mui/material"
import { VisibilityOff, Visibility } from "@mui/icons-material"
import cn from 'classnames'
import useStyles from './styles'

const FormPasswordInput = ({onMouseDownPassword, onClickShowPassword, showPassword, helperClass, field, error, name, form, label, startAdornment, endAdornment, icon, className, id, readOnly, ...props}) => {
  const classes = useStyles()
  return (
    <div className={cn(classes.main, className)}>
      <TextField
        id={id}
        type={showPassword ? 'text' : 'password'}
        dir='rtl'
        label={label}
        error={Boolean(error)}
        className={cn(classes.input)}
        InputProps={{
          endAdornment:
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={onClickShowPassword}
                onMouseDown={onMouseDownPassword}
              >
                {showPassword ? <VisibilityOff className={classes.eye}/> : <Visibility className={classes.eye}/>}
              </IconButton>
            </InputAdornment>
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

export default FormPasswordInput
