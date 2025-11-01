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

const chartData = [
  { name: "Direct", value: 300.56, fill: "#1f2937" },
  { name: "Affiliate", value: 135.18, fill: "#86efac" },
  { name: "Sponsored", value: 154.02, fill: "#c4b5fd" },
  { name: "E-mail", value: 48.96, fill: "#93c5fd" },
];

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
  const total = chartData.reduce((sum, item) => sum + item.value, 0);
  const directPercentage = ((chartData[0].value / total) * 100).toFixed(1);

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-sm font-semibold">Total Sales</CardTitle>
      </CardHeader>
      <CardContent>
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
              <div key={item.name} className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: item.fill }}
                  ></div>
                  <span className="text-xs text-gray-600 dark:text-gray-400">{item.name}</span>
                </div>
                <span className="text-xs font-medium text-gray-900 dark:text-gray-100">
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
