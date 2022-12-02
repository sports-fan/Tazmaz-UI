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
    marginTop: 39,
    marginBottom: 39
  },
  phoneNumber: {
    position: 'absolute',
    top: '59px !important',
    right: '5px !important'
  },
  firstName: {
    position: 'absolute',
    top: '57px !important',
  },
  lastName: {
    position: 'absolute',
    top: '57px !important',
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
      marginTop: 50,
    },
    marginTop: 64,
    marginBottom: 40
  },
  phonePrefix: {
    position: 'absolute',
    top: 59,
  }
}))
