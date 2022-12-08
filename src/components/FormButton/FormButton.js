import React from 'react'
import { Button, FormHelperText } from '@mui/material'
import useStyles from './styles'

const FormButton = ({onClick, error, startIcon, endIcon, text, className, ...props}) => {
  const classes = useStyles()
  return (
    <div className={classes.main}>
      <Button
        className={className}
        startIcon={startIcon}
        endIcon={endIcon}
        onClick={onClick}
        {...props}
      >
        {text}
      </Button>
      {error && 
      <FormHelperText className={classes.helperText} error={Boolean(error)}>
        {error}
      </FormHelperText>
      }
    </div>
  )
}

export default FormButton
