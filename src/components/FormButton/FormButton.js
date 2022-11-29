import React from 'react'
import { Button } from '@mui/material'

const FormButton = ({onClick, startIcon, endIcon, text, className, ...props}) => {
  return (
    <Button
      className={className}
      startIcon={startIcon}
      endIcon={endIcon}
      onClick={onClick}
      {...props}
    >
      {text}
    </Button>
  )
}

export default FormButton
