import { makeStyles } from "@mui/styles"

export default makeStyles(theme => ({
  main: {
    [theme.breakpoints.down('sm')]: {
      marginTop: 36
    },
    marginTop: 112
  },
  mb: {
    [theme.breakpoints.down('sm')]: {
      marginTop: 16
    },
    marginTop: 34
  },
  leftBGColor: {
    backgroundColor: '#F0F1F8',
  },
  titleColor: {
    color: '#474E9F'
  },
  alignCenter: {
    textAlign: 'center'
  },
  codes: {
    marginTop: 29
  },
  actions: {
    [theme.breakpoints.down('sm')]: {
      marginTop: 26
    },
    marginTop: 34
  },
  text: {
    display: 'flex',
    justifyContent: 'center',
    paddingTop: 10,
    paddingBottom: 213
  },
  passcode: {
    marginTop: 10,
    direction: 'ltr'
  },
  resend: {
    color: '#000000',
    textDecoration: 'none'
  }
}))
