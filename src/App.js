import React from "react";
import { Router } from "react-router-dom";

import GlobalStyle from "./styles/global";

import history from "./routes/history";
import Routes from "./routes";

function App() {
  return (
    <Router history={history}>
      <Routes />
      <GlobalStyle />
    </Router>
  );
}

export default App;
