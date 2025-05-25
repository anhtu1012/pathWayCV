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

const { Title, Paragraph } = Typography;
const { TabPane } = Tabs;

function ServicePage() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  const services = [
    {
      id: 1,
      icon: <FileSearchOutlined />,
      title: "Đánh giá CV chuyên sâu",
      description:
        "Đánh giá và chỉnh sửa CV của bạn bởi chuyên gia tuyển dụng để tối ưu hóa cơ hội được mời phỏng vấn.",
      features: [
        "Phân tích chi tiết điểm mạnh, điểm yếu",
        "Tư vấn cấu trúc và nội dung",
        "Gợi ý từ khóa ngành nghề phù hợp",
        "Báo cáo đánh giá chi tiết",
      ],
      image:
        "https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=2070&auto=format&fit=crop",
      delay: 100,
    },
    {
      id: 2,
      icon: <TeamOutlined />,
      title: "Tư vấn phỏng vấn & định hướng",
      description:
        "Chuẩn bị kỹ năng và chiến lược phỏng vấn hiệu quả, tăng tỷ lệ thành công với nhà tuyển dụng.",
      features: [
        "Phỏng vấn thử với feedback chi tiết",
        "Kỹ thuật trả lời câu hỏi khó",
        "Luyện tập kỹ năng thuyết trình",
        "Định hướng phát triển sự nghiệp",
      ],
      image:
        "https://images.unsplash.com/photo-1565688534245-05d6b5be184a?q=80&w=2070&auto=format&fit=crop",
      delay: 200,
    },
    {
      id: 3,
      icon: <RocketOutlined />,
      title: "Định vị thương hiệu cá nhân",
      description:
        "Xây dựng hình ảnh chuyên nghiệp và nổi bật trên thị trường lao động và các nền tảng trực tuyến.",
      features: [
        "Tối ưu hồ sơ LinkedIn",
        "Chiến lược xây dựng thương hiệu",
        "Tạo portfolio chuyên nghiệp",
        "Kế hoạch phát triển mạng lưới",
      ],
      image:
        "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2074&auto=format&fit=crop",
      delay: 300,
    },
    {
      id: 4,
      icon: <SolutionOutlined />,
      title: "Đào tạo kỹ năng mềm",
      description:
        "Phát triển các kỹ năng thiết yếu giúp bạn vượt trội trong môi trường làm việc hiện đại.",
      features: [
        "Kỹ năng giao tiếp chuyên nghiệp",
        "Làm việc nhóm & lãnh đạo",
        "Quản lý thời gian & stress",
        "Tư duy phản biện & giải quyết vấn đề",
      ],
      image:
        "https://images.unsplash.com/photo-1515169067868-5387ec356754?q=80&w=2070&auto=format&fit=crop",
      delay: 400,
    },
  ];

  const testimonials = [
    {
      id: 1,
      name: "Nguyễn Thanh Hà",
      position: "Marketing Manager tại Tech Corp",
      content:
        "Dịch vụ đánh giá CV của PATHWAY đã giúp tôi cải thiện hồ sơ một cách đáng kể. Chỉ sau 2 tuần tôi đã nhận được nhiều lời mời phỏng vấn từ các công ty hàng đầu.",
      avatar:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop",
    },
    {
      id: 2,
      name: "Trần Minh Đức",
      position: "Software Developer tại FinTech Solutions",
      content:
        "Buổi tư vấn phỏng vấn thử đã giúp tôi tự tin hơn rất nhiều. Cách coach phân tích điểm mạnh, điểm yếu và đưa ra lời khuyên rất thực tế và hiệu quả.",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop",
    },
    {
      id: 3,
      name: "Lê Thị Phương",
      position: "HR Specialist tại Global Group",
      content:
        "Tôi đã tham gia khóa định vị thương hiệu cá nhân và thấy sự thay đổi rõ rệt trong cách nhà tuyển dụng nhìn nhận profile của mình. Xứng đáng với từng đồng bỏ ra!",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop",
    },
  ];

  return (
    <div className="service-page">
      <PageBanner
        title="Dịch vụ"
        subtitle="Các giải pháp tư vấn chuyên nghiệp giúp bạn phát triển sự nghiệp"
      />

      <section className="service-overview">
        <div className="container">
          <Row gutter={[48, 48]} align="middle">
            <Col xs={24} lg={12} data-aos="fade-right">
              <div className="overview-content">
                <Title level={2} className="section-title">
                  Giải pháp toàn diện cho sự nghiệp của bạn
                </Title>
                <Paragraph className="section-description">
                  PATHWAY cung cấp các dịch vụ tư vấn sự nghiệp chuyên nghiệp
                  được thiết kế riêng cho từng giai đoạn phát triển. Từ sinh
                  viên mới ra trường đến chuyên gia cấp cao, chúng tôi đồng hành
                  cùng bạn trên con đường sự nghiệp.
                </Paragraph>
                <div className="stats-container">
                  <div
                    className="stat-item"
                    data-aos="fade-up"
                    data-aos-delay="100"
                  >
                    <Title level={2}>95%</Title>
                    <Paragraph>Khách hàng hài lòng</Paragraph>
                  </div>
                  <div
                    className="stat-item"
                    data-aos="fade-up"
                    data-aos-delay="200"
                  >
                    <Title level={2}>85%</Title>
                    <Paragraph>Tỷ lệ thành công</Paragraph>
                  </div>
                  <div
                    className="stat-item"
                    data-aos="fade-up"
                    data-aos-delay="300"
                  >
                    <Title level={2}>5000+</Title>
                    <Paragraph>Khách hàng</Paragraph>
                  </div>
                </div>
                <Button type="primary" size="large" className="learn-more-btn">
                  Đặt lịch tư vấn miễn phí
                </Button>
              </div>
            </Col>
            <Col xs={24} lg={12} data-aos="fade-left">
              <div className="overview-image">
                <Image
                  src="https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=2069&auto=format&fit=crop"
                  alt="PATHWAY Services"
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
            Dịch vụ của chúng tôi
          </Title>
          <Paragraph
            className="section-description text-center"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Khám phá các dịch vụ chuyên nghiệp được thiết kế để giúp bạn đạt
            được mục tiêu nghề nghiệp
          </Paragraph>

          <div className="services-grid">
            {services.map((service) => (
              <Card
                key={service.id}
                className="service-card"
                data-aos="fade-up"
                data-aos-delay={service.delay}
              >
                <div className="service-image">
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={400}
                    height={225}
                    className="rounded-image"
                  />
                </div>
                <div className="service-icon">{service.icon}</div>
                <Title level={3} className="service-title">
                  {service.title}
                </Title>
                <Paragraph className="service-description">
                  {service.description}
                </Paragraph>
                <div className="service-features">
                  {service.features.map((feature, index) => (
                    <div key={index} className="feature-item">
                      <CheckCircleOutlined className="feature-icon" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                {/* <Button type="primary" className="service-btn">
                  Tìm hiểu thêm
                </Button> */}
                <div className="service-btn-container">
                  <Button type="primary" className="service-btn">
                    Tìm hiểu thêm
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
            Quy trình làm việc
          </Title>
          <Paragraph
            className="section-description text-center"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Chúng tôi tuân theo quy trình chuyên nghiệp để đảm bảo hiệu quả tối
            đa
          </Paragraph>

          <div
            className="process-timeline"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="timeline-step">
              <div className="step-number">1</div>
              <div className="step-content">
                <Title level={4}>Tư vấn ban đầu</Title>
                <Paragraph>
                  Phân tích nhu cầu và mục tiêu nghề nghiệp của bạn để đề xuất
                  giải pháp phù hợp nhất
                </Paragraph>
              </div>
            </div>
            <div className="timeline-step">
              <div className="step-number">2</div>
              <div className="step-content">
                <Title level={4}>Xây dựng kế hoạch</Title>
                <Paragraph>
                  Thiết kế lộ trình và kế hoạch hành động chi tiết dựa trên tình
                  hình cụ thể
                </Paragraph>
              </div>
            </div>
            <div className="timeline-step">
              <div className="step-number">3</div>
              <div className="step-content">
                <Title level={4}>Thực hiện dịch vụ</Title>
                <Paragraph>
                  Triển khai các hoạt động tư vấn, đào tạo và hỗ trợ theo kế
                  hoạch đã thống nhất
                </Paragraph>
              </div>
            </div>
            <div className="timeline-step">
              <div className="step-number">4</div>
              <div className="step-content">
                <Title level={4}>Theo dõi & đánh giá</Title>
                <Paragraph>
                  Đo lường kết quả và điều chỉnh chiến lược để đảm bảo đạt được
                  mục tiêu đề ra
                </Paragraph>
              </div>
            </div>
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
            Khách hàng nói gì về chúng tôi
          </Title>

          <div className="testimonial-grid">
            {testimonials.map((testimonial) => (
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
                    {testimonial.content}
                  </Paragraph>
                </div>
                <div className="testimonial-author">
                  <div className="author-avatar">
                    <Image
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      width={60}
                      height={60}
                      className="rounded-full"
                    />
                  </div>
                  <div className="author-info">
                    <Title level={5} className="author-name">
                      {testimonial.name}
                    </Title>
                    <Paragraph className="author-position">
                      {testimonial.position}
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
            Bảng giá dịch vụ
          </Title>
          <Paragraph
            className="section-description text-center"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Chúng tôi cung cấp các gói dịch vụ linh hoạt phù hợp với mọi nhu cầu
            và ngân sách
          </Paragraph>

          <Tabs
            defaultActiveKey="1"
            centered
            className="pricing-tabs"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <TabPane tab="Đánh giá CV" key="1">
              <Row gutter={[24, 24]} className="pricing-cards">
                <Col xs={24} md={8}>
                  <Card className="pricing-card basic">
                    <div className="pricing-header">
                      <Tag color="blue">Phổ biến</Tag>
                      <Title level={3}>Gói Cơ bản</Title>
                      <div className="pricing-value">
                        <span className="price">499.000</span>
                        <span className="currency">VNĐ</span>
                      </div>
                    </div>
                    <div className="pricing-features">
                      <div className="feature-item">
                        <CheckCircleOutlined className="feature-icon" />
                        <span>Đánh giá CV toàn diện</span>
                      </div>
                      <div className="feature-item">
                        <CheckCircleOutlined className="feature-icon" />
                        <span>Báo cáo chi tiết</span>
                      </div>
                      <div className="feature-item">
                        <CheckCircleOutlined className="feature-icon" />
                        <span>Gợi ý cải thiện</span>
                      </div>
                      <div className="feature-item disabled">
                        <CheckCircleOutlined className="feature-icon" />
                        <span>Chỉnh sửa CV</span>
                      </div>
                      <div className="feature-item disabled">
                        <CheckCircleOutlined className="feature-icon" />
                        <span>Tư vấn 1-1 với chuyên gia</span>
                      </div>
                    </div>
                    <div className="pricing-btn-container">
                      <Button type="primary" block className="pricing-button">
                        Đăng ký ngay
                      </Button>
                    </div>
                  </Card>
                </Col>
                <Col xs={24} md={8}>
                  <Card className="pricing-card premium highlighted">
                    <div className="pricing-header">
                      <Tag color="gold">Khuyến nghị</Tag>
                      <Title level={3}>Gói Nâng cao</Title>
                      <div className="pricing-value">
                        <span className="price">899.000</span>
                        <span className="currency">VNĐ</span>
                      </div>
                    </div>
                    <div className="pricing-features">
                      <div className="feature-item">
                        <CheckCircleOutlined className="feature-icon" />
                        <span>Đánh giá CV toàn diện</span>
                      </div>
                      <div className="feature-item">
                        <CheckCircleOutlined className="feature-icon" />
                        <span>Báo cáo chi tiết</span>
                      </div>
                      <div className="feature-item">
                        <CheckCircleOutlined className="feature-icon" />
                        <span>Gợi ý cải thiện</span>
                      </div>
                      <div className="feature-item">
                        <CheckCircleOutlined className="feature-icon" />
                        <span>Chỉnh sửa CV</span>
                      </div>
                      <div className="feature-item disabled">
                        <CheckCircleOutlined className="feature-icon" />
                        <span>Tư vấn 1-1 với chuyên gia</span>
                      </div>
                    </div>
                    <div className="pricing-btn-container">
                      <Button type="primary" block className="pricing-button">
                        Đăng ký ngay
                      </Button>
                    </div>
                  </Card>
                </Col>
                <Col xs={24} md={8}>
                  <Card className="pricing-card vip">
                    <div className="pricing-header">
                      <Tag color="red">Cao cấp</Tag>
                      <Title level={3}>Gói VIP</Title>
                      <div className="pricing-value">
                        <span className="price">1.499.000</span>
                        <span className="currency">VNĐ</span>
                      </div>
                    </div>
                    <div className="pricing-features">
                      <div className="feature-item">
                        <CheckCircleOutlined className="feature-icon" />
                        <span>Đánh giá CV toàn diện</span>
                      </div>
                      <div className="feature-item">
                        <CheckCircleOutlined className="feature-icon" />
                        <span>Báo cáo chi tiết</span>
                      </div>
                      <div className="feature-item">
                        <CheckCircleOutlined className="feature-icon" />
                        <span>Gợi ý cải thiện</span>
                      </div>
                      <div className="feature-item">
                        <CheckCircleOutlined className="feature-icon" />
                        <span>Chỉnh sửa CV</span>
                      </div>
                      <div className="feature-item">
                        <CheckCircleOutlined className="feature-icon" />
                        <span>Tư vấn 1-1 với chuyên gia (60 phút)</span>
                      </div>
                    </div>
                    <div className="pricing-btn-container">
                      <Button type="primary" block className="pricing-button">
                        Đăng ký ngay
                      </Button>
                    </div>
                  </Card>
                </Col>
              </Row>
            </TabPane>
            <TabPane tab="Tư vấn phỏng vấn" key="2">
              {/* Similar pricing structure for interview consulting services */}
              <div className="coming-soon text-center">
                <Title level={4}>
                  Vui lòng liên hệ để nhận báo giá chi tiết
                </Title>
                <Button type="primary" size="large">
                  Liên hệ tư vấn
                </Button>
              </div>
            </TabPane>
            <TabPane tab="Định vị thương hiệu cá nhân" key="3">
              {/* Similar pricing structure for personal branding services */}
              <div className="coming-soon text-center">
                <Title level={4}>
                  Vui lòng liên hệ để nhận báo giá chi tiết
                </Title>
                <Button type="primary" size="large">
                  Liên hệ tư vấn
                </Button>
              </div>
            </TabPane>
          </Tabs>
        </div>
      </section>

      <section className="cta-section" data-aos="fade-up">
        <div className="container">
          <div className="cta-content">
            <Title level={2}>Sẵn sàng nâng cao sự nghiệp của bạn?</Title>
            <Paragraph style={{ color: "white" }}>
              Đặt lịch tư vấn miễn phí 15 phút với chuyên gia PATHWAY ngay hôm
              nay để nhận giải pháp phù hợp nhất cho mục tiêu nghề nghiệp của
              bạn.
            </Paragraph>
            <div className="cta-buttons">
              <Button type="primary" size="large" className="cta-primary-btn">
                Đặt lịch ngay
              </Button>
              <Button size="large" className="cta-psecondary-btn">Tìm hiểu thêm</Button>
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
            Câu hỏi thường gặp
          </Title>

          <Row gutter={[32, 32]} className="faq-grid">
            <Col xs={24} md={12} data-aos="fade-up" data-aos-delay="100">
              <div className="faq-item">
                <Title level={4}>
                  Tôi nhận được gì từ dịch vụ đánh giá CV?
                </Title>
                <Paragraph>
                  Bạn sẽ nhận được báo cáo đánh giá chi tiết về điểm mạnh, điểm
                  yếu của CV hiện tại, cùng với các gợi ý cụ thể để cải thiện
                  nội dung, cấu trúc và định dạng. Tùy theo gói dịch vụ, bạn còn
                  có thể nhận được CV được chỉnh sửa bởi chuyên gia và buổi tư
                  vấn 1-1.
                </Paragraph>
              </div>
            </Col>

            <Col xs={24} md={12} data-aos="fade-up" data-aos-delay="200">
              <div className="faq-item">
                <Title level={4}>
                  Buổi tư vấn phỏng vấn thử diễn ra như thế nào?
                </Title>
                <Paragraph>
                  Buổi tư vấn phỏng vấn thử bao gồm phần phỏng vấn mô phỏng dựa
                  trên vị trí bạn đang ứng tuyển, sau đó chuyên gia sẽ đánh giá
                  và đưa ra phản hồi chi tiết về câu trả lời, ngôn ngữ cơ thể,
                  kỹ năng giao tiếp và các gợi ý cải thiện cụ thể.
                </Paragraph>
              </div>
            </Col>

            <Col xs={24} md={12} data-aos="fade-up" data-aos-delay="300">
              <div className="faq-item">
                <Title level={4}>
                  Dịch vụ định vị thương hiệu cá nhân phù hợp với ai?
                </Title>
                <Paragraph>
                  Dịch vụ này phù hợp cho cả người mới đi làm muốn xây dựng hình
                  ảnh chuyên nghiệp và chuyên gia cấp cao muốn nâng cao vị thế
                  trong ngành. Chúng tôi sẽ tùy chỉnh chiến lược phù hợp với mức
                  độ kinh nghiệm và mục tiêu cụ thể của bạn.
                </Paragraph>
              </div>
            </Col>

            <Col xs={24} md={12} data-aos="fade-up" data-aos-delay="400">
              <div className="faq-item">
                <Title level={4}>
                  Tôi có thể yêu cầu tư vấn cho ngành nghề đặc thù không?
                </Title>
                <Paragraph>
                  Có, đội ngũ tư vấn của PATHWAY có kinh nghiệm trong nhiều lĩnh
                  vực khác nhau như IT, tài chính, marketing, kỹ thuật, v.v.
                  Chúng tôi sẽ kết nối bạn với chuyên gia có kinh nghiệm trong
                  ngành nghề của bạn để đảm bảo lời khuyên phù hợp và thiết
                  thực.
                </Paragraph>
              </div>
            </Col>
          </Row>
        </div>
      </section>
    </div>
  );
}

export default ServicePage;
