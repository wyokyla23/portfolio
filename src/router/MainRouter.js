import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../pages/Home";

export default function MainRouter() {
  return (
    <Switch>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  );
}
