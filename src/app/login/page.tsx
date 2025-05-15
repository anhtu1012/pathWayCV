/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import AuthServices from "@/services/auth/api.service";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Card, Form, Input, message, Space, Typography } from "antd";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import "./login.scss";

const { Title } = Typography;

const LoginPage: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const onFinish = async (values: any) => {
    try {
      setLoading(true);
      // Call login API
      const response = await AuthServices.login(values);

      if (response.ok) {
        message.success("Login successful!");
        router.push("/customer");
      } else {
        message.error(response.message || "Login failed");
      }
    } catch (error: any) {
      if (error.message) {
        message.error(error.message);
      } else {
        message.error("An error occurred during login");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <Card className="login-card">
        <Title level={2} className="login-title">
          Login
        </Title>
        <Form
          name="login"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          layout="vertical"
          size="large"
        >
          <Form.Item
            name="username"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Username"
            />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password
              prefix={<LockOutlined className="site-form-item-icon" />}
              placeholder="Password"
            />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
              loading={loading}
              block
            >
              Log in
            </Button>
          </Form.Item>

          <Space direction="vertical" align="center" style={{ width: "100%" }}>
            <Link href="/register">Don't have an account? Register now</Link>
            <Link href="/forgot-password">Forgot password?</Link>
          </Space>
        </Form>
      </Card>
    </div>
  );
};

export default LoginPage;
