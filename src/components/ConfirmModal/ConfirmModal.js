import React from 'react'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'

const ConfirmModal = ({ title, open, content, onClose, onClick, children}) => {
  return (
    <div>
      <Dialog
        open={open}
        onClose={onClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description">
        <DialogTitle id="alert-dialog-title">Do you really want to go back</DialogTitle>
        <DialogContent>
          {content}
          {children}
        </DialogContent>
        <DialogActions>
          <Button onClick={onClick} color="error">
            Yes
          </Button>
          <Button onClick={onClose} color="primary">
            No
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default ConfirmModal
