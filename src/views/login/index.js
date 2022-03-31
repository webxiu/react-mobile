import { Button, Dialog, Form, Input } from "antd-mobile";

import React from "react";
import { setUserInfo } from "../../utils";
import { useHistory } from "react-router";

export default (props) => {
    console.log("props", props);
    const history = useHistory();

    const [form] = Form.useForm();

    const onFinish = (values) => {
        console.log("onFinish", values);
        const value = form.getFieldsValue();
        if (value.password !== "123456") {
            Dialog.alert({ content: "密码错误" });
            return;
        }
        console.log("value", value);
        setUserInfo(value);
        history.replace("/");
    };
    return (
        <div>
            <Form
                form={form}
                layout="horizontal"
                mode="card"
                onFinish={onFinish}
                initialValues={{ username: "admin" }}
            >
                <Form.Header>用户登录</Form.Header>
                <Form.Item label="用户名" name="username">
                    <Input placeholder="请输入用户名" />
                </Form.Item>
                <Form.Item label="密码" name="password">
                    <Input type="password" placeholder="123456" />
                </Form.Item>
                <Button
                    block
                    color="primary"
                    type="submit"
                    size="large"
                    style={{ marginTop: 20 }}
                >
                    提交
                </Button>
            </Form>
        </div>
    );
};
