import { makeStyles } from "@mui/styles"

export default makeStyles(theme => ({
  main: {
    [theme.breakpoints.down('lg')]: {
      paddingTop: 91,
      paddingRight: '5%'
    },
    display: 'flex',
    justifyContent: 'flex-end',
    paddingTop: 38,
    position: 'relative'
  }
}))