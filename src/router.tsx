// NOTE:
// Project was test deployed in github hosting that's why route path has '/jc-react-boilerplate' for proper deployment
// Kindly update below route implementation based on your own component routings
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
          <Route exact path={"/jc-react-boilerplate/home"} component={Home} />
          <Route exact path={"/jc-react-boilerplate/info"} component={Info} />
          <Route render={() => <Redirect to="/jc-react-boilerplate/home" />} />
        </Switch>
      </App>
    </BrowserRouter>
  );
};

export default RenderRouter;
