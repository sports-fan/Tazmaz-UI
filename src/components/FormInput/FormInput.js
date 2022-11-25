import { useState, useCallback  } from "react"
import { TextField, InputAdornment } from "@mui/material"

const FormInput = ({adorementText, icon, styles}) => {
  const [value, setValue] = useState(null)

  const handleChange = useCallback((e) => {
    setValue(e.target.value)
  }, [])

  return (
    <TextField
      dir='rtl'
      className={styles}
      value={value}
      onChange={e => handleChange(e)}
      InputProps={{
        startAdornment: (<InputAdornment position="start">{icon}{adorementText}</InputAdornment>),
        endAdornment: <InputAdornment position="end"></InputAdornment>,
      }}
      color='secondary'
      variant="outlined"
    />
  )
}

export default FormInput
