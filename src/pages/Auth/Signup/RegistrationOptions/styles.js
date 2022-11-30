import { makeStyles } from "@mui/styles"

export default makeStyles(theme => ({
  loginForm: {
    [theme.breakpoints.down('lg')]: {
      marginTop: 26
    },
    marginTop: 47
  },
  leftBGColor: {
    backgroundColor: '#413B71',
  },
  titleColor: {
    color: '#FFFFFF'
  },
  logo: {
    display: "flex",
    justifyContent: 'flex-end'
  },
  title2: {
    marginRight: 117
  },
  mb6: {
    [theme.breakpoints.down('lg')]: {
      marginBottom: 31
    },
    marginBottom: theme.spacing(5)
  },
  loginWithGoogle: {
    marginTop: '11px ! important'
  },
  loginWithInput: {
    marginTop: '15px ! important'
  },
  divider: {
    width: '100%',
    marginTop: '20px ! important',
    marginBottom: '20px ! important',
  },
  forgotPassword: {
    [theme.breakpoints.down('lg')]: {
      alignItems: 'flex-start'
    },
    display: 'flex',
    flexDirection: 'row-reverse',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginTop: 15
  },
  forgotText: {
    [theme.breakpoints.down('lg')]: {
      flexDirection: 'column',
      alignItems: 'flex-start'
    },
    display: 'flex',
  },
  formRedirect: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginTop: 69
  },
  email: {
    top: '56px !important',
    left: '90px !important',
  }
}))