import { makeStyles } from "@mui/styles"

export default makeStyles((theme) => ({
  container: {
    minHeight: 1080
  },
  main: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: 66
  },
  logo: {
    [theme.breakpoints.down('sm')]: {
      width: 353,
      height: 194
    },
    marginTop: 26
  },
  title: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  bottom: {
    marginBottom: 48
  }
}))