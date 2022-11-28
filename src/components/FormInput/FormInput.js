import { useState, useCallback  } from "react"
import { InputAdornment, OutlinedInput, FormControl, InputLabel } from "@mui/material"

const FormInput = ({label, startAdornment, endAdornment, icon, className, id, ...props}) => {
  const [value, setValue] = useState('')

  const handleChange = useCallback((e) => {
    setValue(e.target.value)
  }, [])

  return (
    <FormControl fullWidth>
      {label && <InputLabel htmlFor={id}>{label}</InputLabel>}
      <OutlinedInput
        id={id}
        className={className}
        dir='rtl'
        value={value}
        onChange={e => handleChange(e)}
        startAdornment={<InputAdornment position="start">{startAdornment}</InputAdornment>}
        endAdornment={<InputAdornment position="end">{icon}{endAdornment}</InputAdornment>}
        color='secondary'
        label={label}
        {...props}
      />
    </FormControl>
  )
}

export default FormInput
