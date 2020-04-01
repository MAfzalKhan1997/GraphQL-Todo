import React from "react";
import AppBar from "../components/AppBar";

const App = ({ children }) => (
  <div>
    <AppBar />
    {children}
  </div>
);

export default App;
