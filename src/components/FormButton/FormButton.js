import React from 'react'
import { Button } from '@mui/material'

const FormButton = ({startIcon, endIcon, text, styles}) => {
  return (
    <Button className={styles} variant='outlined' startIcon={startIcon} endIcon={endIcon}>{text}</Button>
  )
}

export default FormButton
