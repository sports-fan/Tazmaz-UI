import { makeStyles } from "@mui/styles"

export default makeStyles(theme => ({
  main: {
    [theme.breakpoints.down('lg')]: {
      marginTop: 26
    },
    marginTop: 90
  },
  mb: {
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
    marginTop: 34
  },
  text: {
    display: 'flex',
    justifyContent: 'center',
    paddingTop: 10,
    paddingBottom: 225
  },
  passcode: {
    marginTop: 17,
    direction: 'ltr'
  },
  resend: {
    color: '#000000',
    textDecoration: 'none'
  }
}))
