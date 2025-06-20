/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import {
  Modal,
  Typography,
  Row,
  Col,
  Tag,
  Timeline,
  Card,
  Empty,
  Space,
} from "antd";
import {
  CheckCircleOutlined,
  ClockCircleOutlined,
  CloseCircleOutlined,
  CalendarOutlined,
} from "@ant-design/icons";
import dayjs from "dayjs";
import { BookingHistoryItem } from "@/dtos/profile/profile.dto";

const { Title, Text, Paragraph } = Typography;

interface Props {
  visible: boolean;
  onClose: () => void;
  booking: BookingHistoryItem | null;
}

const getStatusTag = (status: string) => {
  switch (status) {
    case "completed":
      return <Tag icon={<CheckCircleOutlined />} color="success">Hoàn thành</Tag>;
    case "pending":
      return <Tag icon={<ClockCircleOutlined />} color="processing">Chờ xử lý</Tag>;
    case "in-progress":
      return <Tag icon={<CalendarOutlined />} color="warning">Đang xử lý</Tag>;
    case "cancelled":
      return <Tag icon={<CloseCircleOutlined />} color="error">Đã huỷ</Tag>;
    default:
      return <Tag color="default">{status}</Tag>;
  }
};

const BookingDetailModal: React.FC<Props> = ({ visible, onClose, booking }) => {
  return (
    <Modal
      open={visible}
      onCancel={onClose}
      footer={null}
      centered
      title={<Title level={4}>Chi tiết đặt lịch</Title>}
      width={700}
    >
      {booking ? (
        <div className="booking-detail">
          <Row gutter={[16, 16]}>
            <Col span={12}>
              <Text strong>Gói dịch vụ:</Text>
              <br />
              <Text>{booking.planName}</Text>
            </Col>
            <Col span={12}>
              <Text strong>Giá trị:</Text>
              <br />
              <Text>{booking.totalAmount.toLocaleString()}đ</Text>
            </Col>
            <Col span={12}>
              <Text strong>Ngày đặt:</Text>
              <br />
              <Text>{dayjs(booking.createdAt).format("DD/MM/YYYY HH:mm")}</Text>
            </Col>
            <Col span={12}>
              <Text strong>Trạng thái:</Text>
              <br />
              {getStatusTag(booking.status)}
            </Col>
            <Col span={24}>
              <Text strong>Chuyên gia:</Text>
              <br />
              <Text>{typeof booking.mentor === "object" ? booking?.mentor?.name : booking.mentor || "Chưa có"}</Text>
            </Col>
          </Row>

          <div style={{ marginTop: 24 }}>
            <Title level={5}>Hoạt động</Title>
            {booking.activities && booking.activities.length > 0 ? (
              <Timeline
                mode="left"
                items={booking.activities.map((activity) => ({
                  label: dayjs(activity.startAt).format("DD/MM/YYYY HH:mm"),
                  children: (
                    <Card size="small">
                      <Space style={{ justifyContent: "space-between", width: "100%" }}>
                        <Text strong>{activity.name}</Text>
                        {getStatusTag(activity.status)}
                      </Space>
                      <Paragraph style={{ marginTop: 8 }}>{activity.content}</Paragraph>
                      <div>
                        <Text strong>Thời gian:</Text>{" "}
                        {dayjs(activity.startAt).format("DD/MM/YYYY HH:mm")} - {dayjs(activity.endAt).format("DD/MM/YYYY HH:mm")}
                      </div>
                      {activity.meetingLink && (
                        <div>
                          <Text strong>Link họp:</Text>{" "}
                          <a href={activity.meetingLink} target="_blank" rel="noopener noreferrer">
                            {activity.meetingLink}
                          </a>
                        </div>
                      )}
                      {activity.note && (
                        <div>
                          <Text strong>Ghi chú:</Text> {activity.note}
                        </div>
                      )}
                    </Card>
                  ),
                }))}
              />
            ) : (
              <Empty description="Chưa có hoạt động nào" />
            )}
          </div>
        </div>
      ) : (
        <Empty description="Không có dữ liệu" />
      )}
    </Modal>
  );
};

export default BookingDetailModal;
