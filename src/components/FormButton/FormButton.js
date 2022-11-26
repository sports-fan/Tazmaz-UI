import React from 'react'
import { Button } from '@mui/material'

const FormButton = ({startIcon, endIcon, text, variant, color, styles}) => {
  return (
    <Button
      className={styles}
      variant={variant}
      color={color}
      startIcon={startIcon}
      endIcon={endIcon}
      sx={{fontSize: 16, }}
    >
      {text}
    </Button>
  )
}

export default FormButton
