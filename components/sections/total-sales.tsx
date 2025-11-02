"use client";

import React from "react";
import { Pie, PieChart } from "recharts";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { useTheme } from "@/components/custom/theme-provider";
import { totalSalesData } from "@/config/charts-data";

const chartConfig = {
  value: {
    label: "Sales",
  },
  Direct: {
    label: "Direct",
    color: "#1f2937",
  },
  Affiliate: {
    label: "Affiliate",
    color: "#86efac",
  },
  Sponsored: {
    label: "Sponsored",
    color: "#c4b5fd",
  },
  "E-mail": {
    label: "E-mail",
    color: "#93c5fd",
  },
} satisfies ChartConfig;

export const TotalSales = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  // Dynamic chart data with theme-aware colors
  const chartData = totalSalesData.map(item => ({
    ...item,
    fill: item.name === "Direct" ? (isDark ? "#C6C7F8" : "#1f2937") :
          item.name === "Affiliate" ? (isDark ? "#B8F9D2" : "#86efac") :
          item.name === "Sponsored" ? (isDark ? "#95A4FC" : "#c4b5fd") :
          (isDark ? "#B1E3FF" : "#93c5fd")
  }));

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-sm font-semibold">Total Sales</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4 sm:space-y-6 px-3 sm:px-5">
          <div className="flex justify-center">
            <div className="relative w-[130px] h-[130px] sm:w-[150px] sm:h-[150px]">
              <ChartContainer
                config={chartConfig}
                className="w-full h-full"
              >
                <PieChart width={150} height={150}>
                  <ChartTooltip
                    cursor={false}
                    content={<ChartTooltipContent hideLabel />}
                  />
                  <Pie
                    data={chartData}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    innerRadius={38}
                    outerRadius={55}
                    paddingAngle={2}
                    cornerRadius={6}
                  />
                </PieChart>
              </ChartContainer>
             
            </div>
          </div>
          <div className="space-y-2 sm:space-y-3 pb-4 sm:pb-6">
            {chartData.map((item) => (
              <div key={item.name} className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div
                    className="w-3 h-3 rounded-full shrink-0"
                    style={{ backgroundColor: item.fill }}
                  ></div>
                  <span className="text-xs text-gray-600 dark:text-white">{item.name}</span>
                </div>
                <span className="text-xs font-medium text-gray-900 dark:text-white">
                  ${item.value.toFixed(2)}
                </span>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
