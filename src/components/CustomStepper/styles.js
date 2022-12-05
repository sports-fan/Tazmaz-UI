import { makeStyles } from "@mui/styles"

export default makeStyles(theme => ({
  main: {
    [theme.breakpoints.down('sm')]: {
      paddingTop: 54,
      paddingBottom: 18
    },
    paddingTop: 45,
    paddingBottom: 29
  },
  active: {
    width: 40,
    height: 40,
    border:  '3px solid #FFFFFF',
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  completed: {
    width: 40,
    height: 40,
    backgroundColor: '#FFFFFF',
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
}))

export const useLabelStyles = makeStyles(theme => ({
  alternativeLabel: {
    color: '#FFFFFF',
  },
  active: {
    color: '#FFFFFF !important',
  },
  completed: {
    color: '#FFFFFF !important',
  },
  label: {
    marginTop: '8px !important'
  }
}))
