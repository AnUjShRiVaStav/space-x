import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Historylist from "../components/History";
import Home from "../components/Home";
import SpaceAddress from "../components/SpaceAddress";

const Routes = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
        <Route exact={true} path="/">
            <Home />
          </Route>
          <Route exact={true} path="/space">
            <SpaceAddress />
          </Route>
          <Route exact={true} path="/history">
            <Historylist />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default Routes;
