"use client";

import PageBanner from "@/components/common/PageBanner";
import {
  CheckCircleOutlined,
  FileSearchOutlined,
  RocketOutlined,
  SolutionOutlined,
  TeamOutlined,
} from "@ant-design/icons";
import { Button, Card, Col, Row, Tabs, Tag, Typography } from "antd";
import AOS from "aos";
import Image from "next/image";
import { useEffect } from "react";
import "./dich_vu.scss";
import { useTranslations } from "next-intl";

const { Title, Paragraph } = Typography;
const { TabPane } = Tabs;

function ServicePage() {
  const t = useTranslations("ServicePage");

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  const servicesData = [
    {
      id: 1,
      key: "service1",
      icon: <FileSearchOutlined />,
      image:
        "https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=2070&auto=format&fit=crop",
      delay: 100,
    },
    {
      id: 2,
      key: "service2",
      icon: <TeamOutlined />,
      image:
        "https://images.unsplash.com/photo-1565688534245-05d6b5be184a?q=80&w=2070&auto=format&fit=crop",
      delay: 200,
    },
    {
      id: 3,
      key: "service3",
      icon: <RocketOutlined />,
      image:
        "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2074&auto=format&fit=crop",
      delay: 300,
    },
    {
      id: 4,
      key: "service4",
      icon: <SolutionOutlined />,
      image:
        "https://images.unsplash.com/photo-1515169067868-5387ec356754?q=80&w=2070&auto=format&fit=crop",
      delay: 400,
    },
  ];

  const testimonialsData = [
    {
      id: 1,
      key: "testimonial1",
      avatar:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop",
    },
    {
      id: 2,
      key: "testimonial2",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop",
    },
    {
      id: 3,
      key: "testimonial3",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop",
    },
  ];

  // Danh sách các key của feature cho mỗi gói giá (phải khớp với JSON)
  // Bạn có thể điều chỉnh số lượng feature ở đây nếu cần
  const pricingFeaturesKeys = {
    package1: [
      { key: "feature1", disabled: false },
      { key: "feature2", disabled: false },
      { key: "feature3", disabled: false },
      { key: "feature4_disabled", disabled: true },
      { key: "feature5_disabled", disabled: true },
    ],
    package2: [
      { key: "feature1", disabled: false },
      { key: "feature2", disabled: false },
      { key: "feature3", disabled: false },
      { key: "feature4", disabled: false },
      { key: "feature5_disabled", disabled: true },
    ],
    package3: [
      { key: "feature1", disabled: false },
      { key: "feature2", disabled: false },
      { key: "feature3", disabled: false },
      { key: "feature4", disabled: false },
      { key: "feature5", disabled: false },
    ],
  };


  return (
    <div className="service-page">
      <PageBanner
        title={t("pageBanner.title")}
        subtitle={t("pageBanner.subtitle")}
      />

      <section className="service-overview">
        <div className="container">
          <Row gutter={[48, 48]} align="middle">
            <Col xs={24} lg={12} data-aos="fade-right">
              <div className="overview-content">
                <Title level={2} className="section-title">
                  {t("overview.title")}
                </Title>
                <Paragraph className="section-description">
                  {t("overview.description")}
                </Paragraph>
                <div className="stats-container">
                  <div
                    className="stat-item"
                    data-aos="fade-up"
                    data-aos-delay="100"
                  >
                    <Title level={2}>{t("overview.stat1_value")}</Title>
                    <Paragraph>{t("overview.stat1_label")}</Paragraph>
                  </div>
                  <div
                    className="stat-item"
                    data-aos="fade-up"
                    data-aos-delay="200"
                  >
                    <Title level={2}>{t("overview.stat2_value")}</Title>
                    <Paragraph>{t("overview.stat2_label")}</Paragraph>
                  </div>
                  <div
                    className="stat-item"
                    data-aos="fade-up"
                    data-aos-delay="300"
                  >
                    <Title level={2}>{t("overview.stat3_value")}</Title>
                    <Paragraph>{t("overview.stat3_label")}</Paragraph>
                  </div>
                </div>
                <Button type="primary" size="large" className="learn-more-btn">
                  {t("overview.ctaButton")}
                </Button>
              </div>
            </Col>
            <Col xs={24} lg={12} data-aos="fade-left">
              <div className="overview-image">
                <Image
                  src="https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=2069&auto=format&fit=crop"
                  alt={t("overview.imageAlt")}
                  width={600}
                  height={450}
                  className="rounded-image"
                />
              </div>
            </Col>
          </Row>
        </div>
      </section>

      <section className="service-list">
        <div className="container">
          <Title
            level={2}
            className="section-title text-center"
            data-aos="fade-up"
          >
            {t("serviceList.title")}
          </Title>
          <Paragraph
            className="section-description text-center"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            {t("serviceList.description")}
          </Paragraph>

          <div className="services-grid">
            {servicesData.map((service) => (
              <Card
                key={service.id}
                className="service-card"
                data-aos="fade-up"
                data-aos-delay={service.delay}
              >
                <div className="service-image">
                  <Image
                    src={service.image}
                    alt={t(`services.${service.key}.title`)}
                    width={400}
                    height={225}
                    className="rounded-image"
                  />
                </div>
                <div className="service-icon">{service.icon}</div>
                <Title level={3} className="service-title">
                  {t(`services.${service.key}.title`)}
                </Title>
                <Paragraph className="service-description">
                  {t(`services.${service.key}.description`)}
                </Paragraph>
                <div className="service-features">
                  {[1, 2, 3, 4].map((featureNum) => {
                    // Cố gắng lấy bản dịch, nếu không có thì không render gì cả (hoặc render key path)
                    const featureText = t(`services.${service.key}.feature${featureNum}`);
                    // Kiểm tra xem bản dịch có khác với key path không, để tránh render key path
                    if (featureText && featureText !== `services.${service.key}.feature${featureNum}`) {
                      return (
                        <div key={featureNum} className="feature-item">
                          <CheckCircleOutlined className="feature-icon" />
                          <span>{featureText}</span>
                        </div>
                      );
                    }
                    return null;
                  })}
                </div>
                <div className="service-btn-container">
                  <Button type="primary" className="service-btn">
                    {t("serviceList.learnMoreButton")}
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="process-section">
        <div className="container">
          <Title
            level={2}
            className="section-title text-center"
            data-aos="fade-up"
          >
            {t("process.title")}
          </Title>
          <Paragraph
            className="section-description text-center"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            {t("process.description")}
          </Paragraph>

          <div
            className="process-timeline"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            {[1, 2, 3, 4].map((stepNum) => (
              <div className="timeline-step" key={stepNum}>
                <div className="step-number">{stepNum}</div>
                <div className="step-content">
                  <Title level={4}>{t(`process.step${stepNum}.title`)}</Title>
                  <Paragraph>
                    {t(`process.step${stepNum}.description`)}
                  </Paragraph>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="testimonial-section">
        <div className="container">
          <Title
            level={2}
            className="section-title text-center"
            data-aos="fade-up"
          >
            {t("testimonials.title")}
          </Title>

          <div className="testimonial-grid">
            {testimonialsData.map((testimonial) => (
              <Card
                key={testimonial.id}
                className="testimonial-card"
                data-aos="fade-up"
                data-aos-delay={100 + testimonial.id * 100}
              >
                <div className="testimonial-content">
                  <div className="quote-icon">
                    <i className="fas fa-quote-left"></i>
                  </div>
                  <Paragraph className="testimonial-text">
                    {t(`testimonials.${testimonial.key}.content`)}
                  </Paragraph>
                </div>
                <div className="testimonial-author">
                  <div className="author-avatar">
                    <Image
                      src={testimonial.avatar}
                      alt={t(`testimonials.${testimonial.key}.name`)}
                      width={60}
                      height={60}
                      className="rounded-full"
                    />
                  </div>
                  <div className="author-info">
                    <Title level={5} className="author-name">
                      {t(`testimonials.${testimonial.key}.name`)}
                    </Title>
                    <Paragraph className="author-position">
                      {t(`testimonials.${testimonial.key}.position`)}
                    </Paragraph>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="pricing-section">
        <div className="container">
          <Title
            level={2}
            className="section-title text-center"
            data-aos="fade-up"
          >
            {t("pricing.title")}
          </Title>
          <Paragraph
            className="section-description text-center"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            {t("pricing.description")}
          </Paragraph>

          <Tabs
            defaultActiveKey="1"
            centered
            className="pricing-tabs"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <TabPane tab={t("pricing.tab1_title")} key="1">
              <Row gutter={[24, 24]} className="pricing-cards">
                {["package1", "package2", "package3"].map((pkgKey) => (
                  <Col xs={24} md={8} key={pkgKey}>
                    <Card className={`pricing-card ${pkgKey === "package2" ? "highlighted" : ""} ${pkgKey === "package1" ? "basic" : pkgKey === "package3" ? "vip" : ""}`}>
                      <div className="pricing-header">
                        <Tag color={pkgKey === "package1" ? "blue" : pkgKey === "package2" ? "gold" : "red"}>
                            {t(`pricing.${pkgKey}.tag`)}
                        </Tag>
                        <Title level={3}>{t(`pricing.${pkgKey}.title`)}</Title>
                        <div className="pricing-value">
                          <span className="price">{t(`pricing.${pkgKey}.price`)}</span>
                          <span className="currency">{t("pricing.currency")}</span>
                        </div>
                      </div>
                      <div className="pricing-features">
                        {(pricingFeaturesKeys[pkgKey as keyof typeof pricingFeaturesKeys] || []).map((featureInfo, index) => {
                          const featureText = t(`pricing.${pkgKey}.${featureInfo.key}`);
                          // Chỉ render nếu có bản dịch (không phải là đường dẫn key)
                          if (featureText && featureText !== `pricing.${pkgKey}.${featureInfo.key}`) {
                            return (
                              <div key={index} className={`feature-item ${featureInfo.disabled ? "disabled" : ""}`}>
                                <CheckCircleOutlined className="feature-icon" />
                                <span>{featureText}</span>
                              </div>
                            );
                          }
                          return null;
                        })}
                      </div>
                      <div className="pricing-btn-container">
                        <Button type="primary" block className="pricing-button">
                          {t("pricing.signUpButton")}
                        </Button>
                      </div>
                    </Card>
                  </Col>
                ))}
              </Row>
            </TabPane>
            <TabPane tab={t("pricing.tab2_title")} key="2">
              <div className="coming-soon text-center">
                <Title level={4}>
                  {t("pricing.contactForQuoteMessage")}
                </Title>
                <Button type="primary" size="large">
                  {t("pricing.contactButton")}
                </Button>
              </div>
            </TabPane>
            <TabPane tab={t("pricing.tab3_title")} key="3">
              <div className="coming-soon text-center">
                <Title level={4}>
                  {t("pricing.contactForQuoteMessage")}
                </Title>
                <Button type="primary" size="large">
                  {t("pricing.contactButton")}
                </Button>
              </div>
            </TabPane>
          </Tabs>
        </div>
      </section>

      <section className="cta-section" data-aos="fade-up">
        <div className="container">
          <div className="cta-content">
            <Title level={2}>{t("cta.title")}</Title>
            <Paragraph style={{ color: "white" }}>
              {t("cta.description")}
            </Paragraph>
            <div className="cta-buttons">
              <Button type="primary" size="large" className="cta-primary-btn">
                {t("cta.button1_text")}
              </Button>
              <Button size="large" className="cta-psecondary-btn">{t("cta.button2_text")}</Button>
            </div>
          </div>
        </div>
      </section>

      <section className="faq-section">
        <div className="container">
          <Title
            level={2}
            className="section-title text-center"
            data-aos="fade-up"
          >
            {t("faq.title")}
          </Title>

          <Row gutter={[32, 32]} className="faq-grid">
            {[1, 2, 3, 4].map((faqNum, index) => (
              <Col xs={24} md={12} data-aos="fade-up" data-aos-delay={100 + index * 100} key={faqNum}>
                <div className="faq-item">
                  <Title level={4}>
                    {t(`faq.item${faqNum}.question`)}
                  </Title>
                  <Paragraph>
                    {t(`faq.item${faqNum}.answer`)}
                  </Paragraph>
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </section>
    </div>
  );
}

export default ServicePage;