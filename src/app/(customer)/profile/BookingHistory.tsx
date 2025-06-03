import React, { useState, useEffect } from "react";
import {
  Table,
  Tag,
  Button,
  Empty,
  Typography,
  Tooltip,
  Space,
  Grid,
} from "antd";
import {
  EyeOutlined,
  CheckCircleOutlined,
  ClockCircleOutlined,
  CloseCircleOutlined,
} from "@ant-design/icons";
import "./BookingHistory.scss";

const { Title } = Typography;
const { useBreakpoint } = Grid;

const mockBookings = [
  {
    id: 1,
    service: "Đánh giá CV",
    date: "2023-11-20",
    time: "10:00",
    status: "completed",
    amount: 500000,
    coach: "Nguyễn Văn A",
  },
  {
    id: 2,
    service: "Tư vấn phỏng vấn",
    date: "2023-11-25",
    time: "15:30",
    status: "upcoming",
    amount: 750000,
    coach: "Trần Thị B",
  },
  {
    id: 3,
    service: "Định vị thương hiệu cá nhân",
    date: "2023-11-15",
    time: "09:00",
    status: "cancelled",
    amount: 1200000,
    coach: "Lê Văn C",
  },
  {
    id: 4,
    service: "Đánh giá CV",
    date: "2023-10-28",
    time: "14:00",
    status: "completed",
    amount: 500000,
    coach: "Phạm Thị D",
  },
];

const BookingHistory: React.FC = () => {
  const [bookings, setBookings] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const screens = useBreakpoint();

  useEffect(() => {
    setTimeout(() => {
      setBookings(mockBookings);
      setLoading(false);
    }, 1000);
  }, []);

  const getStatusTag = (status: string) => {
    switch (status) {
      case "completed":
        return (
          <Tag icon={<CheckCircleOutlined />} color="success">
            Đã hoàn thành
          </Tag>
        );
      case "upcoming":
        return (
          <Tag icon={<ClockCircleOutlined />} color="processing">
            Sắp tới
          </Tag>
        );
      case "cancelled":
        return (
          <Tag icon={<CloseCircleOutlined />} color="error">
            Đã hủy
          </Tag>
        );
      default:
        return <Tag color="default">Không xác định</Tag>;
    }
  };

  const desktopColumns = [
    {
      title: "Dịch vụ",
      dataIndex: "service",
      key: "service",
    },
    {
      title: "Ngày",
      dataIndex: "date",
      key: "date",
      render: (date: string) => new Date(date).toLocaleDateString("vi-VN"),
    },
    {
      title: "Giờ",
      dataIndex: "time",
      key: "time",
    },
    {
      title: "Chuyên viên",
      dataIndex: "coach",
      key: "coach",
    },
    {
      title: "Trạng thái",
      dataIndex: "status",
      key: "status",
      render: (status: string) => getStatusTag(status),
    },
    {
      title: "Số tiền",
      dataIndex: "amount",
      key: "amount",
      render: (amount: number) => `${amount.toLocaleString()}đ`,
    },
    {
      title: "Hành động",
      key: "action",
      render: (_: any, record: any) => (
        <Space size="small">
          <Tooltip title="Xem chi tiết">
            <Button
              type="primary"
              shape="circle"
              icon={<EyeOutlined />}
              size="small"
            />
          </Tooltip>
          {record.status === "upcoming" && (
            <Button type="default" danger size="small">
              Hủy lịch
            </Button>
          )}
        </Space>
      ),
    },
  ];

  const mobileColumns = [
    {
      title: "Thông tin",
      key: "summary",
      render: (record: any) => (
        <div style={{ fontSize: 14 }}>
          <p>
            <strong>Dịch vụ:</strong> {record.service}
          </p>
          <p>
            <strong>Ngày:</strong>{" "}
            {new Date(record.date).toLocaleDateString("vi-VN")} -{" "}
            <strong>Giờ:</strong> {record.time}
          </p>
          <p>
            <strong>Chuyên viên:</strong> {record.coach}
          </p>
          <p>
            <strong>Trạng thái:</strong> {getStatusTag(record.status)}
          </p>
          <p>
            <strong>Số tiền:</strong> {record.amount.toLocaleString()}đ
          </p>
          <div style={{ marginTop: 8 }}>
            <Space size="small">
              <Tooltip title="Xem chi tiết">
                <Button
                  type="primary"
                  shape="circle"
                  icon={<EyeOutlined />}
                  size="small"
                />
              </Tooltip>
              {record.status === "upcoming" && (
                <Button type="default" danger size="small">
                  Hủy lịch
                </Button>
              )}
            </Space>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="booking-history-section">
      <Title level={4}>Lịch sử đặt lịch</Title>
      {bookings.length > 0 ? (
        <Table
          columns={screens.md ? desktopColumns : mobileColumns}
          dataSource={bookings}
          rowKey="id"
          loading={loading}
          pagination={{ pageSize: 5 }}
          className="booking-table"
        />
      ) : (
        <Empty
          description="Bạn chưa có lịch đặt nào"
          image={Empty.PRESENTED_IMAGE_SIMPLE}
        />
      )}
    </div>
  );
};

export default BookingHistory;
