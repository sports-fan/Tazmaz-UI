import { makeStyles } from "@mui/styles"

export default makeStyles(theme => ({
  main: {
    width: '100%',
    height: '100vh',
  },
  leftSide: {
    [theme.breakpoints.down('md')]: {
      display: 'none'
    },
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100vh',
    backgroundColor: theme.palette.primary.main,
  },
  titleDiv: {
    width: 523,
    height: 24,
  },
  title: {
    textAlign: 'center',
    color: '#FFFFFF',
  },
  imageDiv: {
    paddingLeft: '7%',
    paddingRight: '7%',
  },
  image: {
    display: 'block',
    width: '100%',
    height: '100%'
  },
  loginForm: {
    [theme.breakpoints.down('lg')]: {
      marginTop: 26
    },
    marginTop: theme.spacing(8)
  },
  backToHome: {
    [theme.breakpoints.down('md')]: {
      top: 54
    },
    position: 'absolute',
    display: 'flex',
    marginLeft: 28,
    top: 44
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
  bottomLogo: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  register: {
    [theme.breakpoints.down('lg')]: {
      marginTop: 22,
      marginBottom: 6
    },
    marginTop: 48,
    marginBottom: 30
  },
  loginWithApple: {
    width: '100%',
    height: 50,
    color: '#000000',
    border: '1, solid',
    borderRadius: 10
  },
  loginWithGoogle: {
    width: '100%',
    height: 50,
    color: '#000000',
    border: '1, solid',
    borderRadius: 10,
    marginTop: 11
  },
  loginWithInput: {
    width: '100%',
    height: 50,
    border: '1, solid',
    borderRadius: 10,
    marginTop: 18
  },
  loginField: {
    width: '100%',
    height: 50,
    border: '1, solid',
    borderRadius: 10,
  },
  divider: {
    width: '100%',
    marginTop: 20,
    marginBottom: 20
  },
  forgotPassword: {
    [theme.breakpoints.down('lg')]: {
      alignItems: 'flex-start'
    },
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginTop: 15
  },
  forgotText: {
    [theme.breakpoints.down('lg')]: {
      flexDirection: 'column',
      alignItems: 'flex-end'
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
