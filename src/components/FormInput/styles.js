import { makeStyles } from "@mui/styles"

export default makeStyles(theme => ({
  input: {
    '& input[type=number]': {
        '-moz-appearance': 'textfield'
    },
    '& input[type=number]::-webkit-outer-spin-button': {
        '-webkit-appearance': 'none',
        margin: 0
    },
    '& input[type=number]::-webkit-inner-spin-button': {
        '-webkit-appearance': 'none',
        margin: 0
    }
  },
  main: {
    position: 'relative'
  },
  helperText: {
    position: 'absolute',
    width: 300,
    top: 65,
    left: 200
  }
}))