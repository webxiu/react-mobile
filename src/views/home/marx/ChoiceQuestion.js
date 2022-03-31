import { List, Radio, Space, Typography } from "antd";

import React from "react";

const Maks = (props) => {
  const { questions } = props;
  const formatExplanation = (str) => {
    const res = str.replace(/：/g, "：<br />").replace(/。/g, "。<br />");
    return res;
  };

  return (
    <List header={<h2 className="ui-ta-c">选择题</h2>}>
      {questions.map((item) => {
        return (
          <List.Item key={item.id} style={{ "--border-top": "2px" }}>
            <div className="flex align-start mt20">
              <Typography.Text mark>[{item.number}]</Typography.Text>
              <div style={{ fontSize: 14 }}>
                <div>{item.title.replace("（", "（ " + item.answer[0])}</div>
                <div>
                  <Radio.Group value={item.answer[0]}>
                    <Space direction="vertical">
                      {item.options.map((c) => (
                        <Radio
                          key={c.value}
                          value={c.value}
                          style={{
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
                    <h3 className="exp_desc">题解</h3>
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
