"use client";

import React from "react";
import { Pie, PieChart } from "recharts";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { useTheme } from "@/components/custom/theme-provider";
import { ChartCard, LegendItem } from "@/components/shared";

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
  const chartData = [
    { name: "Direct", value: 300.56, fill: isDark ? "#C6C7F8" : "#1f2937" },
    { name: "Affiliate", value: 135.18, fill: isDark ? "#B8F9D2" : "#86efac" },
    { name: "Sponsored", value: 154.02, fill: isDark ? "#95A4FC" : "#c4b5fd" },
    { name: "E-mail", value: 48.96, fill: isDark ? "#B1E3FF" : "#93c5fd" },
  ];

  return (
    <ChartCard title="Total Sales">
      <div className="space-y-6 px-5">
        <div className="flex justify-center">
          <div className="relative w-[150px] h-[150px]">
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
                  innerRadius={42}
                  outerRadius={60}
                  paddingAngle={2}
                  cornerRadius={8}
                />
              </PieChart>
            </ChartContainer>
          </div>
        </div>
        <div className="space-y-3 pb-6">
          {chartData.map((item) => (
            <LegendItem
              key={item.name}
              label={item.name}
              value={`$${item.value.toFixed(2)}`}
              color={item.fill}
            />
          ))}
        </div>
      </div>
    </ChartCard>
  );
};
