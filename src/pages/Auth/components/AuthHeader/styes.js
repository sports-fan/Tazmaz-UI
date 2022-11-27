import { makeStyles } from "@mui/styles"

export default makeStyles(theme => ({
  logo: {
    [theme.breakpoints.down('lg')]: {
      paddingTop: 91,
    },
    display: 'flex',
    justifyContent: 'flex-start',
    paddingTop: 38,
    
  },
  backToHome: {
    // [theme.breakpoints.down('lg')]: {
    //   left: 20,
    //   top: 54
    // },
    // position: 'absolute',
    display: 'flex',
    justifyContent:'flex-end',
    alignItems: 'center',
    paddingTop: 44,

    // flexDirection: 'row-reverse',
    // right: 540,
    // top: 44
  },
}))