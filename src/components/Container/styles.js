import { makeStyles } from "@mui/styles"

export default makeStyles(theme => ({
  main: {
    [theme.breakpoints.down('lg')]: {
        paddingLeft: '4.5%',
        paddingRight: '4.5%'
    },
  }
}))