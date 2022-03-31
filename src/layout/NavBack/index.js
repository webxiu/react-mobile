import "./index.css";

import { NavBar, Popover, Space } from "antd-mobile";
import { isPc, throttle } from "../../utils";

import { AppstoreOutline } from "antd-mobile-icons";
import React from "react";
import { useHistory } from "react-router";

const NavBack = (props) => {
  const { query } = props;
  const history = useHistory();
  const client = isPc();
  console.log("query", client, query);

  const onScroll = throttle((e) => {
    console.log("onScroll", e.target.scrollTop);
    // const { offsetHeight, scrollTop, scrollHeight } = e.target;
    // if (scrollTop + offsetHeight === scrollHeight && loadMore) {
    //   setLoadMore(false);
    //   setQueryParams((x) => ({ ...x, page: x.page + 1, type: 1 }));
    // }
  }, 500);

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
    <div className="flex-col nav-wrap">
      <div className="head-nav-bar">
        <NavBar back={"返回"} backArrow={true} right={right} onBack={back}>
          <Popover content={query.title} trigger="click" placement="bottomLeft">
            <span>{query.title}</span>
          </Popover>
        </NavBar>
      </div>
      <div className="flex-1 ui-ovy-a">
        <div onScroll={onScroll}>{props.children}</div>
      </div>
    </div>
  );
};

export default NavBack;
