import React, { Component } from "react";
import { graphql } from "react-apollo";

import query from "../queries/CurrentUser";

export default WrappedComponent => {
  class requireAuth extends Component {
    constructor(props) {
      super(props);
      this.state = {};
    }

    static getDerivedStateFromProps(nextProps) {
      if (!nextProps.data.loading && !nextProps.data.user) {
        nextProps.history.push("/login");
      }
      return null;
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  }
  return graphql(query)(requireAuth);
};
