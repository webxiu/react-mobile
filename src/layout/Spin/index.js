import { Button } from "antd-mobile";
import React from "react";

const Spin = () => {
  return (
    <div
      className="ui-vw-100 ui-vh-100 flex just-center align-center"
      style={{ background: "transparent", zIndex: 999 }}
    >
      <Button loading fill="none" style={{ fontSize: 36 }}></Button>
    </div>
  );
};
export default Spin;
