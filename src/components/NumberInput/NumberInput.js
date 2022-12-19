import React from 'react'
import { IMaskInput } from 'react-imask';
import { FormHelperText, TextField } from "@mui/material"
import cn from 'classnames'
import useStyles from './styles'

const TextMaskCustom = React.forwardRef(function TextMaskCustom(props, ref) {
  const { onChange, mask, ...other } = props;
  console.log(mask)
  return (
    <IMaskInput
      {...other}
      mask={mask}
      definitions={{
        '#': /[0-9]/,
      }}
      inputRef={ref}
      onAccept={(value) => onChange({ target: { name: props.name, value } })}
      overwrite
    />
  );
});

const NumberInput = ({mask, helperClass, field, error, name, form, label, startAdornment, endAdornment, icon, className, id, readOnly, ...props}) => {
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
          inputComponent: TextMaskCustom
        }}
        inputProps={{mask}}
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

export default NumberInput
