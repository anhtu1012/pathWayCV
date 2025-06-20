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
import { useTranslations } from "next-intl"; 

const { Title, Text, Paragraph } = Typography;

const HomePage = () => {
  const t = useTranslations("HomePage"); 
  
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
      key: "service1", 
      image:
        "https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=2070&auto=format&fit=crop",
      delay: 0,
      icon: <FileSearchOutlined />,
    },
    {
      key: "service2",
      image:
        "https://images.unsplash.com/photo-1611944212129-29977ae1398c?q=80&w=2574&auto=format&fit=crop",
      delay: 200,
      icon: <StarOutlined />,
    },
    {
      key: "service3",
      image:
        "https://images.unsplash.com/photo-1573497161161-c3e73707e25c?q=80&w=2070&auto=format&fit=crop", 
      delay: 400,
      icon: <RocketOutlined />,
    },
  ];

  const VIDEO_LINKS = {
    TVC_QUANG_CAO: "ZgZGkNe8zg8",
    PHIM_DOANH_NGHIEP: "MnzdvcJsp18",
    PHIM_VIRAL: "ZgZGkNe8zg8", // Giả sử bạn muốn giữ các link này
    PHIM_THUONG_HIEU: "MnzdvcJsp18",
    TVC_SAN_PHAM: "ZgZGkNe8zg8",
    PHIM_DU_AN: "MnzdvcJsp18",
  };

  const videos = [
    {
      id: VIDEO_LINKS.TVC_QUANG_CAO,
      thumbnail: "/assets/video/video.mp4", // Đường dẫn thumbnail giữ nguyên
      titleKey: "projectsSection.video_tvc_quang_cao",
    },
    {
      id: VIDEO_LINKS.PHIM_DOANH_NGHIEP,
      thumbnail: "/assets/video/interviewSkill.mp4",
      titleKey: "projectsSection.video_phim_doanh_nghiep",
    },
    {
      id: VIDEO_LINKS.PHIM_VIRAL,
      thumbnail: "/assets/video/video.mp4",
      titleKey: "projectsSection.video_phim_viral",
    },
    {
      id: VIDEO_LINKS.PHIM_THUONG_HIEU,
      thumbnail: "/assets/video/video.mp4",
      titleKey: "projectsSection.video_phim_thuong_hieu",
    },
    {
      id: VIDEO_LINKS.TVC_SAN_PHAM,
      thumbnail: "/assets/video/video.mp4",
      titleKey: "projectsSection.video_tvc_san_pham",
    },
    {
      id: VIDEO_LINKS.PHIM_DU_AN,
      thumbnail: "/assets/video/video.mp4",
      titleKey: "projectsSection.video_phim_du_an",
    },
  ];

  const clientLogos = [
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png",
      altKey: "clientLogosSection.logo_google_alt",
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/1667px-Apple_logo_black.svg.png",
      altKey: "clientLogosSection.logo_apple_alt",
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/2048px-Microsoft_logo.svg.png",
      altKey: "clientLogosSection.logo_microsoft_alt",
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png",
      altKey: "clientLogosSection.logo_amazon_alt",
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png",
      altKey: "clientLogosSection.logo_netflix_alt",
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/LinkedIn_Logo.svg/2560px-LinkedIn_Logo.svg.png",
      altKey: "clientLogosSection.logo_linkedin_alt",
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Tata_Consultancy_Services_Logo.svg/2560px-Tata_Consultancy_Services_Logo.svg.png",
      altKey: "clientLogosSection.logo_tcs_alt",
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Accenture.svg/2560px-Accenture.svg.png",
      altKey: "clientLogosSection.logo_accenture_alt",
    },
  ];


  return (
    <div className="home-page">
      <section className="hero-section">
        <div
          className="hero-background"
          style={{
            background:
              "url('/assets/image/banner3.jpg') center/cover no-repeat",
            height: "100vh",
          }}
        ></div>
        <div className="particles-container"></div>
        <div className="hero-content" data-aos="fade-up">
          <Title>{t("hero.mainTitle")}</Title>
          <Title level={2}>{t("hero.subTitle")}</Title>
          <Text className="hero-subtitle">{t("hero.tagline")}</Text>
          <Space size="large" className="hero-buttons">
            <Button
              type="primary"
              size="large"
              className="glow-effect"
              onClick={scrollToBooking}
            >
              {t("hero.button1_text")}
            </Button>
            <Button
              size="large"
              icon={<PlayCircleOutlined />}
              className="pulse-effect"
              onClick={scrollToProjects}
            >
              {t("hero.button2_text")}
            </Button>
          </Space>
        </div>
      </section>

      <section className="introduction-section">
        <div className="section-content">
          <Title level={2} className="section-title" data-aos="fade-up">
            {t("introduction.title")}
          </Title>
          <Paragraph className="intro-text" data-aos="fade-up">
            <span dangerouslySetInnerHTML={{ __html: t.raw("introduction.paragraph") }} />
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
                    alt={t("introduction.card1_alt")}
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
                  <Title level={3}>{t("introduction.card1_title")}</Title>
                  <Paragraph>
                    {t("introduction.card1_description")}
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
                    alt={t("introduction.card2_alt")}
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
                  <Title level={3}>{t("introduction.card2_title")}</Title>
                  <Paragraph>
                    {t("introduction.card2_description")}
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
                    alt={t("introduction.card3_alt")}
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
                  <Title level={3}>{t("introduction.card3_title")}</Title>
                  <Paragraph>
                    {t("introduction.card3_description")}
                  </Paragraph>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </section>

      <section className="mission-section">
        <div className="mission-container">
          <Title
            level={2}
            className="section-title center-title"
            data-aos="fade-up"
          >
            {t("ourDistinctMissionSection.title")}
          </Title>
          <div className="mission-items" data-aos="fade-up">
            <div className="mission-item">
              <div className="mission-icon">
                <Image
                  src="/assets/image/lanto.png"
                  alt={t("ourDistinctMissionSection.item1_alt")}
                  width={120}
                  height={120}
                />
              </div>
              <div className="mission-content">
                <p>{t("ourDistinctMissionSection.item1_text")}</p>
              </div>
            </div>

            <div className="mission-item">
              <div className="mission-icon">
                <Image
                  src="/assets/image/tangcao.jpg"
                  alt={t("ourDistinctMissionSection.item2_alt")}
                  width={120}
                  height={120}
                />
              </div>
              <div className="mission-content">
                <p>{t("ourDistinctMissionSection.item2_text")}</p>
              </div>
            </div>

            <div className="mission-item">
              <div className="mission-icon">
                <Image
                  src="/assets/image/didunghuong.jpg"
                  alt={t("ourDistinctMissionSection.item3_alt")}
                  width={120}
                  height={120}
                />
              </div>
              <div className="mission-content">
                <p>{t("ourDistinctMissionSection.item3_text")}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about-section">
        <div className="section-content">
          <Title level={2} className="section-title" data-aos="fade-up">
            {t("whyChooseUs.title")}
          </Title>
          <Row gutter={[24, 24]} align="middle">
            <Col xs={24} md={12} data-aos="fade-right">
              <div className="about-image">
                <Image
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop"
                  alt={t("whyChooseUs.image_alt")}
                  width={1000}
                  height={1000}
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
            </Col>
            <Col xs={24} md={12} data-aos="fade-left">
              <div className="about-content">
                <Paragraph className="about-text">
                  <span dangerouslySetInnerHTML={{ __html: t.raw("whyChooseUs.paragraph1") }} />
                </Paragraph>
                <Paragraph className="about-text">
                  {t("whyChooseUs.paragraph2")}
                </Paragraph>
                <div className="stats-grid">
                  <div
                    className="stat-item"
                    data-aos="zoom-in"
                    data-aos-delay="200"
                  >
                    <h3 className="counter-effect">{t("whyChooseUs.stat1_value")}</h3>
                    <p>{t("whyChooseUs.stat1_label")}</p>
                  </div>
                  <div
                    className="stat-item"
                    data-aos="zoom-in"
                    data-aos-delay="400"
                  >
                    <h3 className="counter-effect">{t("whyChooseUs.stat2_value")}</h3>
                    <p>{t("whyChooseUs.stat2_label")}</p>
                  </div>
                  <div
                    className="stat-item"
                    data-aos="zoom-in"
                    data-aos-delay="600"
                  >
                    <h3 className="counter-effect">{t("whyChooseUs.stat3_value")}</h3>
                    <p>{t("whyChooseUs.stat3_label")}</p>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </section>

      <section className="services-section">
        <div className="section-content">
          <Title level={2} className="section-title" data-aos="fade-up">
            {t("servicesSection.title")}
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
                      alt={t(`servicesSection.${service.key}_title`)}
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
                    <Title level={3}>{t(`servicesSection.${service.key}_title`)}</Title>
                    <Paragraph
                      className="service-description"
                      style={{ padding: "10px" }}
                    >
                      {t(`servicesSection.${service.key}_description`)}
                    </Paragraph>
                    <Button type="primary" className="service-btn">
                      {t("servicesSection.learnMoreButton")}
                    </Button>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </section>

      <section className="projects-section" ref={projectSectionRef}>
        <div className="section-content">
          <Title level={2} className="section-title" data-aos="fade-up">
            {t("projectsSection.title")}
          </Title>

          <div className="tv-display-container" data-aos="fade-up">
            <div className="tv-scene">
              <div className="tv-frame">
                <div className="tv-screen">
                  <div className="video-container">
                    <iframe
                      width="100%"
                      height="100%"
                      src= {`assets/video/interviewSkill.mp4`}
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
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
                          alt={t(video.titleKey)}
                          width={120}
                          height={68}
                          style={{objectFit:"cover"}}
                        />
                        <div className="thumb-overlay">
                          <PlayCircleOutlined />
                        </div>
                        <div className="thumb-title">{t(video.titleKey)}</div>
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

      <section ref={bookingSectionRef}>
        <BookingReviewSection />
      </section>

      <section className="testimonial-section">
        <div className="testimonial-title">{t("testimonialSection.title")}</div>
        <div className="testimonial-slider">
          <button className="arrow-btn">{t("testimonialSection.arrow_left")}</button>
          <div className="testimonial-card">
            <div className="testimonial-avatar">
              <Image
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop"
                alt={t("testimonialSection.card1_avatar_alt")}
                width={120}
                height={120}
              />
            </div>
            <div className="testimonial-content">
              <div className="testimonial-quote">
                {t("testimonialSection.card1_quote")}
              </div>
              <div className="testimonial-author">{t("testimonialSection.card1_author")}</div>
              <div className="testimonial-role">
                {t("testimonialSection.card1_role")}
              </div>
            </div>
          </div>
          <button className="arrow-btn">{t("testimonialSection.arrow_right")}</button>
        </div>
      </section>

      <section className="client-logos-section">
        <div className="client-title">{t("clientLogosSection.title")}</div>
        <div className="client-logos">
          {clientLogos.map((logo, index) => (
            <div className="client-logo" key={index}>
              <Image
                src={logo.src}
                alt={t(logo.altKey)}
                width={120}
                height={48}
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;