"use client";

import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import Image from "next/image";
import worldMap from "@/public/WorldMap.png";

const locations = [
  { name: "New York", revenue: "72K", percentage: 72 },
  { name: "San Francisco", revenue: "39K", percentage: 39 },
  { name: "Sydney", revenue: "25K", percentage: 25 },
  { name: "Singapore", revenue: "61K", percentage: 61 },
];

export const RevenueByLocation = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-sm font-semibold">Revenue by Location</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="w-full rounded-lg flex items-center justify-center relative overflow-hidden px-4">
            <Image src={worldMap} alt="World Map" width={1000} height={1000} className="object-cover w-full h-full" />
          </div>
          <div className="space-y-3 p-5">
            {locations.map((location) => (
              <div key={location.name} className="space-y-1.5">
                <div className="flex justify-between items-center">
                  <span className="text-xs font-medium text-[#1C1C1C] dark:text-white">{location.name}</span>
                  <span className="text-xs font-semibold text-[#1C1C1C] dark:text-white">{location.revenue}</span>
                </div>
                {/* Progress bar */}
                <div className="w-full h-0.5 bg-gray-200 dark:bg-[#333333] rounded-full overflow-hidden">
                  <div
                    className="h-full bg-[#A8C5DA] dark:bg-[#60a5fa] rounded-full transition-all duration-300"
                    style={{ width: `${location.percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

