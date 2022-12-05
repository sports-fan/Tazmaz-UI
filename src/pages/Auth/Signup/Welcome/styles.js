import { makeStyles } from "@mui/styles"

export default makeStyles((theme) => ({
  main: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: 49
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
  actions: {
    paddingBottom: 1
  }
}))