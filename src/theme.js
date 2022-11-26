import { createTheme } from '@mui/material/styles';

const primary = '#413B71'
const secondary = '#D1D6E7'
const info = '#1A94B6'

const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: ({ ownerState, theme }) => ({
          ...(ownerState.variant === 'outlined' &&
            ownerState.color === 'secondary' && {
              color: '#000',
            }),
          ...(ownerState.variant === 'contained' &&
            ownerState.color === 'primary' && {
            color: '#fff',
          }),
          borderRadius: theme.spacing(1),
          fontSize: theme.spacing(2)
        }),
        startIcon: ({ ownerState, theme }) => ({
          ...(ownerState.variant === 'outlined' &&
            ownerState.color === 'secondary' && {
              marginLeft: 8
            }),
          ...(ownerState.variant === 'contained' && {
              marginLeft: 5
            }),
        })
      }
    },
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