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
          fontSize: theme.spacing(2),
          width: '100%',
          height: 50
        }),
        startIcon: ({ ownerState, theme }) => ({
          ...(ownerState.variant === 'outlined' &&
            ownerState.color === 'secondary' && {
              marginLeft: theme.spacing(1)
            }),
          ...(ownerState.variant === 'contained' && {
              marginLeft: 5
            }),
        })
      }
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          width: '100%',
          height: 50,
          borderRadius: 8,
        }
      }
    },
    MuiStepLabel: {
      styleOverrides: {
        iconContainer: {
          width: 40,
          height: 40
        }
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