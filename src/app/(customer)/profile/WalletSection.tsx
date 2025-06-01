import { ArrowDownOutlined, ArrowUpOutlined } from "@ant-design/icons";
import { Card, Col, Empty, Row, Table, Tag, Typography } from "antd";
import React, { useState } from "react";

// Define interface for transaction item
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
  // Mock transaction data if none provided
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

  // Transaction history columns
  const columns = [
    {
      title: "Ngày",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "Loại giao dịch",
      dataIndex: "type",
      key: "type",
      render: (type: string) => {
        let text = "Giao dịch";
        let color = "blue";
        let icon = null;

        if (type === "topup") {
          text = "Nạp tiền";
          color = "green";
          icon = <ArrowDownOutlined />;
        } else if (type === "purchase") {
          text = "Thanh toán";
          color = "orange";
          icon = <ArrowUpOutlined />;
        } else if (type === "refund") {
          text = "Hoàn tiền";
          color = "cyan";
          icon = <ArrowDownOutlined />;
        }

        return (
          <Tag color={color} icon={icon}>
            {text}
          </Tag>
        );
      },
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
      render: (status: string) => {
        let color = "blue";
        let text = "Không xác định";

        if (status === "completed") {
          color = "green";
          text = "Hoàn thành";
        } else if (status === "pending") {
          color = "gold";
          text = "Đang xử lý";
        } else if (status === "failed") {
          color = "red";
          text = "Thất bại";
        }

        return <Tag color={color}>{text}</Tag>;
      },
    },
  ];

  return (
    <div className="wallet-section">
      <Row gutter={[24, 24]}>
        {/* Transaction History Section */}
        <Col xs={24}>
          <Card
            title={
              <Typography.Title level={4}>Lịch sử giao dịch</Typography.Title>
            }
            className="transaction-history-card"
          >
            {transactionHistory.length > 0 ? (
              <Table
                dataSource={transactionHistory}
                columns={columns}
                rowKey="id"
                pagination={{ pageSize: 5 }}
              />
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
