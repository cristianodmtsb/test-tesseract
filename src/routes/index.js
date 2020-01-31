import React from "react";
import { Router, Switch, Route } from "react-router-dom";
import history from "./history";

import Home from "../pages/home";
import Single from "../pages/single";

export default function Routes() {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/:userId" exact component={Single} />
      </Switch>
    </Router>
  );
}
