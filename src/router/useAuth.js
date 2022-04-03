import { getUserInfo, setUserInfo } from "../utils/storage";

import { Dialog } from "antd-mobile";
import React from "react";
import { isPc } from "../utils";
import { useHistory } from "react-router";

export const useAuth = () => {
  const history = useHistory();
  React.useEffect(() => {
    setUserInfo({ device: isPc() });
    const userInfo = getUserInfo();
    if (!userInfo.username || !userInfo.password) {
      Dialog.alert({ content: "请先登录!" }).then(() => {
        history.replace("/login");
      });
    }
  }, [history]);
  return [];
};
