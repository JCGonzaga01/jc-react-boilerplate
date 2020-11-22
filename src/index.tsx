import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import App from "components/App";
import { Spinner } from "components/_common";
import "./index.scss";

const app = (
  <Suspense fallback={<Spinner />}>
    <App />
  </Suspense>
);

ReactDOM.render(app, document.getElementById("root"));
