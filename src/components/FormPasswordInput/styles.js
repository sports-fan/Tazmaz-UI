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
    "& .MuiInputBase-root.MuiOutlinedInput-root": {
      paddingLeft: 3
    },
    // "& .MuiInputAdorement-root": {
    //   marginLeft: 30
    // },
    "& input::placeholder": {
      color: "#A6ADBF",
      fontSize: 18,
      fontWeight: 400,
      lineHeight: '18px',
      opacity: 1
    },
    "& label": {
      color: "#A6ADBF",
      fontWeight: 400,
      lineHeight: '18px'
    }
  },
  main: {
    display:'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  helperText: {
    paddingRight: 14,
  },
  eye: {
    width: 32,
    height: 32
  }
}))