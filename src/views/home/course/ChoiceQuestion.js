import { List, Radio, Space } from "antd-mobile";

import React from "react";

const Maks = (props) => {
  const { questions } = props;
  const formatExplanation = (str) => {
    const res = str.replace(/：/g, "：<br />").replace(/。/g, "。<br />");
    return res;
  };

  return (
    <List header={<h3 className="ui-ta-c">选择题</h3>}>
      {questions.map((item) => {
        return (
          <List.Item key={item.id}>
            <div className="flex align-start">
              <span style={{ background: "#ffff00", color: "#333" }}>[{item.number}]</span>
              <div style={{ fontSize: 14, marginLeft: 10 }}>
                <div style={{ fontWeight: 700 }}>{item.title.replace("（", "（ " + item.answer[0]).replace("【自测题】", "")}</div>
                <div className="mt10">
                  <Radio.Group value={item.answer[0]}>
                    <Space direction="vertical">
                      {item.options.map((c) => (
                        <Radio
                          key={c.value}
                          value={c.value}
                          style={{
                            "--icon-size": "18px",
                            "--font-size": "14px",
                            "--gap": "6px",
                            color: c.value === item.answer[0] ? "#18cf86" : "",
                          }}
                        >
                          {c.value} {c.text}
                        </Radio>
                      ))}
                    </Space>
                  </Radio.Group>
                </div>
                {item.explanation ? (
                  <>
                    <div className="exp_desc">【解释】:</div>
                    <div
                      className="explanation"
                      dangerouslySetInnerHTML={{
                        __html: formatExplanation(item.explanation),
                      }}
                    />
                  </>
                ) : null}
              </div>
            </div>
          </List.Item>
        );
      })}
    </List>
  );
};

export default Maks;
