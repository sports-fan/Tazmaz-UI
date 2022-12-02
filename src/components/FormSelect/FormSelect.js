import * as React from 'react';
import cn from 'classnames'
import { MenuItem, FormControl, Select, InputAdornment, FormHelperText } from '@mui/material';

import useStyles from './styles'

const FormSelect = ({helperClass, error, options, adorementText, className, field}) => {
  const classes = useStyles()
  return (
    <FormControl sx={{width: '100%' }} className={classes.main}>
      <Select
        className={className}
        startAdornment={
          <InputAdornment position="start">{adorementText}</InputAdornment>
        }
        {...field}
        error={Boolean(error)}
      >
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>{option.label}</MenuItem>
        ))}
      </Select>
      {error &&   
        <FormHelperText className={cn(classes.helperText,helperClass)} error={Boolean(error)}>
          {error.message}
        </FormHelperText>
      }
    </FormControl>
  )
}

export default FormSelect
