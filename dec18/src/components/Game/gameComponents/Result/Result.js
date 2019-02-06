import React from 'react'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'

class Result extends React.Component {
  render () {
    return (
      <Dialog
        open={this.props.complete}
        onClose={this.props.handleClose}
        aria-labelledby='alert-dialog-title'
        aria-describedby='alert-dialog-description'
      >
        <DialogTitle id='alert-dialog-title'>{'Well Done! Here are your results:'}</DialogTitle>
        <DialogContent>
          <DialogContentText id='alert-dialog-description'>
            {this.props.count}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={this.props.handleClose} color='primary' autoFocus>
              OK
          </Button>
        </DialogActions>
      </Dialog>
    )
  }
}

export default Result
