import { makeStyles } from "@mui/styles"

export default makeStyles(theme => ({
  leftSide: {
    [theme.breakpoints.down('md')]: {
      display: 'none'
    },
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100vh',
    backgroundColor: theme.palette.primary.main,
  },
  titleDiv: {
    width: 523,
    height: 24,
  },
  title: {
    textAlign: 'center',
    color: '#FFFFFF',
  },
  imageDiv: {
    paddingLeft: '7%',
    paddingRight: '7%',
  },
  image: {
    display: 'block',
    width: '100%',
    height: '100%'
  },
}))