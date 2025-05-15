"use client";

import { Layout, Menu } from "antd";
import { useEffect, useState } from "react";
import {
  HomeOutlined,
  PlaySquareOutlined,
  ClockCircleOutlined,
  VideoCameraOutlined,
  HistoryOutlined,
  FlagOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import { usePathname, useRouter } from "next/navigation";
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
    const path = pathname?.split("/")[1] || "/";
    setSelectedKeys([`/${path}`]);
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
        {/* New Post Button */}
        {!collapsed && (
          <button
            className="sidebar-new-post-btn"
            onClick={() => router.push("/new-post")}
          >
            + New post
          </button>
        )}

        {/* Main Feed */}
        <Menu
          theme="light"
          mode="inline"
          selectedKeys={selectedKeys}
          onClick={({ key }) => router.push(key)}
          className="sidebar-menu"
          items={[
            {
              key: "/",
              icon: <HomeOutlined />,
              label: "My feed",
            },
            {
              key: "/following",
              icon: <VideoCameraOutlined />,
              label: "Following",
            },
            {
              key: "/explore",
              icon: <PlaySquareOutlined />,
              label: "Explore",
            },
            {
              key: "/history",
              icon: <HistoryOutlined />,
              label: "History",
            },
          ]}
        />

        {/* Custom feeds */}
        {!collapsed && (
          <>
            <div className="menu-divider" />
            <div className="sidebar-section-title">Custom feeds</div>
            <Menu
              theme="light"
              mode="inline"
              className="sidebar-menu"
              items={[
                {
                  key: "/custom-feed",
                  icon: <PlaySquareOutlined />,
                  label: "Custom feed",
                },
              ]}
              onClick={({ key }) => router.push(key)}
            />
          </>
        )}

        {/* Network */}
        {!collapsed && (
          <>
            <div className="menu-divider" />
            <div className="sidebar-section-title">Network</div>
            <Menu
              theme="light"
              mode="inline"
              className="sidebar-menu"
              items={[
                {
                  key: "/find-squads",
                  icon: <FlagOutlined />,
                  label: "Find Squads",
                },
                {
                  key: "/new-squad",
                  icon: <PlusOutlined />,
                  label: "New Squad",
                },
              ]}
              onClick={({ key }) => router.push(key)}
            />
          </>
        )}

        {/* Bookmarks */}
        {!collapsed && (
          <>
            <div className="menu-divider" />
            <div className="sidebar-section-title">Bookmarks</div>
            <Menu
              theme="light"
              mode="inline"
              className="sidebar-menu"
              items={[
                {
                  key: "/quick-saves",
                  icon: <ClockCircleOutlined />,
                  label: "Quick saves",
                },
                {
                  key: "/read-it-later",
                  icon: <HistoryOutlined />,
                  label: "Read it later",
                },
                {
                  key: "/new-folder",
                  icon: <PlusOutlined />,
                  label: "New folder",
                },
              ]}
              onClick={({ key }) => router.push(key)}
            />
          </>
        )}

        {/* Footer giữ nguyên */}
        {!collapsed && (
          <>
            <div className="menu-divider" />
            <div className="sidebar-footer">
              <div className="footer-link">About</div>
              <div className="footer-link">Press</div>
              <div className="footer-link">Copyright</div>
              <div className="footer-link">Contact</div>
              <div className="footer-link">Terms</div>
              <div className="footer-link">Privacy</div>
              <div className="footer-copyright">© 2024 Social Network CV</div>
            </div>
          </>
        )}
      </div>
    </Sider>
  );
};

export default SiderComponent;
