"use client";

import React, { useState, useEffect, useRef } from "react";
import { usePathname, useRouter } from "next/navigation";
import { MdSearch, MdMenu } from "react-icons/md";
import { useTheme } from "./theme-provider";
import { PiMoonDuotone, PiSidebarDuotone, PiStarDuotone, PiSunDimDuotone, PiBellDuotone, PiClockCounterClockwiseDuotone, PiPackageDuotone, PiShoppingCartDuotone } from "react-icons/pi";
import { ordersData } from "@/config/contact";
import { topSellingProducts } from "@/config/products-data";

interface TopBarProps {
  onMenuClick?: () => void;
  onNotificationClick?: () => void;
  showRightSidebar?: boolean;
}

interface SearchResult {
  id: string;
  title: string;
  subtitle: string;
  type: "order" | "product";
  link?: string;
}

export const TopBar = ({ onMenuClick, onNotificationClick }: TopBarProps) => {
  const pathname = usePathname();
  const router = useRouter();
  const { theme, toggleTheme } = useTheme();
  const [searchQuery, setSearchQuery] = useState("");
  const [showSearchResults, setShowSearchResults] = useState(false);
  const [showMobileSearch, setShowMobileSearch] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const mobileSearchRef = useRef<HTMLDivElement>(null);
  
  const getPageTitle = () => {
    if (pathname === "/") return "Default";
    if (pathname === "/ecommerce") return "eCommerce";
    return "Default";
  };

  // Search functionality
  const getSearchResults = (): SearchResult[] => {
    if (!searchQuery.trim()) return [];

    const query = searchQuery.toLowerCase();
    const results: SearchResult[] = [];

    // Search orders
    ordersData.forEach((order) => {
      if (
        order.id.toLowerCase().includes(query) ||
        order.user.name.toLowerCase().includes(query) ||
        order.project.toLowerCase().includes(query) ||
        order.address.toLowerCase().includes(query)
      ) {
        results.push({
          id: order.id,
          title: `${order.id} - ${order.user.name}`,
          subtitle: `${order.project} • ${order.status}`,
          type: "order",
          link: "/ecommerce",
        });
      }
    });

    // Search products
    topSellingProducts.forEach((product) => {
      if (product.name.toLowerCase().includes(query)) {
        results.push({
          id: product.name,
          title: product.name,
          subtitle: `${product.price} • Qty: ${product.quantity}`,
          type: "product",
        });
      }
    });

    return results.slice(0, 8); // Limit to 8 results
  };

  const searchResults = getSearchResults();

  // Handle click outside to close search results
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowSearchResults(false);
      }
      if (mobileSearchRef.current && !mobileSearchRef.current.contains(event.target as Node)) {
        setShowMobileSearch(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Keyboard shortcut (Cmd/Ctrl + /)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "/") {
        e.preventDefault();
        setShowSearchResults(true);
        // Focus search input
        const searchInput = document.getElementById("desktop-search-input") as HTMLInputElement;
        if (searchInput) searchInput.focus();
      }
      if (e.key === "Escape") {
        setShowSearchResults(false);
        setShowMobileSearch(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleSearchChange = (value: string) => {
    setSearchQuery(value);
    setShowSearchResults(value.length > 0);
  };

  const handleResultClick = (result: SearchResult) => {
    if (result.link) {
      router.push(result.link);
    }
    setSearchQuery("");
    setShowSearchResults(false);
    setShowMobileSearch(false);
  };

  return (
    <div className="h-16 bg-white dark:bg-[#1C1C1C] border-b border-gray-200 dark:border-[#333333] flex items-center justify-between px-6">
      <div className="flex items-center gap-2">
        {/* Mobile menu button */}
        <button
          onClick={onMenuClick}
          className="lg:hidden p-2 hover:bg-gray-100 dark:hover:bg-[#333333] rounded-lg transition-colors"
        >
          <MdMenu className="text-gray-600 dark:text-white text-xl" />
        </button>
        
        {/* Left icons */}
        <div className="hidden lg:flex items-center gap-2">
          <button 
            onClick={onMenuClick}
            className="p-1.5 hover:bg-gray-100 dark:hover:bg-[#333333] rounded transition-colors"
          >
            <PiSidebarDuotone className="text-gray-600 dark:text-white text-lg" />
          </button>
          <button className="p-1.5 hover:bg-gray-100 dark:hover:bg-[#333333] rounded transition-colors">
            <PiStarDuotone className="text-gray-600 dark:text-white text-lg" />
          </button>
        </div>
        
        {/* Breadcrumbs */}
        <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
          <span className="text-[#A4A4A4] dark:text-[#7E7E7E] font-normal">Dashboards</span>
          <span className="text-[#A4A4A4] dark:text-[#7E7E7E] font-normal">/</span>
          <span className="text-gray-900 dark:text-white font-normal">{getPageTitle()}</span>
        </div>
      </div>
      
      <div className="flex items-center gap-3">
        {/* Desktop Search bar */}
        <div className="hidden md:block relative" ref={searchRef}>
          <div className="flex items-center gap-2 px-3 py-2 bg-gray-50 dark:bg-[#333333] rounded-lg border border-gray-200 dark:border-[#494949] w-fit">
            <MdSearch className="text-gray-400 dark:text-[#7E7E7E]" />
            <input
              id="desktop-search-input"
              type="text"
              placeholder="Search orders, products..."
              value={searchQuery}
              onChange={(e) => handleSearchChange(e.target.value)}
              onFocus={() => searchQuery && setShowSearchResults(true)}
              className="bg-transparent outline-none text-sm text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-[#7E7E7E] w-48"
            />
            <span className="text-xs text-gray-400 dark:text-[#7E7E7E]">⌘/</span>
          </div>

          {/* Search Results Dropdown */}
          {showSearchResults && searchResults.length > 0 && (
            <div className="absolute top-full left-0 right-0 mt-2 bg-white dark:bg-[#1C1C1C] border border-gray-200 dark:border-[#333333] rounded-lg shadow-xl z-50 max-h-96 overflow-y-auto">
              <div className="p-2">
                {searchResults.map((result) => (
                  <button
                    key={result.id}
                    onClick={() => handleResultClick(result)}
                    className="w-full text-left px-3 py-2.5 rounded-lg hover:bg-gray-50 dark:hover:bg-[#272727] transition-colors flex items-start gap-3"
                  >
                    <div className="mt-0.5 shrink-0">
                      {result.type === "order" ? (
                        <PiShoppingCartDuotone className="text-blue-500 dark:text-blue-400 text-lg" />
                      ) : (
                        <PiPackageDuotone className="text-green-500 dark:text-green-400 text-lg" />
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-medium text-gray-900 dark:text-white truncate">
                        {result.title}
                      </div>
                      <div className="text-xs text-gray-500 dark:text-gray-400 truncate">
                        {result.subtitle}
                      </div>
                    </div>
                    <span className="text-xs text-gray-400 dark:text-gray-500 shrink-0">
                      {result.type}
                    </span>
                  </button>
                ))}
              </div>
              {searchResults.length === 8 && (
                <div className="px-3 py-2 text-xs text-gray-500 dark:text-gray-400 border-t border-gray-200 dark:border-[#333333]">
                  Showing first 8 results
                </div>
              )}
            </div>
          )}

          {/* No Results */}
          {showSearchResults && searchQuery && searchResults.length === 0 && (
            <div className="absolute top-full left-0 right-0 mt-2 bg-white dark:bg-[#1C1C1C] border border-gray-200 dark:border-[#333333] rounded-lg shadow-xl z-50 p-4">
              <div className="text-center text-sm text-gray-500 dark:text-gray-400">
                No results found for &ldquo;{searchQuery}&rdquo;
              </div>
            </div>
          )}
        </div>
        
        {/* Right icons */}
        <div className="flex items-center gap-2">
          {/* Mobile search button */}
          <button 
            onClick={() => setShowMobileSearch(!showMobileSearch)}
            className="md:hidden p-2 hover:bg-gray-100 dark:hover:bg-[#333333] rounded-lg transition-colors"
          >
            <MdSearch className="text-gray-600 dark:text-[#7E7E7E]" />
          </button>
          
          <button 
            onClick={toggleTheme}
            className="p-1.5 hover:bg-gray-100 dark:hover:bg-[#333333] rounded transition-colors"
            aria-label="Toggle theme"
          >
            {theme === "light" ? (
              <PiSunDimDuotone className="text-gray-600 text-lg dark:text-[#7E7E7E]" />
            ) : (
              <PiMoonDuotone className="text-gray-600 text-lg dark:text-white" />
            )}
          </button>
          
          <button 
            className="p-1.5 hover:bg-gray-100 dark:hover:bg-[#333333] rounded transition-colors"
          >
            <PiBellDuotone className="text-gray-600 text-lg dark:text-white" />
          </button>
          
          <button 
            className="p-1.5 hover:bg-gray-100 dark:hover:bg-[#333333] rounded transition-colors"
          >
            <PiClockCounterClockwiseDuotone className="text-gray-600 text-lg dark:text-white" />
          </button>
          
          <button 
            onClick={onNotificationClick}
            className="p-1.5 hover:bg-gray-100 dark:hover:bg-[#333333] rounded transition-colors"
          >
            <PiSidebarDuotone className="text-gray-600 dark:text-white text-lg" />
          </button>
        </div>
      </div>

      {/* Mobile Search Modal */}
      {showMobileSearch && (
        <div className="fixed inset-0 bg-black/50 z-50 md:hidden">
          <div className="bg-white dark:bg-[#1C1C1C] h-full flex flex-col">
            <div className="p-4 border-b border-gray-200 dark:border-[#333333]">
              <div ref={mobileSearchRef} className="flex items-center gap-2 px-3 py-2 bg-gray-50 dark:bg-[#333333] rounded-lg border border-gray-200 dark:border-[#494949]">
                <MdSearch className="text-gray-400 dark:text-[#7E7E7E]" />
                <input
                  type="text"
                  placeholder="Search orders, products..."
                  value={searchQuery}
                  onChange={(e) => handleSearchChange(e.target.value)}
                  autoFocus
                  className="bg-transparent outline-none text-sm text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-[#7E7E7E] flex-1"
                />
                <button
                  onClick={() => {
                    setShowMobileSearch(false);
                    setSearchQuery("");
                  }}
                  className="text-sm text-gray-500 dark:text-gray-400"
                >
                  Cancel
                </button>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto">
              {searchResults.length > 0 ? (
                <div className="p-2">
                  {searchResults.map((result) => (
                    <button
                      key={result.id}
                      onClick={() => handleResultClick(result)}
                      className="w-full text-left px-3 py-3 rounded-lg hover:bg-gray-50 dark:hover:bg-[#272727] transition-colors flex items-start gap-3 border-b border-gray-100 dark:border-[#333333] last:border-0"
                    >
                      <div className="mt-0.5 shrink-0">
                        {result.type === "order" ? (
                          <PiShoppingCartDuotone className="text-blue-500 dark:text-blue-400 text-xl" />
                        ) : (
                          <PiPackageDuotone className="text-green-500 dark:text-green-400 text-xl" />
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-sm font-medium text-gray-900 dark:text-white truncate">
                          {result.title}
                        </div>
                        <div className="text-xs text-gray-500 dark:text-gray-400 truncate">
                          {result.subtitle}
                        </div>
                      </div>
                      <span className="text-xs text-gray-400 dark:text-gray-500 shrink-0 mt-1">
                        {result.type}
                      </span>
                    </button>
                  ))}
                </div>
              ) : searchQuery ? (
                <div className="p-8 text-center">
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    No results found for &ldquo;{searchQuery}&rdquo;
                  </div>
                </div>
              ) : (
                <div className="p-8 text-center">
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    Start typing to search orders and products
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

