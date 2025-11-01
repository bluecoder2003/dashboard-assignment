"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  MdDashboard,
  MdShoppingCart,
  MdFolder,
  MdSchool,
  MdPerson,
  MdGroup,
  MdBusiness,
  MdArticle,
  MdChat,
  MdChevronRight,
  MdKeyboardArrowDown,
  MdClose,
} from "react-icons/md";

interface NavItem {
  name: string;
  icon?: React.ReactNode;
  href?: string;
  children?: NavItem[];
}

interface NavSectionProps {
  title: string;
  items: NavItem[];
}

const NavSection = ({ title, items }: NavSectionProps) => {
  const pathname = usePathname();
  const [expanded, setExpanded] = useState<{ [key: string]: boolean }>({
    "User Profile": true,
  });

  const toggleExpand = (name: string) => {
    setExpanded((prev) => ({ ...prev, [name]: !prev[name] }));
  };

  const isActive = (item: NavItem) => {
    if (item.href === "/") return pathname === "/";
    return item.href ? pathname === item.href : false;
  };

  return (
    <div className="mb-6">
      {title && (
        <h3 className="mb-3 px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">
          {title}
        </h3>
      )}
      <ul className="space-y-0.5">
        {items.map((item) => (
          <li key={item.name}>
            {item.href ? (
              <Link
                href={item.href}
                className={cn(
                  "w-full flex items-center gap-3 px-3 py-2.5 text-sm rounded-lg transition-colors",
                  isActive(item)
                    ? "bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white font-normal"
                    : "text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700/50"
                )}
              >
                {item.children && (
                  <MdChevronRight className="text-gray-400 text-base shrink-0" />
                )}
                {item.icon && <span className="text-base shrink-0">{item.icon}</span>}
                <span className="flex-1">{item.name}</span>
              </Link>
            ) : (
              <button
                onClick={() => item.children && toggleExpand(item.name)}
                className={cn(
                  "w-full flex items-center gap-3 px-3 py-2.5 text-sm rounded-lg transition-colors",
                  isActive(item)
                    ? "bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white font-normal"
                    : "text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700/50"
                )}
              >
                {item.children && (
                  expanded[item.name] ? (
                    <MdKeyboardArrowDown className="text-gray-400 text-base shrink-0" />
                  ) : (
                    <MdChevronRight className="text-gray-400 text-base shrink-0" />
                  )
                )}
                {item.icon && <span className="text-base shrink-0">{item.icon}</span>}
                <span className="flex-1">{item.name}</span>
              </button>
            )}
            {item.children && expanded[item.name] && (
              <ul className="ml-11 mt-1 space-y-1">
                {item.children.map((child) => (
                  <li key={child.name}>
                    {child.href ? (
                      <Link
                        href={child.href}
                        className={cn(
                          "block w-full text-left px-3 py-2 text-sm rounded-lg transition-colors",
                          isActive(child)
                            ? "text-gray-900 dark:text-white bg-gray-100 dark:bg-gray-700 font-normal"
                            : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700/50"
                        )}
                      >
                        {child.name}
                      </Link>
                    ) : (
                      <button className="w-full text-left px-3 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
                        {child.name}
                      </button>
                    )}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

interface NavigationProps {
  isOpen?: boolean;
  onClose?: () => void;
}

export const Navigation = ({ isOpen = true, onClose }: NavigationProps) => {
  const [activeTab, setActiveTab] = useState<"favorites" | "recently">("favorites");
  
  const favoritesItems: NavItem[] = [
    { name: "Overview" },
    { name: "Projects" },
  ];

  const dashboardItems: NavItem[] = [
    { name: "Default", icon: <MdDashboard />, href: "/" },
    { name: "eCommerce", icon: <MdShoppingCart />, href: "/ecommerce" },
    { name: "Projects", icon: <MdFolder />, href: "#" },
    { name: "Online Courses", icon: <MdSchool />, href: "#" },
  ];

  const pagesItems: NavItem[] = [
    {
      name: "User Profile",
      icon: <MdPerson />,
      children: [
        { name: "Overview" },
        { name: "Projects" },
        { name: "Campaigns" },
        { name: "Documents" },
        { name: "Followers" },
      ],
    },
  ];

  const accountItems: NavItem[] = [
    { name: "Account", icon: <MdGroup /> },
  ];

  const corporateItems: NavItem[] = [
    { name: "Corporate", icon: <MdBusiness /> },
  ];

  const blogItems: NavItem[] = [
    { name: "Blog", icon: <MdArticle /> },
  ];

  const socialItems: NavItem[] = [
    { name: "Social", icon: <MdChat /> },
  ];

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}
      
      {/* Sidebar */}
      <div
        className={cn(
          "fixed lg:static inset-y-0 left-0 z-50 w-[212px] h-screen bg-white dark:bg-[#1a1d1f] border-r border-gray-200 dark:border-gray-800 overflow-y-auto shrink-0 transition-transform duration-300 p-2",
          !isOpen && "-translate-x-full lg:translate-x-0"
        )}
      >
        {/* Header with Logo */}
        <div className="p-5 flex items-center justify-between ">
          <div className="flex items-center gap-2.5">
            <div className="relative w-6 h-6 shrink-0">
              <Image
                src="/ByeWind.png"
                alt="ByeWind"
                fill
                className="object-contain"
                quality={100}
                unoptimized
              />
            </div>
            <h1 className="text-sm font-normal text-[#1C1C1C] dark:text-white">ByeWind</h1>
          </div>
          <button
            onClick={onClose}
            className="lg:hidden p-1.5 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg"
          >
            <MdClose className="text-gray-600 dark:text-gray-400 text-lg" />
          </button>
        </div>

        {/* Tabs */}
        <div className="flex gap-1 px-2 pt-2 pb-2">
          <button
            onClick={() => setActiveTab("favorites")}
            className="text-sm font-normal py-1 px-2 rounded-lg transition-colors text-center text-[#A4A4A4] hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-700/50 dark:text-gray-400"
          >
            Favorites
          </button>
          <button
            onClick={() => setActiveTab("recently")}
            className="text-sm font-normal py-1 px-2 rounded-lg transition-colors text-center text-[#A4A4A4] hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-700/50 dark:text-gray-400"
          >
            Recently
          </button>
        </div>

        <nav className="px-3 pt-2 pb-4">
          {/* Favorites/Recently Items - Always visible */}
          <div className="mb-6">
            <ul className="space-y-1">
              {favoritesItems.map((item) => (
                <li key={item.name}>
                  <div className="flex items-center gap-2 px-3 py-2 text-sm text-gray-600 dark:text-gray-400">
                    <span className="text-xs">•</span>
                    <span>{item.name}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <NavSection title="Dashboards" items={dashboardItems} />
          <NavSection title="Pages" items={pagesItems} />
          <NavSection title="" items={[...accountItems, ...corporateItems, ...blogItems, ...socialItems]} />
        </nav>
      </div>
    </>
  );
};

