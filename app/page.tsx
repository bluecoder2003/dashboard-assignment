"use client";

import { DashboardLayout } from "@/components/custom/dashboard-layout";
import { MetricCard } from "@/components/sections/metric-card";
import { RevenueChart } from "@/components/sections/revenue-chart";
import { ProjectionsChart } from "@/components/sections/projections-chart";
import { RevenueByLocation } from "@/components/sections/revenue-by-location";
import { TopSellingProducts } from "@/components/sections/top-selling-products";
import { TotalSales } from "@/components/sections/total-sales";

export default function Home() {
  return (
    <DashboardLayout>
      <div className="p-4 sm:p-6 md:p-8 bg-white dark:bg-gray-900">
        <h1 className="text-sm font-semibold text-[#1C1C1C] dark:text-gray-100 mb-4 sm:mb-6">
          eCommerce
        </h1>

        {/* Metrics Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-6">
            <MetricCard
              title="Customers"
              value="3,781"
              change="+11.01%"
              isPositive={true}
              isHighlighted={true}
            />
            <MetricCard
              title="Orders"
              backgroundColor="bg-[#F7F9FB]"
              value="1,219"
              change="-0.03%"
              isPositive={false}
            />
            <MetricCard
              title="Revenue"
              backgroundColor="bg-[#F7F9FB]"
              value="$695"
              change="+15.03%"
              isPositive={true}
            />
            <MetricCard
              title="Growth"
              backgroundColor="bg-[#E5ECF6]"
              value="30.1%"
              change="+6.08%"
              isPositive={true}
            />
          </div>
          <ProjectionsChart />
        </div>

        {/* Charts Row */}
        <div className="grid grid-cols-1 xl:grid-cols-4 gap-4 sm:gap-6 mb-4 sm:mb-6">
          <div className="xl:col-span-3">
            <RevenueChart />
          </div>
          <div>
            <RevenueByLocation />
          </div>
        </div>

        {/* Bottom Row */}
        <div className="grid grid-cols-1 xl:grid-cols-4 gap-4 sm:gap-6">
          <div className="xl:col-span-3">
            <TopSellingProducts />
          </div>
          <div>
            <TotalSales />
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
