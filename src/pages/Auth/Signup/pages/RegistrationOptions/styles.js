import { makeStyles } from "@mui/styles"

export default makeStyles(theme => ({
  loginForm: {
    [theme.breakpoints.down('lg')]: {
      marginTop: 26
    },
    marginTop: theme.spacing(8)
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
    marginBottom: theme.spacing(6)
  },
  loginWithApple: {
    width: '100%',
    height: 50,
  },
  loginWithGoogle: {
    width: '100%',
    height: 50,
    marginTop: '11px ! important'
  },
  loginWithInput: {
    width: '100%',
    height: 50,
    marginTop: '18px ! important'
  },
  loginField: {
    width: '100%',
    height: 50,
    border: '1, solid',
    borderRadius: 10,
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
  }
}))
