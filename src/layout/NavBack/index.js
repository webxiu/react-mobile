import { NavBar, NoticeBar, Popover, Space } from "antd-mobile";

import { AppstoreOutline } from "antd-mobile-icons";
import React from "react";
import { useHistory } from "react-router";

const NavBack = (props) => {
  const { query } = props;
  const history = useHistory();
  const back = () => {
    history.goBack();
  };

  const right = (
    <div style={{ fontSize: 24 }}>
      <Space style={{ "--gap": "16px" }}>
        {/* <MoreOutline /> */}
        <AppstoreOutline onClick={() => history.replace("/")} />
      </Space>
    </div>
  );

  return (
    <div className="flex-col ui-h-100 ui-p-r">
      <div
        className="head-nav-bar"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          zIndex: 9999,
          width: "100%",
          background: "#fff",
        }}
      >
        <NavBar back={"返回"} backArrow={true} right={right} onBack={back}>
          <Popover content={query.title} trigger="click" placement="bottomLeft">
            <span>{query.title}</span>
          </Popover>
        </NavBar>
        <NoticeBar content={query.name} color="alert" />
      </div>
      {props.children}
    </div>
  );
};

export default NavBack;
