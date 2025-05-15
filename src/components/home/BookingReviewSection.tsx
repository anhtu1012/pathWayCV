/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { Button, Input, Typography, Form, message } from "antd";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import AOS from "aos";

const { Title, Paragraph } = Typography;
const { TextArea } = Input;

const BookingReviewSection = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    AOS.refresh();
  }, []);

  const handleSubmit = async (values: any) => {
    setLoading(true);
    try {
      // Here you would typically send the form data to your API
      console.log("Form submitted:", values);

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      message.success("Yêu cầu của bạn đã được gửi thành công!");
      form.resetFields();
      setSubmitted(true);
    } catch (error) {
      console.error("Submission error:", error);
      message.error("Có lỗi xảy ra. Vui lòng thử lại sau.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="booking-section">
      <div className="section-content">
        <div className="booking-logo" data-aos="fade-up" data-aos-delay="100">
          <Image
            src="/assets/image/logo.png"
            alt="PATHWAY Logo"
            width={150}
            height={60}
          />
        </div>
        <Title
          level={2}
          className="section-title"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Đặt lịch đánh giá CV & Tư vấn tìm việc
        </Title>
        <Paragraph
          className="booking-description"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          Bạn đã sẵn sàng nâng cao sự nghiệp của mình? Gửi CV để nhận đánh giá
          chuyên gia hoặc đặt lịch tư vấn cá nhân với các chuyên gia tư vấn nghề
          nghiệp của PATHWAY. Chúng tôi sẽ giúp bạn nổi bật giữa đám đông và
          giành được công việc mơ ước.
        </Paragraph>

        <div className="booking-form" data-aos="fade-up" data-aos-delay="400">
          {submitted ? (
            <div className="success-message" data-aos="fade-in">
              <Title level={4}>Cảm ơn bạn đã liên hệ!</Title>
              <Paragraph>
                Chúng tôi sẽ phản hồi trong vòng 24 giờ làm việc.
              </Paragraph>
              <Button type="primary" onClick={() => setSubmitted(false)}>
                Gửi yêu cầu khác
              </Button>
            </div>
          ) : (
            <Form form={form} onFinish={handleSubmit} layout="vertical">
              <div className="form-row">
                <Form.Item
                  name="fullName"
                  rules={[
                    { required: true, message: "Vui lòng nhập họ và tên" },
                  ]}
                >
                  <Input className="form-input" placeholder="Họ và tên" />
                </Form.Item>
                <Form.Item
                  name="email"
                  rules={[
                    { required: true, message: "Vui lòng nhập email" },
                    { type: "email", message: "Email không hợp lệ" },
                  ]}
                >
                  <Input className="form-input" placeholder="Email" />
                </Form.Item>
              </div>
              <div className="form-row">
                <Form.Item
                  name="phone"
                  rules={[
                    { required: true, message: "Vui lòng nhập số điện thoại" },
                  ]}
                >
                  <Input className="form-input" placeholder="Số điện thoại" />
                </Form.Item>
                <Form.Item
                  name="position"
                  rules={[
                    {
                      required: true,
                      message: "Vui lòng nhập vị trí hiện tại",
                    },
                  ]}
                >
                  <Input className="form-input" placeholder="Vị trí hiện tại" />
                </Form.Item>
              </div>
              <Form.Item
                name="description"
                rules={[{ required: true, message: "Vui lòng nhập mô tả" }]}
              >
                <TextArea
                  className="form-input ant-input-textarea"
                  placeholder="Mô tả ngắn gọn về mục tiêu nghề nghiệp và cách chúng tôi có thể giúp đỡ"
                  rows={4}
                />
              </Form.Item>
              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  className="submit-btn"
                  loading={loading}
                >
                  {loading ? "Đang gửi..." : "Gửi yêu cầu"}
                </Button>
              </Form.Item>
            </Form>
          )}
        </div>
      </div>
      <div className="floating-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
        <div className="shape shape-4"></div>
      </div>
    </section>
  );
};

export default BookingReviewSection;
