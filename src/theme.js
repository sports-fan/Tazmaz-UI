import { createTheme } from '@mui/material/styles';

const primary = '#413B71'
const secondary = '#D1D6E7'
const info = '#1A94B6'

const theme = createTheme({
  components: {
    MuiButtonBase: {
      styleOverrides: {
        
      }
    }
  },
  palette: {
    primary: {
      main: primary
    },
    secondary: {
      main: secondary
    },
    info: {
      main: info
    }
  },
  direction: 'rtl',
});

export default theme