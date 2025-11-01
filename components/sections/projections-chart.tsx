"use client";

import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { month: "Jan", projections: 18000000, actuals: 16000000 },
  { month: "Feb", projections: 20000000, actuals: 19000000 },
  { month: "Mar", projections: 17000000, actuals: 18000000 },
  { month: "Apr", projections: 22000000, actuals: 21000000 },
  { month: "May", projections: 24000000, actuals: 23000000 },
  { month: "Jun", projections: 26000000, actuals: 25000000 },
];

export const ProjectionsChart = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg font-semibold">Projections vs Actuals</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
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
            <Bar dataKey="projections" fill="#bfdbfe" radius={[4, 4, 0, 0]} />
            <Bar dataKey="actuals" fill="#93c5fd" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

