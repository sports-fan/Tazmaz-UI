import * as React from 'react';
import cn from 'classnames'
import { MenuItem, FormControl, Select, FormHelperText } from '@mui/material';

import useStyles from './styles'

const FormSelect = ({helperClass, error, options, className, field, placeholder, placeholderClass}) => {
  const classes = useStyles()
  return (
    <FormControl sx={{width: '100%' }} className={classes.main}>
      <Select
        displayEmpty
        className={className}
        defaultValue="none"
        {...field}
        error={Boolean(error)}
        renderValue={field.value !== "" ? undefined : (selected) => <div className={cn(classes.placeholder, placeholderClass)}>{placeholder}</div>}
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
