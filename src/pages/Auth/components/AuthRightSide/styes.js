import { makeStyles } from "@mui/styles"

export default makeStyles(theme => ({
  main: {
    [theme.breakpoints.down('lg')]: {
      paddingTop: 91,
      paddingRight: '5%'
    },
    display: 'flex',
    justifyContent: 'flex-start',
    paddingTop: 38,
    position: 'relative',
    paddingRight: '16%'
  },
  backToHome: {
    [theme.breakpoints.down('lg')]: {
      left: 20,
      top: 54
    },
    position: 'absolute',
    display: 'flex',
    flexDirection: 'row-reverse',
    left: 1228,
    top: 44
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
    marginTop: 38,
    marginBottom: 20
  },
}))