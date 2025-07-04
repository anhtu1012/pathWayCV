"use client";

import { Role } from "@/dtos/auth/auth.dto";
import { clearAuthData, setAuthData } from "@/lib/store/slices/loginSlice";
import AuthServices from "@/services/auth/api.service";
import "@/styles/clerk-buttons.scss";
import { setCookie } from "@/utils/client/getCookie";
import { MenuOutlined } from "@ant-design/icons";
import { SignedIn, SignedOut, useAuth, UserButton } from "@clerk/nextjs";
import { Button, Layout, Menu } from "antd";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
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
  const t = useTranslations("Header");
  const dispatch = useDispatch();
  const fetchUserMe = async () => {
    try {
      const res = await AuthServices.getUser();
      dispatch(clearAuthData());
      dispatch(setAuthData(res.data));
    } catch (error) {
      console.log("Error fetching user data:", error);
    }
  };
  useEffect(() => {
    if (isSignedIn) {
      fetchUserMe();
    }
  }, [isSignedIn, dispatch]);
  const menuItems = [
    { key: "home", label: <Link href="/">{t("menu.home")}</Link> },
    { key: "about", label: <Link href="/gioi_thieu">{t("menu.about")}</Link> },
    {
      key: "services",
      label: <Link href="/dich_vu">{t("menu.services")}</Link>,
    },
    {
      key: "projects",
      label: <Link href="/du_an_noi_bat">{t("menu.projects")}</Link>,
    },
    { key: "pricing", label: <Link href="/bao_gia">{t("menu.pricing")}</Link> },
    { key: "blog", label: <Link href="/blog">{t("menu.blog")}</Link> },
    { key: "contact", label: <Link href="/lien_he">{t("menu.contact")}</Link> },
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
