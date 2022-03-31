import "./index.css";

import { NavBar, Space } from "antd-mobile";

import { AppstoreOutline } from "antd-mobile-icons";
import React from "react";
import { isPc } from '../../utils'
import { useHistory } from "react-router";

const NavBack = (props) => {
    const history = useHistory();
    // const location = useLocation();
    // const isHome = location.pathname === "/";
    console.log('isPc', isPc())
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
                    计算机科学与技术
                </NavBar>
            </div>
            <div className="flex-1 ui-ovy-a">{props.children}</div>
        </div>
    );
};

export default NavBack;
