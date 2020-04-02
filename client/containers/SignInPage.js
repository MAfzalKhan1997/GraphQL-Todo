import React, { Component } from "react";
import { graphql } from "react-apollo";
import { Link } from "react-router-dom";
import Typography from "@material-ui/core/Typography";

import mutation from "../mutations/Login";
import query from "../queries/CurrentUser";

import AuthForm from "../components/AuthForm";

class SignInPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      errors: []
    };
  }

  UNSAFE_componentWillUpdate(nextProps, nextState) {
    if (!this.props.data.user && nextProps.data.user) {
      this.props.history.push("/dashboard");
    }
  }

  onSubmit = (email, password) => {
    this.props
      .mutate({
        variables: {
          email,
          password
        },
        refetchQueries: [{ query }]
      })
      .catch(res => {
        const errors = res.graphQLErrors.map(err => err.message);
        this.setState({
          errors
        });
      });
  };

  render() {
    const { errors } = this.state;
    return (
      <div>
        <AuthForm
          formName="LOGIN"
          SwitchForm={SwitchForm}
          errors={errors}
          onSubmit={(email, password) => this.onSubmit(email, password)}
        />
      </div>
    );
  }
}

const SwitchForm = () => (
  <Typography align="center" variant="subtitle2">
    {`Don't have an account ?`} <Link to="/signup"> Sign Up</Link>
  </Typography>
);
export default graphql(query)(graphql(mutation)(SignInPage));
