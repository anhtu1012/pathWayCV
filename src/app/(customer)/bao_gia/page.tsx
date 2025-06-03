"use client";

import React, { useEffect } from "react";
import { Typography, Card, Button, List, Divider, Row, Col } from "antd";
import { CheckCircleOutlined } from "@ant-design/icons";
import PageBanner from "@/components/common/PageBanner";
import AOS from "aos";
import "./bao_gia.scss";
import { useTranslations } from "next-intl";

const { Title, Paragraph, Text } = Typography;

function PricingPage() {
  const t = useTranslations("PricingPage");

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const pricingPlansStructure = [
    {
      planKey: "plan1",
      popularFlag: false,
      color: "#1890ff",
      delay: 100,
      featureKeys: ["feature1", "feature2", "feature3", "feature4", "feature5"]
    },
    {
      planKey: "plan2",
      popularFlag: true,
      color: "#52c41a",
      delay: 300,
      featureKeys: ["feature1", "feature2", "feature3", "feature4", "feature5"]
    },
    {
      planKey: "plan3",
      popularFlag: false,
      color: "#f5222d",
      delay: 500,
      featureKeys: ["feature1", "feature2", "feature3", "feature4", "feature5", "feature6"]
    },
  ];

  const faqItemKeys = ["item1", "item2", "item3", "item4"];

  return (
    <div className="pricing-page">
      <PageBanner
        title={t("pageBanner.title")}
        subtitle={t("pageBanner.subtitle")}
      />

      <section className="pricing-intro">
        <div className="container">
          <Title level={2} className="section-title" data-aos="fade-up">
            {t("intro.title")}
          </Title>
          <Paragraph
            className="intro-text"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            {t("intro.description")}
          </Paragraph>

          <Row gutter={[24, 24]} className="pricing-cards">
            {pricingPlansStructure.map((planInfo, index) => {
              const translatedFeatures = planInfo.featureKeys.map(fKey => {
                const featureText = t(`plans.${planInfo.planKey}.${fKey}`);
                return (featureText && featureText !== `plans.${planInfo.planKey}.${fKey}`) ? featureText : null;
              }).filter(item => item !== null);

              const originalPriceText = t(`plans.${planInfo.planKey}.originalPrice`);

              return (
                <Col key={index} xs={24} md={8}>
                  <Card
                    className={`pricing-card ${
                      planInfo.popularFlag ? "popular" : ""
                    }`}
                    data-aos="fade-up"
                    data-aos-delay={planInfo.delay}
                    bordered={false}
                    style={{ borderTopColor: planInfo.color }}
                  >
                    {planInfo.popularFlag && (
                      <div className="popular-tag">{t("plans.popularTag")}</div>
                    )}
                    <Title level={3} className="plan-title">
                      {t(`plans.${planInfo.planKey}.title`)}
                    </Title>
                    <div className="price-container">
                      {originalPriceText && originalPriceText !== `plans.${planInfo.planKey}.originalPrice` && (
                        <Text className="original-price">{originalPriceText}</Text>
                      )}
                      <Title level={2} className="price">
                        {t(`plans.${planInfo.planKey}.price`)}
                      </Title>
                    </div>
                    <Paragraph className="plan-description">
                      {t(`plans.${planInfo.planKey}.description`)}
                    </Paragraph>

                    <Divider />

                    <List
                      itemLayout="horizontal"
                      dataSource={translatedFeatures}
                      renderItem={(item) => (
                        <List.Item className="feature-item">
                          <CheckCircleOutlined
                            className="feature-icon"
                            style={{ color: planInfo.color }}
                          />
                          <span>{item}</span>
                        </List.Item>
                      )}
                    />

                    <Button
                      type={planInfo.popularFlag ? "primary" : "default"}
                      block
                      className="plan-button"
                    >
                      {t("plans.selectButton")}
                    </Button>
                  </Card>
                </Col>
              );
            })}
          </Row>
        </div>
      </section>

      <section className="faq-section">
        <div className="container">
          <Title level={2} className="section-title" data-aos="fade-up">
            {t("faq.title")}
          </Title>

          <Row gutter={[48, 24]}>
            {faqItemKeys.map((faqKey, index) => (
              <Col xs={24} md={12} data-aos={index % 2 === 0 ? "fade-right" : "fade-left"} data-aos-delay={100 * (index + 1)} key={faqKey}>
                <div className="faq-item">
                  <Title level={4}>
                    {t(`faq.${faqKey}.question`)}
                  </Title>
                  <Paragraph>
                    {t(`faq.${faqKey}.answer`)}
                  </Paragraph>
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <div className="cta-content" data-aos="zoom-in">
            <Title level={2}>{t("cta.title")}</Title>
            <Paragraph className="cta-paragraph">
              {t("cta.description")}
            </Paragraph>
            <Button type="primary" size="large" className="cta-primary-btn">
              {t("cta.button")}
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default PricingPage;