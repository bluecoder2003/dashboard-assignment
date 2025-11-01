"use client";

import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const data = [
  { name: "Direct", value: 300.56, color: "#93c5fd" },
  { name: "Affiliate", value: 135.18, color: "#86efac" },
  { name: "Sponsored", value: 154.02, color: "#c4b5fd" },
  { name: "E-mail", value: 48.96, color: "#1f2937" },
];

export const TotalSales = () => {
  const total = data.reduce((sum, item) => sum + item.value, 0);
  const directPercentage = ((data[0].value / total) * 100).toFixed(1);

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-sm font-semibold">Total Sales</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6 px-5">
          <div className="flex justify-center">
            <div className="relative w-32 h-32">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={data}
                    cx="50%"
                    cy="50%"
                    innerRadius={42}
                    outerRadius={60}
                    paddingAngle={1}
                    dataKey="value"
                    cornerRadius={8}
                  >
                    {data.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-2xl font-bold text-gray-900 dark:text-gray-100">{directPercentage}%</span>
              </div>
            </div>
          </div>
          <div className="space-y-3 pb-6">
            {data.map((item) => (
              <div key={item.name} className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: item.color }}
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

