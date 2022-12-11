import { makeStyles } from "@mui/styles"

export default makeStyles(theme => ({
  formTitle: {
    [theme.breakpoints.down('sm')]: {
      marginTop: 30,
      marginBottom: 29
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
  titleColor: {
    color: theme.palette.primary.main,
  },
  logoBGColor: {
    backgroundColor: theme.palette.primary.main,
  },
  email: {
    marginBottom: theme.spacing(1),
    '& .MuiInputBase-root.Mui-disabled': {
      backgroundColor: '#F5F5F5',
      color: '#ffffff'
    },
  },
  formActions: {
    [theme.breakpoints.down('sm')]: {
      marginTop: 58,
      marginBottom: 50
    },
    marginTop: 71,
    marginBottom: 49
  },
}))
