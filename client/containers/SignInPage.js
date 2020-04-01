import React, { Component } from "react";

import mutation from "../mutations/Login";
import query from "../queries/CurrentUser";

import AuthForm from "../components/AuthForm";
import { graphql } from "react-apollo";

class SignInPage extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentWillUpdate(nextProps, nextState) {
    console.log(this.props, nextProps);
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
          formName="LOGIN"
          onSubmit={(email, password) => this.onSubmit(email, password)}
        />
      </div>
    );
  }
}

export default graphql(query)(graphql(mutation)(SignInPage));
