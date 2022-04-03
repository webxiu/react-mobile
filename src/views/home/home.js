import React, { useEffect, useState } from "react";
import {
  getActiveTitle,
  getCollapse,
  setActiveTitle,
  setCollapse,
} from "../../utils/storage";

import { Collapse } from "antd-mobile";
import MenuList from "../../layout/MenuList";
import { contentsList } from "../../data";
import { useHistory } from "react-router";

const Home = (props) => {
  const [isCollapse, setIsCollapse] = useState();
  const [activeKey, setActiveKey] = useState(0);
  const history = useHistory();

  useEffect(() => {
    const coll = getCollapse();
    const activeId = getActiveTitle();
    setIsCollapse(coll);
    setActiveKey(activeId);
  }, []);

  const onChange = (value) => {
    setIsCollapse(value);
    setCollapse(value);
  };

  const onJumpList = (item, parentPath, bigTitle) => {
    setActiveTitle(item.id);
    history.push({
      pathname: `${item.path}/${item.id}`,
      search: encodeURIComponent(
        `course=${parentPath}&title=${bigTitle}&name=${item.name}`
      ),
    });
  };

  return (
    <MenuList>
      {props.children}
      <Collapse accordion={true} onChange={onChange} activeKey={isCollapse}>
        {contentsList.map((route) => {
          if (route.hidden) return null;
          return route.children ? (
            <Collapse.Panel
              key={route.path}
              title={<span className="ellipsis">{route.name}</span>}
            >
              {route.children.map((child, index) => (
                <div key={index}>
                  <div
                    className="ellipsis cursor"
                    style={{
                      color: child.id === activeKey ? "#f60" : "#4a25df",
                      padding: 5,
                    }}
                    onClick={() => onJumpList(child, route.key, route.name)}
                  >
                    {child.name}
                  </div>
                </div>
              ))}
            </Collapse.Panel>
          ) : (
            <Collapse.Panel
              key={route.path}
              arrow={false}
              title={
                <div
                  className="ellipsis"
                  style={{
                    color: route.id === activeKey ? "#f60" : "#333",
                    padding: 5,
                  }}
                  onClick={() => onJumpList(route, route.key, route.name)}
                >
                  {route.name}
                </div>
              }
            ></Collapse.Panel>
          );
        })}
      </Collapse>
    </MenuList>
  );
};

export default Home;
