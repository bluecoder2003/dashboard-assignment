"use client";

import React from "react";
import Image from "next/image";
import worldMap from "@/public/WorldMap.png";
import { ChartCard, ProgressBar } from "@/components/shared";

const locations = [
  { name: "New York", revenue: "72K", percentage: 72 },
  { name: "San Francisco", revenue: "39K", percentage: 39 },
  { name: "Sydney", revenue: "25K", percentage: 25 },
  { name: "Singapore", revenue: "61K", percentage: 61 },
];

export const RevenueByLocation = () => {
  return (
    <ChartCard title="Revenue by Location">
      <div className="space-y-4">
        <div className="w-full rounded-lg flex items-center justify-center relative overflow-hidden px-4">
          <Image src={worldMap} alt="World Map" width={1000} height={1000} className="object-cover w-full h-full" />
        </div>
        <div className="space-y-3 p-5">
          {locations.map((location) => (
            <ProgressBar
              key={location.name}
              value={location.percentage}
              label={location.name}
              showValue
              valueFormat={() => location.revenue}
            />
          ))}
        </div>
      </div>
    </ChartCard>
  );
};

