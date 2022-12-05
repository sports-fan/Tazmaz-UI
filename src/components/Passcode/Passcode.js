import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { FormHelperText, Grid, OutlinedInput, FormControl } from "@mui/material"
import useStyles from './styles'

const Passcode = ({ field, name, error, className, numInputs = 6 }) => {
  const blankValueArray = useMemo(() => Array(numInputs).fill(''), [numInputs])
  const inputsRef = useRef([])
  const [activeIndex, setActiveIndex] = useState(0)
  const classes = useStyles()
  const handleKeydown = useCallback((index) => (event) => {
    if (event.keyCode < 48 || event.keyCode > 57) return
    const values = (field.value || '').split('')
    const newValue = blankValueArray.map((_, idx) => (
      idx === index ? String.fromCharCode(event.keyCode) : values[idx]
    ))
    field.onChange(newValue.join(''))
    const newIndex = (index + 1) % numInputs
    setActiveIndex(newIndex)
    if (newIndex !== 0) {
      inputsRef.current[newIndex].focus()
      inputsRef.current[newIndex].select()
    } else {
      // event.target.dispatchEvent('keydown', { key: 9 })
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
                dir='rtl'
                color='secondary'
                className={className}
                inputProps={{
                  ref: el => inputsRef.current[index] = el,
                  focus: activeIndex === index ? "focus" : undefined,
                  className: classes.input
                }}
                value={(field.value || '').split('')[index] || ''}
                onKeyDown={handleKeydown(index)}
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
