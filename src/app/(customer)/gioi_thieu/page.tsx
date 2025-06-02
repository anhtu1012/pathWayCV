"use client";

import PageBanner from "@/components/common/PageBanner";
import {
  AimOutlined,
  CheckCircleOutlined,
  HeartOutlined,
  TeamOutlined,
  TrophyOutlined,
} from "@ant-design/icons";
import { Button, Card, Col, Row, Statistic, Timeline, Typography } from "antd";
import AOS from "aos";
import Image from "next/image";
import { useEffect } from "react";
import "./gioi_thieu.scss";
import { useTranslations } from "next-intl";

const { Title, Paragraph } = Typography;

function AboutPage() {
  const t = useTranslations("Gioi_thieu");

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  const coreValues = [
    {
      icon: <TeamOutlined />,
      title: t("coreValues.expertise.title"),
      description: t("coreValues.expertise.description"),
    },
    {
      icon: <TrophyOutlined />,
      title: t("coreValues.quality.title"),
      description: t("coreValues.quality.description"),
    },
    {
      icon: <HeartOutlined />,
      title: t("coreValues.empathy.title"),
      description: t("coreValues.empathy.description"),
    },
    {
      icon: <AimOutlined />,
      title: t("coreValues.results.title"),
      description: t("coreValues.results.description"),
    },
  ];

  const teamMembers = [
    {
      name: t("teamMembers.member1.name"),
      position: t("teamMembers.member1.position"),
      bio: t("teamMembers.member1.bio"),
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop",
    },
    {
      name: t("teamMembers.member2.name"),
      position: t("teamMembers.member2.position"),
      bio: t("teamMembers.member2.bio"),
      image:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop",
    },
    {
      name: t("teamMembers.member3.name"),
      position: t("teamMembers.member3.position"),
      bio: t("teamMembers.member3.bio"),
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop",
    },
    {
      name: t("teamMembers.member4.name"),
      position: t("teamMembers.member4.position"),
      bio: t("teamMembers.member4.bio"),
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop",
    },
  ];

  const timelineItems = [
    {
      label: t("timelineItems.stage1.label"),
      children: (
        <div className="timeline-content">
          <Title level={4}>{t("timelineItems.stage1.title")}</Title>
          {t("timelineItems.stage1.description") && <Paragraph>{t("timelineItems.stage1.description")}</Paragraph>}
        </div>
      ),
    },
    {
      label: t("timelineItems.stage2.label"),
      children: (
        <div className="timeline-content">
          <Title level={4}>{t("timelineItems.stage2.title")}</Title>
          {t("timelineItems.stage2.description") && <Paragraph>{t("timelineItems.stage2.description")}</Paragraph>}
        </div>
      ),
    },
    {
      label: t("timelineItems.stage3.label"),
      children: (
        <div className="timeline-content">
          <Title level={4}>{t("timelineItems.stage3.title")}</Title>
          {t("timelineItems.stage3.description") && <Paragraph>{t("timelineItems.stage3.description")}</Paragraph>}
        </div>
      ),
    },
  ];

  const partnerLogoUrls = [
    "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/1667px-Apple_logo_black.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/2048px-Microsoft_logo.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Facebook_Logo_2023.png/600px-Facebook_Logo_2023.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/768px-LinkedIn_logo_initials.png",
  ];


  return (
    <div className="about-page">
      <PageBanner
        title={t("pageBanner.title")}
        subtitle={t("pageBanner.subtitle")}
      />

      <section className="story-section">
        <div className="container">
          <Row gutter={[32, 32]} align="middle">
            <Col xs={24} md={12} data-aos="fade-right">
              <div className="story-content">
                <Title level={2} className="section-title">
                  {t("PATHWAY_Story")}
                </Title>
                <Paragraph className="section-description">
                  {t("PATHWAY_Story_Description")}
                </Paragraph>
                <Paragraph>{t("PATHWAY_Story_Detail")}</Paragraph>
                <Paragraph>{t("PATHWAY_Story_Mission")}</Paragraph>
                <div className="story-cta">
                  <Button type="primary" size="large">
                    {t("PATHWAY_Story_Button")}
                  </Button>
                </div>
              </div>
            </Col>
            <Col xs={24} md={12} data-aos="fade-left">
              <div className="story-image">
                <Image
                  src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1932&auto=format&fit=crop"
                  alt={t("storySection.imageAlt")}
                  width={600}
                  height={450}
                  className="rounded-image"
                />
              </div>
            </Col>
          </Row>
        </div>
      </section>

      <section className="mission-section">
        <div className="container">
          <div className="section-header text-center" data-aos="fade-up">
            <Title level={2} className="section-title">
              {t("missionVisionSection.title")}
            </Title>
            {t("missionVisionSection.description") && (
                <Paragraph className="section-description">
                    {t("missionVisionSection.description")}
                </Paragraph>
            )}
          </div>

          <Row gutter={[32, 32]} className="mission-content">
            <Col xs={24} md={12} data-aos="fade-right">
              <div className="mission-card">
                <Title level={3}>{t("missionVisionSection.missionCard.title")}</Title>
                <Paragraph>
                  {t("missionVisionSection.missionCard.description")}
                </Paragraph>
                <ul className="mission-list">
                  <li>
                    <CheckCircleOutlined /> {t("missionVisionSection.missionCard.listItem1")}
                  </li>
                  <li>
                    <CheckCircleOutlined /> {t("missionVisionSection.missionCard.listItem2")}
                  </li>
                  <li>
                    <CheckCircleOutlined /> {t("missionVisionSection.missionCard.listItem3")}
                  </li>
                </ul>
              </div>
            </Col>
            <Col xs={24} md={12} data-aos="fade-left">
              <div className="vision-card">
                <Title level={3}>{t("missionVisionSection.visionCard.title")}</Title>
                <Paragraph>
                  {t("missionVisionSection.visionCard.description")}
                </Paragraph>
                <ul className="vision-list">
                  <li>
                    <CheckCircleOutlined /> {t("missionVisionSection.visionCard.listItem1")}
                  </li>
                  <li>
                    <CheckCircleOutlined /> {t("missionVisionSection.visionCard.listItem2")}
                  </li>
                  <li>
                    <CheckCircleOutlined /> {t("missionVisionSection.visionCard.listItem3")}
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </div>
      </section>

      <section className="values-section">
        <div className="container">
          <div className="section-header text-center" data-aos="fade-up">
            <Title level={2} className="section-title">
              {t("coreValuesSection.title")}
            </Title>
            {t("coreValuesSection.description") && (
                <Paragraph className="section-description">
                    {t("coreValuesSection.description")}
                </Paragraph>
            )}
          </div>

          <div className="values-grid">
            {coreValues.map((value, index) => (
              <Card
                key={index}
                className="value-card"
                data-aos="fade-up"
                data-aos-delay={100 + index * 100}
              >
                <div className="value-icon">{value.icon}</div>
                <Title level={3} className="value-title">
                  {value.title}
                </Title>
                <Paragraph className="value-description">
                  {value.description}
                </Paragraph>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="milestones-section">
        <div className="container">
          <div className="section-header text-center" data-aos="fade-up">
            <Title level={2} className="section-title">
              {t("milestonesSection.title")}
            </Title>
            {t("milestonesSection.description") && (
                <Paragraph className="section-description">
                    {t("milestonesSection.description")}
                </Paragraph>
            )}
          </div>

          <div
            className="timeline-container"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <Timeline mode="alternate" items={timelineItems} />
          </div>
        </div>
      </section>

      <section className="stats-section">
        <div className="container">
          <Row gutter={[32, 32]} className="stats-grid">
            <Col xs={24} sm={12} md={6} data-aos="fade-up" data-aos-delay="100">
              <div className="stat-card">
                <Statistic title={t("statsSection.clients.title")} value={5000} suffix="+" />
              </div>
            </Col>
            <Col xs={24} sm={12} md={6} data-aos="fade-up" data-aos-delay="200">
              <div className="stat-card">
                <Statistic title={t("statsSection.experts.title")} value={20} suffix="+" />
              </div>
            </Col>
            <Col xs={24} sm={12} md={6} data-aos="fade-up" data-aos-delay="300">
              <div className="stat-card">
                <Statistic title={t("statsSection.satisfaction.title")} value={95} suffix="%" />
              </div>
            </Col>
            <Col xs={24} sm={12} md={6} data-aos="fade-up" data-aos-delay="400">
              <div className="stat-card">
                <Statistic title={t("statsSection.partners.title")} value={50} suffix="+" />
              </div>
            </Col>
          </Row>
        </div>
      </section>

      <section className="team-section">
        <div className="container">
          <div className="section-header text-center" data-aos="fade-up">
            <Title level={2} className="section-title">
              {t("teamSection.title")}
            </Title>
            <Paragraph className="section-description">
              {t("teamSection.description")}
            </Paragraph>
          </div>

          <div className="team-grid">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="team-member"
                data-aos="fade-up"
                data-aos-delay={100 + index * 100}
              >
                <div className="member-image">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={300}
                    height={300}
                    className="rounded-image"
                  />
                </div>
                <div className="member-info">
                  <Title level={4}>{member.name}</Title>
                  <div className="member-position">{member.position}</div>
                  <Paragraph className="member-bio">{member.bio}</Paragraph>
                  <div className="member-social">
                    <a href="#" aria-label={t("teamSection.social.linkedInAria")}>
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                    <a href="#" aria-label={t("teamSection.social.emailAria")}>
                      <i className="fas fa-envelope"></i>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="partners-section">
        <div className="container">
          <div className="section-header text-center" data-aos="fade-up">
            <Title level={2} className="section-title">
              {t("ourPartnersSection.title")}
            </Title>
            <Paragraph className="section-description">
              {t("ourPartnersSection.description")}
            </Paragraph>
          </div>

          <div
            className="partners-grid"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            {partnerLogoUrls.map((logoUrl, index) => (
              <div key={index} className="partner-logo">
                <Image
                  src={logoUrl}
                  alt={t(`ourPartnersSection.partnerLogos.${index}.alt`, { defaultValue: `Partner ${index + 1}` })}
                  width={150}
                  height={80}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="achievements-section">
        <div className="container">
          <div className="section-header text-center" data-aos="fade-up">
            <Title level={2} className="section-title">
              {t("achievementsSection.title")}
            </Title>
            {t("achievementsSection.description") && (
                <Paragraph className="section-description">
                    {t("achievementsSection.description")}
                </Paragraph>
            )}
          </div>

          <Row gutter={[32, 32]} className="achievements-grid">
            <Col xs={24} md={8} data-aos="fade-up" data-aos-delay="100">
              <Card className="achievement-card">
                <div className="achievement-icon">
                  <TrophyOutlined />
                </div>
                <Title level={4}>{t("achievementsSection.achievement1.title")}</Title>
                <Paragraph>
                  {t("achievementsSection.achievement1.description")}
                </Paragraph>
              </Card>
            </Col>
            <Col xs={24} md={8} data-aos="fade-up" data-aos-delay="200">
              <Card className="achievement-card">
                <div className="achievement-icon">
                  <TrophyOutlined />
                </div>
                <Title level={4}>{t("achievementsSection.achievement2.title")}</Title>
                <Paragraph>
                  {t("achievementsSection.achievement2.description")}
                </Paragraph>
              </Card>
            </Col>
            <Col xs={24} md={8} data-aos="fade-up" data-aos-delay="300">
              <Card className="achievement-card">
                <div className="achievement-icon">
                  <TrophyOutlined />
                </div>
                <Title level={4}>{t("achievementsSection.achievement3.title")}</Title>
                <Paragraph>
                  {t("achievementsSection.achievement3.description")}
                </Paragraph>
              </Card>
            </Col>
          </Row>
        </div>
      </section>

      <section className="programs-section">
        <div className="container">
          <div className="section-header text-center" data-aos="fade-up">
            <Title level={2} className="section-title">
              {t("communityProgramsSection.title")}
            </Title>
            {t("communityProgramsSection.description") && (
                <Paragraph className="section-description">
                    {t("communityProgramsSection.description")}
                </Paragraph>
            )}
          </div>

          <Row gutter={[32, 32]} className="programs-grid">
            <Col xs={24} lg={8} data-aos="fade-up" data-aos-delay="100">
              <div className="program-card">
                <div className="program-image">
                  <Image
                    src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070&auto=format&fit=crop"
                    alt={t("communityProgramsSection.program1.imageAlt")}
                    width={350}
                    height={250}
                    className="rounded-image"
                  />
                </div>
                <Title level={4}>{t("communityProgramsSection.program1.title")}</Title>
                <Paragraph>
                  {t("communityProgramsSection.program1.description")}
                </Paragraph>
              </div>
            </Col>
            <Col xs={24} lg={8} data-aos="fade-up" data-aos-delay="200">
              <div className="program-card">
                <div className="program-image">
                  <Image
                    src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop"
                    alt={t("communityProgramsSection.program2.imageAlt")}
                    width={350}
                    height={250}
                    className="rounded-image"
                  />
                </div>
                <Title level={4}>{t("communityProgramsSection.program2.title")}</Title>
                <Paragraph>
                  {t("communityProgramsSection.program2.description")}
                </Paragraph>
              </div>
            </Col>
            <Col xs={24} lg={8} data-aos="fade-up" data-aos-delay="300">
              <div className="program-card">
                <div className="program-image">
                  <Image
                    src="https://images.unsplash.com/photo-1544531585-9847b68c8c86?q=80&w=2070&auto=format&fit=crop"
                    alt={t("communityProgramsSection.program3.imageAlt")}
                    width={350}
                    height={250}
                    className="rounded-image"
                  />
                </div>
                <Title level={4}>{t("communityProgramsSection.program3.title")}</Title>
                <Paragraph>
                  {t("communityProgramsSection.program3.description")}
                </Paragraph>
              </div>
            </Col>
          </Row>
        </div>
      </section>

      <section className="cta-section" data-aos="fade-up">
        <div className="container">
          <div className="cta-content">
            <Title level={2}>{t("ctaSection.title")}</Title>
            <Paragraph className="custom-paragraph">
              {t("ctaSection.description")}
            </Paragraph>
            <div className="cta-buttons">
              <Button type="primary" size="large" className="cta-primary-btn">
                {t("ctaSection.primaryButton")}
              </Button>
              <Button size="large" className="cta-secondary-btn">
                {t("ctaSection.secondaryButton")}
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutPage;