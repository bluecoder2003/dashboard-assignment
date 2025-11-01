"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { MdSearch, MdLightMode, MdDarkMode, MdRefresh, MdNotifications, MdApps, MdMenu } from "react-icons/md";
import { useTheme } from "./theme-provider";

interface TopBarProps {
  onMenuClick?: () => void;
  onNotificationClick?: () => void;
  showRightSidebar?: boolean;
}

export const TopBar = ({ onMenuClick, onNotificationClick, showRightSidebar }: TopBarProps) => {
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();
  
  const getPageTitle = () => {
    if (pathname === "/") return "Default";
    if (pathname === "/ecommerce") return "Default";
    return "Default";
  };

  return (
    <div className="h-16 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between px-4 md:px-6">
      <div className="flex items-center gap-3">
        {/* Mobile menu button */}
        <button
          onClick={onMenuClick}
          className="lg:hidden p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
        >
          <MdMenu className="text-gray-600 dark:text-gray-400 text-xl" />
        </button>
        
        <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
          <span className="hidden sm:inline">Dashboards</span>
          <span className="hidden sm:inline">/</span>
          <span className="text-gray-900 dark:text-gray-100 font-medium">{getPageTitle()}</span>
        </div>
      </div>
      
      <div className="flex items-center gap-2 md:gap-4">
        {/* Search - hidden on mobile */}
        <div className="hidden md:flex items-center gap-2 px-3 py-2 bg-gray-50 dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600 w-48 lg:w-64">
          <MdSearch className="text-gray-400 dark:text-gray-500" />
          <input
            type="text"
            placeholder="Search"
            className="bg-transparent outline-none text-sm flex-1 text-gray-900 dark:text-gray-100 placeholder:text-gray-400 dark:placeholder:text-gray-500"
          />
          <span className="text-xs text-gray-400 dark:text-gray-500 hidden lg:inline">⌘/</span>
        </div>
        
        <div className="flex items-center gap-1 md:gap-2">
          {/* Mobile search button */}
          <button className="md:hidden p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors">
            <MdSearch className="text-gray-600 dark:text-gray-400" />
          </button>
          
          <button 
            onClick={toggleTheme}
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
            aria-label="Toggle theme"
          >
            {theme === "light" ? (
              <MdLightMode className="text-gray-600 dark:text-gray-400" />
            ) : (
              <MdDarkMode className="text-gray-600 dark:text-gray-400" />
            )}
          </button>
          
          <button className="hidden sm:block p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors">
            <MdRefresh className="text-gray-600 dark:text-gray-400" />
          </button>
          
          {showRightSidebar && (
            <button 
              onClick={onNotificationClick}
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
            >
              <MdNotifications className="text-gray-600 dark:text-gray-400" />
            </button>
          )}
          
          <button className="hidden sm:block p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors">
            <MdApps className="text-gray-600 dark:text-gray-400" />
          </button>
        </div>
      </div>
    </div>
  );
};

