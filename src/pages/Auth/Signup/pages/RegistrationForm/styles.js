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
    marginTop: 49,
    marginBottom: 49
  },
  leftBGColor: {
    backgroundColor: '#F9F9F9'
  },
  titleColor: {
    color: theme.palette.primary.main,
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
      marginTop: 50,
    },
    marginTop: 64,
    marginBottom: 40
  }
}))