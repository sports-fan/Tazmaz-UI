import { makeStyles } from "@mui/styles";

export default makeStyles(theme => ({
  main: {
    height: '100%',
    minHeight: 1080,
    minWidth: 375,
    [theme.breakpoints.down('sm')]: {
      position: 'relative',
    },
  },
  title: {
    [theme.breakpoints.down('sm')]: {
      position: 'absolute',
      top: 240,
      paddingLeft: 26,
      paddingRight: 6,
      marginTop: 0,
    },
    display: 'flex',
    justifyContent: 'center',
    marginTop: 5,
  },
  formTitle: {
    display: 'flex',
    justifyContent: 'flex-start',
    [theme.breakpoints.down('lg')]: {
      position: 'absolute',
      top: 510
    },
    [theme.breakpoints.down('sm')]: {
      position: 'absolute',
      top: 425
    },
  },
  formAction: {
    [theme.breakpoints.down('sm')]: {
      marginTop: 39,
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
      marginTop: 12
    },
    marginTop: 36
  },
  mt: {
    [theme.breakpoints.down('sm')]: {
      marginTop: 0
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
    [theme.breakpoints.down('sm')]: {
      marginTop: 0
    },
    marginTop: 8
  },
  couponInput: {
    "& .MuiInputBase-input.Mui-disabled": {
      WebkitTextFillColor: "#A6ADBF",
    },
  },
}))