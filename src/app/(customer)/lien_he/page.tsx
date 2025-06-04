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
import { useTranslations } from "next-intl";

const { Title, Paragraph } = Typography;
const { TextArea } = Input;

function ContactPage() {
  const t = useTranslations("ContactPage");
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
      console.log(value);
      await new Promise((resolve) => setTimeout(resolve, 1000));
      message.success(t("formSection.submitSuccess"));
      form.resetFields();
    } catch (error) {
      console.error(error);
      message.error(t("formSection.submitError"));
    } finally {
      setLoading(false);
    }
  };

  // Giữ nguyên contactInfo gốc, chỉ dịch title và content khi render
  const contactInfoStructure = [
    {
      infoKey: "address", // Key để nối với JSON
      icon: <EnvironmentOutlined />,
      contentOriginal: "28 Nguyễn Trãi, Quận 1, TP.HCM", // Giữ lại nếu cần hoặc bỏ đi
      delay: 100,
    },
    {
      infoKey: "phone",
      icon: <PhoneOutlined />,
      contentOriginal: "(+84) 28 1234 5678",
      delay: 200,
    },
    {
      infoKey: "email",
      icon: <MailOutlined />,
      contentOriginal: "info@pathway.vn",
      delay: 300,
    },
    {
      infoKey: "hours",
      icon: <ClockCircleOutlined />,
      contentOriginal: "Thứ 2 - Thứ 6: 9:00 - 18:00",
      delay: 400,
    },
  ];

  const faqItemKeys = ["item1", "item2", "item3", "item4"];


  return (
    <div className="contact-page">
      <PageBanner
        title={t("pageBanner.title")}
        subtitle={t("pageBanner.subtitle")}
      />

      <section className="contact-section">
        <div className="container">
          <Row gutter={[48, 48]}>
            <Col xs={24} lg={14} data-aos="fade-right">
              <Title level={2} className="section-title">
                {t("formSection.title")}
              </Title>
              <Paragraph className="section-description">
                {t("formSection.description")}
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
                        label={t("formSection.labels.fullName")}
                        rules={[
                          {
                            required: true,
                            message: t("formSection.validation.fullNameRequired"),
                          },
                        ]}
                      >
                        <Input
                          size="large"
                          placeholder={t("formSection.placeholders.fullName")}
                        />
                      </Form.Item>
                    </Col>
                    <Col xs={24} md={12}>
                      <Form.Item
                        name="email"
                        label={t("formSection.labels.email")}
                        rules={[
                          { required: true, message: t("formSection.validation.emailRequired") },
                          { type: "email", message: t("formSection.validation.emailInvalid") },
                        ]}
                      >
                        <Input
                          size="large"
                          placeholder={t("formSection.placeholders.email")}
                        />
                      </Form.Item>
                    </Col>
                  </Row>

                  <Form.Item
                    name="subject"
                    label={t("formSection.labels.subject")}
                    rules={[
                      { required: true, message: t("formSection.validation.subjectRequired") },
                    ]}
                  >
                    <Input size="large" placeholder={t("formSection.placeholders.subject")} />
                  </Form.Item>

                  <Form.Item
                    name="message"
                    label={t("formSection.labels.message")}
                    rules={[
                      { required: true, message: t("formSection.validation.messageRequired") },
                    ]}
                  >
                    <TextArea
                      rows={6}
                      placeholder={t("formSection.placeholders.message")}
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
                      {t("formSection.submitButton")}
                    </Button>
                  </Form.Item>
                </Form>
              </div>
            </Col>

            <Col xs={24} lg={10} className="contact-info-col">
              <div className="contact-info-wrapper" data-aos="fade-left">
                <div className="info-header">
                  <Title level={3}>{t("infoSection.title")}</Title>
                  <Paragraph>
                    {t("infoSection.description")}
                  </Paragraph>
                </div>

                <div className="info-cards">
                  {contactInfoStructure.map((item, index) => (
                    <Card
                      key={index}
                      className="info-card"
                      data-aos="fade-up"
                      data-aos-delay={item.delay}
                    >
                      <Space align="start">
                        <div className="info-icon">{item.icon}</div>
                        <div className="info-content">
                          <Title level={5}>{t(`infoSection.${item.infoKey}Title`)}</Title>
                          <Paragraph>{t(`infoSection.${item.infoKey}Content`)}</Paragraph>
                        </div>
                      </Space>
                    </Card>
                  ))}
                </div>

                <div className="social-links">
                  <Title level={5}>{t("infoSection.followUsTitle")}</Title>
                  <div className="social-icons">
                    {/* Giữ nguyên link mạng xã hội, có thể thêm aria-label được dịch nếu muốn */}
                    <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="#" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                    <a href="#" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                      <i className="fab fa-youtube"></i>
                    </a>
                    <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
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
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.395130672439!2d106.69257187480508!3d10.780376989318893!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f36694ffcb5%3A0x99c29da95bd91b7c!2zMjggTmd1eeG7hW4gVHLDo2ksIFBoxrDhu51uZyBQaOG6oW0gTmfFqSBMw6NvLCBRdeG6rW4gMSwgVGjDoG5oIHBo4buRIEjhu5MgQ2jDrSBNaW5oLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1654678901234!5m2!1svi!2s" // Bạn nên thay thế bằng link Google Maps thực tế của bạn
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
            {t("faqSection.title")}
          </Title>

          <Row gutter={[32, 32]} className="faq-grid">
            {faqItemKeys.map((faqKey, index) => (
              <Col xs={24} md={12} data-aos={index % 2 === 0 ? "fade-right" : "fade-left"} data-aos-delay={100 * (index + 1)} key={faqKey}>
                <div className="faq-item">
                  <Title level={4}>{t(`faqSection.${faqKey}.question`)}</Title>
                  <Paragraph>{t(`faqSection.${faqKey}.answer`)}</Paragraph>
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </section>
    </div>
  );
}

export default ContactPage;