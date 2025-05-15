"use client";

import React, { useState } from "react";
import { Card, Row, Col, Typography, Avatar, Space, Tag, Modal } from "antd";
import { useTheme } from "@/styles/theme";
import {
  LikeOutlined,
  CommentOutlined,
  ShareAltOutlined,
  UserOutlined,
} from "@ant-design/icons";

const { Title, Paragraph } = Typography;

interface Post {
  id: number;
  title: string;
  author: string;
  likes: number;
  comments: number;
  shares: number;
  time: string;
  image: string;
  content: string;
  avatar: string;
}

const postCards: Post[] = [
  {
    id: 1,
    title: "10 xu hướng công nghệ mới nhất năm 2024",
    author: "Tech Insights",
    likes: 1200,
    comments: 89,
    shares: 45,
    time: "3 ngày trước",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800",
    content:
      "Công nghệ đang phát triển với tốc độ chóng mặt. Hãy cùng điểm qua những xu hướng công nghệ nổi bật nhất trong năm 2024...",
    avatar: "T",
  },
  {
    id: 2,
    title: "Hướng dẫn React toàn tập - Từ cơ bản đến nâng cao",
    author: "JS Masters",
    likes: 856,
    comments: 123,
    shares: 67,
    time: "1 tuần trước",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800",
    content:
      "React là một trong những thư viện JavaScript phổ biến nhất hiện nay. Bài viết này sẽ hướng dẫn bạn từ những khái niệm cơ bản...",
    avatar: "J",
  },
  {
    id: 3,
    title: "Học Next.js trong 1 giờ - Tạo ứng dụng web hiện đại",
    author: "Frontend Hero",
    likes: 423,
    comments: 56,
    shares: 34,
    time: "2 tuần trước",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800",
    content:
      "Next.js là một framework React mạnh mẽ giúp bạn xây dựng các ứng dụng web hiện đại một cách nhanh chóng và hiệu quả...",
    avatar: "F",
  },
  {
    id: 4,
    title: "Kiến trúc Microservices dành cho lập trình viên",
    author: "Cloud Architects",
    likes: 302,
    comments: 45,
    shares: 28,
    time: "1 tháng trước",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800",
    content:
      "Microservices là một kiến trúc phần mềm cho phép xây dựng ứng dụng như một tập hợp các dịch vụ nhỏ, độc lập...",
    avatar: "C",
  },
  {
    id: 5,
    title: "Bảo mật web: Những điều mọi developer cần biết",
    author: "Security Guru",
    likes: 198,
    comments: 32,
    shares: 19,
    time: "3 tuần trước",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800",
    content:
      "Bảo mật web là một trong những khía cạnh quan trọng nhất trong phát triển ứng dụng hiện đại...",
    avatar: "S",
  },
  {
    id: 6,
    title: "TypeScript cho người mới bắt đầu - Cơ bản và thực hành",
    author: "Code Academy",
    likes: 512,
    comments: 78,
    shares: 42,
    time: "2 tháng trước",
    image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800",
    content:
      "TypeScript là một phiên bản mở rộng của JavaScript, thêm vào các tính năng mạnh mẽ như static typing...",
    avatar: "C",
  },
];

function Page() {
  const theme = useTheme();
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);

  const handlePostClick = (post: Post) => {
    setSelectedPost(post);
  };

  const handleCloseModal = () => {
    setSelectedPost(null);
  };

  return (
    <div>
      <Title level={4}>Bài viết mới nhất</Title>

      <div style={{ marginBottom: "20px" }}>
        <Space size={[8, 16]} wrap>
          <Tag
            style={{
              borderRadius: "16px",
              padding: "5px 12px",
              background: theme.primaryColor,
              color: "white",
              border: "none",
            }}
          >
            Tất cả
          </Tag>
          <Tag
            style={{
              borderRadius: "16px",
              padding: "5px 12px",
            }}
          >
            Công nghệ
          </Tag>
          <Tag
            style={{
              borderRadius: "16px",
              padding: "5px 12px",
            }}
          >
            Lập trình
          </Tag>
          <Tag
            style={{
              borderRadius: "16px",
              padding: "5px 12px",
            }}
          >
            Web Development
          </Tag>
        </Space>
      </div>

      <Row gutter={[16, 16]}>
        {postCards.map((post) => (
          <Col xs={24} sm={12} md={8} key={post.id}>
            <Card
              bordered={false}
              bodyStyle={{ padding: 12 }}
              cover={
                <div style={{ position: "relative" }}>
                  <img
                    src={post.image}
                    alt={post.title}
                    style={{
                      width: "100%",
                      height: 200,
                      objectFit: "cover",
                      borderRadius: "8px",
                    }}
                  />
                </div>
              }
              hoverable
              className="post-card"
              onClick={() => handlePostClick(post)}
            >
              <div style={{ display: "flex", gap: 12 }}>
                <Avatar icon={<UserOutlined />}>{post.avatar}</Avatar>
                <div style={{ flex: 1 }}>
                  <Typography.Title
                    level={5}
                    style={{ marginTop: 0, marginBottom: 4 }}
                  >
                    {post.title}
                  </Typography.Title>
                  <Typography.Text type="secondary">
                    {post.author}
                  </Typography.Text>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      marginTop: 12,
                      color: "var(--text-color-secondary)",
                    }}
                  >
                    <Space>
                      <LikeOutlined /> {post.likes}
                      <CommentOutlined /> {post.comments}
                      <ShareAltOutlined /> {post.shares}
                    </Space>
                    <span>{post.time}</span>
                  </div>
                </div>
              </div>
            </Card>
          </Col>
        ))}
      </Row>

      <Modal
        open={!!selectedPost}
        onCancel={handleCloseModal}
        footer={null}
        width={800}
        className="post-detail-modal"
      >
        {selectedPost && (
          <div>
            <img
              src={selectedPost.image}
              alt={selectedPost.title}
              style={{
                width: "100%",
                height: 400,
                objectFit: "cover",
                borderRadius: "8px",
                marginBottom: 16,
              }}
            />
            <Title level={3}>{selectedPost.title}</Title>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: 16,
              }}
            >
              <Avatar icon={<UserOutlined />} style={{ marginRight: 8 }}>
                {selectedPost.avatar}
              </Avatar>
              <div>
                <div style={{ fontWeight: "bold" }}>{selectedPost.author}</div>
                <div style={{ color: "var(--text-color-secondary)" }}>
                  {selectedPost.time}
                </div>
              </div>
            </div>
            <Paragraph>{selectedPost.content}</Paragraph>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: 24,
                paddingTop: 16,
                borderTop: "1px solid var(--border-color)",
              }}
            >
              <Space size="large">
                <Space>
                  <LikeOutlined /> {selectedPost.likes}
                </Space>
                <Space>
                  <CommentOutlined /> {selectedPost.comments}
                </Space>
                <Space>
                  <ShareAltOutlined /> {selectedPost.shares}
                </Space>
              </Space>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
}

export default Page;
