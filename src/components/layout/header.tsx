"use client";

import { Role } from "@/dtos/auth/auth.dto";
import "@/styles/clerk-buttons.scss";
import { setCookie } from "@/utils/client/getCookie";
import { MenuOutlined } from "@ant-design/icons";
import { SignedIn, SignedOut, useAuth, UserButton } from "@clerk/nextjs";
import { Button, Layout, Menu } from "antd";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import AuthButtons from "../auth/AuthButtons";
import LocaleSwitcher from "../changeLanguage";
import "./index.scss";

const { Header } = Layout;

interface HeaderProps {
  collapsed?: boolean;
  setCollapsed?: (collapsed: boolean) => void;
}

const HeaderComponent: React.FC<HeaderProps> = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false);
  const pathname = usePathname();
  const { isSignedIn } = useAuth();

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

  // Close mobile menu when path changes
  useEffect(() => {
    setMobileMenuVisible(false);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Force light mode on component mount
  useEffect(() => {
    // Remove dark mode class if it exists
    document.documentElement.classList.remove("dark");
    document.body.classList.remove("dark");
    // Set light mode class if needed
    document.documentElement.classList.add("light");
    document.body.classList.add("light");

    // If using localStorage to track theme preference, update it
    localStorage.setItem("theme", "light");
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuVisible(!mobileMenuVisible);
  };
  const { getToken } = useAuth();

  const fetchUserData = async () => {
    try {
      const clerkToken = await getToken({ template: "default" });
      setCookie("token", clerkToken, 9999);
    } catch (error) {
      console.error("Error fetching token and claims:", error);
    }
  };

  useEffect(() => {
    if (isSignedIn) {
      fetchUserData();
    }
  }, [isSignedIn]);

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

        <Button
          className="mobile-menu-button"
          type="text"
          icon={<MenuOutlined />}
          onClick={toggleMobileMenu}
        />

        <div className="header-right">
          <LocaleSwitcher />

          <SignedIn>
            <UserButton
              afterSignOutUrl="/"
              appearance={{
                elements: {
                  userButtonAvatarBox: "h-10 w-10",
                  userButtonTrigger: "cursor-pointer focus:shadow-none",
                },
              }}
              userProfileUrl="/profile"
              userProfileMode="navigation"
              showName={false}
            />
          </SignedIn>

          <SignedOut>
            <AuthButtons signUpRole={Role.Customer} />
          </SignedOut>
        </div>
      </div>

      {mobileMenuVisible && (
        <div className="mobile-menu">
          <Menu mode="vertical" items={menuItems} />
        </div>
      )}
    </Header>
  );
};

export default HeaderComponent;
