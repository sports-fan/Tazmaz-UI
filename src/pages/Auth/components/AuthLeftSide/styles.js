import { makeStyles } from "@mui/styles"

export default makeStyles(theme => ({
  main: {
    [theme.breakpoints.down('md')]: {
      display: 'none'
    },
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    minHeight: 1080
  },
  titleDiv: {
    width: 523,
    height: 24,
    marginTop: 139,
    marginBottom: 34
  },
  imageDiv: {
    paddingLeft: '7%',
    paddingRight: '7%',
    marginBottom: 150
  },
  image: {
    display: 'block',
    width: '100%',
    height: 'calc( 100vh - 347px )'
  },
}))