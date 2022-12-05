import { makeStyles } from "@mui/styles"

export default makeStyles(theme => ({
  container: {
    [theme.breakpoints.down('sm')]: {
      display: 'flex',
      alignItems: 'flex-end'
    },
    position: 'relative'
  },
  logo: {
    position: 'absolute',
    top: '-85px',
    left: 0,
    zIndex: '100'
  },
  main: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    border: '1px solid rgba(71, 78, 159, 0.29)',
    borderRadius: 8,
  },
  header: {
    height: 23,
  },
  clickedHeader: {
    height: 43,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1A94B6',
    borderRadius: '8px 8px 0px 0px',
    color: '#FFFFFF',
  },
  upper: {
    paddingTop: 22,
    paddingLeft: 16,
    paddingRight: 16,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  price: {
    display: 'flex',
    alignItems: 'baseline'
  },
  priceBelow: {
    backgroundColor: '#F7F6FF',
    marginBottom: 17.5,
  },
  divider: {
    width: '100%',
    border: '1.11803px solid rgba(71, 78, 159, 0.12)',
    backgroundColor: ' rgba(71, 78, 159, 0.12)'
  },
  lower: {
    paddingLeft: 16,
    paddingRight: 16,
    marginTop: 17.5,
    marginBottom: 26,
  },
  formButton: {
    paddingLeft: 16,
    paddingRight: 16,
    marginBottom: 16,
  },
  button: {    
    '&:hover': {
        background: 'none',
    },
  }
}))
