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

const data = [
  { month: "Jan", current: 10000000, previous: 8000000 },
  { month: "Feb", current: 15000000, previous: 12000000 },
  { month: "Mar", current: 12000000, previous: 14000000 },
  { month: "Apr", current: 18000000, previous: 16000000 },
  { month: "May", current: 22000000, previous: 20000000 },
  { month: "Jun", current: 25000000, previous: 23000000 },
];

export const RevenueChart = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-sm font-semibold">Revenue</CardTitle>
        <CardDescription className="flex flex-row items-center justify-start gap-4">
        <span className="text-gray-500 text-xs">|</span>
          <span className="text-gray-900 text-xs font-medium"> • Current Week $58,211</span>
          <span className="text-gray-500 text-xs"> • Previous Week $68,768</span>
        </CardDescription>
      </CardHeader>
      <CardContent className="h-fit w-full pt-5 pr-8">
        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis dataKey="month" stroke="#9ca3af" fontSize={12} />
            <YAxis
              stroke="#9ca3af"
              fontSize={12}
              tickFormatter={(value) => `${value / 1000000}M`}
            />
            <Tooltip
              formatter={(value: number) => `$${(value / 1000000).toFixed(1)}M`}
            />
            <Line
              type="monotone"
              dataKey="current"
              stroke="#000000"
              strokeWidth={2}
              strokeDasharray="5 5"
              dot={false}
            />
            <Line
              type="monotone"
              dataKey="previous"
              stroke="#A8C5DA"
              strokeWidth={2}
              // strokeDasharray="5 5"
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

