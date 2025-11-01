"use client";

import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const locations = [
  { name: "New York", revenue: "72K" },
  { name: "San Francisco", revenue: "39K" },
  { name: "Sydney", revenue: "25K" },
  { name: "Singapore", revenue: "61K" },
];

export const RevenueByLocation = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg font-semibold">Revenue by Location</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="w-full h-48 bg-gray-100 rounded-lg flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 bg-linear-to-br from-blue-50 to-gray-100">
              {/* Simplified world map representation */}
              <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-gray-900 rounded-full"></div>
              <div className="absolute top-1/3 left-1/6 w-3 h-3 bg-gray-900 rounded-full"></div>
              <div className="absolute bottom-1/3 right-1/4 w-3 h-3 bg-gray-900 rounded-full"></div>
              <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-gray-900 rounded-full"></div>
            </div>
          </div>
          <div className="space-y-2">
            {locations.map((location) => (
              <div key={location.name} className="flex justify-between items-center">
                <span className="text-sm text-gray-600 dark:text-gray-400">{location.name}</span>
                <span className="text-sm font-semibold text-gray-900 dark:text-gray-100">{location.revenue}</span>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

