import React from "react";
import { Route, BrowserRouter, Redirect, Switch } from "react-router-dom";
import App from "components/App";
import Home from "components/Home";
import Info from "components/Info";

const RenderRouter = () => {
  return (
    <BrowserRouter>
      <App>
        <Switch>
          <Route exact path={"/home"} component={Home} />
          <Route exact path={"/info"} component={Info} />
          <Route render={() => <Redirect to="/home" />} />
        </Switch>
      </App>
    </BrowserRouter>
  );
};

export default RenderRouter;
