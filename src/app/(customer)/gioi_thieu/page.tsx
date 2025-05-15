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

const { Title, Paragraph } = Typography;

function AboutPage() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  const coreValues = [
    {
      icon: <TeamOutlined />,
      title: "Chuyên môn",
      description:
        "Đội ngũ chuyên gia với kinh nghiệm sâu rộng về tuyển dụng và phát triển nghề nghiệp.",
    },
    {
      icon: <TrophyOutlined />,
      title: "Chất lượng",
      description:
        "Cam kết cung cấp dịch vụ chất lượng cao và giải pháp tối ưu cho từng khách hàng.",
    },
    {
      icon: <HeartOutlined />,
      title: "Đồng cảm",
      description:
        "Hiểu sâu về thách thức nghề nghiệp và đưa ra lời khuyên tâm huyết, thực tế.",
    },
    {
      icon: <AimOutlined />,
      title: "Kết quả",
      description:
        "Tập trung vào mục tiêu và kết quả cụ thể, giúp khách hàng đạt được thành công.",
    },
  ];

  const teamMembers = [
    {
      name: "Nguyễn Thị Minh",
      position: "Founder & CEO",
      bio: "Với hơn 15 năm kinh nghiệm trong lĩnh vực HR và tuyển dụng tại các tập đoàn đa quốc gia, chị Minh sáng lập PATHWAY với sứ mệnh giúp người Việt Nam phát triển sự nghiệp bền vững.",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop",
    },
    {
      name: "Trần Đức Anh",
      position: "Career Advisor Lead",
      bio: "Đức Anh từng là Giám đốc Nhân sự tại nhiều công ty công nghệ lớn, hiện dẫn dắt đội ngũ tư vấn viên tại PATHWAY với phương pháp coaching hiệu quả.",
      image:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop",
    },
    {
      name: "Lê Hoàng Mai",
      position: "CV & LinkedIn Expert",
      bio: "Chuyên gia về xây dựng thương hiệu cá nhân và CV, Mai đã giúp hơn 2000 ứng viên nâng cao tỷ lệ phỏng vấn thành công từ 15% lên 85%.",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop",
    },
    {
      name: "Phạm Văn Tuấn",
      position: "Interview Coach",
      bio: "Với kinh nghiệm phỏng vấn hàng nghìn ứng viên khi làm việc tại các công ty Fortune 500, Tuấn giúp học viên tự tin chinh phục nhà tuyển dụng khó tính nhất.",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop",
    },
  ];

  const timelineItems = [
    {
      label: "2018",
      children: (
        <div className="timeline-content">
          <Title level={4}>Thành lập PATHWAY</Title>
          <Paragraph>
            Văn phòng đầu tiên được mở tại Quận 1, TP.HCM với đội ngũ 5 thành
            viên.
          </Paragraph>
        </div>
      ),
    },
    {
      label: "2019",
      children: (
        <div className="timeline-content">
          <Title level={4}>Mở rộng dịch vụ</Title>
          <Paragraph>
            Phát triển đa dạng các dịch vụ từ đánh giá CV đến tư vấn phỏng vấn
            và định hướng nghề nghiệp.
          </Paragraph>
        </div>
      ),
    },
    {
      label: "2020",
      children: (
        <div className="timeline-content">
          <Title level={4}>Ra mắt nền tảng trực tuyến</Title>
          <Paragraph>
            Chuyển đổi số thành công và cung cấp dịch vụ tư vấn trực tuyến trong
            bối cảnh đại dịch.
          </Paragraph>
        </div>
      ),
    },
    {
      label: "2021",
      children: (
        <div className="timeline-content">
          <Title level={4}>Mở văn phòng tại Hà Nội</Title>
          <Paragraph>
            Mở rộng thị trường phía Bắc với văn phòng thứ hai tại Hà Nội.
          </Paragraph>
        </div>
      ),
    },
    {
      label: "2022",
      children: (
        <div className="timeline-content">
          <Title level={4}>Đạt mốc 5000 khách hàng</Title>
          <Paragraph>
            Kỷ niệm cột mốc quan trọng với 5000 khách hàng đã được tư vấn thành
            công.
          </Paragraph>
        </div>
      ),
    },
    {
      label: "2023",
      children: (
        <div className="timeline-content">
          <Title level={4}>Ra mắt Học viện PATHWAY</Title>
          <Paragraph>
            Thành lập trung tâm đào tạo kỹ năng mềm và phát triển sự nghiệp với
            các khóa học chuyên sâu.
          </Paragraph>
        </div>
      ),
    },
  ];

  return (
    <div className="about-page">
      <PageBanner
        title="Giới thiệu"
        subtitle="Đồng hành cùng bạn trên hành trình sự nghiệp"
      />

      <section className="story-section">
        <div className="container">
          <Row gutter={[48, 48]} align="middle">
            <Col xs={24} lg={12} data-aos="fade-right">
              <div className="story-content">
                <Title level={2} className="section-title">
                  Câu chuyện của chúng tôi
                </Title>
                <Paragraph className="section-description">
                  PATHWAY được thành lập vào năm 2018 bởi những chuyên gia nhân
                  sự hàng đầu với sứ mệnh giúp người lao động Việt Nam định hình
                  và phát triển sự nghiệp bền vững trong thời đại số.
                </Paragraph>
                <Paragraph>
                  Từ những buổi tư vấn đầu tiên, chúng tôi nhận thấy rằng nhiều
                  người tài năng đang gặp khó khăn trong việc thể hiện giá trị
                  bản thân với nhà tuyển dụng và phát triển lộ trình nghề nghiệp
                  rõ ràng.
                </Paragraph>
                <Paragraph>
                  Trong 5 năm qua, PATHWAY đã đồng hành cùng hơn 5000 khách hàng
                  từ sinh viên mới ra trường đến quản lý cấp cao, giúp họ đạt
                  được mục tiêu nghề nghiệp và xây dựng sự nghiệp bền vững.
                </Paragraph>
                <div className="story-cta">
                  <Button type="primary" size="large">
                    Khám phá dịch vụ
                  </Button>
                </div>
              </div>
            </Col>
            <Col xs={24} lg={12} data-aos="fade-left">
              <div className="story-image">
                <Image
                  src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1932&auto=format&fit=crop"
                  alt="PATHWAY Story"
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
              Sứ mệnh và tầm nhìn
            </Title>
            <Paragraph className="section-description">
              Định hướng hoạt động của PATHWAY dựa trên các giá trị cốt lõi
            </Paragraph>
          </div>

          <Row gutter={[32, 32]} className="mission-content">
            <Col xs={24} md={12} data-aos="fade-right">
              <div className="mission-card">
                <Title level={3}>Sứ mệnh</Title>
                <Paragraph>
                  Trao quyền cho người lao động Việt Nam phát triển sự nghiệp
                  bền vững thông qua việc cung cấp các giải pháp tư vấn chuyên
                  nghiệp, công cụ hiệu quả và kiến thức thực tiễn về thị trường
                  lao động.
                </Paragraph>
                <ul className="mission-list">
                  <li>
                    <CheckCircleOutlined /> Nâng cao năng lực cạnh tranh nghề
                    nghiệp
                  </li>
                  <li>
                    <CheckCircleOutlined /> Xây dựng cộng đồng hỗ trợ phát triển
                    sự nghiệp
                  </li>
                  <li>
                    <CheckCircleOutlined /> Chia sẻ kiến thức thực tiễn từ các
                    chuyên gia
                  </li>
                </ul>
              </div>
            </Col>
            <Col xs={24} md={12} data-aos="fade-left">
              <div className="vision-card">
                <Title level={3}>Tầm nhìn</Title>
                <Paragraph>
                  Trở thành đơn vị hàng đầu trong lĩnh vực tư vấn phát triển sự
                  nghiệp tại Việt Nam, tạo tác động tích cực đến 1 triệu người
                  lao động và góp phần nâng cao chất lượng nguồn nhân lực Việt
                  Nam trên thị trường lao động toàn cầu.
                </Paragraph>
                <ul className="vision-list">
                  <li>
                    <CheckCircleOutlined /> Mở rộng dịch vụ đến mọi tỉnh thành
                    trong nước
                  </li>
                  <li>
                    <CheckCircleOutlined /> Phát triển nền tảng công nghệ hỗ trợ
                    phát triển sự nghiệp
                  </li>
                  <li>
                    <CheckCircleOutlined /> Xây dựng mạng lưới đối tác doanh
                    nghiệp rộng khắp
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
              Giá trị cốt lõi
            </Title>
            <Paragraph className="section-description">
              Những giá trị định hình văn hóa và tiêu chuẩn dịch vụ của PATHWAY
            </Paragraph>
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
              Hành trình phát triển
            </Title>
            <Paragraph className="section-description">
              Những cột mốc quan trọng trong quá trình phát triển của PATHWAY
            </Paragraph>
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
                <Statistic title="Khách hàng" value={5000} suffix="+" />
              </div>
            </Col>
            <Col xs={24} sm={12} md={6} data-aos="fade-up" data-aos-delay="200">
              <div className="stat-card">
                <Statistic title="Chuyên gia" value={20} suffix="+" />
              </div>
            </Col>
            <Col xs={24} sm={12} md={6} data-aos="fade-up" data-aos-delay="300">
              <div className="stat-card">
                <Statistic title="Tỷ lệ hài lòng" value={95} suffix="%" />
              </div>
            </Col>
            <Col xs={24} sm={12} md={6} data-aos="fade-up" data-aos-delay="400">
              <div className="stat-card">
                <Statistic title="Đối tác doanh nghiệp" value={50} suffix="+" />
              </div>
            </Col>
          </Row>
        </div>
      </section>

      <section className="team-section">
        <div className="container">
          <div className="section-header text-center" data-aos="fade-up">
            <Title level={2} className="section-title">
              Đội ngũ của chúng tôi
            </Title>
            <Paragraph className="section-description">
              Những chuyên gia đam mê và tận tâm đằng sau thành công của PATHWAY
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
                    <a href="#" aria-label="LinkedIn">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                    <a href="#" aria-label="Email">
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
              Đối tác của chúng tôi
            </Title>
            <Paragraph className="section-description">
              PATHWAY hợp tác với các tổ chức hàng đầu để mang đến cơ hội nghề
              nghiệp tốt nhất
            </Paragraph>
          </div>

          <div
            className="partners-grid"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            {/* Partner logos */}
            {[
              "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png",
              "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/1667px-Apple_logo_black.svg.png",
              "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/2048px-Microsoft_logo.svg.png",
              "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png",
              "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png",
              "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Facebook_Logo_2023.png/600px-Facebook_Logo_2023.png",
              "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/768px-LinkedIn_logo_initials.png",
              "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Intel_logo_%282006%29.svg/1005px-Intel_logo_%282006%29.svg.png",
            ].map((logoUrl, index) => (
              <div key={index} className="partner-logo">
                <Image
                  src={logoUrl}
                  alt={`Partner ${index + 1}`}
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
              Thành tựu
            </Title>
            <Paragraph className="section-description">
              Những dấu ấn và công nhận trong hành trình phát triển của PATHWAY
            </Paragraph>
          </div>

          <Row gutter={[32, 32]} className="achievements-grid">
            <Col xs={24} md={8} data-aos="fade-up" data-aos-delay="100">
              <Card className="achievement-card">
                <div className="achievement-icon">
                  <TrophyOutlined />
                </div>
                <Title level={4}>Top 10 đơn vị tư vấn nghề nghiệp 2022</Title>
                <Paragraph>
                  Được bình chọn bởi Hiệp hội Doanh nghiệp TP.HCM
                </Paragraph>
              </Card>
            </Col>
            <Col xs={24} md={8} data-aos="fade-up" data-aos-delay="200">
              <Card className="achievement-card">
                <div className="achievement-icon">
                  <TrophyOutlined />
                </div>
                <Title level={4}>Startup tiêu biểu 2021</Title>
                <Paragraph>
                  Giải thưởng Startup Việt do VnExpress tổ chức
                </Paragraph>
              </Card>
            </Col>
            <Col xs={24} md={8} data-aos="fade-up" data-aos-delay="300">
              <Card className="achievement-card">
                <div className="achievement-icon">
                  <TrophyOutlined />
                </div>
                <Title level={4}>Doanh nghiệp vì cộng đồng 2023</Title>
                <Paragraph>
                  Ghi nhận đóng góp trong các hoạt động đào tạo miễn phí cho
                  sinh viên
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
              Chương trình cộng đồng
            </Title>
            <Paragraph className="section-description">
              PATHWAY luôn nỗ lực đóng góp cho cộng đồng qua nhiều hoạt động ý
              nghĩa
            </Paragraph>
          </div>

          <Row gutter={[32, 32]} className="programs-grid">
            <Col xs={24} lg={8} data-aos="fade-up" data-aos-delay="100">
              <div className="program-card">
                <div className="program-image">
                  <Image
                    src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070&auto=format&fit=crop"
                    alt="Workshop cho sinh viên"
                    width={350}
                    height={250}
                    className="rounded-image"
                  />
                </div>
                <Title level={4}>Workshop cho sinh viên</Title>
                <Paragraph>
                  Tổ chức hơn 50 buổi workshop miễn phí tại các trường đại học
                  trên toàn quốc, chia sẻ kiến thức và kỹ năng cho sinh viên sắp
                  ra trường.
                </Paragraph>
              </div>
            </Col>
            <Col xs={24} lg={8} data-aos="fade-up" data-aos-delay="200">
              <div className="program-card">
                <div className="program-image">
                  <Image
                    src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop"
                    alt="Học bổng PATHWAY"
                    width={350}
                    height={250}
                    className="rounded-image"
                  />
                </div>
                <Title level={4}>Học bổng PATHWAY</Title>
                <Paragraph>
                  Trao tặng 20 suất học bổng mỗi năm cho sinh viên có hoàn cảnh
                  khó khăn, bao gồm khóa đào tạo và cơ hội thực tập tại các đơn
                  vị đối tác.
                </Paragraph>
              </div>
            </Col>
            <Col xs={24} lg={8} data-aos="fade-up" data-aos-delay="300">
              <div className="program-card">
                <div className="program-image">
                  <Image
                    src="https://images.unsplash.com/photo-1544531585-9847b68c8c86?q=80&w=2070&auto=format&fit=crop"
                    alt="Hướng nghiệp vùng xa"
                    width={350}
                    height={250}
                    className="rounded-image"
                  />
                </div>
                <Title level={4}>Hướng nghiệp vùng xa</Title>
                <Paragraph>
                  Chương trình tư vấn hướng nghiệp miễn phí cho học sinh tại các
                  vùng sâu, vùng xa, giúp các em có định hướng nghề nghiệp rõ
                  ràng.
                </Paragraph>
              </div>
            </Col>
          </Row>
        </div>
      </section>

      <section className="cta-section" data-aos="fade-up">
        <div className="container">
          <div className="cta-content">
            <Title level={2}>Tham gia cùng PATHWAY</Title>
            <Paragraph>
              Cho dù bạn đang tìm kiếm hướng đi mới cho sự nghiệp hay muốn nâng
              cao vị thế chuyên môn, đội ngũ PATHWAY luôn sẵn sàng đồng hành và
              hỗ trợ bạn.
            </Paragraph>
            <div className="cta-buttons">
              <Button type="primary" size="large">
                Đặt lịch tư vấn
              </Button>
              <Button size="large">Liên hệ chúng tôi</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutPage;
