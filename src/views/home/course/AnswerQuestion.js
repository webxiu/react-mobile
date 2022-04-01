import { List } from "antd-mobile";
import React from "react";

const Wrap = (props) => {
  const { questions } = props;
  const formatExplanation = (str) => {
    const res = str.replace(/：/g, "：<br />").replace(/。/gi, "。<br />");
    return res;
  };
  return (
    <List header={<h3 className="ui-ta-c">简答题</h3>}>
      {questions.map((item) => {
        return (
          <List.Item key={item.id}>
            <div className="flex align-start">
              <span style={{ background: "#ffff00", color: "#333" }}>
                [{item.number}]
              </span>
              <div style={{ fontSize: 14 }}>
                <div style={{ fontWeight: 700 }}>{item.title}</div>
                <div className="exp_desc">答案</div>
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
                    <div className="exp_desc">题解</div>
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
