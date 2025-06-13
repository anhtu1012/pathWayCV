/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import {
  Badge,
  Button,
  Card,
  Col,
  DatePicker,
  Drawer,
  Empty,
  Form,
  Input,
  Modal,
  Row,
  Select,
  Space,
  Tag,
  Timeline,
  Typography,
  message,
} from "antd";
import Table, { ColumnsType } from "antd/es/table";
import {
  CalendarOutlined,
  CheckCircleOutlined,
  ClockCircleOutlined,
  CloseCircleOutlined,
} from "@ant-design/icons";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import "./index.scss";

const { Title, Text, Paragraph } = Typography;
const { Option } = Select;
const { TextArea } = Input;
const { RangePicker } = DatePicker;

interface BookingActivity {
  id: string;
  name: string;
  content: string;
  type: string;
  status: string;
  startAt: string;
  endAt: string;
  meetingLink: string | null;
  note: string;
}

interface BookingData {
  id: string;
  status: string;
  createdAt: string;
  updatedAt: string;
  totalAmount: number;
  planName: string;
  mentor: string | null;
  activities: BookingActivity[];
}

// Sample data for mentors
const mentors = [
  { id: "m1", name: "Nguyễn Văn A", specialization: "CV Review" },
  { id: "m2", name: "Trần Thị B", specialization: "Interview Coaching" },
  { id: "m3", name: "Lê Văn C", specialization: "Career Consulting" },
  { id: "m4", name: "Phạm Thị D", specialization: "LinkedIn Optimization" },
];

// Mock data for bookings including your provided data
const mockBookings: BookingData[] = [
  {
    id: "01974128-7f1a-779f-96e0-76b5edded91a",
    status: "pending",
    createdAt: "2025-06-05T17:34:22.490Z",
    updatedAt: "2025-06-05T17:34:22.490Z",
    totalAmount: 899000,
    planName: "GÓI NÂNG CAO",
    mentor: null,
    activities: [
      {
        id: "0197462a-3a67-710c-ac89-3f5484a66c7e",
        name: "Thông báo buổi tư vấn CV trực tuyến",
        content: "string",
        type: "announcement",
        status: "upcoming",
        startAt: "2025-06-08T14:00:00.000Z",
        endAt: "2025-06-08T16:00:00.000Z",
        meetingLink: null,
        note: "string",
      },
    ],
  },
  {
    id: "01974128-7f1b-789f-96e0-76b5edded92b",
    status: "completed",
    createdAt: "2025-06-01T10:30:22.490Z",
    updatedAt: "2025-06-03T15:45:22.490Z",
    totalAmount: 1499000,
    planName: "GÓI VIP",
    mentor: "Trần Thị B",
    activities: [
      {
        id: "0197462a-3a67-710c-ac89-3f5484a66c7f",
        name: "Buổi tư vấn 1-1 với chuyên gia",
        content: "Tư vấn định hướng nghề nghiệp và đánh giá CV",
        type: "meeting",
        status: "completed",
        startAt: "2025-06-02T09:00:00.000Z",
        endAt: "2025-06-02T10:30:00.000Z",
        meetingLink: "https://zoom.us/j/123456",
        note: "Khách hàng hài lòng với buổi tư vấn",
      },
    ],
  },
  {
    id: "01974128-7f1c-799f-96e0-76b5edded93c",
    status: "cancelled",
    createdAt: "2025-05-28T08:20:22.490Z",
    updatedAt: "2025-05-29T11:34:22.490Z",
    totalAmount: 499000,
    planName: "GÓI CƠ BẢN",
    mentor: "Nguyễn Văn A",
    activities: [
      {
        id: "0197462a-3a67-710c-ac89-3f5484a66c7g",
        name: "Đánh giá CV",
        content: "Đánh giá và chỉnh sửa CV",
        type: "task",
        status: "cancelled",
        startAt: "2025-05-29T00:00:00.000Z",
        endAt: "2025-05-30T00:00:00.000Z",
        meetingLink: null,
        note: "Khách hàng hủy vì lý do cá nhân",
      },
    ],
  },
  {
    id: "01974128-7f1d-809f-96e0-76b5edded94d",
    status: "in-progress",
    createdAt: "2025-06-03T14:15:22.490Z",
    updatedAt: "2025-06-04T09:30:22.490Z",
    totalAmount: 899000,
    planName: "GÓI NÂNG CAO",
    mentor: "Lê Văn C",
    activities: [
      {
        id: "0197462a-3a67-710c-ac89-3f5484a66c7h",
        name: "Chỉnh sửa CV",
        content: "Chỉnh sửa CV theo góp ý",
        type: "task",
        status: "in-progress",
        startAt: "2025-06-04T00:00:00.000Z",
        endAt: "2025-06-06T00:00:00.000Z",
        meetingLink: null,
        note: "Đang chỉnh sửa CV theo yêu cầu của khách hàng",
      },
    ],
  },
];

const BookingManagement = () => {
  const [bookings, setBookings] = useState<BookingData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [selectedBooking, setSelectedBooking] = useState<BookingData | null>(
    null
  );
  const [drawerVisible, setDrawerVisible] = useState<boolean>(false);
  const [assignMentorVisible, setAssignMentorVisible] =
    useState<boolean>(false);
  const [addActivityVisible, setAddActivityVisible] = useState<boolean>(false);
  const [mentorId, setMentorId] = useState<string>("");
  const [form] = Form.useForm();
  const [activityForm] = Form.useForm();
  const [filterStatus, setFilterStatus] = useState<string | null>(null);

  // Fetch bookings data
  const fetchBookings = async () => {
    try {
      setLoading(true);
      // In a real implementation, you would fetch from API
      // const response = await QuanlyNguoiDungServices.getAllBookings();
      // setBookings(response.data || []);

      // For now use mock data
      setTimeout(() => {
        setBookings(mockBookings);
        setLoading(false);
      }, 1000);
    } catch (error) {
      console.error("Error fetching bookings:", error);
      toast.error("Không thể tải dữ liệu đặt lịch");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBookings();
  }, []);

  // Handle status change
  const handleStatusChange = async (record: BookingData, status: string) => {
    try {
      // In a real implementation, you would update via API
      // await QuanlyNguoiDungServices.updateBookingStatus(record.id, status);

      // Update local state
      setBookings((prev) =>
        prev.map((booking) =>
          booking.id === record.id ? { ...booking, status } : booking
        )
      );

      message.success(`Đã cập nhật trạng thái thành ${status}`);
    } catch (error) {
      console.error("Error updating booking status:", error);
      message.error("Không thể cập nhật trạng thái");
    }
  };

  // Handle assign mentor
  const handleAssignMentor = async () => {
    if (!selectedBooking || !mentorId) return;

    try {
      // In a real implementation, you would update via API
      // await QuanlyNguoiDungServices.assignMentor(selectedBooking.id, mentorId);

      const mentorName = mentors.find((m) => m.id === mentorId)?.name || null;

      // Update local state
      setBookings((prev) =>
        prev.map((booking) =>
          booking.id === selectedBooking.id
            ? { ...booking, mentor: mentorName }
            : booking
        )
      );

      setAssignMentorVisible(false);
      setMentorId("");
      message.success("Đã phân công chuyên gia thành công");
    } catch (error) {
      console.error("Error assigning mentor:", error);
      message.error("Không thể phân công chuyên gia");
    }
  };

  // Handle add activity
  const handleAddActivity = async () => {
    if (!selectedBooking) return;

    try {
      const values = await activityForm.validateFields();

      const newActivity: BookingActivity = {
        id: `activity-${Date.now()}`,
        name: values.name,
        content: values.content,
        type: values.type,
        status: "upcoming",
        startAt: values.timeRange[0].toISOString(),
        endAt: values.timeRange[1].toISOString(),
        meetingLink: values.meetingLink || null,
        note: values.note || "",
      };

      // Update local state
      setBookings((prev) =>
        prev.map((booking) =>
          booking.id === selectedBooking.id
            ? {
                ...booking,
                activities: [...booking.activities, newActivity],
              }
            : booking
        )
      );

      setAddActivityVisible(false);
      activityForm.resetFields();
      message.success("Đã thêm hoạt động mới");
    } catch (error) {
      console.error("Error adding activity:", error);
      message.error("Không thể thêm hoạt động mới");
    }
  };

  // Get status tag
  const getStatusTag = (status: string) => {
    switch (status.toLowerCase()) {
      case "completed":
        return <Tag color="success">Hoàn thành</Tag>;
      case "pending":
        return <Tag color="warning">Chờ xử lý</Tag>;
      case "in-progress":
        return <Tag color="processing">Đang xử lý</Tag>;
      case "cancelled":
        return <Tag color="error">Đã hủy</Tag>;
      default:
        return <Tag color="default">{status}</Tag>;
    }
  };

  // Show booking details
  const showBookingDetails = (record: BookingData) => {
    setSelectedBooking(record);
    setDrawerVisible(true);
  };

  // Filter bookings by status
  const filteredBookings = filterStatus
    ? bookings.filter((booking) => booking.status === filterStatus)
    : bookings;

  // Table columns
  const columns: ColumnsType<BookingData> = [
    {
      title: "Mã đặt lịch",
      dataIndex: "id",
      key: "id",
      width: 180,
      ellipsis: true,
      render: (id) => <Text copyable>{id}</Text>,
    },
    {
      title: "Gói dịch vụ",
      dataIndex: "planName",
      key: "planName",
      width: 150,
    },
    {
      title: "Ngày đặt",
      dataIndex: "createdAt",
      key: "createdAt",
      width: 150,
      render: (date) => new Date(date).toLocaleDateString("vi-VN"),
      sorter: (a, b) =>
        new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime(),
    },
    {
      title: "Trạng thái",
      dataIndex: "status",
      key: "status",
      width: 120,
      render: (status) => getStatusTag(status),
      filters: [
        { text: "Chờ xử lý", value: "pending" },
        { text: "Đang xử lý", value: "in-progress" },
        { text: "Hoàn thành", value: "completed" },
        { text: "Đã hủy", value: "cancelled" },
      ],
      onFilter: (value, record) => record.status === value,
    },
    {
      title: "Số tiền",
      dataIndex: "totalAmount",
      key: "totalAmount",
      width: 150,
      render: (amount) => `${amount.toLocaleString()}đ`,
      sorter: (a, b) => a.totalAmount - b.totalAmount,
    },
    {
      title: "Chuyên gia",
      dataIndex: "mentor",
      key: "mentor",
      width: 150,
      render: (mentor) => mentor || <Tag color="orange">Chưa phân công</Tag>,
    },
    {
      title: "Hoạt động",
      key: "activities",
      width: 150,
      render: (_, record) => (
        <Badge
          count={record.activities.length}
          overflowCount={99}
          style={{ backgroundColor: "#52c41a" }}
        >
          <Button type="link">Xem hoạt động</Button>
        </Badge>
      ),
    },
    {
      title: "Thao tác",
      key: "action",
      width: 250,
      render: (_, record) => (
        <Space size="small">
          <Button type="primary" onClick={() => showBookingDetails(record)}>
            Chi tiết
          </Button>

          {record.status === "pending" && (
            <>
              <Button
                onClick={() => handleStatusChange(record, "in-progress")}
                type="default"
                style={{ backgroundColor: "#1890ff", color: "white" }}
              >
                Xử lý
              </Button>
              <Button
                onClick={() => handleStatusChange(record, "cancelled")}
                danger
              >
                Hủy
              </Button>
            </>
          )}

          {record.status === "in-progress" && (
            <Button
              onClick={() => handleStatusChange(record, "completed")}
              style={{ backgroundColor: "#52c41a", color: "white" }}
            >
              Hoàn thành
            </Button>
          )}
        </Space>
      ),
    },
  ];

  return (
    <div className="booking-management-container">
      <Title level={3} className="page-title">
        Quản lý đặt lịch
      </Title>

      <Row gutter={[12, 12]} className="booking-stats">
        <Col xs={12} sm={12} md={6}>
          <Card className="stat-card pending" bordered={false} size="small">
            <div className="stat-icon">
              <ClockCircleOutlined />
            </div>
            <div className="stat-content">
              <div className="stat-value">
                {bookings.filter((b) => b.status === "pending").length}
              </div>
              <div className="stat-label">Chờ xử lý</div>
            </div>
          </Card>
        </Col>
        <Col xs={12} sm={12} md={6}>
          <Card className="stat-card in-progress" bordered={false} size="small">
            <div className="stat-icon">
              <CalendarOutlined />
            </div>
            <div className="stat-content">
              <div className="stat-value">
                {bookings.filter((b) => b.status === "in-progress").length}
              </div>
              <div className="stat-label">Đang xử lý</div>
            </div>
          </Card>
        </Col>
        <Col xs={12} sm={12} md={6}>
          <Card className="stat-card completed" bordered={false} size="small">
            <div className="stat-icon">
              <CheckCircleOutlined />
            </div>
            <div className="stat-content">
              <div className="stat-value">
                {bookings.filter((b) => b.status === "completed").length}
              </div>
              <div className="stat-label">Hoàn thành</div>
            </div>
          </Card>
        </Col>
        <Col xs={12} sm={12} md={6}>
          <Card className="stat-card cancelled" bordered={false} size="small">
            <div className="stat-icon">
              <CloseCircleOutlined />
            </div>
            <div className="stat-content">
              <div className="stat-value">
                {bookings.filter((b) => b.status === "cancelled").length}
              </div>
              <div className="stat-label">Đã hủy</div>
            </div>
          </Card>
        </Col>
      </Row>

      <div className="filter-section">
        <Row gutter={16} align="middle">
          <Col xs={24} md={12}>
            <Form layout="inline">
              <Form.Item label="Trạng thái">
                <Select
                  style={{ width: 180 }}
                  placeholder="Chọn trạng thái"
                  allowClear
                  onChange={(value) => setFilterStatus(value)}
                >
                  <Option value="pending">Chờ xử lý</Option>
                  <Option value="in-progress">Đang xử lý</Option>
                  <Option value="completed">Hoàn thành</Option>
                  <Option value="cancelled">Đã hủy</Option>
                </Select>
              </Form.Item>
            </Form>
          </Col>
          <Col xs={24} md={12} style={{ textAlign: "right" }}>
            <Button
              type="primary"
              onClick={() => fetchBookings()}
              style={{ marginLeft: 8 }}
            >
              Làm mới dữ liệu
            </Button>
          </Col>
        </Row>
      </div>

      <Table
        columns={columns}
        dataSource={filteredBookings}
        rowKey="id"
        loading={loading}
        pagination={{ pageSize: 10 }}
        className="booking-table"
        scroll={{ x: 1200 }}
      />

      {/* Booking details drawer */}
      <Drawer
        title="Chi tiết đặt lịch"
        placement="right"
        width={500}
        onClose={() => setDrawerVisible(false)}
        open={drawerVisible}
        extra={
          <Space>
            <Button onClick={() => setDrawerVisible(false)}>Đóng</Button>
          </Space>
        }
      >
        {selectedBooking && (
          <div className="booking-detail">
            <div className="detail-section">
              <Title level={4}>Thông tin cơ bản</Title>
              <Row gutter={[16, 16]}>
                <Col span={24}>
                  <Text strong>Mã đặt lịch:</Text>{" "}
                  <Text copyable>{selectedBooking.id}</Text>
                </Col>
                <Col span={12}>
                  <Text strong>Gói dịch vụ:</Text> <br />
                  <Text>{selectedBooking.planName}</Text>
                </Col>
                <Col span={12}>
                  <Text strong>Giá trị:</Text> <br />
                  <Text>{selectedBooking.totalAmount.toLocaleString()}đ</Text>
                </Col>
                <Col span={12}>
                  <Text strong>Ngày đặt:</Text> <br />
                  <Text>
                    {new Date(selectedBooking.createdAt).toLocaleDateString(
                      "vi-VN"
                    )}
                  </Text>
                </Col>
                <Col span={12}>
                  <Text strong>Trạng thái:</Text> <br />
                  {getStatusTag(selectedBooking.status)}
                </Col>
                <Col span={24}>
                  <Text strong>Chuyên gia phụ trách:</Text> <br />
                  <Space>
                    {selectedBooking.mentor ? (
                      <Text>{selectedBooking.mentor}</Text>
                    ) : (
                      <Tag color="orange">Chưa phân công</Tag>
                    )}
                    <Button
                      type="primary"
                      size="small"
                      onClick={() => setAssignMentorVisible(true)}
                    >
                      {selectedBooking.mentor ? "Đổi chuyên gia" : "Phân công"}
                    </Button>
                  </Space>
                </Col>
              </Row>
            </div>

            <div className="detail-section">
              <div className="section-header">
                <Title level={4}>Lịch sử hoạt động</Title>
                <Button
                  type="primary"
                  onClick={() => setAddActivityVisible(true)}
                >
                  Thêm hoạt động
                </Button>
              </div>

              {selectedBooking.activities.length > 0 ? (
                <Timeline
                  mode="left"
                  items={selectedBooking.activities.map((activity) => ({
                    label: new Date(activity.startAt).toLocaleString("vi-VN"),
                    children: (
                      <Card className="activity-card" size="small">
                        <div className="activity-header">
                          <Text strong>{activity.name}</Text>
                          {getStatusTag(activity.status)}
                        </div>
                        <Paragraph>{activity.content}</Paragraph>
                        <div className="activity-meta">
                          {activity.meetingLink && (
                            <div>
                              <Text strong>Link họp:</Text>{" "}
                              <a
                                href={activity.meetingLink}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                {activity.meetingLink}
                              </a>
                            </div>
                          )}
                          <div>
                            <Text strong>Thời gian:</Text>{" "}
                            {new Date(activity.startAt).toLocaleString()} -{" "}
                            {new Date(activity.endAt).toLocaleString()}
                          </div>
                          {activity.note && (
                            <div>
                              <Text strong>Ghi chú:</Text> {activity.note}
                            </div>
                          )}
                        </div>
                      </Card>
                    ),
                  }))}
                />
              ) : (
                <Empty description="Chưa có hoạt động nào" />
              )}
            </div>
          </div>
        )}
      </Drawer>

      {/* Assign mentor modal */}
      <Modal
        title="Phân công chuyên gia"
        open={assignMentorVisible}
        onCancel={() => setAssignMentorVisible(false)}
        onOk={handleAssignMentor}
      >
        <Form form={form} layout="vertical">
          <Form.Item
            name="mentor"
            label="Chọn chuyên gia"
            rules={[{ required: true, message: "Vui lòng chọn chuyên gia" }]}
          >
            <Select
              placeholder="Chọn chuyên gia"
              onChange={(value) => setMentorId(value)}
              value={mentorId}
            >
              {mentors.map((mentor) => (
                <Option key={mentor.id} value={mentor.id}>
                  {mentor.name} - {mentor.specialization}
                </Option>
              ))}
            </Select>
          </Form.Item>
        </Form>
      </Modal>

      {/* Add activity modal */}
      <Modal
        title="Thêm hoạt động mới"
        open={addActivityVisible}
        onCancel={() => setAddActivityVisible(false)}
        onOk={handleAddActivity}
        width={600}
      >
        <Form form={activityForm} layout="vertical">
          <Row gutter={16}>
            <Col span={24}>
              <Form.Item
                name="name"
                label="Tên hoạt động"
                rules={[
                  { required: true, message: "Vui lòng nhập tên hoạt động" },
                ]}
              >
                <Input placeholder="Nhập tên hoạt động" />
              </Form.Item>
            </Col>

            <Col span={24}>
              <Form.Item
                name="content"
                label="Nội dung"
                rules={[{ required: true, message: "Vui lòng nhập nội dung" }]}
              >
                <TextArea placeholder="Nhập nội dung hoạt động" rows={3} />
              </Form.Item>
            </Col>

            <Col span={12}>
              <Form.Item
                name="type"
                label="Loại hoạt động"
                rules={[
                  { required: true, message: "Vui lòng chọn loại hoạt động" },
                ]}
              >
                <Select placeholder="Chọn loại hoạt động">
                  <Option value="meeting">Buổi họp</Option>
                  <Option value="task">Nhiệm vụ</Option>
                  <Option value="announcement">Thông báo</Option>
                </Select>
              </Form.Item>
            </Col>

            <Col span={12}>
              <Form.Item name="meetingLink" label="Link họp (nếu có)">
                <Input placeholder="Nhập link họp" />
              </Form.Item>
            </Col>

            <Col span={24}>
              <Form.Item
                name="timeRange"
                label="Thời gian"
                rules={[{ required: true, message: "Vui lòng chọn thời gian" }]}
              >
                <RangePicker
                  showTime={{ format: "HH:mm" }}
                  format="DD/MM/YYYY HH:mm"
                  style={{ width: "100%" }}
                />
              </Form.Item>
            </Col>

            <Col span={24}>
              <Form.Item name="note" label="Ghi chú">
                <TextArea placeholder="Nhập ghi chú" rows={2} />
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Modal>
    </div>
  );
};

export default BookingManagement;
