import React, { Suspense } from "react";
import ReactDOM from "react-dom";
// Redux
import { Provider } from "react-redux";
import store from "store";
//
import App from "components/App";
import { Spinner } from "components/_common";
import "./index.scss";

const app = (
  <React.StrictMode>
    <Provider store={store}>
      <Suspense fallback={<Spinner />}>
        <App />
      </Suspense>
    </Provider>
  </React.StrictMode>
);

ReactDOM.render(app, document.getElementById("root"));
