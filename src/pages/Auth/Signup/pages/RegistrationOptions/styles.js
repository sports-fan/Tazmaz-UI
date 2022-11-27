import { makeStyles } from "@mui/styles"

export default makeStyles(theme => ({
  loginForm: {
    [theme.breakpoints.down('lg')]: {
      marginTop: 26
    },
    marginTop: theme.spacing(8)
  },
  leftBGColor: {
    backgroundColor: theme.palette.primary.main,
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
  loginWithGoogle: {
    marginTop: '11px ! important'
  },
  loginWithInput: {
    marginTop: '18px ! important'
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
