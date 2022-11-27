import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import {Select, InputAdornment} from '@mui/material';

const FormSelect = ({options, adorementText}) => {
  const [value, setValue] = React.useState('')

  const handleChange = (event) => {
    setValue(event.target.value);
  }

  return (
    <FormControl sx={{width: '100%' }}>
      <Select
        value={value}
        onChange={handleChange}
        startAdornment={
          <InputAdornment position="start">{adorementText}</InputAdornment>
        }
      >
        {options.map((option, id) => (
          <MenuItem value={id}>{option}</MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}

export default FormSelect
