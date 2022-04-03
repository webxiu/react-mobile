import "./assets/css/style.css";

import * as serviceWorker from "./serviceWorker";

import React, { Suspense } from "react";
import { getUserInfo, setUserInfo } from "./utils/storage";

import { BrowserRouter } from "react-router-dom";
import { Dialog } from "antd-mobile";
import { Provider } from "react-redux";
import ReactDOM from "react-dom";
import { RootRouter } from "./router";
import RouterWrapSpin from "./layout/Spin";
import { isPc } from "./utils";
import store from "./redux/store";
import { useHistory } from "react-router";

const Root = () => {
  setUserInfo({ device: isPc() });
  const history = useHistory();
  const userInfo = getUserInfo();

  if (!userInfo.username || !userInfo.password) {
    Dialog.alert({ content: "请先登录!" }).then(() => {
      history.replace("/login");
    });
  }

  return (
    <BrowserRouter>
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
