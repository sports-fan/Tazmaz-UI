import { makeStyles } from "@mui/styles"

export default makeStyles(theme => ({
  main: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#474E9F',
  },
  logo: {
    [theme.breakpoints.down('sm')]: {
      position: 'absolute',
      marginTop: 54,
      right: 20,
    },
    marginTop: 35
  },
  stepper: {
    [theme.breakpoints.down('sm')]: {
      marginTop: 103,
      marginBottom: 18
    },
    marginTop: 45,
    marginBottom: 24
  }
}))
