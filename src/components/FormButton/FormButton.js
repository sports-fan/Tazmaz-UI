import React from 'react'
import { Button } from '@mui/material'

const FormButton = ({startIcon, endIcon, text, className, ...props}) => {
  return (
    <Button
      className={className}
      startIcon={startIcon}
      endIcon={endIcon}
      {...props}
    >
      {text}
    </Button>
  )
}

export default FormButton
