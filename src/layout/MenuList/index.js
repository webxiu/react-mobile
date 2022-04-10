import { useHistory, useLocation } from "react-router";

import React from "react";
import { TabBar } from "antd-mobile";
import { menus } from "../../router";

const MenuList = (props) => {
  const history = useHistory();
  const location = useLocation();

  const onChange = (value) => {
    history.push(value);
  };
  return (
    <div className="layout-wrap">
      <div className="flex-1 ui-ovy-a ui-p-r" style={{ marginBottom: 50 }}>
        {props.children}
      </div>
      <div className="menu-list">
        <TabBar safeArea activeKey={location.pathname} onChange={onChange}>
          {menus.map((item) => (item.show ? <TabBar.Item key={item.path} icon={item.icon} title={item.title} /> : null))}
        </TabBar>
      </div>
    </div>
  );
};

export default MenuList;
