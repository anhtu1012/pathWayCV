/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { UserInfor } from "@/dtos/auth/auth.dto";
import QuanlyNguoiDungServices from "@/services/admin/quan-li-nguoi-dung/quan-li-nguoi-dung.service";
import { Button, Modal, Select, Space, Tag, Typography } from "antd";
import type { ColumnsType } from "antd/es/table";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import CustomTable from "../../../components/common/CustomTable";
import { updateUserRole } from "../../../utils/servers/updateUserRole";
import "./styles.scss"; // We'll create this file

const { Title } = Typography;
const { Option } = Select;

export default function Page() {
  const [userData, setUserData] = useState<UserInfor[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [role, setRole] = useState<string>("");
  const [selectedUserId, setSelectedUserId] = useState<string>("");
  const [isUpdating, setIsUpdating] = useState<boolean>(false);
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const getData = async () => {
    try {
      setLoading(true);
      // Simulate fetching user data
      const response = await QuanlyNguoiDungServices.getAllUser(); // Adjust the API endpoint as needed
      setUserData(response.data || []);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
    setLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  const handleUpdateRole = async (userId: string) => {
    if (!role) return;

    setIsUpdating(true);
    try {
      const result = await updateUserRole(userId, role);
      if (result.success) {
        // Update the user in the local state
        getData(); // Refresh the user data
        toast.success("Role updated successfully");
        setIsModalVisible(false);
      } else {
        toast.error("Failed to update role");
      }
    } catch (error) {
      console.error("Error updating role:", error);
      alert("An error occurred");
    } finally {
      setIsUpdating(false);
    }
  };

  const showModal = (userId: string) => {
    setSelectedUserId(userId);
    // Find the current user's role to set as default
    const currentUser = userData.find((user) => user.id === userId);
    if (currentUser) {
      setRole(currentUser.account.role);
    }
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    setSelectedUserId("");
    setRole("");
  };

  const columns: ColumnsType<any> = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
      ellipsis: true,
    },
    {
      title: "Họ và Tên",
      key: "name",
      render: (_, record) =>
        `${record.account.firstName} ${record.account.lastName}`,
      sorter: (a, b) =>
        `${a.account.firstName} ${a.account.lastName}`.localeCompare(
          `${b.account.firstName} ${b.account.lastName}`
        ),
    },
    {
      title: "Email",
      dataIndex: ["account", "email"],
      key: "email",
    },
    {
      title: "Vai trò",
      dataIndex: ["account", "role"],
      key: "role",
      render: (role) => (
        <Tag
          color={role === "admin" ? "red" : "cyan"}
          className={`role-tag ${role === "user" ? "light-blue-tag" : ""}`}
        >
          {role.toUpperCase()}
        </Tag>
      ),
      filters: [
        { text: "Admin", value: "admin" },
        { text: "User", value: "user" },
      ],
      onFilter: (value, record) => record.account.role === value,
    },
    {
      title: "Số dư tài khoản (VND)",
      dataIndex: "balance",
      width: 250,
      key: "balance",
      render: (balance) => `${balance.toLocaleString()} VND`,
      sorter: (a, b) => a.balance - b.balance,
    },
    {
      title: "Ngày tạo",
      dataIndex: "createdAt",
      key: "createdAt",
      render: (date) => new Date(date).toLocaleDateString(),
    },
    {
      title: "Công cụ",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <Button
            type="primary"
            onClick={() => showModal(record.id)}
            className="update-role-btn"
          >
            Update Role
          </Button>
        </Space>
      ),
    },
  ];

  return (
    <div className="user-management-container">
      <Title level={3} className="page-title">
        User Management
      </Title>

      <CustomTable
        columns={columns}
        dataSource={userData}
        rowKey="id"
        loading={loading}
        pagination={{ pageSize: 10 }}
      />

      <Modal
        title="Update User Role"
        open={isModalVisible}
        onCancel={handleCancel}
        footer={[
          <Button key="cancel" onClick={handleCancel}>
            Cancel
          </Button>,
          <Button
            key="submit"
            type="primary"
            loading={isUpdating}
            onClick={() => handleUpdateRole(selectedUserId)}
            className="submit-btn"
          >
            Update
          </Button>,
        ]}
        className="role-update-modal"
      >
        <div className="role-selector">
          <p>Select new role for user:</p>
          <Select
            value={role}
            onChange={(value) => setRole(value)}
            style={{ width: "100%" }}
            className="role-select"
          >
            <Option value="user">User</Option>
            <Option value="admin">Admin</Option>
          </Select>
        </div>
      </Modal>
    </div>
  );
}
