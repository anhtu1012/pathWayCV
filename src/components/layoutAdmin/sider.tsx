"use client";

import {
  BellOutlined,
  DashboardOutlined,
  FileTextOutlined,
  SettingOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { TbBrandBooking } from "react-icons/tb";
import { Layout, Menu } from "antd";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import "./index.scss";

const { Sider } = Layout;

interface SiderProps {
  collapsed: boolean;
}

const SiderComponent: React.FC<SiderProps> = ({ collapsed }) => {
  const router = useRouter();
  const pathname = usePathname();
  const [selectedKeys, setSelectedKeys] = useState<string[]>([]);
  const [mounted, setMounted] = useState(false);

  // Get current selected menu item based on path
  useEffect(() => {
    if (pathname) {
      // For the home page
      if (pathname === "/admin") {
        setSelectedKeys(["/admin"]);
      }
      // For specific admin pages, match with the second path segment
      else if (pathname.startsWith("/admin/")) {
        const pathSegments = pathname.split("/");
        if (pathSegments.length >= 3) {
          // Handle danh-muc sub-items
          if (pathSegments[2] === "danh-muc" && pathSegments.length >= 4) {
            setSelectedKeys([`/admin/danh-muc/${pathSegments[3]}`]);
          } else {
            setSelectedKeys([`/admin/${pathSegments[2]}`]);
          }
        }
      }
    }
    setMounted(true);
  }, [pathname]);

  // Prevent hydration mismatch by returning minimal sidebar
  if (!mounted) {
    return (
      <Sider
        trigger={null}
        collapsible
        collapsed={true}
        width={240}
        className="sidebar-layout"
        style={{
          overflow: "auto",
          height: "100vh",
          position: "fixed",
          left: 0,
          top: 64,
          bottom: 0,
        }}
      />
    );
  }

  // Main navigation items with modern icons
  const mainNavItems = [
    {
      key: "/admin",
      icon: <DashboardOutlined />,
      label: "Trang chủ",
      "data-index": 0,
    },
    {
      key: "/admin/quan-li-nguoi-dung",
      icon: <UserOutlined />,
      label: "Quản lý người dùng",
      "data-index": 1,
    },
    {
      key: "/admin/bokking",
      icon: <TbBrandBooking />,
      label: "Quản lý Booking",
      "data-index": 1,
    },
  ];

  // Tools navigation items
  const toolsNavItems = [
    {
      key: "/admin/thong-bao",
      icon: <BellOutlined />,
      label: "Thông báo",
      "data-index": 0,
    },
    {
      key: "/admin/bao-cao",
      icon: <FileTextOutlined />,
      label: "Báo cáo",
      "data-index": 1,
    },
    {
      key: "/admin/cai-dat",
      icon: <SettingOutlined />,
      label: "Cài đặt hệ thống",
      "data-index": 2,
    },
  ];

  return (
    <Sider
      trigger={null}
      collapsible
      collapsed={collapsed}
      width={240}
      className="sidebar-layout"
      style={{
        overflow: "auto",
        height: "100vh",
        position: "fixed",
        left: 0,
        top: 64, // Height of the header
        bottom: 0,
      }}
    >
      <div className="sidebar-menu-container">
        {/* Main Navigation */}
        <Menu
          theme="light"
          mode="inline"
          selectedKeys={selectedKeys}
          onClick={({ key }) => router.push(key)}
          className="sidebar-menu"
          items={mainNavItems.map((item) => ({
            ...item,
            style: {
              "--item-index": item["data-index"],
            } as React.CSSProperties,
          }))}
        />

        {/* Tools Section */}
        {!collapsed && (
          <>
            <div className="menu-divider" />
            <div className="sidebar-section-title">Công cụ</div>
            <Menu
              theme="light"
              mode="inline"
              selectedKeys={selectedKeys}
              className="sidebar-menu"
              items={toolsNavItems.map((item) => ({
                ...item,
                style: {
                  "--item-index": item["data-index"],
                } as React.CSSProperties,
              }))}
              onClick={({ key }) => router.push(key)}
            />
          </>
        )}

        {/* Footer Section */}
        {!collapsed && (
          <>
            <div className="menu-divider" />
            <div className="sidebar-footer">
              <div className="footer-link">Trợ giúp</div>
              <div className="footer-link">Hỗ trợ</div>
              <div className="footer-link">Liên hệ</div>
              <div className="footer-link">Điều khoản</div>
              <div className="footer-link">Chính sách</div>
              <div className="footer-copyright">© 2024 Hệ thống chấm công</div>
            </div>
          </>
        )}
      </div>
    </Sider>
  );
};

export default SiderComponent;
