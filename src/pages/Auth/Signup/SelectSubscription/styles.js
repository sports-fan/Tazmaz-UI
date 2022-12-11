import { makeStyles } from "@mui/styles";

export default makeStyles(theme => ({
  main: {
    height: '100%',
    minHeight: 1080,
  },
  title: {
    [theme.breakpoints.down('sm')]: {
      marginTop: 0,
      marginBottom: 0
    },
    display: 'flex',
    justifyContent: 'center',
    marginTop: 5,
  },
  formTitle: {
    display: 'flex',
    justifyContent: 'flex-start',
  },
  formAction: {
    [theme.breakpoints.down('sm')]: {
      marginTop: 39
    },
    display: 'flex',
  },
  switchDiv: {
    marginTop: 16
  },
  switch: {
    display: 'flex',
    justifyContent: 'center',
  },
  switchLeft: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  },
  mt36: {
    [theme.breakpoints.down('sm')]: {
      marginTop: 18
    },
    marginTop: 36
  },
  mt: {
    [theme.breakpoints.down('sm')]: {
      marginTop: 18
    },
    marginTop: 54
  },
  subscriptions: {
    [theme.breakpoints.down('sm')]: {
      height: '100%'
    },
    height: 563,
    marginBottom: 5
},
  formButton: {
    marginTop: 8
  },
  couponInput: {
    "& .MuiInputBase-input.Mui-disabled": {
      WebkitTextFillColor: "#A6ADBF",
    },
  },
}))