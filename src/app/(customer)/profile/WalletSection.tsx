import {
  ArrowDownOutlined,
  ArrowUpOutlined,
} from "@ant-design/icons";
import {
  Card,
  Col,
  Empty,
  Row,
  Table,
  Tag,
  Typography,
  Grid,
} from "antd";
import React, { useState } from "react";
import "./WalletSection.scss";

interface TransactionItem {
  id: string;
  date: string;
  type: "topup" | "purchase" | "refund";
  amount: number;
  description: string;
  status: "completed" | "pending" | "failed";
}

interface WalletSectionProps {
  balance?: number;
  onTopUp?: (amount: number, method: string) => void;
  transactions?: TransactionItem[];
}

const WalletSection: React.FC<WalletSectionProps> = ({ transactions = [] }) => {
  const { useBreakpoint } = Grid;
  const screens = useBreakpoint();

  const [transactionHistory] = useState<TransactionItem[]>(
    transactions.length > 0
      ? transactions
      : [
          {
            id: "1",
            date: "2023-11-10 14:30",
            type: "topup",
            amount: 500000,
            description: "Nạp tiền qua Momo",
            status: "completed",
          },
          {
            id: "2",
            date: "2023-11-08 09:15",
            type: "purchase",
            amount: -150000,
            description: "Thanh toán dịch vụ",
            status: "completed",
          },
          {
            id: "3",
            date: "2023-11-05 16:45",
            type: "refund",
            amount: 50000,
            description: "Hoàn tiền dịch vụ",
            status: "completed",
          },
          {
            id: "4",
            date: "2023-11-01 10:20",
            type: "topup",
            amount: 200000,
            description: "Nạp tiền qua ngân hàng",
            status: "pending",
          },
        ]
  );

  const renderTypeTag = (type: string) => {
    switch (type) {
      case "topup":
        return (
          <Tag color="green" icon={<ArrowDownOutlined />}>Nạp tiền</Tag>
        );
      case "purchase":
        return (
          <Tag color="orange" icon={<ArrowUpOutlined />}>Thanh toán</Tag>
        );
      case "refund":
        return (
          <Tag color="cyan" icon={<ArrowDownOutlined />}>Hoàn tiền</Tag>
        );
      default:
        return <Tag color="blue">Giao dịch</Tag>;
    }
  };

  const renderStatusTag = (status: string) => {
    switch (status) {
      case "completed":
        return <Tag color="green">Hoàn thành</Tag>;
      case "pending":
        return <Tag color="gold">Đang xử lý</Tag>;
      case "failed":
        return <Tag color="red">Thất bại</Tag>;
      default:
        return <Tag color="default">Không xác định</Tag>;
    }
  };

  const desktopColumns = [
    {
      title: "Ngày",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "Loại giao dịch",
      dataIndex: "type",
      key: "type",
      render: (type: string) => renderTypeTag(type),
    },
    {
      title: "Số tiền",
      dataIndex: "amount",
      key: "amount",
      render: (amount: number) => {
        const color = amount >= 0 ? "green" : "red";
        return (
          <span style={{ color, fontWeight: "bold" }}>
            {amount.toLocaleString("vi-VN")} đ
          </span>
        );
      },
    },
    {
      title: "Mô tả",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Trạng thái",
      dataIndex: "status",
      key: "status",
      render: (status: string) => renderStatusTag(status),
    },
  ];

  const mobileColumns = [
    {
      title: "Giao dịch",
      key: "summary",
      render: (record: TransactionItem) => (
        <div style={{ fontSize: 14 }}>
          <p>
            <strong>Ngày:</strong> {record.date}
          </p>
          <p>
            <strong>Loại:</strong> {renderTypeTag(record.type)}
          </p>
          <p>
            <strong>Số tiền:</strong>{" "}
            <span style={{ color: record.amount >= 0 ? "green" : "red", fontWeight: "bold" }}>
              {record.amount.toLocaleString("vi-VN")} đ
            </span>
          </p>
          <p>
            <strong>Mô tả:</strong> {record.description}
          </p>
          <p>
            <strong>Trạng thái:</strong> {renderStatusTag(record.status)}
          </p>
        </div>
      ),
    },
  ];

  return (
    <div className="wallet-section">
      <Row gutter={[24, 24]}>
        <Col xs={24}>
          <Card
            title={<Typography.Title level={4}>Lịch sử giao dịch</Typography.Title>}
            className="transaction-history-card"
          >
            {transactionHistory.length > 0 ? (
              <div className="table-wrapper">
                <Table
                  dataSource={transactionHistory}
                  columns={screens.md ? desktopColumns : mobileColumns}
                  rowKey="id"
                  pagination={{ pageSize: 5 }}
                />
              </div>
            ) : (
              <Empty
                description="Không có giao dịch nào"
                image={Empty.PRESENTED_IMAGE_SIMPLE}
              />
            )}
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default WalletSection;
