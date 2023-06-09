import { makeStyles } from "@mui/styles";

export default makeStyles(theme => ({
  main: {
    [theme.breakpoints.down('sm')]: {
      paddingTop: 50,
      paddingLeft: 16,
      paddingRight: 16,
    },
    backgroundColor: '#F5F5F5',
    paddingTop: 32,
    paddingLeft: 44,
    paddingRight: 44,
    paddingBottom: 65,
  },
  back: {
    [theme.breakpoints.down('sm')]: {
      position: 'absolute',
      top: 56,
      left: 20
    },
    display: 'flex',
    justifyContent: 'flex-end'
  },
  backLetter: {
    [theme.breakpoints.down('sm')]: {
      color: '#FFFFFF'
    },
  },
  text: {
    [theme.breakpoints.down('sm')]: {
      color: '#FFFFFF',
    },
    paddingLeft: 8,
    color: '#000000',
    textDecoration: 'none'
  }
}))