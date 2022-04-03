import { Dialog } from "antd-mobile";
import MenuList from "../../layout/MenuList";
import { MenuRouter } from "../../router";
import React from "react";
import { getUserInfo } from "../../utils/storage";
import { useHistory } from "react-router";

export default () => {
  const history = useHistory();
  const userInfo = getUserInfo();
  if (!userInfo.username || !userInfo.password) {
    Dialog.alert({ content: "请先登录!" }).then(() => {
      history.replace("/login");
    });
  }
  return (
    <MenuList>
      <MenuRouter />
    </MenuList>
  );
};
