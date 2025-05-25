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

const { Title, Paragraph } = Typography;

function FeaturedProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("all");

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  const projects = [
    {
      id: 1,
      title: "Chuyển đổi nghề nghiệp thành công cho 200 nhân viên ngân hàng",
      description:
        "Dự án tư vấn và huấn luyện chuyển đổi nghề nghiệp cho các nhân viên của một ngân hàng sau tái cấu trúc. Tỷ lệ tìm được việc làm mới trong vòng 3 tháng đạt 89%.",
      image: "/assets/image/dinh-huong-nghe-nghiep-som-de-thanh-cong.jpg",
      client: "Ngân hàng TMCP Phương Đông",
      category: "corporate",
      date: "Tháng 6 - Tháng 12, 2022",
      tags: ["Chuyển đổi nghề nghiệp", "Huấn luyện việc làm", "Phát triển CV"],
      results: [
        "89% học viên tìm được việc làm mới trong vòng 3 tháng",
        "95% báo cáo hài lòng với chương trình",
        "78% tăng mức lương so với vị trí cũ",
      ],
      delay: 100,
    },
    {
      id: 2,
      title: "Xây dựng chiến lược thương hiệu cá nhân cho đội ngũ lãnh đạo",
      description:
        "Dự án tư vấn và xây dựng thương hiệu cá nhân cho 25 lãnh đạo cấp cao của một tập đoàn đa quốc gia, giúp họ tăng cường hiện diện trên LinkedIn và trở thành thought leaders trong ngành.",
      image: "/assets/image/163055607_linkedin-la-gi.png",
      client: "Tập đoàn Samsung Việt Nam",
      category: "executive",
      date: "Tháng 3 - Tháng 8, 2022",
      tags: ["Thương hiệu cá nhân", "LinkedIn", "Lãnh đạo tư tưởng"],
      results: [
        "Tăng kết nối LinkedIn trung bình 217% sau 6 tháng",
        "15 lãnh đạo được mời làm diễn giả tại các sự kiện ngành",
        "Tăng 320% lượng engagement trên các bài đăng",
      ],
      delay: 200,
    },
    {
      id: 3,
      title:
        "Chương trình đào tạo kỹ năng phỏng vấn cho sinh viên sắp tốt nghiệp",
      description:
        "Dự án hợp tác với trường đại học tổ chức chuỗi workshop về kỹ năng phỏng vấn, chuẩn bị CV và định hướng nghề nghiệp cho 500 sinh viên năm cuối.",
      image:
        "https://images.unsplash.com/photo-1573497161161-c3e73707e25c?w=800",
      client: "Đại học Bách Khoa TP.HCM",
      category: "education",
      date: "Tháng 4 - Tháng 5, 2023",
      tags: ["Đào tạo sinh viên", "Kỹ năng phỏng vấn", "Chuẩn bị CV"],
      results: [
        "500+ sinh viên được đào tạo qua 10 workshop",
        "72% sinh viên tìm được việc làm trong vòng 2 tháng sau tốt nghiệp",
        "Điểm hài lòng trung bình 4.8/5",
      ],
      delay: 300,
    },
    {
      id: 4,
      title: "Tái cấu trúc bộ phận HR và quy trình tuyển dụng",
      description:
        "Dự án tư vấn và hỗ trợ tái cấu trúc bộ phận nhân sự, xây dựng quy trình tuyển dụng mới và đào tạo đội ngũ tuyển dụng theo các tiêu chuẩn quốc tế.",
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800",
      client: "Công ty Cổ phần FPT",
      category: "corporate",
      date: "Tháng 1 - Tháng 5, 2022",
      tags: ["Tái cấu trúc HR", "Quy trình tuyển dụng", "Đào tạo nhân sự"],
      results: [
        "Giảm 35% thời gian tuyển dụng",
        "Tăng 28% tỷ lệ giữ chân nhân viên sau 1 năm",
        "Chỉ số hài lòng của ứng viên tăng 42%",
      ],
      delay: 400,
    },
    {
      id: 5,
      title: "Xây dựng bộ công cụ đánh giá năng lực cho ngành công nghệ",
      description:
        "Phát triển bộ công cụ đánh giá năng lực toàn diện cho các vị trí công nghệ thông tin, bao gồm các bài test kỹ thuật, phỏng vấn hành vi và đánh giá văn hóa phù hợp.",
      image:
        "https://images.unsplash.com/photo-1581092160607-ee22732f9e56?w=800",
      client: "Tập đoàn VNG",
      category: "tools",
      date: "Tháng 9, 2022 - Tháng 2, 2023",
      tags: ["Đánh giá năng lực", "Công nghệ thông tin", "Tuyển dụng"],
      results: [
        "Giảm 47% tỷ lệ tuyển dụng sai người",
        "Tăng 23% chất lượng ứng viên vào vòng phỏng vấn cuối",
        "Tiết kiệm 30% chi phí tuyển dụng",
      ],
      delay: 500,
    },
    {
      id: 6,
      title: "Chương trình huấn luyện lãnh đạo tài năng trẻ",
      description:
        "Chương trình 6 tháng nhằm phát triển 30 lãnh đạo tài năng trẻ thông qua coaching 1-1, seminar và dự án thực tế, giúp họ chuẩn bị cho các vị trí quản lý cao hơn.",
      image:
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800",
      client: "Unilever Việt Nam",
      category: "executive",
      date: "Tháng 7, 2022 - Tháng 1, 2023",
      tags: ["Phát triển lãnh đạo", "Coaching", "Quản lý tài năng"],
      results: [
        "87% học viên được thăng chức trong vòng 12 tháng",
        "Tăng 42% chỉ số engagement của nhóm tài năng",
        "Giảm 35% tỷ lệ nghỉ việc ở nhóm high potential",
      ],
      delay: 600,
    },
  ];

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <div className="projects-page">
      <PageBanner
        title="Dự Án Nổi Bật"
        subtitle="Khám phá những dự án tiêu biểu đã giúp khách hàng của chúng tôi đạt được mục tiêu nghề nghiệp"
      />

      <section className="projects-content">
        <div className="container">
          <div className="category-tabs" data-aos="fade-up">
            <Tabs
              activeKey={activeCategory}
              onChange={(key) => setActiveCategory(key)}
              centered
              items={[
                {
                  key: "all",
                  label: "Tất cả dự án",
                },
                {
                  key: "corporate",
                  label: "Doanh nghiệp",
                },
                {
                  key: "executive",
                  label: "Lãnh đạo cấp cao",
                },
                {
                  key: "education",
                  label: "Giáo dục",
                },
                {
                  key: "tools",
                  label: "Công cụ & Phương pháp",
                },
              ]}
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
                            <strong>Khách hàng:</strong> {project.client}
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
                            <TrophyOutlined /> Kết quả đạt được
                          </Title>
                          <ul>
                            {project.results.map((result, index) => (
                              <li key={index}>{result}</li>
                            ))}
                          </ul>
                        </div>

                        <Button type="primary" className="details-button">
                          Xem chi tiết <ArrowRightOutlined />
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
              <Title level={4}>Không có dự án nào trong danh mục này.</Title>
              <Button type="primary" onClick={() => setActiveCategory("all")}>
                Xem tất cả dự án
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
                <div className="stat-number">100+</div>
                <div className="stat-title">Dự án đã hoàn thành</div>
                <Paragraph className="stat-desc">
                  Dự án tư vấn và đào tạo cho các đối tác doanh nghiệp và cá
                  nhân
                </Paragraph>
              </div>
            </Col>

            <Col xs={24} md={8} data-aos="fade-up" data-aos-delay="200">
              <div className="stat-card">
                <div className="stat-number">87%</div>
                <div className="stat-title">Khách hàng quay lại</div>
                <Paragraph className="stat-desc">
                  Tỷ lệ khách hàng tiếp tục sử dụng dịch vụ của chúng tôi cho
                  các dự án tiếp theo
                </Paragraph>
              </div>
            </Col>

            <Col xs={24} md={8} data-aos="fade-up" data-aos-delay="300">
              <div className="stat-card">
                <div className="stat-number">20+</div>
                <div className="stat-title">Ngành nghề đã phục vụ</div>
                <Paragraph className="stat-desc">
                  Kinh nghiệm làm việc đa dạng với nhiều lĩnh vực từ công nghệ
                  đến tài chính, sản xuất
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
            Khách hàng nói gì về chúng tôi
          </Title>

          <div className="testimonial-grid">
            <Row gutter={[32, 32]}>
              <Col xs={24} md={8} data-aos="fade-up" data-aos-delay="100">
                <Card className="testimonial-card">
                  <div className="quote-icon"></div>
                  <Paragraph className="testimonial-text">
                    PATHWAY đã giúp đội ngũ HR của chúng tôi xây dựng quy trình
                    tuyển dụng hiệu quả hơn. Chúng tôi đã giảm 40% thời gian tìm
                    kiếm ứng viên phù hợp và tăng chất lượng tuyển dụng.
                  </Paragraph>
                  <div className="testimonial-author">
                    <div className="author-avatar">
                      <Image
                        src="https://randomuser.me/api/portraits/women/43.jpg"
                        alt="Trần Thị Minh"
                        width={60}
                        height={60}
                      />
                    </div>
                    <div className="author-info">
                      <div className="author-name">Trần Thị Minh</div>
                      <div className="author-title">
                        Giám đốc Nhân sự, FPT Software
                      </div>
                    </div>
                  </div>
                </Card>
              </Col>

              <Col xs={24} md={8} data-aos="fade-up" data-aos-delay="200">
                <Card className="testimonial-card">
                  <div className="quote-icon"></div>
                  <Paragraph className="testimonial-text">
                    Chương trình coaching của PATHWAY đã giúp tôi rõ ràng hơn về
                    định hướng phát triển và xây dựng thương hiệu cá nhân hiệu
                    quả. Nhờ đó, tôi đã nhận được vị trí mong muốn tại một công
                    ty đa quốc gia.
                  </Paragraph>
                  <div className="testimonial-author">
                    <div className="author-avatar">
                      <Image
                        src="https://randomuser.me/api/portraits/men/32.jpg"
                        alt="Nguyễn Văn Hưng"
                        width={60}
                        height={60}
                      />
                    </div>
                    <div className="author-info">
                      <div className="author-name">Nguyễn Văn Hưng</div>
                      <div className="author-title">
                        Marketing Director, Unilever
                      </div>
                    </div>
                  </div>
                </Card>
              </Col>

              <Col xs={24} md={8} data-aos="fade-up" data-aos-delay="300">
                <Card className="testimonial-card">
                  <div className="quote-icon"></div>
                  <Paragraph className="testimonial-text">
                    Tôi rất ấn tượng với phương pháp làm việc chuyên nghiệp của
                    PATHWAY. Các workshop về kỹ năng phỏng vấn đã mang lại giá
                    trị thiết thực cho sinh viên của chúng tôi, giúp họ tự tin
                    hơn khi bước vào thị trường lao động.
                  </Paragraph>
                  <div className="testimonial-author">
                    <div className="author-avatar">
                      <Image
                        src="https://randomuser.me/api/portraits/women/68.jpg"
                        alt="Lê Thị Hương"
                        width={60}
                        height={60}
                      />
                    </div>
                    <div className="author-info">
                      <div className="author-name">Lê Thị Hương</div>
                      <div className="author-title">
                        Trưởng phòng Hỗ trợ SV, ĐH Bách Khoa
                      </div>
                    </div>
                  </div>
                </Card>
              </Col>
            </Row>
          </div>
        </div>
      </section>

      <section className="cta-section" data-aos="fade-up">
        <div className="container">
          <div className="cta-content" data-aos="zoom-in">
            <Title level={2}>Hãy cho chúng tôi biết về dự án của bạn</Title>
            <Paragraph className="cta-paragraph">
              Chúng tôi sẵn sàng lắng nghe và đề xuất giải pháp phù hợp với nhu
              cầu cụ thể của doanh nghiệp hoặc cá nhân
            </Paragraph>
            <Space size={20}>
              <Button type="primary" size="large" className="cta-primary-btn">
                Liên hệ ngay
              </Button>
              <Button size="large" className="cta-secondary-btn">Xem thêm dịch vụ</Button>
            </Space>
          </div>
        </div>
      </section>
    </div>
  );
}

export default FeaturedProjectsPage;
