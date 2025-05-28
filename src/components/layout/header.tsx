"use client";

import "@/styles/clerk-buttons.scss";
import { MenuOutlined } from "@ant-design/icons";
import {
  SignedIn,
  SignedOut,
  useAuth,
  UserButton,
  useUser,
} from "@clerk/nextjs";
import { Button, Layout, Menu } from "antd";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import LocaleSwitcher from "../changeLanguage";
import AuthButtons from "../auth/AuthButtons";
import "./index.scss";
import { Role } from "@/dtos/auth/auth.dto";

const { Header } = Layout;

interface HeaderProps {
  collapsed?: boolean;
  setCollapsed?: (collapsed: boolean) => void;
}

const HeaderComponent: React.FC<HeaderProps> = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
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
  const { user } = useUser();
  const { getToken } = useAuth();

  const fetchUserData = async () => {
    try {
      // Get the token from Clerk with all claims including custom ones
      const clerkToken = await getToken({ template: "default" });

      console.log("Clerk Token:", clerkToken);
      console.log("User ID:", user?.unsafeMetadata);
    } catch (error) {
      console.error("Error fetching token and claims:", error);
    }
  };

  useEffect(() => {
    if (isSignedIn) {
      fetchUserData();
    }
  }, [isSignedIn, router]);

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
            <UserButton />
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
