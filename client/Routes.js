import React from "react";
import { BrowserRouter as Router, Route, hashHistory } from "react-router-dom";
import ApolloClient from "apollo-client";
import { ApolloProvider } from "react-apollo";

import App from "./containers/App";

const client = new ApolloClient({
  dataIdFromObject: o => o.id
});

const Routes = () => (
  <ApolloProvider client={client}>
    <Router history={hashHistory}>
      <Route path="/" component={App}></Route>
    </Router>
  </ApolloProvider>
);

export default Routes;
