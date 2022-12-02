import { createTheme } from '@mui/material/styles';

const primary = '#474E9F'
const secondary = '#D1D6E7'
const info = '#1A94B6'
const success = '#FFFFFF'
const error = '#FF5151'

const theme = createTheme({
  components: {
    Mui:{ 
      styleOverrides: {
        "root": {
          "&.Mui-error": {
            "color": "#FF5151"
          }
        }
      }
    },
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
    MuiFormControl: {
      styleOverrides: {
        root: {
          marginBottom: 16
        }
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
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          fontSize: 14,
          lineHeight: 0,
          marginTop: 0,
          marginBottom: 0
        }
      }
    },
    MuiFormLabel: {
      styleOverrides: {
        root: {
          fontSize: 14,
        }
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
    },
    error: {
      main: error
    },
    success: {
      main: success
    },
    white: {
      main: '#FFFFFF'
    },
    black: {
      main: '#000000',
      contrastText: '#ffffff'
    }
  },
  typography: {
    h3: {
      fontSize: '50px',
      lineHeight: '61px'
    },
    h4: {
      fontSize: '34px',
      lineHeight: '24px'
    },
    h5: {
      fontSize: '30px',
      lineHeight: '24px'
    },
    h6: {
      fontSize: '20px',
      lineHeight: '24px'
    },
    body1: {
      fontSize: '18px',
      lineHeight: '21px'
    },
    body2: {
      fontSize: '14px',
      lineHeight: '21px'
    },
    caption: {
      fontSize: '16px',
      lineHeight: '18px'
    },
    subtitle1: {
      fontSize: '24px',
      lineHeight: '18px'
    }
  },
  direction: 'rtl',
});

export default theme