import React from "react";

import CircularProgress from "@material-ui/core/CircularProgress";

const Home = () => (
  <div style={{ display: "flex", placeContent: "center" }}>
    <CircularProgress
      size="50"
      style={{ position: "absolute", top: "50%", bottom: 0 }}
    />
  </div>
);

export default Home;
