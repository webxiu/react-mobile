import { List, Typography } from "antd";

import React from "react";

const Wrap = (props) => {
    const { title, questions } = props;
    const formatExplanation = (str) => {
        const res = str.replace(/：/g, "：<br />").replace(/。/gi, "。<br />");
        return res;
    };

    return (
        <List
            header={<h2>{title}</h2>}
            bordered
            dataSource={questions}
            renderItem={(item) => (
                <List.Item>
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
            )}
        />
    );
};

export default Wrap;
