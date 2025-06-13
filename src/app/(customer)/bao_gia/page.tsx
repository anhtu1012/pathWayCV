"use client";

import React, { useEffect, useState } from "react";
import { Typography, Card, Button, List, Divider, Row, Col } from "antd";
import { CheckCircleOutlined } from "@ant-design/icons";
import PageBanner from "@/components/common/PageBanner";
import AOS from "aos";
import "./bao_gia.scss";
import { useTranslations } from "next-intl";
import { useSelector } from "react-redux";
import { selectAuthLogin } from "@/lib/store/slices/loginSlice";
import PaymentReceiptModal from "@/components/payments/PaymentReceiptModal";
import BuyPlanServices from "@/services/buy-plan/buy-plan.service";

const { Title, Paragraph, Text } = Typography;
type SelectedPlan = {
  id: string;
  price: number;
  userBalance: number;
  remainingAmount: number;
  hasSufficientFunds: boolean;
  planKey: string;
  color: string;
} | null;
function PricingPage() {
  const t = useTranslations("PricingPage");
  const userData = useSelector(selectAuthLogin);
  console.log("User Balance:", userData);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [remaining, setRemaining] = useState(0);
  const [selectedPlan, setSelectedPlan] = useState<SelectedPlan>(null);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  // Handle payment logic
  const handlePayment = (planId: string, price: number) => {
    const userBalance = userData?.data?.balance || 0;
    const remaining = price - userBalance;
    setRemaining(remaining);
    const planInfo = pricingPlansStructure.find((p) => p.id === planId);

    setSelectedPlan({
      id: planId,
      price: price,
      userBalance: userBalance,
      remainingAmount: remaining > 0 ? remaining : 0,
      hasSufficientFunds: remaining <= 0,
      planKey: planInfo?.planKey || "plan1",
      color: planInfo?.color || "#1890ff",
    });

    setIsModalVisible(true);
  };

  // Handle payment confirmation
  const handleConfirmPayment = async () => {
    if (remaining <= 0) {
      try {
        await BuyPlanServices.buyPlan({
          planId: selectedPlan?.id || "",
          note: `Đăng ký gói ${getSelectedPlanTitle()}`,
        });
        // No need to close modal here as it's handled in PaymentReceiptModal
      } catch (error) {
        console.error("Error processing payment:", error);
        setIsModalVisible(false);
      }
    } else {
      // If insufficient funds, close modal
      setIsModalVisible(false);
    }
  };

  // Get the plan title based on the selected plan ID
  const getSelectedPlanTitle = () => {
    if (!selectedPlan) return "";
    const planInfo = pricingPlansStructure.find(
      (p) => p.id === selectedPlan.id
    );
    return planInfo ? t(`plans.${planInfo.planKey}.title`) : "";
  };

  const pricingPlansStructure = [
    {
      id: "019740b5-9d45-73d5-b8b6-d98f555ad696",
      price: 499000,
      planKey: "plan1",
      popularFlag: false,
      color: "#1890ff",
      delay: 100,
      featureKeys: ["feature1", "feature2", "feature3", "feature4", "feature5"],
    },
    {
      id: "019740b6-13da-71eb-8de6-0ead5bec7eed",
      price: 899000,
      planKey: "plan2",
      popularFlag: true,
      color: "#52c41a",
      delay: 300,
      featureKeys: ["feature1", "feature2", "feature3", "feature4", "feature5"],
    },
    {
      id: "019740b6-a87d-76f1-be4a-9688e0c052c6",
      price: 1499000,
      planKey: "plan3",
      popularFlag: false,
      color: "#f5222d",
      delay: 500,
      featureKeys: [
        "feature1",
        "feature2",
        "feature3",
        "feature4",
        "feature5",
        "feature6",
      ],
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
              const translatedFeatures = planInfo.featureKeys
                .map((fKey) => {
                  const featureText = t(`plans.${planInfo.planKey}.${fKey}`);
                  return featureText &&
                    featureText !== `plans.${planInfo.planKey}.${fKey}`
                    ? featureText
                    : null;
                })
                .filter((item) => item !== null);

              const originalPriceText = t(
                `plans.${planInfo.planKey}.originalPrice`
              );

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
                      {originalPriceText &&
                        originalPriceText !==
                          `plans.${planInfo.planKey}.originalPrice` && (
                          <Text className="original-price">
                            {originalPriceText}
                          </Text>
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
                      onClick={() => handlePayment(planInfo.id, planInfo.price)}
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
              <Col
                xs={24}
                md={12}
                data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
                data-aos-delay={100 * (index + 1)}
                key={faqKey}
              >
                <div className="faq-item">
                  <Title level={4}>{t(`faq.${faqKey}.question`)}</Title>
                  <Paragraph>{t(`faq.${faqKey}.answer`)}</Paragraph>
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

      {/* Use the extracted Payment Receipt Modal component */}
      <PaymentReceiptModal
        isVisible={isModalVisible}
        onClose={() => setIsModalVisible(false)}
        onConfirm={handleConfirmPayment}
        selectedPlan={selectedPlan}
        planTitle={getSelectedPlanTitle()}
      />
    </div>
  );
}

export default PricingPage;
