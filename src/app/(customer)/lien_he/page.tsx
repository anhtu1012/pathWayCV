/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useEffect, useState } from "react";
import {
  Typography,
  Form,
  Input,
  Button,
  Row,
  Col,
  Card,
  Space,
  message,
} from "antd";
import {
  EnvironmentOutlined,
  PhoneOutlined,
  MailOutlined,
  ClockCircleOutlined,
} from "@ant-design/icons";
import PageBanner from "@/components/common/PageBanner";
import AOS from "aos";
import "./lien_he.scss";

const { Title, Paragraph } = Typography;
const { TextArea } = Input;

function ContactPage() {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  const handleSubmit = async (value: any) => {
    setLoading(true);
    try {
      // Simulating API call
      console.log(value);

      await new Promise((resolve) => setTimeout(resolve, 1000));
      message.success("Tin nhắn của bạn đã được gửi thành công!");
      form.resetFields();
    } catch (error) {
      console.error(error);
      message.error("Có lỗi xảy ra. Vui lòng thử lại sau!");
    } finally {
      setLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: <EnvironmentOutlined />,
      title: "Địa chỉ",
      content: "28 Nguyễn Trãi, Quận 1, TP.HCM",
      delay: 100,
    },
    {
      icon: <PhoneOutlined />,
      title: "Điện thoại",
      content: "(+84) 28 1234 5678",
      delay: 200,
    },
    {
      icon: <MailOutlined />,
      title: "Email",
      content: "info@pathway.vn",
      delay: 300,
    },
    {
      icon: <ClockCircleOutlined />,
      title: "Giờ làm việc",
      content: "Thứ 2 - Thứ 6: 9:00 - 18:00",
      delay: 400,
    },
  ];

  return (
    <div className="contact-page">
      <PageBanner
        title="Liên hệ"
        subtitle="Kết nối với chúng tôi để nhận hỗ trợ và tư vấn cho sự nghiệp của bạn"
      />

      <section className="contact-section">
        <div className="container">
          <Row gutter={[48, 48]}>
            <Col xs={24} lg={14} data-aos="fade-right">
              <Title level={2} className="section-title">
                Gửi tin nhắn cho chúng tôi
              </Title>
              <Paragraph className="section-description">
                Bạn có câu hỏi hoặc cần tư vấn? Hãy điền thông tin vào form dưới
                đây và đội ngũ PATHWAY sẽ phản hồi trong thời gian sớm nhất.
              </Paragraph>

              <div className="contact-form">
                <Form
                  form={form}
                  layout="vertical"
                  onFinish={handleSubmit}
                  requiredMark={false}
                >
                  <Row gutter={16}>
                    <Col xs={24} md={12}>
                      <Form.Item
                        name="fullName"
                        label="Họ và tên"
                        rules={[
                          {
                            required: true,
                            message: "Vui lòng nhập họ và tên",
                          },
                        ]}
                      >
                        <Input
                          size="large"
                          placeholder="Nhập họ và tên của bạn"
                        />
                      </Form.Item>
                    </Col>
                    <Col xs={24} md={12}>
                      <Form.Item
                        name="email"
                        label="Email"
                        rules={[
                          { required: true, message: "Vui lòng nhập email" },
                          { type: "email", message: "Email không hợp lệ" },
                        ]}
                      >
                        <Input
                          size="large"
                          placeholder="Nhập địa chỉ email của bạn"
                        />
                      </Form.Item>
                    </Col>
                  </Row>

                  <Form.Item
                    name="subject"
                    label="Tiêu đề"
                    rules={[
                      { required: true, message: "Vui lòng nhập tiêu đề" },
                    ]}
                  >
                    <Input size="large" placeholder="Nhập tiêu đề tin nhắn" />
                  </Form.Item>

                  <Form.Item
                    name="message"
                    label="Nội dung"
                    rules={[
                      { required: true, message: "Vui lòng nhập nội dung" },
                    ]}
                  >
                    <TextArea
                      rows={6}
                      placeholder="Nội dung tin nhắn của bạn..."
                    />
                  </Form.Item>

                  <Form.Item>
                    <Button
                      type="primary"
                      htmlType="submit"
                      size="large"
                      loading={loading}
                      className="submit-button"
                    >
                      Gửi tin nhắn
                    </Button>
                  </Form.Item>
                </Form>
              </div>
            </Col>

            <Col xs={24} lg={10} className="contact-info-col">
              <div className="contact-info-wrapper" data-aos="fade-left">
                <div className="info-header">
                  <Title level={3}>Thông tin liên hệ</Title>
                  <Paragraph>
                    Liên hệ trực tiếp với chúng tôi qua các phương thức sau:
                  </Paragraph>
                </div>

                <div className="info-cards">
                  {contactInfo.map((item, index) => (
                    <Card
                      key={index}
                      className="info-card"
                      data-aos="fade-up"
                      data-aos-delay={item.delay}
                    >
                      <Space align="start">
                        <div className="info-icon">{item.icon}</div>
                        <div className="info-content">
                          <Title level={5}>{item.title}</Title>
                          <Paragraph>{item.content}</Paragraph>
                        </div>
                      </Space>
                    </Card>
                  ))}
                </div>

                <div className="social-links">
                  <Title level={5}>Theo dõi chúng tôi</Title>
                  <div className="social-icons">
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-youtube"></i>
                    </a>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </section>

      <section className="map-section" data-aos="fade-up">
        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.395130672439!2d106.69257187480508!3d10.780376989318893!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f36694ffcb5%3A0x99c29da95bd91b7c!2zMjggTmd1eeG7hW4gVHLDo2ksIFBoxrDhu51uZyBQaOG6oW0gTmfFqSBMw6NvLCBRdeG6rW4gMSwgVGjDoG5oIHBo4buRIEjhu5MgQ2jDrSBNaW5oLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1654678901234!5m2!1svi!2s"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>

      <section className="faq-section">
        <div className="container">
          <Title
            level={2}
            className="section-title text-center"
            data-aos="fade-up"
          >
            Câu hỏi thường gặp
          </Title>

          <Row gutter={[32, 32]} className="faq-grid">
            <Col xs={24} md={12} data-aos="fade-up" data-aos-delay="100">
              <div className="faq-item">
                <Title level={4}>Làm thế nào để đặt lịch tư vấn?</Title>
                <Paragraph>
                  Bạn có thể đặt lịch tư vấn qua form liên hệ trên trang web,
                  gọi điện trực tiếp hoặc gửi email cho chúng tôi. Đội ngũ
                  PATHWAY sẽ liên hệ lại trong vòng 24 giờ để xác nhận lịch hẹn.
                </Paragraph>
              </div>
            </Col>

            <Col xs={24} md={12} data-aos="fade-up" data-aos-delay="200">
              <div className="faq-item">
                <Title level={4}>
                  Tôi có thể đến văn phòng không cần đặt lịch trước?
                </Title>
                <Paragraph>
                  Để đảm bảo chất lượng tư vấn tốt nhất, chúng tôi khuyến khích
                  đặt lịch hẹn trước. Tuy nhiên, bạn có thể ghé văn phòng trong
                  giờ làm việc để tìm hiểu thêm về dịch vụ.
                </Paragraph>
              </div>
            </Col>

            <Col xs={24} md={12} data-aos="fade-up" data-aos-delay="300">
              <div className="faq-item">
                <Title level={4}>
                  PATHWAY có cung cấp dịch vụ tư vấn trực tuyến không?
                </Title>
                <Paragraph>
                  Có, chúng tôi cung cấp dịch vụ tư vấn trực tuyến qua Zoom,
                  Google Meet hoặc các nền tảng khác theo nhu cầu của khách
                  hàng.
                </Paragraph>
              </div>
            </Col>

            <Col xs={24} md={12} data-aos="fade-up" data-aos-delay="400">
              <div className="faq-item">
                <Title level={4}>
                  Làm thế nào để nhận báo giá dịch vụ chi tiết?
                </Title>
                <Paragraph>
                  Bạn có thể xem thông tin báo giá cơ bản tại trang Báo giá của
                  chúng tôi. Để nhận báo giá chi tiết và phù hợp với nhu cầu cụ
                  thể, vui lòng liên hệ trực tiếp với chúng tôi.
                </Paragraph>
              </div>
            </Col>
          </Row>
        </div>
      </section>
    </div>
  );
}

export default ContactPage;
