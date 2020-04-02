import React, { Component } from "react";
import { graphql } from "react-apollo";
import { Link } from "react-router-dom";
import Typography from "@material-ui/core/Typography";

import mutation from "../mutations/SignUp";
import query from "../queries/CurrentUser";

import AuthForm from "../components/AuthForm";

class SignUpPage extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  UNSAFE_componentWillUpdate(nextProps, nextState) {
    console.log(this.props, nextProps);
    if (!this.props.data.user && nextProps.data.user) {
      this.props.history.push("/dashboard");
    }
  }

  onSubmit = (email, password) => {
    this.props.mutate({
      variables: {
        email,
        password
      },
      refetchQueries: [{ query }]
    });
  };

  render() {
    return (
      <div>
        <AuthForm
          formName="SIGNUP"
          onSubmit={(email, password) => this.onSubmit(email, password)}
          SwitchForm={SwitchForm}
        />
      </div>
    );
  }
}

export default graphql(query)(graphql(mutation)(SignUpPage));

const SwitchForm = () => (
  <Typography align="center" variant="subtitle2">
    Already have an account ? <Link to="/login"> Login</Link>
  </Typography>
);
