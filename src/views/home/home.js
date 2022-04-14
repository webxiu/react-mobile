import React, { useEffect, useState } from "react";
import { getActiveTitle, getCollapse, setActiveTitle, setCollapse, setHistory } from "../../utils/storage";

import { Collapse } from "antd-mobile";
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

  const onJumpList = (item, parentPath, title) => {
    setActiveTitle(item.id);
    const pathname = `${item.path}/${item.id}`;
    const cate = item.name.search("客观") !== -1 ? "选择题" : item.name.search("主观") !== -1 ? "简答题" : "其他";
    const name = item.name.replace(/（客观）/g, "（选择题）").replace(/（主观）/g, "（简答题）");
    const search = `course=${parentPath}&title=${title}&name=${name}`;
    const link = pathname + "?" + encodeURIComponent(search);

    history.push({ pathname, search: encodeURIComponent(search) });
    setHistory({
      id: item.id,
      cate,
      name: name,
      title,
      time: Date.now(),
      link,
      percent: 0,
    });
  };

  return (
    <>
      <h3 style={{ margin: 10 }}>考试科目</h3>
      <Collapse accordion={true} onChange={onChange} activeKey={isCollapse}>
        {contentsList.map((route) => {
          if (route.hidden) return null;
          return route.children ? (
            <Collapse.Panel key={route.path} title={<span className="ellipsis">{route.name}</span>}>
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
                    {child.name
                      .replace(/（客观/g, "（选择题")
                      .replace(/（主观/g, "（简答题")
                      .replace(/（一）/g, "（第一节）")
                      .replace(/（二）/g, "（第二节）")
                      .replace(/（三）/g, "（第三节）")
                      .replace(/（四）/g, "（第四节）")
                      .replace(/（五）/g, "（第五节）")}
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
    </>
  );
};

export default Home;
