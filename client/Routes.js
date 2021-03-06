import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { ApolloClient } from "apollo-client";
import { InMemoryCache, NormalizedCacheObject } from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http";
import { ApolloProvider } from "react-apollo";

import App from "./containers/App";
import Home from "./containers/Home";
import SignInPage from "./containers/SignInPage";
import SignUpPage from "./containers/SignUpPage";
import Dashboard from "./containers/Dashboard";

import requireAuth from "./components/requireAuth";
// import requireNoAuth from "./components/requireNoAuth";

const cache = new InMemoryCache();
const link = new HttpLink({
  uri: "http://localhost:4000/graphql"
});

const client = new ApolloClient({
  cache,
  link,
  dataIdFromObject: o => o.id
});

const Routes = () => (
  <ApolloProvider client={client}>
    <Router>
      <App>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={SignInPage} />
          <Route path="/signup" component={SignUpPage} />
          <Route path="/dashboard" component={requireAuth(Dashboard)} />
        </Switch>
      </App>
    </Router>
  </ApolloProvider>
);

export default Routes;
