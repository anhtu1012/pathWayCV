/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import {
  EnvironmentOutlined,
  FacebookOutlined,
  LinkedinOutlined,
  MailOutlined,
  PhoneOutlined,
  SendOutlined,
  TwitterOutlined,
  YoutubeOutlined,
} from "@ant-design/icons";
import {
  Button,
  Col,
  Form,
  Input,
  Layout,
  Row,
  Typography,
  message,
} from "antd";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import "./index.scss";

const { Footer } = Layout;
const { Title, Text, Paragraph } = Typography;

const FooterComponent: React.FC = () => {
  const [form] = Form.useForm();

  const handleSubmit = (values: any) => {
    console.log("Form values:", values);
    message.success("Yêu cầu của bạn đã được gửi thành công!");
    form.resetFields();
  };

  return (
    <Footer className="site-footer pathway-footer">
      <div className="footer-main">
        <div className="container">
          <Row gutter={[48, 32]}>
            <Col xs={24} md={8} lg={7}>
              <div className="footer-about">
                <div className="footer-logo">
                  <Image
                    src="/assets/image/logo.png"
                    alt="PATHWAY Logo"
                    width={200}
                    height={80}
                  />
                </div>
                <Paragraph className="about-text">
                  PATHWAY là đơn vị dẫn đầu trong lĩnh vực tư vấn nghề nghiệp,
                  giúp các chuyên gia phát triển sự nghiệp bền vững thông qua
                  các dịch vụ đánh giá CV, tư vấn phỏng vấn và định hướng nghề
                  nghiệp.
                </Paragraph>
                <div className="social-links">
                  <a
                    href="https://facebook.com"
                    aria-label="Facebook"
                    className="social-link"
                  >
                    <FacebookOutlined />
                  </a>
                  <a
                    href="https://linkedin.com"
                    aria-label="LinkedIn"
                    className="social-link"
                  >
                    <LinkedinOutlined />
                  </a>
                  <a
                    href="https://twitter.com"
                    aria-label="Twitter"
                    className="social-link"
                  >
                    <TwitterOutlined />
                  </a>
                  <a
                    href="https://youtube.com"
                    aria-label="YouTube"
                    className="social-link"
                  >
                    <YoutubeOutlined />
                  </a>
                </div>
              </div>
            </Col>

            <Col xs={24} sm={12} md={8} lg={5}>
              <div className="footer-links">
                <Title level={4}>Dịch vụ</Title>
                <ul>
                  <li>
                    <Link href="/dich_vu#cv-review">Đánh giá CV</Link>
                  </li>
                  <li>
                    <Link href="/dich_vu#interview">Luyện phỏng vấn</Link>
                  </li>
                  <li>
                    <Link href="/dich_vu#career">Tư vấn nghề nghiệp</Link>
                  </li>
                  <li>
                    <Link href="/dich_vu#linkedin">Tối ưu LinkedIn</Link>
                  </li>
                  <li>
                    <Link href="/dich_vu#training">Đào tạo kỹ năng mềm</Link>
                  </li>
                </ul>
              </div>
            </Col>

            <Col xs={24} sm={12} md={8} lg={5}>
              <div className="footer-links">
                <Title level={4}>Thông tin</Title>
                <ul>
                  <li>
                    <Link href="/gioi_thieu">Về chúng tôi</Link>
                  </li>
                  <li>
                    <Link href="/lien_he">Liên hệ</Link>
                  </li>
                  <li>
                    <Link href="/blogs">Blog</Link>
                  </li>
                  <li>
                    <Link href="/faq">Câu hỏi thường gặp</Link>
                  </li>
                  <li>
                    <Link href="/chinh-sach-bao-mat">Chính sách bảo mật</Link>
                  </li>
                </ul>
              </div>
            </Col>

            <Col xs={24} lg={7}>
              <div className="footer-contact">
                <Title level={4}>Liên hệ</Title>
                <div className="contact-info">
                  <div className="info-item">
                    <EnvironmentOutlined className="info-icon" />
                    <div>
                      <Text strong>Văn phòng chính:</Text>
                      <Paragraph>28 Nguyễn Trãi, Quận 1, TP.HCM</Paragraph>
                    </div>
                  </div>

                  <div className="info-item">
                    <PhoneOutlined className="info-icon" />
                    <div>
                      <Text strong>Hotline:</Text>
                      <Paragraph>
                        <a href="tel:0909123456">0909 123 456</a>
                      </Paragraph>
                    </div>
                  </div>

                  <div className="info-item">
                    <MailOutlined className="info-icon" />
                    <div>
                      <Text strong>Email:</Text>
                      <Paragraph>
                        <a href="mailto:contact@pathway.vn">
                          contact@pathway.vn
                        </a>
                      </Paragraph>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>

      <div className="footer-newsletter">
        <div className="container">
          <Row align="middle" justify="space-between">
            <Col xs={24} md={12}>
              <Title level={4} className="newsletter-title">
                Đăng ký nhận thông tin
              </Title>
              <Paragraph className="newsletter-desc">
                Nhận các tin tức mới nhất về nghề nghiệp và cơ hội việc làm
              </Paragraph>
            </Col>
            <Col xs={24} md={12}>
              <Form
                form={form}
                onFinish={handleSubmit}
                layout="inline"
                className="newsletter-form"
              >
                <Form.Item
                  name="email"
                  rules={[
                    { required: true, message: "Vui lòng nhập email" },
                    { type: "email", message: "Email không hợp lệ" },
                  ]}
                  className="newsletter-input-wrap"
                >
                  <Input
                    placeholder="Email của bạn"
                    className="newsletter-input"
                  />
                </Form.Item>
                <Form.Item className="newsletter-button-wrap">
                  <Button
                    type="primary"
                    htmlType="submit"
                    className="newsletter-button"
                    icon={<SendOutlined />}
                  >
                    Đăng ký
                  </Button>
                </Form.Item>
              </Form>
            </Col>
          </Row>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <Row align="middle" justify="space-between">
            <Col xs={24} md={12}>
              <div className="copyright">
                © {new Date().getFullYear()} PATHWAY. Tất cả quyền được bảo lưu.
              </div>
            </Col>
            <Col xs={24} md={12}>
              <div className="footer-bottom-links">
                <a href="/terms">Điều khoản sử dụng</a>
                <a href="/privacy">Chính sách bảo mật</a>
                <a href="/cookies">Cookies</a>
              </div>
            </Col>
          </Row>
        </div>
      </div>

      <div className="footer-social-vertical">
        <a
          href="https://zalo.me"
          target="_blank"
          rel="noopener noreferrer"
          className="zalo-icon social-vertical"
          aria-label="Zalo"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/9/91/Icon_of_Zalo.svg"
            alt="Zalo"
            width={22}
            height={22}
          />
        </a>
        <a
          href="tel:0909123456"
          className="phone-icon social-vertical"
          aria-label="Gọi ngay"
        >
          <PhoneOutlined />
        </a>
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="fb-icon social-vertical"
          aria-label="Facebook"
        >
          <FacebookOutlined />
        </a>
      </div>
    </Footer>
  );
};

export default FooterComponent;
