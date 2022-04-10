import { Button, Dialog, Image, List } from "antd-mobile";
import React, { useEffect, useRef, useState } from "react";
import { getUserInfo, removeUserInfo, setUserInfo } from "../../../utils/storage";

import header from "../../../assets/images/header.png";
import { useHistory } from "react-router";
import userHeader from "../../../assets/images/head01.gif";

const Personal = () => {
  const inputEle = useRef(null);
  const history = useHistory();
  const [userHeaderUrl, setUserHeadUrl] = useState(header);
  const userInfo = getUserInfo();
  useEffect(() => {
    setUserHeadUrl(userInfo.userHeaderUrl || userHeader);
  }, [userInfo]);

  const logout = async () => {
    const res = await Dialog.confirm({ content: "确认退出吗?" });
    if (res) {
      removeUserInfo();
      history.replace("/login");
    }
  };

  const onSelectFile = () => {
    inputEle.current.dispatchEvent(new MouseEvent("click"));
  };

  const onFileChange = async (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = (e) => {
      setUserHeadUrl(reader.result);
      setUserInfo({ userHeaderUrl: reader.result });
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="flex-col just-between ui-h-100">
      <input type="file" ref={inputEle} accept={"image/*"} onChange={onFileChange} style={{ display: "none" }} />
      <div>
        <List header="站长">
          <List.Item
            key={"hailen"}
            prefix={<Image src={header} style={{ borderRadius: 20 }} fit="cover" width={40} height={40} />}
            description={"联系QQ: 759430324"}
          >
            Hailen
          </List.Item>
        </List>
        <List header="我的">
          <List.Item
            onClick={onSelectFile}
            key={"hailen"}
            prefix={<Image src={userHeaderUrl} style={{ borderRadius: 20 }} fit="cover" width={40} height={40} />}
            description={"当前登录"}
          >
            {userInfo.username}
          </List.Item>
        </List>
        <div style={{ margin: "50px 10px 0" }}>
          <a
            href="http://wpa.qq.com/msgrd?v=3&uin=759430324&site=qq&menu=yes"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              textDecoration: "none",
              display: "inline-block",
              width: "100%",
              color: "#fff",
              background: "#1684ff",
              lineHeight: "38px",
              textAlign: "center",
              borderRadius: "4px",
              height: "38px",
              fontSize: "16px",
            }}
          >
            联系Hailen
          </a>
          <a
            href="https://qm.qq.com/cgi-bin/qm/qr?k=2owhPlBhOmMZZxp_DITsLwA30f-_xCfx&authKey=A/99MHT/hWGrWgT5EO+n9lygW7c8yt8LSWyJ1qM5Nw4TN1UzvsYtlXhddmtF4FAu&noverify=0"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              textDecoration: "none",
              display: "inline-block",
              width: "100%",
              color: "#fff",
              background: "#1684ff",
              lineHeight: "38px",
              textAlign: "center",
              borderRadius: "4px",
              height: "38px",
              fontSize: "16px",
              marginTop: "20px",
            }}
          >
            添加进群
          </a>

          <Button block color="danger" style={{ marginTop: "20px" }} onClick={logout}>
            退出
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Personal;
