import { makeStyles } from "@mui/styles";

export default makeStyles(theme => ({
  title: {
    [theme.breakpoints.down('sm')]: {
      marginTop: 0,
      marginBottom: 0
    },
    display: 'flex',
    justifyContent: 'center',
    marginTop: 5,
  },
  formTitle: {
    display: 'flex',
    justifyContent: 'flex-start',
  },
  formAction: {
    [theme.breakpoints.down('sm')]: {
      marginTop: 39
    },
    display: 'flex',
  },
  switch: {
    display: 'flex',
    justifyContent: 'center',
    paddingBottom: 8
  },
  switchLeft: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  },
  mt: {
    [theme.breakpoints.down('sm')]: {
      marginTop: 18
    },
    marginTop: 19
  },
  subscriptions: {
    [theme.breakpoints.down('sm')]: {
      height: '100%'
    },
    height: 553,
  },
  formButton: {
    marginBottom: 8
  },
}))