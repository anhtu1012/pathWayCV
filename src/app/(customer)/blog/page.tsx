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
import { useTranslations } from "next-intl";

const { Title, Paragraph } = Typography;
const { Search } = Input;
const { Option } = Select;

function BlogPage() {
  const t = useTranslations("BlogPage");
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  // Dữ liệu blog posts gốc, chúng ta sẽ lấy nội dung dịch từ JSON
  const originalBlogPosts = [
    {
      id: 1,
      postKey: "post1", // Key để tham chiếu đến JSON
      image: "/assets/image/dinh-huong-nghe-nghiep-som-de-thanh-cong.jpg",
      date: "12/05/2023", // Ngày tháng có thể không cần dịch, hoặc có định dạng riêng theo locale
      // author: "Nguyễn Văn A", // Sẽ lấy từ JSON
      category: "career",
      // tags: ["kỹ năng mềm", "công nghệ", "học tập suốt đời"], // Sẽ lấy từ JSON
      delay: 100,
    },
    {
      id: 2,
      postKey: "post2",
      image: "/assets/image/cv.jpg",
      date: "05/04/2023",
      category: "cv",
      delay: 200,
    },
    {
      id: 3,
      postKey: "post3",
      image:
        "https://images.unsplash.com/photo-1573497161161-c3e73707e25c?w=800",
      date: "23/03/2023",
      category: "interview",
      delay: 300,
    },
    {
      id: 4,
      postKey: "post4",
      image: "/assets/image/163055607_linkedin-la-gi.png",
      date: "17/02/2023",
      category: "personal-branding",
      delay: 400,
    },
    {
      id: 5,
      postKey: "post5",
      image:
        "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800",
      date: "08/01/2023",
      category: "salary",
      delay: 500,
    },
    {
      id: 6,
      postKey: "post6",
      image:
        "https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?w=800",
      date: "29/12/2022",
      category: "career-change",
      delay: 600,
    },
  ];

  const blogPosts = originalBlogPosts.map(post => {
    const translatedTitle = t(`blogPosts.${post.postKey}.title`);
    const translatedExcerpt = t(`blogPosts.${post.postKey}.excerpt`);
    const translatedAuthor = t(`blogPosts.${post.postKey}.author`);
    const translatedTags = [
        t(`blogPosts.${post.postKey}.tag1`),
        t(`blogPosts.${post.postKey}.tag2`),
        t(`blogPosts.${post.postKey}.tag3`),
    ].filter(tag => tag && !tag.startsWith(`blogPosts.${post.postKey}.tag`)); // Lọc bỏ key path nếu không có bản dịch

    return {
      ...post,
      title: translatedTitle,
      excerpt: translatedExcerpt,
      author: translatedAuthor,
      tags: translatedTags,
    };
  });


  const filteredPosts =
    filter === "all"
      ? blogPosts
      : blogPosts.filter((post) => post.category === filter);

  const filterOptions = [
    { value: "all", labelKey: "filters.allTopics" },
    { value: "career", labelKey: "filters.career" },
    { value: "cv", labelKey: "filters.cv" },
    { value: "interview", labelKey: "filters.interview" },
    { value: "personal-branding", labelKey: "filters.personalBranding" },
    { value: "salary", labelKey: "filters.salary" },
    { value: "career-change", labelKey: "filters.careerChange" },
  ];

  return (
    <div className="blog-page">
      <PageBanner
        title={t("pageBanner.title")}
        subtitle={t("pageBanner.subtitle")}
      />

      <section className="blog-content">
        <div className="container">
          <div className="blog-filters" data-aos="fade-up">
            <div className="search-container">
              <Search
                placeholder={t("filters.searchPlaceholder")}
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
                {filterOptions.map(option => (
                  <Option key={option.value} value={option.value}>{t(option.labelKey)}</Option>
                ))}
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
                    <Paragraph className="blog-excerpt" ellipsis={{ rows: 3 }}>
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
            <Title level={2}>{t("subscribeSection.title")}</Title>
            <Paragraph>
              {t("subscribeSection.description")}
            </Paragraph>
            <div className="subscribe-form">
              <Input
                placeholder={t("subscribeSection.emailPlaceholder")}
                size="large"
                style={{ width: "70%" }}
              />
              <Button type="primary" size="large">
                {t("subscribeSection.subscribeButton")}
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default BlogPage;