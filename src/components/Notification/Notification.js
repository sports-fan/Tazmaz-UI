import * as React from 'react';
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Notification = ({open, onClose, message}) => {
  return (
    <Stack spacing={2} sx={{ width: '100%' }}>
      <Snackbar open={open} autoHideDuration={6000} onClose={onClose} anchorOrigin={{vertical:'top', horizontal: 'left'}}>
        <Alert onClose={onClose} severity="error" sx={{ width: '100%' }}>
          {message}
        </Alert>
      </Snackbar>
    </Stack>
  );
}

export default Notification
