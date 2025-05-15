"use client";

import { Layout, Menu } from "antd";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import LocaleSwitcher from "../changeLanguage";
import "./index.scss";

const { Header } = Layout;

interface HeaderProps {
  collapsed?: boolean;
  setCollapsed?: (collapsed: boolean) => void;
}

const HeaderComponent: React.FC<HeaderProps> = () => {
  const [scrolled, setScrolled] = useState(false);

  const menuItems = [
    { key: "home", label: <Link href="/">Trang chủ</Link> },
    { key: "about", label: <Link href="/gioi_thieu  ">Giới thiệu</Link> },
    { key: "services", label: <Link href="/dich_vu">Dịch vụ</Link> },
    {
      key: "projects",
      label: <Link href="/du_an_noi_bat">Dự án nổi bật</Link>,
    },
    { key: "pricing", label: <Link href="/bao_gia">Báo giá</Link> },
    { key: "blog", label: <Link href="/blog">Blog</Link> },
    { key: "contact", label: <Link href="/lien_he">Liên hệ</Link> },
  ];

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <Header className={`site-header main-header${scrolled ? " scrolled" : ""}`}>
      <div className="header-content">
        <div className="logo-container">
          <Link href="/">
            <Image
              src="/assets/image/logo.png"
              alt="Pathway Logo"
              width={100}
              height={50}
              priority
            />
          </Link>
        </div>

        <div className="desktop-menu">
          <Menu mode="horizontal" className="main-menu" items={menuItems} />
        </div>

        <div className="header-right">
          <LocaleSwitcher />
        </div>
      </div>
    </Header>
  );
};

export default HeaderComponent;
