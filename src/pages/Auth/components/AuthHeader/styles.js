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
      paddingBottom: 144
    },
    position: 'relative',
    paddingBottom: 73
  },
  logo: {
    [theme.breakpoints.down('lg')]: {
      right: 30
    },
    [theme.breakpoints.down('xl')]: {
      right: 60
    },
    [theme.breakpoints.down('sm')]: {
      top: 50,
      right: 20
    },
    position: 'absolute',
    top: 25,
    right: 86
  },
  logoDark: {
    [theme.breakpoints.down('xl')]: {
      top: 38,
      right: 86
    },
    [theme.breakpoints.down('lg')]: {
      top: 38,
      right: 16
    },
    [theme.breakpoints.down('md')]: {
      top: 38,
      right: 50
    },
    [theme.breakpoints.down('sm')]: {
      top: 91,
      right: 16
    },
    position: 'absolute',
    top: 25,
    right: 117
  },
  backToHome: {
    [theme.breakpoints.down('sm')]: {
      top: 56
    },
    [theme.breakpoints.down('lg')]: {
      left: 30,
    },
    [theme.breakpoints.down('xl')]: {
      left: 50,
    },
    position: 'absolute',
    display: 'flex',
    justifyContent:'flex-end',
    alignItems: 'center',
    left: 67,
    top: 41,
  },
  backToHomeDark: {
    [theme.breakpoints.down('sm')]: {
      left: 20,
      top: 58
    },
    position: 'absolute',
    display: 'flex',
    justifyContent:'flex-end',
    alignItems: 'center',
    left: 28,
    top: 48,
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