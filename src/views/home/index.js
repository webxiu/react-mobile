import MenuList from "../../layout/MenuList";
import { MenuRouter } from "../../router";
import React from "react";
import { useAuth } from "../../router/useAuth";

export default () => {
  useAuth();
  return (
    <MenuList>
      <MenuRouter />
    </MenuList>
  );
};
