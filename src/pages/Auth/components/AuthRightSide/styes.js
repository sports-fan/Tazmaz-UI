import { makeStyles } from "@mui/styles"

export default makeStyles(theme => ({
  main: {
    [theme.breakpoints.down('sm')]: {
      minWidth: 375,
      minHeight: 812
    },
    width: '100%',
    height: '100%',
  },
  logo: {
    [theme.breakpoints.down('lg')]: {
      paddingTop: 91,
    },
    display: 'flex',
    justifyContent: 'flex-start',
    paddingTop: 38,
    position: 'relative',
  },
  backToHome: {
    display: 'flex',
    justifyContent:'flex-end',
    alignItems: 'center',
    paddingTop: 44,
  },
  bottomLogo: {
    [theme.breakpoints.down('sm')]: {
      marginTop: 0,
    },
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 28,
  },
  u: {
    color: theme.palette.primary.main,
    paddingRight: 5
  },
  stepper: {
    [theme.breakpoints.down('sm')]: {
      marginTop: 54,
      paddingBottom: 18
    },
    marginTop: 65,
    paddingBottom: 29
  }
}))