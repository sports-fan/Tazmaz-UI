import * as React from 'react';
import { Stack, Snackbar, Typography, Alert as MuiAlert } from '@mui/material';

import useStyles from './styles'
import ErrorIcon from 'assets/errorIcon.svg'
import WarningIcon from 'assets/warningIcon.svg'
import SuccessIcon from 'assets/successIcon.svg'
import PrimaryIcon from 'assets/primaryIcon.svg'
import CloseIcon from 'assets/closeIcon.svg'

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Colors = {
  primary: '#474E9F',
  success: '#2AC584',
  warning: '#F0D233',
  error: '#FF5151'
}

const Notification = ({open, onClose, message, variant='error'}) => {
  const color = Colors[variant]
  const classes = useStyles()
  return (
    <Stack spacing={2} sx={{ width: '100%' }}>
      <Snackbar open={open} autoHideDuration={6000} onClose={onClose} anchorOrigin={{vertical:'top', horizontal: 'center'}}>
        <Alert
          severity={variant}
          iconMapping= {{
            primary: <img src={PrimaryIcon} alt="primary" />,
            success: <img src={SuccessIcon} alt="success" />,
            warning: <img src={WarningIcon} alt="warning" />,
            error: <img src={ErrorIcon} alt="error" />
          }}
          action={
            <img onClick={onClose} className={classes.closeIcon} src={CloseIcon} alt="close" />
          }
          sx={{
            boxShadow: `-5px 0px 0px ${color}`
          }}
        >
          <Typography color="black" variant='caption'>{message}</Typography>
        </Alert>
      </Snackbar>
    </Stack>
  );
}

export default Notification
