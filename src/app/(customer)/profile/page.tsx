"use client";

import UserInfo from "@/app/(customer)/profile/UserInfo";
import WalletTopupModal from "@/components/WalletTopupModalProps/WalletTopupModal";
import {
  CreditCardOutlined,
  HistoryOutlined,
  UserOutlined,
  WalletOutlined,
} from "@ant-design/icons";
import { useUser } from "@clerk/nextjs";
import { Avatar, Button, Card, Col, Row, Tabs, Typography } from "antd";
import { useEffect, useMemo, useState } from "react";
import BookingHistory from "./BookingHistory";
import "./profile.scss";
import WalletSection from "./WalletSection";
import DepositServices from "@/services/profile/deposit.service";

const { Title, Text } = Typography;

export default function ProfilePage() {
  const { user, isLoaded } = useUser();
  const [activeTab, setActiveTab] = useState("1");
  const [balance, setBalance] = useState(0);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleModalCancel = () => {
    setIsModalVisible(false);
  };

  const handleTopUp = async (value: number) => {
    setIsModalVisible(false);
    const data = {
      amount: value,
      gateway: "zalopay",
      returnUrl: "http://localhost:3000/thanh-toan-thanh-cong",
    };
    const res = await DepositServices.deposit(data);
    if (res) {
      setBalance((prevBalance) => prevBalance + value);
      window.location.href = res.data.paymentUrl; // Redirect to payment gateway
    } else {
      // Handle error case
      console.error("Deposit failed");
    }
  };

  useEffect(() => {
    // Mock API call to fetch wallet balance
    // Use AbortController to handle cleanup
    const controller = new AbortController();
    const signal = controller.signal;

    const fetchBalance = async () => {
      try {
        // Simulating API call with fetch and AbortController
        await new Promise((resolve) => setTimeout(resolve, 500));
        if (!signal.aborted) {
          setBalance(500000);
        }
      } catch (error) {
        if (!signal.aborted) {
          console.error("Error fetching balance:", error);
        }
      }
    };

    fetchBalance();

    // Cleanup function
    return () => {
      controller.abort();
    };
  }, []);

  // Memoize tab items to prevent unnecessary re-renders
  const tabItems = useMemo(
    () => [
      {
        key: "1",
        label: (
          <span>
            <UserOutlined />
            Thông tin cá nhân
          </span>
        ),
        children: user ? <UserInfo user={user} /> : null,
      },
      {
        key: "2",
        label: (
          <span>
            <HistoryOutlined />
            Lịch sử đặt lịch
          </span>
        ),
        children: <BookingHistory />,
      },
      {
        key: "3",
        label: (
          <span>
            <WalletOutlined />
            Ví tiền
          </span>
        ),
        children: <WalletSection />,
      },
    ],
    [user, balance, handleTopUp]
  );

  if (!isLoaded) {
    return (
      <div className="profile-loading">
        <div className="loading-spinner" />
        <Text>Đang tải thông tin...</Text>
      </div>
    );
  }

  if (!user) {
    return (
      <Card className="profile-error-card">
        <Title level={3}>Bạn cần đăng nhập để xem trang này</Title>
        <Button type="primary" href="/sign-in">
          Đăng nhập
        </Button>
      </Card>
    );
  }

  return (
    <div className="profile-container">
      <Title className="profile-title">Thông tin cá nhân</Title>

      <Row gutter={[24, 24]} className="profile-header">
        <Col xs={24} md={6} className="profile-avatar-section">
          <Avatar
            size={120}
            src={user.imageUrl}
            icon={!user.imageUrl && <UserOutlined />}
          />
          <div className="profile-name-info">
            <Title level={3}>{user.fullName}</Title>
            <Text type="secondary">
              {user.primaryEmailAddress?.emailAddress}
            </Text>
          </div>
          <div className="profile-balance">
            <WalletOutlined className="balance-icon" />
            <div className="balance-info">
              <Text type="secondary">Số dư tài khoản</Text>
              <Text strong className="balance-amount">
                {balance.toLocaleString()}đ
              </Text>
            </div>
          </div>
          <Button
            type="primary"
            icon={<CreditCardOutlined />}
            onClick={() => setIsModalVisible(true)}
            className="topup-button"
          >
            Nạp tiền
          </Button>
        </Col>

        <Col xs={24} md={18}>
          <Tabs
            activeKey={activeTab}
            onChange={setActiveTab}
            className="profile-tabs"
            items={tabItems}
          />
        </Col>
      </Row>
      {/* Topup Modal */}
      <WalletTopupModal
        visible={isModalVisible}
        onCancel={handleModalCancel}
        onTopUp={handleTopUp}
      />
    </div>
  );
}
