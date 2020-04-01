import React from "react";
import ReactDOM from "react-dom";

import Routes from "./Routes";

const Root = () => {
  return (
    <div>
      <Routes />
    </div>
  );
};

ReactDOM.render(<Root />, document.querySelector("#root"));
