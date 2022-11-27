import React from 'react'
import { Button } from '@mui/material'

const FormButton = ({startIcon, endIcon, text, variant, color, className}) => {
  return (
    <Button
      className={className}
      variant={variant}
      color={color}
      startIcon={startIcon}
      endIcon={endIcon}
    >
      {text}
    </Button>
  )
}

export default FormButton
