"use client";

import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { Navigation } from "./navigation";
import { TopBar } from "./top-bar";
import { RightSidebar } from "./right-sidebar";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  const pathname = usePathname();
  const [isNavOpen, setIsNavOpen] = useState(true);
  const [isRightSidebarOpen, setIsRightSidebarOpen] = useState(true);
  const showRightSidebar = pathname === "/";

  return (
    <div className="flex h-screen overflow-hidden">
      <Navigation 
        isOpen={isNavOpen} 
        onClose={() => setIsNavOpen(false)} 
      />
      <div className="flex flex-1 overflow-hidden">
        <div className="flex flex-col flex-1 overflow-hidden">
          <TopBar 
            onMenuClick={() => setIsNavOpen(!isNavOpen)}
            onNotificationClick={() => setIsRightSidebarOpen(!isRightSidebarOpen)}
            showRightSidebar={showRightSidebar}
          />
          <main className="flex-1 overflow-y-auto bg-gray-50 dark:bg-gray-900">
            {children}
          </main>
        </div>
        {showRightSidebar && (
          <RightSidebar 
            isOpen={isRightSidebarOpen}
            onClose={() => setIsRightSidebarOpen(false)}
          />
        )}
      </div>
    </div>
  );
};

