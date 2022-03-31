import { List, Typography } from "antd";

import React from "react";

const Wrap = (props) => {
  const { questions } = props;
  const formatExplanation = (str) => {
    const res = str.replace(/：/g, "：<br />").replace(/。/gi, "。<br />");
    return res;
  };
  return (
    <List header={<h2 className="ui-ta-c">简答题</h2>}>
      {questions.map((item) => {
        return (
          <List.Item
            key={item.id}
            style={{ "--border-top": "2px", padding: "0 15px" }}
          >
            <div className="flex align-start">
              <Typography.Text mark>[{item.number}]</Typography.Text>
              <div style={{ fontSize: 14 }}>
                <div>{item.title}</div>
                <h3 className="exp_desc">答案</h3>
                <div
                  className="answer"
                  dangerouslySetInnerHTML={{
                    __html: formatExplanation(
                      Array.isArray(item.answer) ? item.answer[0] : item.answer
                    ),
                  }}
                ></div>
                {item.explanation ? (
                  <>
                    <h3 className="exp_desc">题解</h3>
                    <div
                      className="explanation"
                      dangerouslySetInnerHTML={{
                        __html: formatExplanation(item.explanation),
                      }}
                    ></div>
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

export default Wrap;
