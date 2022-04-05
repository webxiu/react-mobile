import { Button, Card, Dialog, Empty, List, ProgressCircle, PullToRefresh, SearchBar, SwipeAction } from "antd-mobile";
import React, { useEffect, useState } from "react";
import { clearHistory, getHistory, getViewPos, removeHistory, removeViewPos } from "../../../utils/storage";
import { formatDate, throttle } from "../../../utils";

import { sleep } from "antd-mobile/es/utils/sleep";
import { useHistory } from "react-router";

const Study = () => {
  const history = useHistory();
  const userHistory = getHistory();
  const [historyList, setHistoryList] = useState(() => userHistory);
  const [showButton, setShowButton] = useState(true);
  useEffect(() => {
    setShowButton(true);
  }, []);

  const onJump = (item) => {
    history.push(item.link);
  };
  const onSearch = throttle((e) => {
    const value = e.target.value;
    setHistoryList((x) => {
      setShowButton(false);
      return x.filter((f) => {
        const s = (f.name && f.name.indexOf(value) > -1) || (f.title && f.title.indexOf(value) > -1);
        return s;
      });
    });
  }, 2000);

  const onCancel = (e) => {
    setHistoryList(userHistory);
  };

  const onDelete = async (item) => {
    const res = await Dialog.confirm({ content: "确认删除吗?" });
    if (res) {
      removeHistory(item.id);
      setHistoryList((x) => x.filter((f) => f.id !== item.id));
      removeViewPos(item.id);
    }
  };

  const onStart = () => {
    history.push("/home/index");
  };

  const onClear = async () => {
    const res = await Dialog.confirm({ content: "确认清空历史记录吗?" });
    if (res) {
      setHistoryList([]);
      clearHistory();
    }
  };

  return (
    <div>
      <PullToRefresh
        onRefresh={async () => {
          await sleep(1000);
          setHistoryList(getHistory());
        }}
      >
        <Card
          title="历史记录"
          extra={
            <Button color="danger" size="small" onClick={onClear}>
              清空历史
            </Button>
          }
        >
          <div style={{ margin: "5px 0 10px" }} className="flex just-between">
            <SearchBar
              placeholder="请输入内容"
              onSearch={onSearch}
              onBlur={onSearch}
              onClear={onCancel}
              onCancel={onCancel}
              className="flex-1"
              showCancelButton={() => true}
            />
          </div>
          {historyList.length === 0 ? (
            <div className="flex-col align-center just-center" style={{ height: "70%" }}>
              <Empty description="暂无学习记录~" />
              {showButton ? (
                <div className="ui-ta-c">
                  <Button color="primary" className="mt20" onClick={onStart}>
                    开始学习
                  </Button>
                </div>
              ) : null}
            </div>
          ) : (
            <List
              style={{
                minHeight: "100vh",
                "--padding-left": 0,
                "--padding-right": 0,
              }}
            >
              {historyList.map((item, index) => {
                const p = getViewPos(item.id);
                const percent = p ? p.percent : 0;
                return (
                  <SwipeAction
                    key={item.id}
                    closeOnAction={false}
                    rightActions={[{ key: "delete", text: "删除", color: "danger", onClick: () => onDelete(item) }]}
                  >
                    <List.Item key={index}>
                      <div onClick={onJump.bind(null, item)}>
                        <div className="flex just-between align-center">
                          <div className="flex-1 ui-ov-h mr10">
                            <h4 style={{ padding: 0 }} className="ellipsis">
                              {item.title}
                            </h4>
                            <h6 style={{ fontWeight: 400 }} className="flex-1 fz14  ellipsis">
                              {item.name}
                            </h6>
                          </div>
                          <ProgressCircle percent={percent} style={{ "--size": "40px" }}>
                            <span className="fz12" style={{ lineHeight: 40 }}>
                              {percent}%
                            </span>
                          </ProgressCircle>
                        </div>
                        <div className="flex just-between mt5">
                          <div className="fz12" style={{ color: item.cate === "简答题" ? "#f60" : "#3134eb" }}>
                            {item.cate}
                          </div>
                          <div className="word-nowrap fz12" style={{ color: "#99a2aa" }}>
                            {formatDate(item.time)}
                          </div>
                        </div>
                      </div>
                    </List.Item>
                  </SwipeAction>
                );
              })}
            </List>
          )}
        </Card>
      </PullToRefresh>
    </div>
  );
};

export default Study;
