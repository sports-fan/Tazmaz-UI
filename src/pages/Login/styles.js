import { makeStyles } from "@mui/styles"

export default makeStyles(theme => ({
  main: {
    width: '100%',
    height: 1080,
  },
  logo: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    // width: 1217,
    // height: 1080,
    backgroundColor: theme.palette.primary.main,
  },
  titleDiv: {
    width: 523,
    height: 24,
    marginTop: 149
  },
  title: {
    textAlign: 'center',
    color: '#FFFFFF',
  },
  imageDiv: {
    marginTop: 72.78,
    paddingLeft: 81,
    paddingRight: 108,
    paddingBottom: 154,
    paddingTop: 21
  },
  image: {
    width: '100%',
    height: '100%'
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 38,
  },
  headerLeft: {
    display: 'flex',
    marginLeft: 28
  },
  headerRight: {
    marginRight: 117.24
  },
  title2: {
    marginTop: 95,
    marginRight: 117
  },
  loginForm: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'end',
    marginRight: 117,
    marginTop: 55
  },
  loginWithApple: {
    width: 470,
    height: 50,
    color: '#000000',
    border: '1, solid',
    borderRadius: 10
  },
  loginWithGoogle: {
    width: 470,
    height: 50,
    color: '#000000',
    border: '1, solid',
    borderRadius: 10,
    marginTop: 11
  },
  loginWithInput: {
    width: 470,
    height: 50,
    border: '1, solid',
    borderRadius: 10,
    marginTop: 18
  },
  loginField: {
    width: 470,
    height: 50,
    border: '1, solid',
    borderRadius: 10,
  },
  divider: {
    width: 470,
    marginTop: 26,
    marginBottom: 17
  },
  formRedirect: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginRight: 108,
  },
  formRedirect2: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginTop: 69
  }
}))
