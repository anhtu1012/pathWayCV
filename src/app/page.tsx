"use client";

import BookingReviewSection from "@/components/home/BookingReviewSection";
import {
  FileSearchOutlined,
  PlayCircleOutlined,
  RocketOutlined,
  StarOutlined,
} from "@ant-design/icons";
import { Button, Col, Row, Space, Typography } from "antd";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import "./page.scss";

const { Title, Text, Paragraph } = Typography;

const HomePage = () => {
  const [activeVideo, setActiveVideo] = useState(0);
  const bookingSectionRef = useRef<HTMLElement>(null);
  const projectSectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
      easing: "ease-out-cubic",
    });
  }, []);

  const scrollToBooking = () => {
    bookingSectionRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const scrollToProjects = () => {
    projectSectionRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const services = [
    {
      title: "Đánh giá CV",
      image:
        "https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=2070&auto=format&fit=crop",
      delay: 0,
      icon: <FileSearchOutlined />,
      description:
        "Nhận xét chi tiết và đề xuất chỉnh sửa để làm nổi bật CV của bạn.",
    },
    {
      title: "Tối ưu LinkedIn",
      image:
        "https://images.unsplash.com/photo-1611944212129-29977ae1398c?q=80&w=2574&auto=format&fit=crop",
      delay: 200,
      icon: <StarOutlined />,
      description:
        "Cải thiện hồ sơ LinkedIn để thu hút nhà tuyển dụng và cơ hội công việc.",
    },
    {
      title: "Phỏng vấn thử",
      image:
        "https://images.unsplash.com/photo-1573497161161-c3e73707e25c?q=80&w=2070&auto=format&fit=crop",
      delay: 400,
      icon: <RocketOutlined />,
      description:
        "Luyện tập phỏng vấn với chuyên gia để tự tin ứng tuyển vị trí mơ ước.",
    },
  ];

  // Video Links Configuration - Dễ dàng thay đổi link video tại đây
  const VIDEO_LINKS = {
    TVC_QUANG_CAO: "ZgZGkNe8zg8", // Hoàng Tử Drill
    PHIM_DOANH_NGHIEP: "MnzdvcJsp18", // J97
    PHIM_VIRAL: "ZgZGkNe8zg8",
    PHIM_THUONG_HIEU: "MnzdvcJsp18",
    TVC_SAN_PHAM: "ZgZGkNe8zg8",
    PHIM_DU_AN: "MnzdvcJsp18",
  };

  const videos = [
    {
      id: VIDEO_LINKS.TVC_QUANG_CAO,
      thumbnail: "/assets/video/video.mp4",
      title: "TVC Quảng Cáo",
    },
    {
      id: VIDEO_LINKS.PHIM_DOANH_NGHIEP,
      thumbnail: "/assets/video/video.mp4",
      title: "Phim Doanh Nghiệp",
    },
    {
      id: VIDEO_LINKS.PHIM_VIRAL,
      thumbnail: "/assets/video/video.mp4",
      title: "Phim Viral",
    },
    {
      id: VIDEO_LINKS.PHIM_THUONG_HIEU,
      thumbnail: "/assets/video/video.mp4",
      title: "Phim Thương Hiệu",
    },
    {
      id: VIDEO_LINKS.TVC_SAN_PHAM,
      thumbnail: "/assets/video/video.mp4",
      title: "TVC Sản Phẩm",
    },
    {
      id: VIDEO_LINKS.PHIM_DU_AN,
      thumbnail: "/assets/video/video.mp4",
      title: "Phim Dự Án",
    },
  ];

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div
          className="hero-background"
          style={{
            background:
              // "url('https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=2069&auto=format&fit=crop') center/cover no-repeat",
              "url('/assets/image/banner3.jpg') center/cover no-repeat",
            height: "100vh",
          }}
        ></div>
        <div className="particles-container"></div>
        <div className="hero-content" data-aos="fade-up">
          <Title>PATHWAY</Title>
          <Title level={2}>
            Đánh giá CV, Chiến lược tìm việc, Tư vấn nghề nghiệp
          </Title>
          <Text className="hero-subtitle">
            Hơn 1000+ Chuyên gia đã thăng tiến trong sự nghiệp nhờ sự hỗ trợ của
            chúng tôi
          </Text>
          <Space size="large" className="hero-buttons">
            <Button
              type="primary"
              size="large"
              className="glow-effect"
              onClick={scrollToBooking}
            >
              Đặt lịch tư vấn
            </Button>
            <Button
              size="large"
              icon={<PlayCircleOutlined />}
              className="pulse-effect"
              onClick={scrollToProjects}
            >
              Xem câu chuyện thành công
            </Button>
          </Space>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="introduction-section">
        <div className="section-content">
          <Title level={2} className="section-title" data-aos="fade-up">
            Hành trình sự nghiệp của bạn bắt đầu từ đây
          </Title>
          <Paragraph className="intro-text" data-aos="fade-up">
            <strong>PATHWAY</strong> là đơn vị hàng đầu chuyên cung cấp dịch vụ{" "}
            <strong>tối ưu hóa CV và chiến lược tìm việc</strong>. Chúng tôi tự
            hào mang đến sự hỗ trợ toàn diện cho các chuyên gia ở{" "}
            <strong>mọi giai đoạn nghề nghiệp</strong>. Đội ngũ của chúng tôi
            bao gồm các chuyên gia tư vấn nghề nghiệp, chuyên viên nhân sự, và
            người trong ngành kết hợp chuyên môn sâu về{" "}
            <strong>viết hồ sơ xin việc</strong> với tư duy sáng tạo trong{" "}
            <strong>xây dựng thương hiệu cá nhân</strong>.
          </Paragraph>
          <Row gutter={[32, 32]} data-aos="fade-up">
            <Col xs={24} md={8}>
              <div
                className="intro-card"
                data-aos="flip-left"
                data-aos-delay="100"
              >
                <div className="intro-image">
                  <Image
                    src="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?w=800"
                    alt="Sứ mệnh"
                    width={800}
                    height={400}
                    style={{
                      objectFit: "cover",
                      width: "100%",
                      height: "100%",
                    }}
                  />
                </div>
                <div className="intro-content">
                  <Title level={3}>Sứ mệnh</Title>
                  <Paragraph>
                    Trao quyền cho các chuyên gia với công cụ, chiến lược và sự
                    tự tin cần thiết để nổi bật trong thị trường việc làm cạnh
                    tranh và đạt được mục tiêu nghề nghiệp của họ.
                  </Paragraph>
                </div>
              </div>
            </Col>
            <Col xs={24} md={8}>
              <div
                className="intro-card"
                data-aos="flip-left"
                data-aos-delay="300"
              >
                <div className="intro-image">
                  <Image
                    src="https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=800"
                    alt="Tầm nhìn"
                    width={800}
                    height={400}
                    style={{
                      objectFit: "cover",
                      width: "100%",
                      height: "100%",
                    }}
                  />
                </div>
                <div className="intro-content">
                  <Title level={3}>Tầm nhìn</Title>
                  <Paragraph>
                    Trở thành đơn vị dịch vụ nghề nghiệp hàng đầu, thay đổi cách
                    mọi người tiếp cận tìm kiếm việc làm, tạo ra một thế giới
                    nơi mọi người đều có thể phát huy hết tiềm năng nghề nghiệp
                    của mình.
                  </Paragraph>
                </div>
              </div>
            </Col>
            <Col xs={24} md={8}>
              <div
                className="intro-card"
                data-aos="flip-left"
                data-aos-delay="500"
              >
                <div className="intro-image">
                  <Image
                    src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800"
                    alt="Phương pháp"
                    width={800}
                    height={400}
                    style={{
                      objectFit: "cover",
                      width: "100%",
                      height: "100%",
                    }}
                  />
                </div>
                <div className="intro-content">
                  <Title level={3}>Phương pháp</Title>
                  <Paragraph>
                    Chúng tôi tin vào các giải pháp tùy chỉnh nhấn mạnh giá trị
                    độc đáo của mỗi cá nhân. Chiến lược dựa trên dữ liệu và tư
                    vấn cá nhân hóa tạo ra những bước đột phá sự nghiệp có ý
                    nghĩa.
                  </Paragraph>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </section>

      {/* Sứ mệnh Section */}
      <section className="mission-section">
        <div className="mission-container">
          <Title
            level={2}
            className="section-title center-title"
            data-aos="fade-up"
          >
            SỨ MỆNH CỦA CHÚNG TÔI
          </Title>
          <div className="mission-items" data-aos="fade-up">
            <div className="mission-item">
              <div className="mission-icon">
                <Image
                  src="/assets/image/lanto.png"
                  alt="Lan tỏa"
                  width={120}
                  height={120}
                />
              </div>
              <div className="mission-content">
                <p>
                  Lan tỏa giá trị thương hiệu của các Tổ chức, doanh nghiệp tới
                  cộng đồng.
                </p>
              </div>
            </div>

            <div className="mission-item">
              <div className="mission-icon">
                <Image
                  src="/assets/image/tangcao.jpg"
                  alt="Tăng cao"
                  width={120}
                  height={120}
                />
              </div>
              <div className="mission-content">
                <p>
                  Tăng cao mức độ nhận biết, tin tưởng, yêu thích của Khách hàng
                  dành cho Sản phẩm/ Dịch vụ.
                </p>
              </div>
            </div>

            <div className="mission-item">
              <div className="mission-icon">
                <Image
                  src="/assets/image/didunghuong.jpg"
                  alt="Định hướng"
                  width={120}
                  height={120}
                />
              </div>
              <div className="mission-content">
                <p>
                  Định hướng thị trường những xu thế quảng cáo theo tiêu chuẩn
                  Quốc tế
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section">
        <div className="section-content">
          <Title level={2} className="section-title" data-aos="fade-up">
            Tại sao chọn chúng tôi?
          </Title>
          <Row gutter={[24, 24]} align="middle">
            <Col xs={24} md={12} data-aos="fade-right">
              <div className="about-image">
                <Image
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop"
                  alt="Đội ngũ tư vấn nghề nghiệp"
                  width={1000}
                  height={1000}
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
            </Col>
            <Col xs={24} md={12} data-aos="fade-left">
              <div className="about-content">
                <Paragraph className="about-text">
                  <strong>PATHWAY</strong> kết hợp chuyên môn về{" "}
                  <strong>
                    viết CV, huấn luyện phỏng vấn và chiến lược nghề nghiệp
                  </strong>
                  . Chúng tôi cam kết mang đến sự hỗ trợ cá nhân hóa cho các
                  chuyên gia ở mọi cấp độ.
                </Paragraph>
                <Paragraph className="about-text">
                  Với hơn 15 năm kinh nghiệm, đội ngũ của chúng tôi đã giúp các
                  chuyên gia đạt được vị trí tại những công ty hàng đầu như
                  Google, Microsoft, Amazon, Meta, Goldman Sachs, McKinsey,
                  Deloitte và nhiều tổ chức Fortune 500 khác trong mọi ngành
                  nghề và vị trí.
                </Paragraph>
                <div className="stats-grid">
                  <div
                    className="stat-item"
                    data-aos="zoom-in"
                    data-aos-delay="200"
                  >
                    <h3 className="counter-effect">15+</h3>
                    <p>Năm kinh nghiệm</p>
                  </div>
                  <div
                    className="stat-item"
                    data-aos="zoom-in"
                    data-aos-delay="400"
                  >
                    <h3 className="counter-effect">1000+</h3>
                    <p>Câu chuyện thành công</p>
                  </div>
                  <div
                    className="stat-item"
                    data-aos="zoom-in"
                    data-aos-delay="600"
                  >
                    <h3 className="counter-effect">93%</h3>
                    <p>Tỷ lệ phỏng vấn</p>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <div className="section-content">
          <Title level={2} className="section-title" data-aos="fade-up">
            Dịch vụ của chúng tôi
          </Title>
          <Row gutter={[32, 32]}>
            {services.map((service, index) => (
              <Col xs={24} md={8} key={index}>
                <div
                  className="service-card"
                  data-aos="flip-left"
                  data-aos-delay={service.delay}
                >
                  <div className="service-image">
                    <Image
                      src={service.image}
                      alt={service.title}
                      width={800}
                      height={500}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                    <div className="service-icon">{service.icon}</div>
                  </div>
                  <div className="service-content">
                    <Title level={3}>{service.title}</Title>
                    <Paragraph
                      className="service-description"
                      style={{ padding: "10px" }}
                    >
                      {service.description}
                    </Paragraph>
                    <Button type="primary" className="service-btn">
                      Tìm hiểu thêm
                    </Button>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </section>

      {/* Projects Section */}
      <section className="projects-section" ref={projectSectionRef}>
        <div className="section-content">
          <Title level={2} className="section-title" data-aos="fade-up">
            Dự án tiêu biểu
          </Title>

          <div className="tv-display-container" data-aos="fade-up">
            <div className="tv-scene">
              <div className="tv-frame">
                <div className="tv-screen">
                  <div className="video-container">
                    <iframe
                      width="100%"
                      height="100%"
                      src={`https://www.youtube.com/embed/${videos[activeVideo].id}?autoplay=0&rel=0&modestbranding=1&showinfo=0`}
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>

                  <div className="project-thumbnails">
                    {videos.map((video, index) => (
                      <div
                        key={index}
                        className={`project-thumb ${
                          index === activeVideo ? "active" : ""
                        }`}
                        data-aos="fade-up"
                        data-aos-delay={index * 100}
                        onClick={() => setActiveVideo(index)}
                      >
                        <Image
                          src={video.thumbnail}
                          alt={video.title}
                          width={120}
                          height={68}
                          objectFit="cover"
                        />
                        <div className="thumb-overlay">
                          <PlayCircleOutlined />
                        </div>
                        <div className="thumb-title">{video.title}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="tv-stand"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section ref={bookingSectionRef}>
        <BookingReviewSection />
      </section>

      {/* Testimonial Section */}
      <section className="testimonial-section">
        <div className="testimonial-title">KHÁCH HÀNG NÓI GÌ VỀ PATHWAY?</div>
        <div className="testimonial-slider">
          <button className="arrow-btn">{"<<"}</button>
          <div className="testimonial-card">
            <div className="testimonial-avatar">
              <Image
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop"
                alt="Avatar"
                width={120}
                height={120}
              />
            </div>
            <div className="testimonial-content">
              <div className="testimonial-quote">
                &ldquo;Với sự hỗ trợ chuyên nghiệp từ PATHWAY, CV của tôi đã
                được cải thiện đáng kể. Các chuyên gia đã giúp tôi xác định điểm
                mạnh và trình bày thông tin một cách hiệu quả. Nhờ đó, tôi đã
                nhận được nhiều lời mời phỏng vấn hơn và cuối cùng là vị trí mơ
                ước tại một công ty hàng đầu.&rdquo;
              </div>
              <div className="testimonial-author">Anh Nguyễn Minh Tuấn</div>
              <div className="testimonial-role">
                Senior Developer - TechVision Corporation
              </div>
            </div>
          </div>
          <button className="arrow-btn">{">>"}</button>
        </div>
      </section>

      {/* Client Logos Section */}
      <section className="client-logos-section">
        <div className="client-title">Khách hàng của chúng tôi</div>
        <div className="client-logos">
          <div className="client-logo">
            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png"
              alt="Google"
              width={120}
              height={48}
            />
          </div>
          <div className="client-logo">
            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/1667px-Apple_logo_black.svg.png"
              alt="Apple"
              width={120}
              height={48}
            />
          </div>
          <div className="client-logo">
            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/2048px-Microsoft_logo.svg.png"
              alt="Microsoft"
              width={120}
              height={48}
            />
          </div>
          <div className="client-logo">
            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png"
              alt="Amazon"
              width={120}
              height={48}
            />
          </div>
          <div className="client-logo">
            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
              alt="Netflix"
              width={120}
              height={48}
            />
          </div>
          <div className="client-logo">
            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/LinkedIn_Logo.svg/2560px-LinkedIn_Logo.svg.png"
              alt="LinkedIn"
              width={120}
              height={48}
            />
          </div>
          <div className="client-logo">
            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Tata_Consultancy_Services_Logo.svg/2560px-Tata_Consultancy_Services_Logo.svg.png"
              alt="TCS"
              width={120}
              height={48}
            />
          </div>
          <div className="client-logo">
            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Accenture.svg/2560px-Accenture.svg.png"
              alt="Accenture"
              width={120}
              height={48}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
