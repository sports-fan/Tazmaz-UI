import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { FormHelperText, Grid, OutlinedInput, FormControl } from "@mui/material"
import useStyles from './styles'

const Passcode = ({ field, name, error, className, numInputs = 6 }) => {
  const blankValueArray = useMemo(() => Array(numInputs).fill(''), [numInputs])
  const inputsRef = useRef([])
  const [activeIndex, setActiveIndex] = useState(0)
  const classes = useStyles()

  const handleFocus = useCallback((index) => (event) => {
    setActiveIndex(index)
  }, [setActiveIndex])

  const handleKeydown = useCallback((index) => (event) => {
    console.log(event.keyCode)
    let newValue;
    let newIndex;
    const values = (field.value || '').split('')
    if (event.keyCode >= 48 && event.keyCode <= 57) {
      newValue = blankValueArray.map((_, idx) => (
        idx === index ? String.fromCharCode(event.keyCode) : (values[idx] || ' ')
      ))
      newIndex = index + 1
    } else if (event.keyCode === 8) {
      newValue = blankValueArray.map((_, idx) => (
        idx === index ? ' ' : (values[idx] || ' ')
      ))
      newIndex = index - 1
    } else if (event.keyCode === 46) {
      newValue = blankValueArray.map((_, idx) => (
        idx > index ? (values[idx + 1] || ' ') : (values[idx] || ' ')
      ))
    } else return
    field.onChange(newValue.join(''))
    if (newIndex >= 0 && newIndex < numInputs) {
      setActiveIndex(newIndex)
      inputsRef.current[newIndex].focus()
      inputsRef.current[newIndex].select()
    }
  }, [field, blankValueArray, numInputs])
  
  useEffect(() => {
    inputsRef.current = inputsRef.current.slice(0, numInputs);
  }, [numInputs]);

  return (
    <div>
      <Grid container justifyContent='center' columnSpacing={{lg:1, xl: 2, md:1, sm:1, xs: 1}} className={className}>
        {blankValueArray.map((v, index) => (
          <Grid item lg={2} xl={1.6} md={1.7} sm={1} xs={1.7} key={index}>
            <FormControl fullWidth  className={classes.main}>
              <OutlinedInput
                color='secondary'
                className={className}
                inputProps={{
                  ref: el => inputsRef.current[index] = el,
                  focus: activeIndex === index ? "focus" : undefined,
                  className: classes.input
                }}
                error={Boolean(error)}
                value={(field.value || '').split('')[index] || ''}
                onKeyDown={handleKeydown(index)}
                onFocus={handleFocus(index)}
              />
            </FormControl>
          </Grid>
        ))}
      </Grid>
      {error && 
        <FormHelperText className={classes.helperText} error={Boolean(error)}>
          {error.message}
        </FormHelperText>
      }
    </div>
  )
}

export default Passcode
