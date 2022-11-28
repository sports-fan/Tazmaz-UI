import { makeStyles } from "@mui/styles"

export default makeStyles(theme => ({
  main: {
    [theme.breakpoints.down('sm')]: {
      position: 'relative'
    },
    width: '100%',
    height: 194,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#474E9F'
  },
  logo: {
    [theme.breakpoints.down('sm')]: {
      position: 'absolute',
      top: 19,
      right: 20,
    },
    paddingTop: 35
  }
}))
