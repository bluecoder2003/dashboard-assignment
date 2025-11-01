"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { MdSearch, MdMenu } from "react-icons/md";
import { useTheme } from "./theme-provider";
import { PiMoonDuotone, PiSidebarDuotone, PiStarDuotone, PiSunDimDuotone, PiBellDuotone, PiClockCounterClockwiseDuotone } from "react-icons/pi";

interface TopBarProps {
  onMenuClick?: () => void;
  onNotificationClick?: () => void;
  showRightSidebar?: boolean;
}

export const TopBar = ({ onMenuClick, onNotificationClick }: TopBarProps) => {
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();
  
  const getPageTitle = () => {
    if (pathname === "/") return "Default";
    if (pathname === "/ecommerce") return "eCommerce";
    return "Default";
  };

  return (
    <div className="h-16 bg-white dark:bg-black border-b border-gray-200 dark:border-gray-800 flex items-center justify-between px-6">
      <div className="flex items-center gap-2">
        {/* Mobile menu button */}
        <button
          onClick={onMenuClick}
          className="lg:hidden p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
        >
          <MdMenu className="text-gray-600 dark:text-gray-400 text-xl" />
        </button>
        
        {/* Left icons */}
        <div className="hidden lg:flex items-center gap-2">
          <button 
            onClick={onMenuClick}
            className="p-1.5 hover:bg-gray-100 dark:hover:bg-gray-800 rounded transition-colors"
          >
            <PiSidebarDuotone className="text-gray-600 dark:text-gray-400 text-lg" />
          </button>
          <button className="p-1.5 hover:bg-gray-100 dark:hover:bg-gray-800 rounded transition-colors">
            <PiStarDuotone className="text-gray-600 dark:text-gray-400 text-lg" />
          </button>
        </div>
        
        {/* Breadcrumbs */}
        <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
          <span className="text-[#A4A4A4] dark:text-gray-300 font-normal">Dashboards</span>
          <span className="text-[#A4A4A4] dark:text-gray-300 font-normal">/</span>
          <span className="text-gray-900 dark:text-gray-300 font-normal">{getPageTitle()}</span>
        </div>
      </div>
      
      <div className="flex items-center gap-3">
        {/* Search bar */}
        <div className="hidden md:flex items-center gap-2 px-3 py-2 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 w-fit">
          <MdSearch className="text-gray-400 dark:text-gray-500" />
          <input
            type="text"
            placeholder="Search"
            className="bg-transparent outline-none text-sm text-gray-900 dark:text-gray-300 placeholder:text-gray-400 dark:placeholder:text-gray-500"
          />
          <span className="text-xs text-gray-400 dark:text-gray-500">⌘/</span>
        </div>
        
        {/* Right icons */}
        <div className="flex items-center gap-2">
          {/* Mobile search button */}
          <button className="md:hidden p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors">
            <MdSearch className="text-gray-600 dark:text-gray-400" />
          </button>
          
          <button 
            onClick={toggleTheme}
            className="p-1.5 hover:bg-gray-100 dark:hover:bg-gray-800 rounded transition-colors"
            aria-label="Toggle theme"
          >
            {theme === "light" ? (
              <PiSunDimDuotone className="text-gray-600 text-lg dark:text-gray-400" />
            ) : (
              <PiMoonDuotone className="text-gray-600 text-lg dark:text-gray-400" />
            )}
          </button>
          
          <button 
            className="p-1.5 hover:bg-gray-100 dark:hover:bg-gray-800 rounded transition-colors"
          >
            <PiBellDuotone className="text-gray-600 text-lg dark:text-gray-400" />
          </button>
          
          <button 
            className="p-1.5 hover:bg-gray-100 dark:hover:bg-gray-800 rounded transition-colors"
          >
            <PiClockCounterClockwiseDuotone className="text-gray-600 text-lg dark:text-gray-400" />
          </button>
          
          <button 
            onClick={onNotificationClick}
            className="p-1.5 hover:bg-gray-100 dark:hover:bg-gray-800 rounded transition-colors"
          >
            <PiSidebarDuotone className="text-gray-600 dark:text-gray-400 text-lg" />
          </button>
        </div>
      </div>
    </div>
  );
};

