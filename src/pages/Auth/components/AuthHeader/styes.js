import { makeStyles } from "@mui/styles"

export default makeStyles(theme => ({
  header: {
    position: 'relative',
    paddingBottom: 49
  },
  headerDark: {
    [theme.breakpoints.down('sm')]: {
      paddingBottom: 144
    },
    position: 'relative',
    paddingBottom: 73
  },
  logo: {
    [theme.breakpoints.down('sm')]: {
      top: 50,
      right: 20
    },
    position: 'absolute',
    top: 25,
    right: 86
  },
  logoDark: {
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
      left: 20,
      top: 56
    },
    position: 'absolute',
    display: 'flex',
    justifyContent:'flex-end',
    alignItems: 'center',
    left: 67,
    top: 41
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
    top: 48
  },
  textLight: {
    color: '#FFFFFF'
  },
  textDark: {
    color: '#000000'
  }
}))