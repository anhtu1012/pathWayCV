/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import {
  Form,
  Input,
  Button,
  Divider,
  message,
  Row,
  Col,
  Typography,
} from "antd";
import {
  UserOutlined,
  PhoneOutlined,
  MailOutlined,
  EditOutlined,
  SaveOutlined,
} from "@ant-design/icons";

const { Title } = Typography;

interface UserInfoProps {
  user: any;
}

const UserInfo: React.FC<UserInfoProps> = ({ user }) => {
  const [form] = Form.useForm();
  const [isEditing, setIsEditing] = useState(false);

  const toggleEdit = () => {
    if (!isEditing) {
      form.setFieldsValue({
        fullName: user.fullName,
        email: user.primaryEmailAddress?.emailAddress,
        phone: user.phoneNumbers?.[0]?.phoneNumber || "",
        address: user.unsafeMetadata?.address || "",
      });
    }
    setIsEditing(!isEditing);
  };

  const handleSubmit = (values: any) => {
    // Here you would update the user's information via your API
    console.log("Updated user info:", values);
    message.success("Cập nhật thông tin thành công!");
    setIsEditing(false);
  };

  return (
    <div className="user-info-section">
      <div className="section-header">
        <Title level={4}>Thông tin cá nhân</Title>
        <Button
          type={isEditing ? "primary" : "default"}
          icon={isEditing ? <SaveOutlined /> : <EditOutlined />}
          onClick={toggleEdit}
        >
          {isEditing ? "Lưu thông tin" : "Chỉnh sửa"}
        </Button>
      </div>

      <Divider />

      {isEditing ? (
        <Form
          form={form}
          layout="vertical"
          onFinish={handleSubmit}
          className="edit-form"
        >
          <Row gutter={16}>
            <Col xs={24} md={12}>
              <Form.Item
                name="fullName"
                label="Họ và tên"
                rules={[{ required: true, message: "Vui lòng nhập họ tên" }]}
              >
                <Input prefix={<UserOutlined />} placeholder="Họ và tên " />
              </Form.Item>
            </Col>
            <Col xs={24} md={12}>
              <Form.Item
                name="email"
                label="Email "
                rules={[
                  { required: true, message: "Vui lòng nhập email" },
                  { type: "email", message: "Email không hợp lệ" },
                ]}
              >
                <Input prefix={<MailOutlined />} placeholder="Email " disabled />
              </Form.Item>
            </Col>
            <Col xs={24} md={12}>
              <Form.Item
                name="phone"
                label="Số điện thoại"
                rules={[
                  { required: true, message: "Vui lòng nhập số điện thoại" },
                ]}
              >
                <Input prefix={<PhoneOutlined />} placeholder="Số điện thoại" />
              </Form.Item>
            </Col>
            <Col xs={24} md={12}>
              <Form.Item name="address" label="Địa chỉ">
                <Input placeholder="Địa chỉ" />
              </Form.Item>
            </Col>
          </Row>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Lưu thay đổi
            </Button>
            <Button
              style={{ marginLeft: 8 }}
              onClick={() => setIsEditing(false)}
            >
              Hủy
            </Button>
          </Form.Item>
        </Form>
      ) : (
        <div className="user-info-display">
          <Row gutter={[16, 16]}>
            <Col xs={24} md={12}>
              <div className="info-item">
                <span className="info-label">Họ và tên: </span>
                <span className="info-value">{user.fullName}</span>
              </div>
            </Col>
            <Col xs={24} md={12}>
              <div className="info-item">
                <span className="info-label">Email: </span>
                <span className="info-value">
                  {user.primaryEmailAddress?.emailAddress}
                </span>
              </div>
            </Col>
            <Col xs={24} md={12}>
              <div className="info-item">
                <span className="info-label">Số điện thoại: </span>
                <span className="info-value">
                  {user.phoneNumbers?.[0]?.phoneNumber || "Chưa cập nhật"}
                </span>
              </div>
            </Col>
            <Col xs={24} md={12}>
              <div className="info-item">
                <span className="info-label">Địa chỉ: </span>
                <span className="info-value">
                  {user.unsafeMetadata?.address || "Chưa cập nhật"}
                </span>
              </div>
            </Col>
          </Row>
        </div>
      )}
    </div>
  );
};

export default UserInfo;
