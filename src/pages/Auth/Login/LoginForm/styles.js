import { makeStyles } from "@mui/styles"

export default makeStyles(theme => ({
  loginForm: {
    [theme.breakpoints.down('lg')]: {
      marginTop: 26
    },
    marginTop: 20
  },
  leftBGColor: {
    backgroundColor: '#F0F1F8',
  },
  titleColor: {
    color: '#474E9F'
  },
  mb: {
    marginBottom: 9
  },
  loginWithGoogle: {
    marginTop: '13px ! important'
  },
  loginWithInput: {
    marginTop: '13px ! important'
  },
  divider: {
    width: '100%',
    marginTop: '10px ! important',
    marginBottom: '10px ! important',
  },
  forgetText: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: 8
  },
  email: {
    top: '56px !important',
    left: '84px !important'
  },
  password: {
    top: '68px !important',
    left: '84px !important'
  }
}))