"use client";

import React from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
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
import { revenueChartData } from "@/config/charts-data";

export const RevenueChart = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  
  // Dynamic line colors
  const currentLineColor = isDark ? "#C6C7F8" : "#000000";
  const previousLineColor = isDark ? "#A8C5DA" : "#A8C5DA";
  
  // Dynamic grid and axis colors
  const gridColor = isDark ? "#3D3D3D" : "#f0f0f0";
  const axisColor = isDark ? "#7E7E7E" : "#9ca3af";
  
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-sm font-semibold">Revenue</CardTitle>
        <CardDescription className="flex flex-row items-center justify-start gap-4">
        <span className="text-gray-500 text-xs">|</span>
          <span className="text-gray-900 dark:text-white text-xs font-medium"> <span className="text-black dark:text-[#C6C7F8] text-lg">•</span> Current Week $58,211</span>
          <span className="text-gray-500 dark:text-white text-xs"> <span className="text-[#A8C5DA] dark:text-[#A8C5DA] text-lg">•</span> Previous Week $68,768</span>
        </CardDescription>
      </CardHeader>
       <CardContent className="h-fit w-full pt-5 pr-8">
         <ResponsiveContainer width="100%" height={250}>
           <LineChart data={revenueChartData}>
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
              contentStyle={{
                backgroundColor: isDark ? '#272727' : '#ffffff',
                border: isDark ? '1px solid #444444' : '1px solid #e5e7eb',
                borderRadius: '8px',
                color: isDark ? '#FFFFFF' : '#1f2937',
                fontSize: '14px',
              }}
              labelStyle={{
                color: isDark ? '#FFFFFF' : '#6b7280',
                fontSize: '14px',
              }}
              itemStyle={{
                color: isDark ? '#7E7E7E' : '#1f2937',
                fontSize: '14px',
              }}
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
      </CardContent>
    </Card>
  );
};

