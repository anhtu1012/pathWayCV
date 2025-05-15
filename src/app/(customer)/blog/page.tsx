"use client";

import React, { useEffect, useState } from "react";
import {
  Typography,
  Card,
  Row,
  Col,
  Tag,
  Input,
  Pagination,
  Space,
  Select,
  Button,
} from "antd";
import {
  SearchOutlined,
  ClockCircleOutlined,
  UserOutlined,
} from "@ant-design/icons";
import Image from "next/image";
import Link from "next/link";
import PageBanner from "@/components/common/PageBanner";
import AOS from "aos";
import "./blog.scss";

const { Title, Paragraph } = Typography;
const { Search } = Input;
const { Option } = Select;

function BlogPage() {
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  const blogPosts = [
    {
      id: 1,
      title: "10 kỹ năng cần thiết cho sự nghiệp trong thời đại số",
      excerpt:
        "Khám phá những kỹ năng quan trọng mà nhà tuyển dụng đang tìm kiếm trong thời đại công nghệ số hiện nay.",
      image: "/assets/image/dinh-huong-nghe-nghiep-som-de-thanh-cong.jpg",
      date: "12/05/2023",
      author: "Nguyễn Văn A",
      category: "career",
      tags: ["kỹ năng mềm", "công nghệ", "học tập suốt đời"],
      delay: 100,
    },
    {
      id: 2,
      title: "Làm thế nào để CV của bạn vượt qua phần mềm ATS?",
      excerpt:
        "Hướng dẫn chi tiết giúp CV của bạn vượt qua các phần mềm quét và lọc hồ sơ tự động của nhà tuyển dụng.",
      image: "/assets/image/cv.jpg",
      date: "05/04/2023",
      author: "Trần Thị B",
      category: "cv",
      tags: ["ATS", "CV", "tuyển dụng"],
      delay: 200,
    },
    {
      id: 3,
      title: "5 sai lầm phổ biến trong phỏng vấn xin việc",
      excerpt:
        "Những lỗi thường gặp có thể khiến bạn mất cơ hội việc làm và cách khắc phục hiệu quả.",
      image:
        "https://images.unsplash.com/photo-1573497161161-c3e73707e25c?w=800",
      date: "23/03/2023",
      author: "Lê Văn C",
      category: "interview",
      tags: ["phỏng vấn", "kỹ năng giao tiếp", "chuẩn bị"],
      delay: 300,
    },
    {
      id: 4,
      title: "Xây dựng thương hiệu cá nhân trên LinkedIn",
      excerpt:
        "Chiến lược toàn diện để tạo dựng và phát triển hình ảnh chuyên nghiệp trên mạng xã hội việc làm hàng đầu.",
      image: "/assets/image/163055607_linkedin-la-gi.png",
      date: "17/02/2023",
      author: "Phạm Thị D",
      category: "personal-branding",
      tags: ["LinkedIn", "mạng xã hội", "thương hiệu cá nhân"],
      delay: 400,
    },
    {
      id: 5,
      title: "Cách đàm phán lương hiệu quả",
      excerpt:
        "Những chiến lược và kỹ thuật giúp bạn tự tin đàm phán mức lương xứng đáng với năng lực của mình.",
      image:
        "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800",
      date: "08/01/2023",
      author: "Vũ Hoàng E",
      category: "salary",
      tags: ["đàm phán", "lương", "giá trị bản thân"],
      delay: 500,
    },
    {
      id: 6,
      title: "Chuyển đổi nghề nghiệp ở tuổi 30+: Không bao giờ là quá muộn",
      excerpt:
        "Cẩm nang hướng dẫn cho những người muốn thay đổi sự nghiệp khi đã ở độ tuổi trưởng thành.",
      image:
        "https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?w=800",
      date: "29/12/2022",
      author: "Nguyễn Thị F",
      category: "career-change",
      tags: ["chuyển nghề", "học kỹ năng mới", "định hướng"],
      delay: 600,
    },
  ];

  const filteredPosts =
    filter === "all"
      ? blogPosts
      : blogPosts.filter((post) => post.category === filter);

  return (
    <div className="blog-page">
      <PageBanner
        title="Blog"
        subtitle="Kiến thức, chia sẻ và hướng dẫn phát triển sự nghiệp từ đội ngũ chuyên gia của PATHWAY"
      />

      <section className="blog-content">
        <div className="container">
          <div className="blog-filters" data-aos="fade-up">
            <div className="search-container">
              <Search
                placeholder="Tìm kiếm bài viết..."
                enterButton={<SearchOutlined />}
                size="large"
              />
            </div>
            <div className="filter-container">
              <Select
                defaultValue="all"
                style={{ width: 180 }}
                size="large"
                onChange={(value) => setFilter(value)}
              >
                <Option value="all">Tất cả chủ đề</Option>
                <Option value="career">Sự nghiệp</Option>
                <Option value="cv">CV & Hồ sơ</Option>
                <Option value="interview">Phỏng vấn</Option>
                <Option value="personal-branding">Thương hiệu cá nhân</Option>
                <Option value="salary">Đàm phán lương</Option>
                <Option value="career-change">Chuyển đổi nghề nghiệp</Option>
              </Select>
            </div>
          </div>

          <Row gutter={[32, 40]} className="blog-grid">
            {filteredPosts.map((post) => (
              <Col xs={24} md={12} lg={8} key={post.id}>
                <Link href={`/blog/${post.id}`} className="blog-card-link">
                  <Card
                    className="blog-card"
                    cover={
                      <div className="blog-image-container">
                        <Image
                          src={post.image}
                          alt={post.title}
                          fill
                          style={{ objectFit: "cover" }}
                          className="blog-image"
                        />
                      </div>
                    }
                    bordered={false}
                    data-aos="fade-up"
                    data-aos-delay={post.delay}
                  >
                    <div className="blog-meta">
                      <Space>
                        <ClockCircleOutlined /> <span>{post.date}</span>
                        <UserOutlined /> <span>{post.author}</span>
                      </Space>
                    </div>

                    <Title level={4} className="blog-title">
                      {post.title}
                    </Title>
                    <Paragraph className="blog-excerpt">
                      {post.excerpt}
                    </Paragraph>

                    <div className="blog-tags">
                      {post.tags.map((tag, index) => (
                        <Tag key={index} color="blue">
                          {tag}
                        </Tag>
                      ))}
                    </div>
                  </Card>
                </Link>
              </Col>
            ))}
          </Row>

          <div className="blog-pagination" data-aos="fade-up">
            <Pagination defaultCurrent={1} total={50} showSizeChanger={false} />
          </div>
        </div>
      </section>

      <section className="subscribe-section">
        <div className="container">
          <div className="subscribe-content" data-aos="fade-up">
            <Title level={2}>Đăng ký nhận bản tin</Title>
            <Paragraph>
              Nhận các bài viết mới nhất và lời khuyên từ chuyên gia PATHWAY
              hàng tuần
            </Paragraph>
            <div className="subscribe-form">
              <Input
                placeholder="Email của bạn"
                size="large"
                style={{ width: "70%" }}
              />
              <Button type="primary" size="large">
                Đăng ký
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default BlogPage;
