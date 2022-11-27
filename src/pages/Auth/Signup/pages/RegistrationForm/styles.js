import { makeStyles } from "@mui/styles"

export default makeStyles(theme => ({
  formTitle: {
    [theme.breakpoints.down('sm')]: {
      marginTop: 30,
      marginBottom: 30
    },
    display: 'flex',
    flexDirection:'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 61,
    marginBottom: 61
  },
  leftBGColor: {
    backgroundColor: '#F9F9F9'
  },
  logoBGColor: {
    backgroundColor: theme.palette.primary.main,
  },
  mb8: {
    marginBottom: theme.spacing(1)
  },
  mtb8: {
    marginBottom: theme.spacing(1),
    marginTop: theme.spacing(1)
  },
  mb16t8: {
    marginBottom: theme.spacing(2),
    marginTop: theme.spacing(1)
  },
  formActions: {
    [theme.breakpoints.down('sm')]: {
      marginTop: 58,
    },
    marginTop: 70,
    marginBottom: 30
  }
}))