"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ordersData, Order } from "@/config/contact";
import {
  MdAdd,
  MdMenu,
  MdFilterList,
  MdSearch,
  MdChevronLeft,
  MdChevronRight,
  MdCalendarToday,
  MdMoreVert,
  MdDelete,
} from "react-icons/md";
import { cn } from "@/lib/utils";

const ITEMS_PER_PAGE = 10;

const getStatusColor = (status: Order["status"]) => {
  switch (status) {
    case "In Progress":
      return "bg-blue-500";
    case "Complete":
      return "bg-green-500";
    case "Pending":
      return "bg-cyan-400";
    case "Approved":
      return "bg-orange-500";
    case "Rejected":
      return "bg-red-500";
    default:
      return "bg-gray-500";
  }
};

export const OrderList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedOrders, setSelectedOrders] = useState<Set<string>>(new Set());
  const [searchQuery, setSearchQuery] = useState("");

  const filteredOrders = ordersData.filter(
    (order) =>
      order.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      order.user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      order.project.toLowerCase().includes(searchQuery.toLowerCase()) ||
      order.address.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const totalPages = Math.ceil(filteredOrders.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentOrders = filteredOrders.slice(startIndex, endIndex);

  const handleSelectAll = (checked: boolean) => {
    if (checked) {
      setSelectedOrders(new Set(currentOrders.map((order) => order.id)));
    } else {
      setSelectedOrders(new Set());
    }
  };

  const handleSelectOrder = (orderId: string, checked: boolean) => {
    const newSelected = new Set(selectedOrders);
    if (checked) {
      newSelected.add(orderId);
    } else {
      newSelected.delete(orderId);
    }
    setSelectedOrders(newSelected);
  };

  const goToPage = (page: number) => {
    setCurrentPage(Math.max(1, Math.min(page, totalPages)));
  };

  const getPageNumbers = () => {
    const pages: (number | string)[] = [];
    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 3) {
        pages.push(1, 2, 3, 4, "...", totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(1, "...", totalPages - 3, totalPages - 2, totalPages - 1, totalPages);
      } else {
        pages.push(1, "...", currentPage - 1, currentPage, currentPage + 1, "...", totalPages);
      }
    }
    return pages;
  };

  return (
    <div className="p-4 sm:p-6 md:p-8">
      <h1 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4 sm:mb-6">Order List</h1>

      {/* Action Bar */}
      <Card className="mb-4 sm:mb-6">
        <div className="p-3 sm:p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-0">
          <div className="flex items-center gap-2 sm:gap-3">
            <Button size="icon" variant="outline" className="h-9 w-9 sm:h-10 sm:w-10">
              <MdAdd />
            </Button>
            <Button size="icon" variant="ghost" className="h-9 w-9 sm:h-10 sm:w-10">
              <MdMenu className="text-gray-600" />
            </Button>
            <Button size="icon" variant="ghost" className="h-9 w-9 sm:h-10 sm:w-10">
              <MdFilterList className="text-gray-600" />
            </Button>
            <Button size="icon" variant="ghost" className="hidden sm:flex h-9 w-9 sm:h-10 sm:w-10">
              <svg
                className="w-5 h-5 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"
                />
              </svg>
            </Button>
          </div>
          <div className="flex items-center gap-2 px-3 py-2 bg-gray-50 dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600 w-full sm:w-64">
            <MdSearch className="text-gray-400 dark:text-gray-500" />
            <input
              type="text"
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setCurrentPage(1);
              }}
              className="bg-transparent outline-none text-sm flex-1 text-gray-900 dark:text-gray-100 placeholder:text-gray-400 dark:placeholder:text-gray-500"
            />
          </div>
        </div>
      </Card>

      {/* Table */}
      <Card>
        <div className="overflow-x-auto -mx-4 sm:mx-0">
          <div className="inline-block min-w-full align-middle">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
              <thead className="bg-gray-50 dark:bg-gray-700">
                <tr>
                  <th className="text-left py-3 sm:py-4 px-3 sm:px-6 w-12">
                    <input
                      type="checkbox"
                      checked={
                        currentOrders.length > 0 &&
                        currentOrders.every((order) => selectedOrders.has(order.id))
                      }
                      onChange={(e) => handleSelectAll(e.target.checked)}
                      className="w-4 h-4 rounded border-gray-300"
                    />
                  </th>
                  <th className="text-left py-3 sm:py-4 px-3 sm:px-4 text-xs sm:text-sm font-semibold text-gray-700 dark:text-gray-300 whitespace-nowrap">
                    Order ID
                  </th>
                  <th className="text-left py-3 sm:py-4 px-3 sm:px-4 text-xs sm:text-sm font-semibold text-gray-700 dark:text-gray-300 whitespace-nowrap">
                    User
                  </th>
                  <th className="text-left py-3 sm:py-4 px-3 sm:px-4 text-xs sm:text-sm font-semibold text-gray-700 dark:text-gray-300 whitespace-nowrap hidden md:table-cell">
                    Project
                  </th>
                  <th className="text-left py-3 sm:py-4 px-3 sm:px-4 text-xs sm:text-sm font-semibold text-gray-700 dark:text-gray-300 whitespace-nowrap hidden lg:table-cell">
                    Address
                  </th>
                  <th className="text-left py-3 sm:py-4 px-3 sm:px-4 text-xs sm:text-sm font-semibold text-gray-700 dark:text-gray-300 whitespace-nowrap hidden sm:table-cell">
                    Date
                  </th>
                  <th className="text-left py-3 sm:py-4 px-3 sm:px-4 text-xs sm:text-sm font-semibold text-gray-700 dark:text-gray-300 whitespace-nowrap">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 dark:divide-gray-700 bg-white dark:bg-gray-800">
                {currentOrders.map((order) => (
                  <tr
                    key={order.id}
                    className={cn(
                      "hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors",
                      selectedOrders.has(order.id) && "bg-blue-50 dark:bg-gray-700"
                    )}
                  >
                    <td className="py-3 sm:py-4 px-3 sm:px-6">
                      <input
                        type="checkbox"
                        checked={selectedOrders.has(order.id)}
                        onChange={(e) => handleSelectOrder(order.id, e.target.checked)}
                        className="w-4 h-4 rounded border-gray-300"
                      />
                    </td>
                    <td className="py-3 sm:py-4 px-3 sm:px-4">
                      <span className="text-xs sm:text-sm font-medium text-gray-900 dark:text-gray-100 whitespace-nowrap">{order.id}</span>
                    </td>
                    <td className="py-3 sm:py-4 px-3 sm:px-4">
                      <div className="flex items-center gap-2 sm:gap-3">
                        <div className="relative w-7 h-7 sm:w-8 sm:h-8 rounded-full overflow-hidden bg-gray-100 dark:bg-gray-700 shrink-0">
                          <Image
                            src={order.user.avatar}
                            alt={order.user.name}
                            fill
                            className="object-cover"
                            quality={100}
                            unoptimized
                          />
                        </div>
                        <span className="text-xs sm:text-sm text-gray-900 dark:text-gray-100 whitespace-nowrap">{order.user.name}</span>
                      </div>
                    </td>
                    <td className="py-3 sm:py-4 px-3 sm:px-4 hidden md:table-cell">
                      <span className="text-xs sm:text-sm text-gray-900 dark:text-gray-100">{order.project}</span>
                    </td>
                    <td className="py-3 sm:py-4 px-3 sm:px-4 hidden lg:table-cell">
                      <div className="flex items-center gap-2">
                        <span className="text-xs sm:text-sm text-gray-900 dark:text-gray-100">{order.address}</span>
                        {order.id === "#CM9805" && (
                          <button className="text-gray-400 dark:text-gray-500 hover:text-red-500 dark:hover:text-red-400">
                            <MdDelete className="text-sm" />
                          </button>
                        )}
                      </div>
                    </td>
                    <td className="py-3 sm:py-4 px-3 sm:px-4 hidden sm:table-cell">
                      <div className="flex items-center gap-2">
                        <MdCalendarToday className="text-gray-400 dark:text-gray-500 text-xs sm:text-sm" />
                        <span className="text-xs sm:text-sm text-gray-900 dark:text-gray-100 whitespace-nowrap">{order.date}</span>
                      </div>
                    </td>
                    <td className="py-3 sm:py-4 px-3 sm:px-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1 sm:gap-2">
                          <div
                            className={cn("w-2 h-2 rounded-full shrink-0", getStatusColor(order.status))}
                          ></div>
                          <span className="text-xs sm:text-sm text-gray-900 dark:text-gray-100 whitespace-nowrap">{order.status}</span>
                        </div>
                        {order.id === "#CM9805" && (
                          <button className="text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 ml-2">
                            <MdMoreVert className="text-lg" />
                          </button>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-center sm:justify-end gap-1 sm:gap-2 p-3 sm:p-4 border-t border-gray-200 dark:border-gray-700 flex-wrap">
          <Button
            size="sm"
            variant="ghost"
            onClick={() => goToPage(currentPage - 1)}
            disabled={currentPage === 1}
            className="h-8 w-8 p-0"
          >
            <MdChevronLeft />
          </Button>
          {getPageNumbers().map((page, index) => (
            <React.Fragment key={index}>
              {typeof page === "number" ? (
                <Button
                  size="sm"
                  variant={currentPage === page ? "default" : "ghost"}
                  onClick={() => goToPage(page)}
                  className={cn(
                    "min-w-[32px] h-8 text-xs sm:text-sm",
                    currentPage === page && "bg-gray-900 dark:bg-gray-700 text-white hover:bg-gray-800 dark:hover:bg-gray-600"
                  )}
                >
                  {page}
                </Button>
              ) : (
                <span className="px-1 sm:px-2 text-gray-400 dark:text-gray-500 text-xs sm:text-sm">...</span>
              )}
            </React.Fragment>
          ))}
          <Button
            size="sm"
            variant="ghost"
            onClick={() => goToPage(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="h-8 w-8 p-0"
          >
            <MdChevronRight />
          </Button>
        </div>
      </Card>
    </div>
  );
};

