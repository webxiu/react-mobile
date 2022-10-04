import "./assets/css/style.css";

import * as serviceWorker from "./serviceWorker";

import React, { Suspense } from "react";

import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import ReactDOM from "react-dom";
import { RootRouter } from "./router";
import RouterWrapSpin from "./layout/Spin";
import store from "./redux/store";

const Root = () => {
  return (
    <BrowserRouter basename='/course'>
      <Suspense fallback={<RouterWrapSpin />}>
        <RootRouter />
      </Suspense>
    </BrowserRouter>
  );
};

ReactDOM.render(
  <Provider store={store}>
    <Root />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
