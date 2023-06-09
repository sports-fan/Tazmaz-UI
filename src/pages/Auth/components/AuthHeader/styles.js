import { makeStyles } from "@mui/styles"

export default makeStyles(theme => ({
  header: {
    position: 'relative',
    paddingBottom: 49
  },
  headerDark: {
    [theme.breakpoints.down('lg')]: {
      paddingBottom: 100
    },
    [theme.breakpoints.down('sm')]: {
      paddingBottom: 84
    },
    position: 'relative',
    paddingBottom: 73
  },
  loginLogo: {
    [theme.breakpoints.down('xl')]: {
      right: 60
    },
    [theme.breakpoints.down('lg')]: {
      right: 10
    },
    [theme.breakpoints.down('md')]: {
      right: 30
    },
    [theme.breakpoints.down('sm')]: {
      top: 28,
      right: 20
    },
    position: 'absolute',
    top: 25,
    right: 86
  },
  logo: {
    [theme.breakpoints.down('xl')]: {
      right: 50
    },
    [theme.breakpoints.down('lg')]: {
      right: 10
    },
    [theme.breakpoints.down('md')]: {
      right: 40
    },
    [theme.breakpoints.down('sm')]: {
      top: 54,
      right: 20
    },
    position: 'absolute',
    top: 21,
    right: 86
  },
  logoDark: {
    [theme.breakpoints.down('xl')]: {
      right: 86
    },
    [theme.breakpoints.down('lg')]: {
      right: 16
    },
    [theme.breakpoints.down('md')]: {
      right: 50
    },
    [theme.breakpoints.down('sm')]: {
      top: 44,
      right: 16
    },
    position: 'absolute',
    top: 38,
    right: 90
  },
  backToHome: {
    [theme.breakpoints.down('xl')]: {
      left: 50,
    },
    [theme.breakpoints.down('lg')]: {
      left: 10,
    },
    [theme.breakpoints.down('lg')]: {
      left: 40,
    },
    [theme.breakpoints.down('sm')]: {
      left: 20,
      top: 56
    },
    position: 'absolute',
    display: 'flex',
    justifyContent:'flex-end',
    alignItems: 'center',
    left: 67,
    top: 41,
  },
  backToHomeDark: {
    [theme.breakpoints.down('lg')]: {
      left: 15,
    },
    [theme.breakpoints.down('sm')]: {
      left: 20,
      top: 48
    },
    position: 'absolute',
    display: 'flex',
    justifyContent:'flex-end',
    alignItems: 'center',
    left: 28,
    top: 44,
  },
  textLight: {
    color: '#FFFFFF',
    paddingLeft: 8,
    textDecoration: 'none'
  },
  textDark: {
    color: '#000000',
    paddingLeft: 8,
    textDecoration: 'none'
  },
}))