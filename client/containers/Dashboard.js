import React, { Component } from "react";

import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

export default class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      openDialog: false
    };
  }

  componentDidMount() {
    const openDialog = !!this.props.location.state;
    this.setState({
      openDialog
    });
  }

  renderDialog() {
    return (
      <Dialog
        open={this.state.openDialog}
        onClose={() => this.handleDialog(false)}
      >
        <DialogTitle>Registration</DialogTitle>
        <DialogContent>
          <DialogContentText>
            You are successfully registered, Please continue...
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => this.handleDialog(false)} color="primary">
            OK
          </Button>
        </DialogActions>
      </Dialog>
    );
  }

  handleDialog(value) {
    this.setState({ openDialog: value });
  }

  render() {
    return (
      <div>
        Dashboard
        {this.renderDialog()}
      </div>
    );
  }
}
