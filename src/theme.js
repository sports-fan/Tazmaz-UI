import { createTheme } from '@mui/material/styles';

const primary = '#413B71'
const secondary = '#D1D6E7'
const theme = createTheme({
  palette: {
    primary: {
      main: primary
    },
    secondary: {
      main: secondary
    },
  },
  direction: 'rtl',
});

export default theme