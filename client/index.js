import React from "react";
import ReactDOM from "react-dom";

import Routes from "./Routes";

const Root = () => {
  return (
    <>
      <Routes />
    </>
  );
};

ReactDOM.render(<Root />, document.querySelector("#root"));
