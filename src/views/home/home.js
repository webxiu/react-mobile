import React, { useEffect, useState } from "react";
import {
  getActiveTitle,
  getCollapse,
  setActiveTitle,
  setCollapse,
} from "../../utils/storage";

import { Collapse } from "antd-mobile";
import MenuList from "../../layout/MenuList";
import { routerList } from "../../data/marx";
import { useHistory } from "react-router";

// import { NavLink } from "react-router-dom";

const extArr = [
  515, 516, 523, 524, 525, 526, 527, 1017, 1326, 1327, 1642, 1744,
];

const marxChildren = routerList.results
  .filter((f) => !extArr.includes(f.id))
  .map(({ title, id }) => ({
    name: title,
    id,
    path: "/marx/chapter",
  }));

const marxList = [
  {
    path: "/marx/",
    children: marxChildren,
    name: "03709 马克思主义基本原理概论",
    description:
      "马克思主义基本原理概论（03709）是高等教育自学考试各专业本科阶段的一门公共基础课。本课程共7章内容，重点在第1章、第2章、第3章、第4章、第5章、第6章；次重点在第7章。",
  },
  {
    path: "/marx/chapter",
    exact: true,
    id: 3708,
    name: "03708 中国近现代史纲要",
    description:
      "中国近现代史（03708）是高等教育自学考试各专业本科阶段的一门公共基础课。本课程共11章内容，重点在第1章、第2章、第3章、第5章、第6章、第8章、第11章；次重点在第4章、第7章、第9章、第10章。",
  },
  {
    path: "/marx/think",
    children: [
      {
        id: 12656,
        path: "/marx/chapter",
        name: "绪论 毛泽东思想和中国特色社会主义思想概论",
      },
    ],
    name: "12656 毛泽东思想和中国特色社会主义思想概论",
    description:
      "毛泽东思想和中国特色社会主义思想概论（12656）是高等教育自学考试各专业专科阶段的一门公共基础课。",
  },
];

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

  const onJumpList = (item, bigTitle) => {
    setActiveTitle(item.id);
    history.push({
      pathname: `${item.path}/${item.id}`,
      search: encodeURIComponent(`title=${bigTitle}&name=${item.name}`),
    });
  };

  return (
    <MenuList>
      {props.children}
      <Collapse accordion={true} onChange={onChange} activeKey={isCollapse}>
        {marxList.map((route) => {
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
                    onClick={() => onJumpList(child, route.name)}
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
                  onClick={() => onJumpList(route, route.name)}
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
