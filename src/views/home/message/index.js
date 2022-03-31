import { Swiper, WaterMark } from "antd-mobile";

import React from "react";

const Message = () => {
  const textProps = {
    content: "请使用浏览器打开",
  };
  const colors = ["#ace0ff", "#bcffbd", "#e4fabd", "#ffcfac"];

  const verticalItems = colors.map((color, index) => (
    <Swiper.Item key={index}>
      <div style={{ background: color, height: "100%" }}>
        请使用浏览器打开 {index + 1}
      </div>
    </Swiper.Item>
  ));

  return (
    <div>
      <WaterMark {...textProps} />
      <div>
        <Swiper direction="vertical" loop style={{ "--height": "100vh" }}>
          {verticalItems}
        </Swiper>
      </div>
    </div>
  );
};

export default Message;
