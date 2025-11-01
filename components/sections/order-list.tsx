"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ordersData } from "@/config/contact";
import { MdMoreHoriz } from "react-icons/md";
import { PiPlusBold,PiFunnelSimpleBold,PiArrowsDownUpBold,PiCalendarBlankDuotone } from "react-icons/pi";
import { cn } from "@/lib/utils";
import { SearchInput, Pagination, StatusBadge, CustomCheckbox } from "@/components/shared";

const ITEMS_PER_PAGE = 10;

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


  return (
    <div className="p-4 sm:p-6 md:p-8 bg-white dark:bg-[#1C1C1C]">
      <h1 className="text-sm font-semibold text-gray-900 dark:text-gray-100 mb-4 sm:mb-6">Order List</h1>

      {/* Action Bar */}
      <Card className="mb-4 sm:mb-6">
        <div className="px-2 py-2 bg-[#F7F9FB] dark:bg-[#272727] rounded-lg flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div className="flex items-center gap-2 sm:gap-3">
            <Button size="icon" variant="ghost" className="h-10 w-10">
              <PiPlusBold className="w-4 h-4"/>
            </Button>
            <Button size="icon" variant="ghost" className="h-8 w-8">
              <PiFunnelSimpleBold className="w-4 h-4"/>
            </Button>
            <Button size="icon" variant="ghost" className="h-8 w-8">
              <PiArrowsDownUpBold className="w-4 h-4"/>
            </Button>
          </div>
          <SearchInput
            value={searchQuery}
            onChange={(value) => {
              setSearchQuery(value);
              setCurrentPage(1);
            }}
            placeholder="Search"
            className="w-1/6"
          />
        </div>
      </Card>

      {/* Table */}
      <Card>
        <div className="overflow-x-auto -mx-4 sm:mx-0">
          <div className="inline-block min-w-full align-middle">
              <table className="min-w-full divide-y divide-gray-200 dark:divide-[#333333]">
              <thead>
                    <tr className="bg-white dark:bg-[#1C1C1C]">
                    <th className="text-left h-12 py-2 px-3 flex items-center justify-start text-[#A4A4A4] dark:text-gray-300">
                      <CustomCheckbox
                        checked={
                          currentOrders.length > 0 &&
                          currentOrders.every((order) => selectedOrders.has(order.id))
                        }
                        onChange={(e) => handleSelectAll(e.target.checked)}
                      />
                    </th>
                  <th className="text-left py-3 px-3 text-xs font-normal text-[#A4A4A4] dark:text-[#777777] whitespace-nowrap">
                    Order ID
                  </th>
                  <th className="text-left py-3 px-3 text-xs font-normal text-[#A4A4A4] dark:text-[#777777] whitespace-nowrap">
                    User
                  </th>
                  <th className="text-left py-3 px-3 text-xs font-normal text-[#A4A4A4] dark:text-[#777777] whitespace-nowrap hidden md:table-cell">
                    Project
                  </th>
                  <th className="text-left py-3 px-3 text-xs font-normal text-[#A4A4A4] dark:text-[#777777] whitespace-nowrap hidden lg:table-cell">
                    Address
                  </th>
                  <th className="text-left py-3 px-3 text-xs font-normal text-[#A4A4A4] dark:text-[#777777] whitespace-nowrap hidden sm:table-cell">
                    Date
                  </th>
                  <th className="text-left py-3 px-3 text-xs font-normal text-[#A4A4A4] dark:text-[#777777] whitespace-nowrap">
                    Status
                  </th>
                </tr>
              </thead>
                <tbody className="divide-y divide-gray-100 dark:divide-[#333333] bg-white dark:bg-[#1C1C1C]">
                {currentOrders.map((order) => (
                  <tr
                    key={order.id}
                      className={cn(
                        "group hover:bg-gray-50 dark:hover:bg-[#333333] transition-colors h-12",
                        selectedOrders.has(order.id) && "bg-blue-50 dark:bg-[#333333]"
                      )}
                  >
                    <td className="py-2 px-3 flex items-center justify-start h-12">
                      <CustomCheckbox
                        checked={selectedOrders.has(order.id)}
                        onChange={(e) => handleSelectOrder(order.id, e.target.checked)}
                      />
                    </td>
                    <td className="py-2 px-3">
                      <span className="text-xs font-medium text-gray-900 dark:text-gray-100 whitespace-nowrap">{order.id}</span>
                    </td>
                    <td className="py-2 px-3">
                      <div className="flex items-center gap-2 sm:gap-3">
                        <div className="relative w-7 h-7 sm:w-8 sm:h-8 rounded-full overflow-hidden bg-gray-100 dark:bg-[#333333] shrink-0">
                          <Image
                            src={order.user.avatar}
                            alt={order.user.name}
                            fill
                            className="object-cover"
                            quality={100}
                            unoptimized
                          />
                        </div>
                        <span className="text-xs text-gray-900 dark:text-gray-100 whitespace-nowrap">{order.user.name}</span>
                      </div>
                    </td>
                    <td className="py-2 px-3 hidden md:table-cell">
                      <span className="text-xs text-gray-900 dark:text-gray-100 font-normal">{order.project}</span>
                    </td>
                    <td className="py-2 px-3 hidden lg:table-cell">
                      <span className="text-xs text-gray-900 dark:text-gray-100">{order.address}</span>
                    </td>
                    <td className="py-2 px-3 hidden sm:table-cell">
                      <div className="flex items-center gap-2">
                        <PiCalendarBlankDuotone className="w-4 h-4" />
                        <span className="text-xs text-gray-900 dark:text-gray-100 whitespace-nowrap">{order.date}</span>
                      </div>
                    </td>
                      <td className="py-2 px-3">
                      <div className="flex items-center justify-between">
                        <StatusBadge status={order.status} />
                        <button className="opacity-0 group-hover:opacity-100 transition-opacity text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 ml-2">
                          <MdMoreHoriz className="text-lg" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Pagination */}
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </Card>
    </div>
  );
};

