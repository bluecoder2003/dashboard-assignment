"use client";

import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { useTheme } from "@/components/custom/theme-provider";
import { ChartCard, useThemedTooltipStyles } from "@/components/shared";

const data = [
  { month: "Jan", current: 10000000, previous: 8000000 },
  { month: "Feb", current: 15000000, previous: 12000000 },
  { month: "Mar", current: 12000000, previous: 14000000 },
  { month: "Apr", current: 18000000, previous: 16000000 },
  { month: "May", current: 22000000, previous: 20000000 },
  { month: "Jun", current: 25000000, previous: 23000000 },
];

export const RevenueChart = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const tooltipStyles = useThemedTooltipStyles();
  
  // Dynamic line colors
  const currentLineColor = isDark ? "#C6C7F8" : "#000000";
  const previousLineColor = isDark ? "#A8C5DA" : "#A8C5DA";
  
  // Dynamic grid and axis colors
  const gridColor = isDark ? "#3D3D3D" : "#f0f0f0";
  const axisColor = isDark ? "#7E7E7E" : "#9ca3af";
  
  const description = (
    <div className="flex flex-row items-center justify-start gap-4">
      <span className="text-gray-500 text-xs">|</span>
      <span className="text-gray-900 dark:text-white text-xs font-medium">
        <span className="text-black dark:text-[#C6C7F8] text-lg">•</span> Current Week $58,211
      </span>
      <span className="text-gray-500 dark:text-white text-xs">
        <span className="text-[#A8C5DA] dark:text-[#A8C5DA] text-lg">•</span> Previous Week $68,768
      </span>
    </div>
  );
  
  return (
    <ChartCard 
      title="Revenue" 
      description={description}
      contentClassName="h-fit w-full pt-5 pr-8"
    >
      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke={gridColor} />
          <XAxis dataKey="month" stroke={axisColor} fontSize={12} tick={{ fill: axisColor }} />
          <YAxis
            stroke={axisColor}
            fontSize={12}
            tick={{ fill: axisColor }}
            tickFormatter={(value) => `${value / 1000000}M`}
          />
          <Tooltip
            formatter={(value: number) => `$${(value / 1000000).toFixed(1)}M`}
            contentStyle={tooltipStyles.contentStyle}
            labelStyle={tooltipStyles.labelStyle}
            itemStyle={tooltipStyles.itemStyle}
          />
          <Line
            type="monotone"
            dataKey="current"
            stroke={currentLineColor}
            strokeWidth={2}
            strokeDasharray="5 5"
            dot={false}
          />
          <Line
            type="monotone"
            dataKey="previous"
            stroke={previousLineColor}
            strokeWidth={2}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </ChartCard>
  );
};

