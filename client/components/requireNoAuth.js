import React, { Component } from "react";
import { graphql } from "react-apollo";

import query from "../queries/CurrentUser";

export default WrappedComponent => {
  class requireNoAuth extends Component {
    constructor(props) {
      super(props);
      this.state = {};
    }

    static getDerivedStateFromProps(nextProps) {
      if (!nextProps.data.loading && nextProps.data.user) {
        nextProps.history.push("/dashboard");
      }
      return null;
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  }
  return graphql(query)(requireNoAuth);
};
