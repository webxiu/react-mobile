import { Button, Dialog, Form, Input } from "antd-mobile";

import React from "react";
import regAuth from "../../utils/reg";
import { setUserInfo } from "../../utils/storage";
import { useHistory } from "react-router";

export default (props) => {
  const history = useHistory();
  const [form] = Form.useForm();

  const onFinish = (values) => {
    const value = form.getFieldsValue();
    if (!regAuth.userAuth.test(value.username)) {
      Dialog.alert({ content: "用户名为5-12位字母、数字、下划线!" });
      return;
    }
    if (!regAuth.password.test(value.password)) {
      Dialog.alert({ content: "密码为6-12位数字、字母、下划线!" });
      return;
    }

    setUserInfo(value);
    history.replace("/");
  };
  return (
    <div>
      <Form form={form} layout="horizontal" mode="card" onFinish={onFinish} initialValues={{ username: "admin", password: "123456" }}>
        <Form.Header>用户登录</Form.Header>
        <Form.Item label="用户名" name="username" rules={[{ required: true, message: "请输入用户名!" }]}>
          <Input placeholder="请输入用户名" />
        </Form.Item>
        <Form.Item label="密码" name="password" rules={[{ required: true, message: "密码不能为空!" }]}>
          <Input type="password" placeholder="请输入密码" />
        </Form.Item>
        <Button block color="primary" type="submit" size="large" style={{ marginTop: 20 }}>
          提交
        </Button>
      </Form>
    </div>
  );
};
