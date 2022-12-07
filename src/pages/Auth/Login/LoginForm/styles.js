import { makeStyles } from "@mui/styles"

export default makeStyles(theme => ({
  loginForm: {
    [theme.breakpoints.down('lg')]: {
      marginTop: 36
    },
    marginTop: 106
  },
  leftBGColor: {
    backgroundColor: '#F0F1F8',
  },
  titleColor: {
    color: '#474E9F'
  },
  mb: {
    [theme.breakpoints.down('sm')]: {
      marginBottom: 23
    },
    marginBottom: 34
  },
  caramelize: {
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    },
    marginBottom: 10
  },
  loginWithGoogle: {
    marginTop: '11px ! important'
  },
  divider: {
    width: '100%',
    marginTop: '15px ! important',
    marginBottom: '7px ! important',
  },
  forgetText: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: 10
  },
  forgetTag: {
    textDecoration: 'none',
    color: '#000000'
  },
  register: {
    display: 'flex',
    justifyContent: 'center',
    [theme.breakpoints.down('lg')]: {
      marginBottom: 6
    },
    marginTop: 33,
  },
  submitButton: {
    marginTop: 8
  },
  u: {
    textDecoration: 'none'
  }
}))