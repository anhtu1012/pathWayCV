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
import { useTranslations } from "next-intl";

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
  const t = useTranslations("BookingHistory");
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
            {t("status.completed")}
          </Tag>
        );
      case "upcoming":
        return (
          <Tag icon={<ClockCircleOutlined />} color="processing">
            {t("status.upcoming")}
          </Tag>
        );
      case "cancelled":
        return (
          <Tag icon={<CloseCircleOutlined />} color="error">
            {t("status.cancelled")}
          </Tag>
        );
      default:
        return <Tag color="default">{t("status.unknown")}</Tag>;
    }
  };

  const desktopColumns = [
    {
      title: t("table.service"),
      dataIndex: "service",
      key: "service",
    },
    {
      title: t("table.date"),
      dataIndex: "date",
      key: "date",
      render: (date: string) => new Date(date).toLocaleDateString(),
    },
    {
      title: t("table.time"),
      dataIndex: "time",
      key: "time",
    },
    {
      title: t("table.coach"),
      dataIndex: "coach",
      key: "coach",
    },
    {
      title: t("table.status"),
      dataIndex: "status",
      key: "status",
      render: (status: string) => getStatusTag(status),
    },
    {
      title: t("table.amount"),
      dataIndex: "amount",
      key: "amount",
      render: (amount: number) => `${amount.toLocaleString()}đ`,
    },
    {
      title: t("table.action"),
      key: "action",
      render: (_: any, record: any) => (
        <Space size="small">
          <Tooltip title={t("action.view")}>
            <Button
              type="primary"
              shape="circle"
              icon={<EyeOutlined />}
              size="small"
            />
          </Tooltip>
          {record.status === "upcoming" && (
            <Button type="default" danger size="small">
              {t("action.cancel")}
            </Button>
          )}
        </Space>
      ),
    },
  ];

  const mobileColumns = [
    {
      title: t("table.summary"),
      key: "summary",
      render: (record: any) => (
        <div style={{ fontSize: 14 }}>
          <p>
            <strong>{t("table.service")}:</strong> {record.service}
          </p>
          <p>
            <strong>{t("table.date")}:</strong>{" "}
            {new Date(record.date).toLocaleDateString()} -{" "}
            <strong>{t("table.time")}:</strong> {record.time}
          </p>
          <p>
            <strong>{t("table.coach")}:</strong> {record.coach}
          </p>
          <p>
            <strong>{t("table.status")}:</strong> {getStatusTag(record.status)}
          </p>
          <p>
            <strong>{t("table.amount")}:</strong>{" "}
            {record.amount.toLocaleString()}đ
          </p>
          <div style={{ marginTop: 8 }}>
            <Space size="small">
              <Tooltip title={t("action.view")}>
                <Button
                  type="primary"
                  shape="circle"
                  icon={<EyeOutlined />}
                  size="small"
                />
              </Tooltip>
              {record.status === "upcoming" && (
                <Button type="default" danger size="small">
                  {t("action.cancel")}
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
      <Title level={4}>{t("title")}</Title>
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
          description={t("empty")}
          image={Empty.PRESENTED_IMAGE_SIMPLE}
        />
      )}
    </div>
  );
};

export default BookingHistory;
