"use client";

import { initializeTheme } from "@/utils/theme-utils";
import { Layout } from "antd";
import React, { useEffect, useState } from "react";
import ClientOnly from "../ClientOnly";
import HeaderComponent from "./header";
import "./index.scss";
import SiderComponent from "./sider";

const { Content } = Layout;

interface AdminLayoutProps {
  children: React.ReactNode;
  showFooter?: boolean;
}

const AdminLayout: React.FC<AdminLayoutProps> = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);

  useEffect(() => {
    // Initialize theme from localStorage or system preference
    initializeTheme();

    // Check if window width is small enough to collapse sidebar by default
    const handleResize = () => {
      setCollapsed(window.innerWidth < 768);
    };

    // Run once and then listen for changes
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Render the layout with a stable structure for both server and client
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <ClientOnly>
        <HeaderComponent collapsed={collapsed} setCollapsed={setCollapsed} />
      </ClientOnly>

      <Layout>
        <ClientOnly>
          <SiderComponent collapsed={collapsed} />
        </ClientOnly>

        <Layout
          style={{
            marginLeft: collapsed ? 80 : 240,
            marginTop: 64,
            transition: "margin 0.2s",
          }}
        >
          <Content style={{ margin: "24px 16px", overflow: "initial" }}>
            <div className="content-container">{children}</div>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default AdminLayout;
