import React, { Component } from "react";

import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";

const styles = theme => ({
  root: {
    display: "flex"
  },

  innerRoot: {
    // ...theme.mixins.gutters(),
    padding: theme.spacing(4),
    width: 500
  },

  commentTypo: {
    borderBottom: "3px solid rgba(26, 43, 117, 1)",
    paddingTop: 10,
    paddingBottom: 5,
    marginRight: 10,
    marginBottom: 15
  }
});

class AuthForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      confirmPassword: "",

      showPassword: false,
      errors: []
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    return { errors: nextProps.errors };
  }

  EmailField = () => {
    const { email } = this.state;
    return (
      <TextField
        fullWidth
        label="Email"
        name="Email"
        value={email}
        margin="dense"
        variant="outlined"
        type="email"
        autoComplete="email"
        onFocus={() => this.setState({ errors: [] })}
        onChange={this.handleChange("email")}
      />
    );
  };

  PassField = () => {
    const { showPassword, password } = this.state;
    return (
      <TextField
        fullWidth
        label="Password"
        name="Password"
        value={password}
        margin="dense"
        variant="outlined"
        type={showPassword ? "text" : "password"}
        onFocus={() => this.setState({ errors: [] })}
        onChange={this.handleChange("password")}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                aria-label="Toggle password visibility"
                onClick={this.handleClickShowPassword}
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          )
        }}
      />
    );
  };

  ConfirmPassField = () => {
    const { showPassword, confirmPassword } = this.state;
    return (
      <TextField
        fullWidth
        label="Confirm Password"
        name="Password"
        value={confirmPassword}
        margin="dense"
        variant="outlined"
        type={showPassword ? "text" : "password"}
        onFocus={() => this.setState({ errors: [] })}
        onChange={this.handleChange("confirmPassword")}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                aria-label="Toggle password visibility"
                onClick={this.handleClickShowPassword}
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          )
        }}
      />
    );
  };

  ErrorMessage = () => {
    const { errors } = this.state;
    return errors.length ? (
      errors.map((err, index) => (
        <Typography key={index} variant="subtitle2" color="secondary">
          {err}
        </Typography>
      ))
    ) : (
      <Typography variant="subtitle2" color="secondary">
        <br />{" "}
      </Typography>
    );
  };

  handleChange = name => event => {
    const newVal = name.replace(/[./" "]/g, "");
    const value = event.target.value;
    this.setState({
      [newVal]: value
    });
  };

  handleClickShowPassword = () => {
    this.setState(state => ({ showPassword: !state.showPassword }));
  };

  render() {
    const { classes, formName, SwitchForm } = this.props;
    const { email, password, confirmPassword } = this.state;

    return (
      <div className={classes.root}>
        <div
          style={{
            width: "100%",
            paddingTop: "5%",
            display: "flex",
            justifyContent: "center"
          }}
        >
          <Paper className={classes.innerRoot} elevation={1}>
            <Typography className={classes.commentTypo} variant="h6">
              {formName}
            </Typography>
            <Typography align="center" variant="h5">
              TODO GraphQL
            </Typography>
            <div style={{ paddingTop: 30, paddingBottom: 20 }}>
              {this.EmailField()}
              {this.PassField()}
              {this.ErrorMessage()}
            </div>

            <Button
              onClick={() => this.props.onSubmit(email, password)}
              variant="contained"
              color="secondary"
            >
              {formName}
            </Button>
            <br />
            <br />
            <br />
            <SwitchForm />
          </Paper>
        </div>
      </div>
    );
  }
}

AuthForm.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(AuthForm);
