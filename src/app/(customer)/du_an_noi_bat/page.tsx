"use client";

import PageBanner from "@/components/common/PageBanner";
import {
  ArrowRightOutlined,
  CalendarOutlined,
  TrophyOutlined,
} from "@ant-design/icons";
import { Button, Card, Col, Row, Space, Tabs, Tag, Typography } from "antd";
import AOS from "aos";
import Image from "next/image";
import { useEffect, useState } from "react";
import "./du_an_noi_bat.scss";
import { useTranslations } from "next-intl";

const { Title, Paragraph } = Typography;

function FeaturedProjectsPage() {
  const t = useTranslations("FeaturedProjectsPage");
  const [activeCategory, setActiveCategory] = useState("all");

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  // Dữ liệu dự án gốc sẽ được chuyển đổi để sử dụng keys từ tệp JSON
  const originalProjectsData = [
    {
      id: 1,
      projectKey: "project1", // Key để lấy dữ liệu từ JSON
      image: "/assets/image/dinh-huong-nghe-nghiep-som-de-thanh-cong.jpg",
      category: "corporate",
      delay: 100,
    },
    {
      id: 2,
      projectKey: "project2",
      image: "/assets/image/163055607_linkedin-la-gi.png",
      category: "executive",
      delay: 200,
    },
    {
      id: 3,
      projectKey: "project3",
      image:
        "https://images.unsplash.com/photo-1573497161161-c3e73707e25c?w=800",
      category: "education",
      delay: 300,
    },
    {
      id: 4,
      projectKey: "project4",
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800",
      category: "corporate",
      delay: 400,
    },
    {
      id: 5,
      projectKey: "project5",
      image:
        "https://images.unsplash.com/photo-1581092160607-ee22732f9e56?w=800",
      category: "tools",
      delay: 500,
    },
    {
      id: 6,
      projectKey: "project6",
      image:
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800",
      category: "executive",
      delay: 600,
    },
  ];

  // Tạo mảng projects với dữ liệu đã dịch
  const projects = originalProjectsData.map(p => ({
    ...p,
    title: t(`projects.${p.projectKey}.title`),
    description: t(`projects.${p.projectKey}.description`),
    client: t(`projects.${p.projectKey}.client`),
    date: t(`projects.${p.projectKey}.date`),
    tags: [
      t(`projects.${p.projectKey}.tag1`),
      t(`projects.${p.projectKey}.tag2`),
      t(`projects.${p.projectKey}.tag3`),
    ].filter(tag => tag && tag !== `projects.${p.projectKey}.tag1` && tag !== `projects.${p.projectKey}.tag2` && tag !== `projects.${p.projectKey}.tag3`), // Lọc tag không có bản dịch
    results: [
      t(`projects.${p.projectKey}.result1`),
      t(`projects.${p.projectKey}.result2`),
      t(`projects.${p.projectKey}.result3`),
    ].filter(result => result && result !== `projects.${p.projectKey}.result1` && result !== `projects.${p.projectKey}.result2` && result !== `projects.${p.projectKey}.result3`),
  }));

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  const tabItems = [
    { key: "all", label: t("categoryTabs.all") },
    { key: "corporate", label: t("categoryTabs.corporate") },
    { key: "executive", label: t("categoryTabs.executive") },
    { key: "education", label: t("categoryTabs.education") },
    { key: "tools", label: t("categoryTabs.tools") },
  ];

  const testimonials = [
      {key: "testimonial1", image: "https://randomuser.me/api/portraits/women/43.jpg"},
      {key: "testimonial2", image: "https://randomuser.me/api/portraits/men/32.jpg"},
      {key: "testimonial3", image: "https://randomuser.me/api/portraits/women/68.jpg"},
  ];


  return (
    <div className="projects-page">
      <PageBanner
        title={t("pageBanner.title")}
        subtitle={t("pageBanner.subtitle")}
      />

      <section className="projects-content">
        <div className="container">
          <div className="category-tabs" data-aos="fade-up">
            <Tabs
              activeKey={activeCategory}
              onChange={(key) => setActiveCategory(key)}
              centered
              items={tabItems}
            />
          </div>

          <div className="projects-grid">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="project-item"
                data-aos="fade-up"
                data-aos-delay={project.delay}
              >
                <Card className="project-card">
                  <Row gutter={[32, 32]}>
                    <Col xs={24} md={10}>
                      <div className="project-image-container">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          style={{ objectFit: "cover" }}
                          className="project-image"
                        />
                      </div>
                    </Col>

                    <Col xs={24} md={14}>
                      <div className="project-content">
                        <Title level={3}>{project.title}</Title>
                        <Paragraph className="project-description">
                          {project.description}
                        </Paragraph>

                        <div className="project-meta">
                          <div className="meta-item">
                            <strong>{t("projectDetails.clientLabel")}</strong> {project.client}
                          </div>
                          <div className="meta-item">
                            <CalendarOutlined /> <span>{project.date}</span>
                          </div>
                        </div>

                        <div className="project-tags">
                          {project.tags.map((tag, index) => (
                            <Tag key={index} color="blue">
                              {tag}
                            </Tag>
                          ))}
                        </div>

                        <div className="project-results">
                          <Title level={5}>
                            <TrophyOutlined /> {t("projectDetails.resultsTitle")}
                          </Title>
                          <ul>
                            {project.results.map((result, index) => (
                              <li key={index}>{result}</li>
                            ))}
                          </ul>
                        </div>

                        <Button type="primary" className="details-button">
                          {t("projectDetails.detailsButton")} <ArrowRightOutlined />
                        </Button>
                      </div>
                    </Col>
                  </Row>
                </Card>
              </div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="no-projects" data-aos="fade-up">
              <Title level={4}>{t("noProjects.title")}</Title>
              <Button type="primary" onClick={() => setActiveCategory("all")}>
                {t("noProjects.button")}
              </Button>
            </div>
          )}
        </div>
      </section>

      <section className="stats-section">
        <div className="container">
          <Row gutter={[48, 48]}>
            <Col xs={24} md={8} data-aos="fade-up" data-aos-delay="100">
              <div className="stat-card">
                <div className="stat-number">{t("statsSection.stat1_number")}</div>
                <div className="stat-title">{t("statsSection.stat1_title")}</div>
                <Paragraph className="stat-desc">
                  {t("statsSection.stat1_desc")}
                </Paragraph>
              </div>
            </Col>

            <Col xs={24} md={8} data-aos="fade-up" data-aos-delay="200">
              <div className="stat-card">
                <div className="stat-number">{t("statsSection.stat2_number")}</div>
                <div className="stat-title">{t("statsSection.stat2_title")}</div>
                <Paragraph className="stat-desc">
                  {t("statsSection.stat2_desc")}
                </Paragraph>
              </div>
            </Col>

            <Col xs={24} md={8} data-aos="fade-up" data-aos-delay="300">
              <div className="stat-card">
                <div className="stat-number">{t("statsSection.stat3_number")}</div>
                <div className="stat-title">{t("statsSection.stat3_title")}</div>
                <Paragraph className="stat-desc">
                  {t("statsSection.stat3_desc")}
                </Paragraph>
              </div>
            </Col>
          </Row>
        </div>
      </section>

      <section className="testimonial-section">
        <div className="container">
          <Title
            level={2}
            className="section-title text-center"
            data-aos="fade-up"
          >
            {t("testimonialSection.title")}
          </Title>

          <div className="testimonial-grid">
            <Row gutter={[32, 32]}>
              {testimonials.map((testimonial, index) => (
                 <Col xs={24} md={8} data-aos="fade-up" data-aos-delay={100 * (index + 1)} key={testimonial.key}>
                    <Card className="testimonial-card">
                    <div className="quote-icon"></div>
                    <Paragraph className="testimonial-text">
                        {t(`testimonialSection.${testimonial.key}.quote`)}
                    </Paragraph>
                    <div className="testimonial-author">
                        <div className="author-avatar">
                        <Image
                            src={testimonial.image}
                            alt={t(`testimonialSection.${testimonial.key}.authorName`)}
                            width={60}
                            height={60}
                        />
                        </div>
                        <div className="author-info">
                        <div className="author-name">{t(`testimonialSection.${testimonial.key}.authorName`)}</div>
                        <div className="author-title">
                            {t(`testimonialSection.${testimonial.key}.authorTitle`)}
                        </div>
                        </div>
                    </div>
                    </Card>
              </Col>
              ))}
            </Row>
          </div>
        </div>
      </section>

      <section className="cta-section" data-aos="fade-up">
        <div className="container">
          <div className="cta-content" data-aos="zoom-in">
            <Title level={2}>{t("cta.title")}</Title>
            <Paragraph className="cta-paragraph">
              {t("cta.description")}
            </Paragraph>
            <Space size={20}>
              <Button type="primary" size="large" className="cta-primary-btn">
                {t("cta.button1_text")}
              </Button>
              <Button size="large" className="cta-secondary-btn">{t("cta.button2_text")}</Button>
            </Space>
          </div>
        </div>
      </section>
    </div>
  );
}

export default FeaturedProjectsPage;