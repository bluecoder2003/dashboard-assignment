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
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [isRightSidebarOpen, setIsRightSidebarOpen] = useState(false);
  const showRightSidebar = pathname === "/";

  return (
    <div className="flex h-screen overflow-hidden">
      <Navigation 
        isOpen={isMobileNavOpen} 
        onClose={() => setIsMobileNavOpen(false)} 
      />
      <div className="flex flex-col flex-1 overflow-hidden">
        <TopBar 
          onMenuClick={() => setIsMobileNavOpen(true)}
          onNotificationClick={() => setIsRightSidebarOpen(!isRightSidebarOpen)}
          showRightSidebar={showRightSidebar}
        />
        <div className="flex flex-1 overflow-hidden">
          <main className="flex-1 overflow-y-auto bg-gray-50 dark:bg-gray-900">
            {children}
          </main>
          {showRightSidebar && (
            <RightSidebar 
              isOpen={isRightSidebarOpen}
              onClose={() => setIsRightSidebarOpen(false)}
            />
          )}
        </div>
      </div>
    </div>
  );
};

