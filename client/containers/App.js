import React from "react";
import { withRouter } from "react-router-dom";
import AppBar from "../components/AppBar";

const App = props => (
  <>
    <AppBar {...props} />
    {props.children}
  </>
);

export default withRouter(App);
