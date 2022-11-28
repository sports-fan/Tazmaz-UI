import { makeStyles } from "@mui/styles"

export default makeStyles(theme => ({
  main: {
    display: 'flex',
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