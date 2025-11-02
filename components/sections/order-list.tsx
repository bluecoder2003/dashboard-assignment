"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ordersData, Order } from "@/config/contact";
import {
  MdSearch,
  MdChevronLeft,
  MdChevronRight,
  MdMoreHoriz,
  MdClose,
} from "react-icons/md";
import { PiPlusBold,PiFunnelSimpleBold,PiArrowsDownUpBold,PiCalendarBlankDuotone } from "react-icons/pi";
import { cn } from "@/lib/utils";

const ITEMS_PER_PAGE = 10;

type SortField = "id" | "user" | "project" | "date" | "status";
type SortDirection = "asc" | "desc";

interface FilterState {
  status: Order["status"] | "All";
}

const getStatusColor = (status: Order["status"]) => {
  switch (status) {
    case "In Progress":
      return { dot: "bg-[#95A4FC]", text: "text-[#95A4FC]" };
    case "Complete":
      return { dot: "bg-[#4AA785]", text: "text-[#4AA785]" };
    case "Pending":
      return { dot: "bg-[#59A8D4]", text: "text-[#59A8D4]" };
    case "Approved":
      return { dot: "bg-[#FFC555]", text: "text-[#FFC555]" };
    case "Rejected":
      return { dot: "bg-[#A4A4A4]", text: "text-[#A4A4A4]" };
    default:
      return { dot: "bg-[#A4A4A4]", text: "text-[#A4A4A4]" };
  }
};

export const OrderList = () => {
  const [orders, setOrders] = useState<Order[]>(ordersData);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedOrders, setSelectedOrders] = useState<Set<string>>(new Set());
  const [searchQuery, setSearchQuery] = useState("");
  const [sortField, setSortField] = useState<SortField | null>(null);
  const [sortDirection, setSortDirection] = useState<SortDirection>("asc");
  const [filters, setFilters] = useState<FilterState>({ status: "All" });
  const [showFilterDropdown, setShowFilterDropdown] = useState(false);
  const [showSortDropdown, setShowSortDropdown] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);
  const [newOrder, setNewOrder] = useState<Partial<Order>>({
    id: "",
    user: { name: "", avatar: "/NataliCraig.png" },
    project: "",
    address: "",
    date: new Date().toLocaleDateString(),
    status: "Pending",
  });

  // Filter, sort, and search logic
  const processedOrders = useMemo(() => {
    let result = [...orders];

    // Apply search filter
    if (searchQuery) {
      result = result.filter(
        (order) =>
          order.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
          order.user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          order.project.toLowerCase().includes(searchQuery.toLowerCase()) ||
          order.address.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Apply status filter
    if (filters.status !== "All") {
      result = result.filter((order) => order.status === filters.status);
    }

    // Apply sorting
    if (sortField) {
      result.sort((a, b) => {
        let aValue: string | number;
        let bValue: string | number;

        switch (sortField) {
          case "id":
            aValue = a.id;
            bValue = b.id;
            break;
          case "user":
            aValue = a.user.name;
            bValue = b.user.name;
            break;
          case "project":
            aValue = a.project;
            bValue = b.project;
            break;
          case "date":
            aValue = a.date;
            bValue = b.date;
            break;
          case "status":
            aValue = a.status;
            bValue = b.status;
            break;
          default:
            return 0;
        }

        if (aValue < bValue) return sortDirection === "asc" ? -1 : 1;
        if (aValue > bValue) return sortDirection === "asc" ? 1 : -1;
        return 0;
      });
    }

    return result;
  }, [orders, searchQuery, filters, sortField, sortDirection]);

  const totalPages = Math.ceil(processedOrders.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentOrders = processedOrders.slice(startIndex, endIndex);

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

  const handleSort = (field: SortField) => {
    if (sortField === field) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setSortDirection("asc");
    }
    setShowSortDropdown(false);
  };

  const handleAddOrder = () => {
    if (newOrder.id && newOrder.user?.name && newOrder.project && newOrder.address) {
      const orderToAdd: Order = {
        id: newOrder.id,
        user: newOrder.user as { name: string; avatar: string },
        project: newOrder.project,
        address: newOrder.address,
        date: newOrder.date || new Date().toLocaleDateString(),
        status: newOrder.status || "Pending",
      };
      setOrders([orderToAdd, ...orders]);
      setShowAddModal(false);
      setNewOrder({
        id: "",
        user: { name: "", avatar: "/NataliCraig.png" },
        project: "",
        address: "",
        date: new Date().toLocaleDateString(),
        status: "Pending",
      });
    }
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
    <div className="p-4 sm:p-6 md:p-8 bg-white dark:bg-[#1C1C1C]">
      <h1 className="text-sm font-semibold text-gray-900 dark:text-gray-100 mb-4 sm:mb-6">Order List</h1>

      {/* Action Bar */}
      <Card className="mb-4 sm:mb-6">
        <div className="px-2 py-2 bg-[#F7F9FB] dark:bg-[#272727] rounded-lg flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div className="flex items-center gap-2 sm:gap-3 relative">
            <Button 
              size="icon" 
              variant="ghost" 
              className="h-10 w-10"
              onClick={() => setShowAddModal(true)}
              title="Add new order"
            >
              <PiPlusBold className="w-4 h-4"/>
            </Button>
            
            {/* Filter Dropdown */}
            <div className="relative">
              <Button 
                size="icon" 
                variant="ghost" 
                className="h-8 w-8"
                onClick={() => {
                  setShowFilterDropdown(!showFilterDropdown);
                  setShowSortDropdown(false);
                }}
                title="Filter orders"
              >
                <PiFunnelSimpleBold className="w-4 h-4"/>
              </Button>
              {showFilterDropdown && (
                <div className="absolute top-full left-0 mt-2 bg-white dark:bg-[#272727] border border-gray-200 dark:border-[#333333] rounded-lg shadow-lg z-50 min-w-[180px]">
                  <div className="p-2">
                    <div className="text-xs font-semibold text-gray-900 dark:text-gray-100 mb-2 px-2">Filter by Status</div>
                    {["All", "In Progress", "Complete", "Pending", "Approved", "Rejected"].map((status) => (
                      <button
                        key={status}
                        onClick={() => {
                          setFilters({ status: status as FilterState["status"] });
                          setShowFilterDropdown(false);
                          setCurrentPage(1);
                        }}
                        className={cn(
                          "w-full text-left px-3 py-2 text-xs rounded hover:bg-gray-100 dark:hover:bg-[#333333] transition-colors",
                          filters.status === status && "bg-gray-100 dark:bg-[#333333] font-medium"
                        )}
                      >
                        {status}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sort Dropdown */}
            <div className="relative">
              <Button 
                size="icon" 
                variant="ghost" 
                className="h-8 w-8"
                onClick={() => {
                  setShowSortDropdown(!showSortDropdown);
                  setShowFilterDropdown(false);
                }}
                title="Sort orders"
              >
                <PiArrowsDownUpBold className="w-4 h-4"/>
              </Button>
              {showSortDropdown && (
                <div className="absolute top-full left-0 mt-2 bg-white dark:bg-[#272727] border border-gray-200 dark:border-[#333333] rounded-lg shadow-lg z-50 min-w-[180px]">
                  <div className="p-2">
                    <div className="text-xs font-semibold text-gray-900 dark:text-gray-100 mb-2 px-2">Sort by</div>
                    {[
                      { field: "id" as SortField, label: "Order ID" },
                      { field: "user" as SortField, label: "User Name" },
                      { field: "project" as SortField, label: "Project" },
                      { field: "date" as SortField, label: "Date" },
                      { field: "status" as SortField, label: "Status" },
                    ].map((option) => (
                      <button
                        key={option.field}
                        onClick={() => handleSort(option.field)}
                        className={cn(
                          "w-full text-left px-3 py-2 text-xs rounded hover:bg-gray-100 dark:hover:bg-[#333333] transition-colors",
                          sortField === option.field && "bg-gray-100 dark:bg-[#333333] font-medium"
                        )}
                      >
                        {option.label} {sortField === option.field && (sortDirection === "asc" ? "↑" : "↓")}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="flex items-center gap-2 px-2 py-1 bg-gray-50 dark:bg-[#232323] rounded-lg border border-gray-200 dark:border-[#393939] w-full sm:w-1/3 md:w-1/4 lg:w-1/6">
            <MdSearch className="text-gray-400 dark:text-[#7E7E7E] w-5 h-5 shrink-0" />
            <input
              type="text"
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setCurrentPage(1);
              }}
              className="bg-transparent outline-none text-sm flex-1 text-gray-900 dark:text-[#7E7E7E] placeholder:text-gray-400 dark:placeholder:text-[#7E7E7E] min-w-0"
            />
          </div>
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
                      <input
                        type="checkbox"
                        checked={
                          currentOrders.length > 0 &&
                          currentOrders.every((order) => selectedOrders.has(order.id))
                        }
                        onChange={(e) => handleSelectAll(e.target.checked)}
                        className="w-4 h-4 rounded border border-gray-300 focus:ring-0 focus:ring-offset-0 appearance-none bg-white dark:bg-[#1C1C1C] checked:bg-[#1C1C1C] dark:checked:bg-[#C6C7F8] relative checked:after:content-['✓'] checked:after:absolute checked:after:inset-0 checked:after:flex checked:after:items-center checked:after:justify-center checked:after:text-white checked:after:text-xs dark:checked:after:text-[#1C1C1C]"
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
                      <input
                        type="checkbox"
                        checked={selectedOrders.has(order.id)}
                        onChange={(e) => handleSelectOrder(order.id, e.target.checked)}
                        className="w-4 h-4 rounded border border-gray-300 focus:ring-0 focus:ring-offset-0 appearance-none bg-white dark:bg-[#1C1C1C] checked:bg-[#1C1C1C] dark:checked:bg-[#C6C7F8] relative checked:after:content-['✓'] checked:after:absolute checked:after:inset-0 checked:after:flex checked:after:items-center checked:after:justify-center checked:after:text-white checked:after:text-xs dark:checked:after:text-[#1C1C1C]"
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
                        <div className="flex items-center gap-1 sm:gap-2">
                          <div
                            className={cn("w-2 h-2 rounded-full shrink-0", getStatusColor(order.status).dot)}
                          ></div>
                          <span className={cn("text-xs whitespace-nowrap", getStatusColor(order.status).text)}>{order.status}</span>
                        </div>
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
          <div className="flex bg-white dark:bg-[#1C1C1C] items-center justify-center sm:justify-end gap-1 sm:gap-2 p-3 sm:p-4 border-t border-gray-200 dark:border-[#333333] flex-wrap">
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
                        currentPage === page && "bg-[#F4F4F4] dark:bg-[#333333] text-[#1C1C1C] dark:text-white hover:bg-[#E4E4E4] dark:hover:bg-[#494949]"
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

      {/* Add Order Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white dark:bg-[#1C1C1C] rounded-lg shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Add New Order</h2>
                <button
                  onClick={() => setShowAddModal(false)}
                  className="p-1 hover:bg-gray-100 dark:hover:bg-[#333333] rounded transition-colors"
                >
                  <MdClose className="text-gray-600 dark:text-gray-400 text-xl" />
                </button>
              </div>

              <div className="space-y-4">
                {/* Order ID */}
                <div>
                  <label className="block text-sm font-medium text-gray-900 dark:text-gray-100 mb-2">
                    Order ID*
                  </label>
                  <input
                    type="text"
                    value={newOrder.id}
                    onChange={(e) => setNewOrder({ ...newOrder, id: e.target.value })}
                    placeholder="#CM9900"
                    className="w-full px-3 py-2 bg-gray-50 dark:bg-[#272727] border border-gray-200 dark:border-[#333333] rounded-lg text-sm text-gray-900 dark:text-gray-100 placeholder:text-gray-400 dark:placeholder:text-[#7E7E7E] focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                {/* User Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-900 dark:text-gray-100 mb-2">
                    User Name*
                  </label>
                  <input
                    type="text"
                    value={newOrder.user?.name}
                    onChange={(e) => setNewOrder({ ...newOrder, user: { ...newOrder.user!, name: e.target.value } })}
                    placeholder="John Doe"
                    className="w-full px-3 py-2 bg-gray-50 dark:bg-[#272727] border border-gray-200 dark:border-[#333333] rounded-lg text-sm text-gray-900 dark:text-gray-100 placeholder:text-gray-400 dark:placeholder:text-[#7E7E7E] focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                {/* Project */}
                <div>
                  <label className="block text-sm font-medium text-gray-900 dark:text-gray-100 mb-2">
                    Project*
                  </label>
                  <input
                    type="text"
                    value={newOrder.project}
                    onChange={(e) => setNewOrder({ ...newOrder, project: e.target.value })}
                    placeholder="Website Redesign"
                    className="w-full px-3 py-2 bg-gray-50 dark:bg-[#272727] border border-gray-200 dark:border-[#333333] rounded-lg text-sm text-gray-900 dark:text-gray-100 placeholder:text-gray-400 dark:placeholder:text-[#7E7E7E] focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                {/* Address */}
                <div>
                  <label className="block text-sm font-medium text-gray-900 dark:text-gray-100 mb-2">
                    Address*
                  </label>
                  <input
                    type="text"
                    value={newOrder.address}
                    onChange={(e) => setNewOrder({ ...newOrder, address: e.target.value })}
                    placeholder="123 Main Street"
                    className="w-full px-3 py-2 bg-gray-50 dark:bg-[#272727] border border-gray-200 dark:border-[#333333] rounded-lg text-sm text-gray-900 dark:text-gray-100 placeholder:text-gray-400 dark:placeholder:text-[#7E7E7E] focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                {/* Status */}
                <div>
                  <label className="block text-sm font-medium text-gray-900 dark:text-gray-100 mb-2">
                    Status
                  </label>
                  <select
                    value={newOrder.status}
                    onChange={(e) => setNewOrder({ ...newOrder, status: e.target.value as Order["status"] })}
                    className="w-full px-3 py-2 bg-gray-50 dark:bg-[#272727] border border-gray-200 dark:border-[#333333] rounded-lg text-sm text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="Pending">Pending</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Complete">Complete</option>
                    <option value="Approved">Approved</option>
                    <option value="Rejected">Rejected</option>
                  </select>
                </div>
              </div>

              <div className="flex gap-3 mt-6">
                <Button
                  onClick={() => setShowAddModal(false)}
                  variant="ghost"
                  className="flex-1"
                >
                  Cancel
                </Button>
                <Button
                  onClick={handleAddOrder}
                  className="flex-1 bg-blue-600 hover:bg-blue-700 text-white"
                  disabled={!newOrder.id || !newOrder.user?.name || !newOrder.project || !newOrder.address}
                >
                  Add Order
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

