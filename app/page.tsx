"use client";

import { DashboardLayout } from "@/components/custom/dashboard-layout";
import { MetricCard } from "@/components/sections/metric-card";
import { RevenueChart } from "@/components/sections/revenue-chart";
import { ProjectionsChart } from "@/components/sections/projections-chart";
import { RevenueByLocation } from "@/components/sections/revenue-by-location";
import { TopSellingProducts } from "@/components/sections/top-selling-products";
import { TotalSales } from "@/components/sections/total-sales";
import { metricsData } from "@/config/dashboard-data";

export default function Home() {
  return (
    <DashboardLayout>
      <div className="p-3 sm:p-4 md:p-6 lg:p-8 bg-white dark:bg-[#1C1C1C]">
        <h1 className="text-sm font-semibold text-[#1C1C1C] dark:text-gray-100 mb-3 sm:mb-4 md:mb-6">
          eCommerce
        </h1>

        {/* Metrics Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4 md:gap-6 mb-3 sm:mb-4 md:mb-6">
          <div className="grid grid-cols-2 gap-3 sm:gap-4 md:gap-6">
            {metricsData.map((metric) => (
              <MetricCard
                key={metric.title}
                title={metric.title}
                value={metric.value}
                change={metric.change}
                isPositive={metric.isPositive}
                backgroundColor={metric.backgroundColor}
                titleColor={metric.titleColor}
                valueColor={metric.valueColor}
                changeColor={metric.changeColor}
              />
            ))}
          </div>
          <ProjectionsChart />
        </div>

        {/* Charts Row */}
        <div className="grid grid-cols-1 xl:grid-cols-4 gap-3 sm:gap-4 md:gap-6 mb-3 sm:mb-4 md:mb-6">
          <div className="xl:col-span-3">
            <RevenueChart />
          </div>
          <div>
            <RevenueByLocation />
          </div>
        </div>

        {/* Bottom Row */}
        <div className="grid grid-cols-1 xl:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
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
