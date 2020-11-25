import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import App from "components/App";
import { Spinner } from "components/_common";
import "./index.scss";

const app = (
  <React.StrictMode>
    <Suspense fallback={<Spinner />}>
      <App />
    </Suspense>
  </React.StrictMode>
);

ReactDOM.render(app, document.getElementById("root"));
