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
    },
    "& .MuiInputBase-input.Mui-disabled": {
      WebkitTextFillColor: "black",
      WebkitBackgroundColor: '#F5F5F5'
    },
  },
  main: {
    display:'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    position: 'relative',
  },
  helperText: {
    position: 'absolute',
    top: 57,
  }
}))