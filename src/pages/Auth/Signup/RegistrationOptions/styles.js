import { makeStyles } from "@mui/styles"

export default makeStyles(theme => ({
  loginForm: {
    [theme.breakpoints.down('sm')]: {
      marginTop: 26
    },
    marginTop: 95,
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
  mb55: {
    [theme.breakpoints.down('lg')]: {
      marginBottom: 28
    },
    marginBottom: 55
  },
  loginWithGoogle: {
    width: '100%',
    marginTop: '11px ! important',
    borderRadius: '8px',
  },
  divider: {
    [theme.breakpoints.down('sm')]: {
      marginTop: 20,
      marginBottom: 12
    },
    width: '100%',
    marginTop: '26px ! important',
    marginBottom: '10px ! important',
  },
  termAndPolicy: {
    [theme.breakpoints.down('lg')]: {
      alignItems: 'flex-start'
    },
    display: 'flex',
    flexDirection: 'row-reverse',
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    marginTop: 15
  },
  forgotText: {
    [theme.breakpoints.down(1880)]: {
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
    marginTop: 64
  },
  u: {
    color: theme.palette.primary.main,
    cursor: 'pointer'
  },
  returnTologin: {
    color: '#474E9F'
  },
  formButton: {
    marginTop: 10
  },
  redirectToLogin: {
    display: 'flex',
    justifyContent: 'center',
    [theme.breakpoints.down('lg')]: {
      marginTop: 62,
      marginBottom: 6
    },
    marginTop: 69,
    marginBottom: 22
  },
  underlined: {
    display: 'flex'
  }
}))
