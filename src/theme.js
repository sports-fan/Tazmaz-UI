import { createTheme } from '@mui/material/styles';

const primary = '#474E9F'
const secondary = '#D1D6E7'
const info = '#1A94B6'
const success = '#2AC584'
const error = '#FF5151'

const theme = createTheme({
  components: {
    Mui:{ 
      styleOverrides: {
        "root": {
          "&.Mui-error": {
            borderWidth: 1,
            color: '#FF5151'
          }
        }
      }
    },
    MuiButtonBase: {
      styleOverrides: {
        root: {
          '&.MuiCheckbox-root': {
            color: secondary
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
    MuiIconButton: {
      styleOverrides: {
        root: {
          color: primary,
        }
      }
    },
    MuiFormControl: {
      styleOverrides: {
        root: {
          width: '100%',
          marginTop: 8,
        }
      }
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          marginBottom: 8,
          width: '100%',
          height: 50,
          borderRadius: 8,
          "> input:focus ~ .MuiOutlinedInput-notchedOutline": {
            borderWidth: 1,
            borderColor: primary
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: primary,
            "@media (max-width: 500px)": {
              borderColor: secondary
            }
          }
        },
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          fontSize: 14,
          lineHeight: '14px',
          marginTop: 0,
          marginBottom: 0,
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
    MuiSelect: {
      styleOverrides: {
        icon: {
          marginRight: 10
        }
      }
    },
    MuiInputAdornment: {
      styleOverrides: {
        root: {
          marginRight: 7,
        }
      }
    },
    MuiTouchRipple: {
      styleOverrides: {
        root: {
          width: 32,
          height: 32
        }
      }
    },
    MuiAlert: {
      styleOverrides: {
        root: {
          width: '1498px',
          height: '133px',
          borderRadius: 8,
        },
        action: {
          display: 'flex',
          alignItems: 'center',
          marginRight: 22,
          color: '#000000'
        },
        message: {
          display: 'flex',
          alignItems: 'center',
          color: '#6B6D86'
        }
      }
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          '&.MuiAlert-root': {
            backgroundColor: 'white'
          },
          '&.MuiMenu-paper': {
            border: '1px solid #474E9F',
            borderRadius: 8,
            width: ''
          }
        }
      }
    },
    MuiStepConnector: {
      styleOverrides: {
        line: {
          '$.Mui-completed Mui-active': {
            borderColor: '#FFFFFF',
          }
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
    h2: {
      fontSize: '50px',
      lineHeight: '61px'
    },
    h3: {
      fontSize: '40px',
      lineHeight: '24px'
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
    },
    subtitle2: {
      fontSize: '15px',
      lineHeight: '21px'
    },
    subtitle3: {
      fontSize: '26px',
      lineHeight: '30px',
      fontWeight: 600
    },
    subtitle4: {
      fontSize: '30px',
      lineHeight: '30px',
      fontWeight: 600
    }
  },
  direction: 'rtl',
});

export default theme