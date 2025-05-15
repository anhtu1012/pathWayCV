/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import AuthServices from "@/services/auth/api.service";
import { LockOutlined, MailOutlined, UserOutlined } from "@ant-design/icons";
import {
  App,
  Button,
  Card,
  Form,
  Input,
  message,
  Space,
  Typography,
} from "antd";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import "../login/login.scss";
import { toast } from "react-toastify";

const { Title } = Typography;

const RegisterPage: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const onFinish = async (values: any) => {
    try {
      setLoading(true);
      console.log("values", values);

      // Call the register API - Zod validation sẽ tự động xảy ra trong AuthServices.register
      const response = await AuthServices.register(values);

      if (response.success) {
        message.success("Registration successful! Please log in.");
        router.push("/login");
      } else {
        message.error(response.message || "Registration failed");
      }
    } catch (error: any) {
      console.log("error", error.message);

      // Bắt lỗi từ Zod validation và hiển thị
      if (error.message) {
        toast.error(error.message);
      } else {
        message.error("An error occurred during registration");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <App>
      <div className="login-container">
        <Card className="login-card">
          <Title level={2} className="login-title">
            Register
          </Title>
          <Form
            name="register"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            layout="vertical"
            size="large"
          >
            <Form.Item
              name="username"
              rules={[
                { required: true, message: "Please input your username!" },
              ]}
            >
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="Username"
              />
            </Form.Item>

            <Form.Item
              name="email"
              rules={[{ required: true, message: "Please input your email!" }]}
            >
              <Input
                prefix={<MailOutlined className="site-form-item-icon" />}
                placeholder="Email"
              />
            </Form.Item>

            <Form.Item
              name="password"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
            >
              <Input.Password
                prefix={<LockOutlined className="site-form-item-icon" />}
                placeholder="Password"
              />
            </Form.Item>

            <Form.Item
              name="confirmPassword"
              rules={[
                { required: true, message: "Please confirm your password!" },
              ]}
            >
              <Input.Password
                prefix={<LockOutlined className="site-form-item-icon" />}
                placeholder="Confirm Password"
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
                Register
              </Button>
            </Form.Item>

            <Space
              direction="vertical"
              align="center"
              style={{ width: "100%" }}
            >
              <Link href="/login">Already have an account? Login</Link>
            </Space>
          </Form>
        </Card>
      </div>
    </App>
  );
};

export default RegisterPage;
