"use client";

import React, { useEffect } from "react";
import { Typography, Card, Button, List, Divider, Row, Col } from "antd";
import { CheckCircleOutlined } from "@ant-design/icons";
import PageBanner from "@/components/common/PageBanner";
import AOS from "aos";
import "./bao_gia.scss";

const { Title, Paragraph, Text } = Typography;

function PricingPage() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const pricingPlans = [
    {
      title: "Cơ Bản",
      price: "490,000đ",
      originalPrice: "990,000đ",
      description: "Phù hợp với người mới bắt đầu sự nghiệp",
      features: [
        "Đánh giá CV cơ bản",
        "Phân tích điểm mạnh, điểm yếu",
        "Gợi ý cải thiện 1 lần",
        "Hỗ trợ qua email",
        "Thời gian phản hồi: 3 ngày",
      ],
      popularFlag: false,
      color: "#1890ff",
      delay: 100,
    },
    {
      title: "Chuyên Nghiệp",
      price: "990,000đ",
      originalPrice: "1,990,000đ",
      description: "Cho người đã có kinh nghiệm muốn thăng tiến",
      features: [
        "Tất cả tính năng của gói Cơ Bản",
        "Chỉnh sửa CV chuyên sâu",
        "Tối ưu hóa LinkedIn",
        "Tư vấn 1-1 qua video (30 phút)",
        "Thời gian phản hồi: 2 ngày",
        "Hỗ trợ trong 1 tháng",
      ],
      popularFlag: true,
      color: "#52c41a",
      delay: 300,
    },
    {
      title: "Cao Cấp",
      price: "1,990,000đ",
      originalPrice: "3,990,000đ",
      description: "Dành cho các vị trí cấp cao, quản lý",
      features: [
        "Tất cả tính năng của gói Chuyên Nghiệp",
        "Tái cấu trúc CV hoàn chỉnh",
        "Tư vấn 1-1 qua video (2 buổi x 45 phút)",
        "Chiến lược phỏng vấn cá nhân hóa",
        "Thời gian phản hồi: 24 giờ",
        "Hỗ trợ trong 3 tháng",
        "Đảm bảo hoàn tiền nếu không hài lòng",
      ],
      popularFlag: false,
      color: "#f5222d",
      delay: 500,
    },
  ];

  return (
    <div className="pricing-page">
      <PageBanner
        title="Báo Giá Dịch Vụ"
        subtitle="Lựa chọn gói dịch vụ phù hợp với nhu cầu và ngân sách của bạn"
      />

      <section className="pricing-intro">
        <div className="container">
          <Title level={2} className="section-title" data-aos="fade-up">
            Đầu tư cho sự nghiệp của bạn
          </Title>
          <Paragraph
            className="intro-text"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            PATHWAY cung cấp nhiều gói dịch vụ để hỗ trợ bạn trong hành trình
            phát triển sự nghiệp. Từ sinh viên mới ra trường đến các vị trí quản
            lý cấp cao, chúng tôi đều có giải pháp phù hợp.
          </Paragraph>

          <Row gutter={[24, 24]} className="pricing-cards">
            {pricingPlans.map((plan, index) => (
              <Col key={index} xs={24} md={8}>
                <Card
                  className={`pricing-card ${
                    plan.popularFlag ? "popular" : ""
                  }`}
                  data-aos="fade-up"
                  data-aos-delay={plan.delay}
                  bordered={false}
                  style={{ borderTopColor: plan.color }}
                >
                  {plan.popularFlag && (
                    <div className="popular-tag">Phổ biến nhất</div>
                  )}
                  <Title level={3} className="plan-title">
                    {plan.title}
                  </Title>
                  <div className="price-container">
                    <Text className="original-price">{plan.originalPrice}</Text>
                    <Title level={2} className="price">
                      {plan.price}
                    </Title>
                  </div>
                  <Paragraph className="plan-description">
                    {plan.description}
                  </Paragraph>

                  <Divider />

                  <List
                    itemLayout="horizontal"
                    dataSource={plan.features}
                    renderItem={(item) => (
                      <List.Item className="feature-item">
                        <CheckCircleOutlined
                          className="feature-icon"
                          style={{ color: plan.color }}
                        />
                        <span>{item}</span>
                      </List.Item>
                    )}
                  />

                  <Button
                    type={plan.popularFlag ? "primary" : "default"}
                    block
                    className="plan-button"
                  >
                    Chọn Gói Này
                  </Button>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </section>

      <section className="faq-section">
        <div className="container">
          <Title level={2} className="section-title" data-aos="fade-up">
            Câu hỏi thường gặp
          </Title>

          <Row gutter={[48, 24]}>
            <Col xs={24} md={12} data-aos="fade-right" data-aos-delay="100">
              <div className="faq-item">
                <Title level={4}>
                  Sau khi thanh toán, tôi sẽ nhận được dịch vụ trong bao lâu?
                </Title>
                <Paragraph>
                  Sau khi xác nhận thanh toán, chúng tôi sẽ liên hệ với bạn
                  trong vòng 24 giờ để bắt đầu quy trình. Thời gian phản hồi chi
                  tiết phụ thuộc vào gói dịch vụ bạn lựa chọn.
                </Paragraph>
              </div>
            </Col>

            <Col xs={24} md={12} data-aos="fade-left" data-aos-delay="200">
              <div className="faq-item">
                <Title level={4}>
                  Tôi có thể nâng cấp gói dịch vụ sau khi đã mua không?
                </Title>
                <Paragraph>
                  Có, bạn có thể nâng cấp gói dịch vụ bất kỳ lúc nào. Bạn chỉ
                  cần thanh toán phần chênh lệch giữa gói hiện tại và gói bạn
                  muốn nâng cấp.
                </Paragraph>
              </div>
            </Col>

            <Col xs={24} md={12} data-aos="fade-right" data-aos-delay="300">
              <div className="faq-item">
                <Title level={4}>
                  Chính sách hoàn tiền của PATHWAY như thế nào?
                </Title>
                <Paragraph>
                  PATHWAY cam kết hoàn tiền 100% nếu bạn không hài lòng với dịch
                  vụ của chúng tôi trong vòng 7 ngày đầu tiên. Điều này chỉ áp
                  dụng cho gói Cao Cấp.
                </Paragraph>
              </div>
            </Col>

            <Col xs={24} md={12} data-aos="fade-left" data-aos-delay="400">
              <div className="faq-item">
                <Title level={4}>
                  Có phương thức thanh toán nào khác ngoài chuyển khoản ngân
                  hàng?
                </Title>
                <Paragraph>
                  Hiện tại, chúng tôi hỗ trợ thanh toán qua chuyển khoản ngân
                  hàng, Momo, ZaloPay và VNPAY. Vui lòng liên hệ với chúng tôi
                  nếu bạn cần các phương thức thanh toán khác.
                </Paragraph>
              </div>
            </Col>
          </Row>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <div className="cta-content" data-aos="zoom-in">
            <Title level={2}>Bạn cần tư vấn thêm?</Title>
            <Paragraph>
              Liên hệ với chuyên viên tư vấn của PATHWAY để được hỗ trợ lựa chọn
              gói dịch vụ phù hợp nhất
            </Paragraph>
            <Button type="primary" size="large">
              Liên hệ ngay
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default PricingPage;
