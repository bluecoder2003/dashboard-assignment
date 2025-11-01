import React from "react";
import { Card } from "@/components/ui/card";
import { MdTrendingUp } from "react-icons/md";
import { cn } from "@/lib/utils";

interface MetricCardProps {
  title: string;
  value: string;
  change: string;
  isPositive?: boolean;
  isHighlighted?: boolean;
  backgroundColor?: string;
}

export const MetricCard = ({
  title,
  value,
  change,
  isHighlighted = false,
  backgroundColor,
}: MetricCardProps) => {
  return (
    <Card
      className={cn(
        "p-6",
        backgroundColor,
        isHighlighted && !backgroundColor &&
          "bg-[#E3F5FF] dark:bg-blue-950 border-blue-100 dark:border-blue-900"
      )}
    >
      <div className="flex flex-col justify-between h-full">
        <p className="text-sm font-semibold text-[#1C1C1C] dark:text-gray-400">
          {title}
        </p>
        <div className="flex items-center justify-between">
          <p className="text-2xl font-semibold text-[#1C1C1C] dark:text-gray-100">
            {value}
          </p>
          <div className="flex items-center">
            <span className="text-xs font-medium text-[#1C1C1C] dark:text-gray-400">
              {change}
            </span>
            <MdTrendingUp className="text-[#1C1C1C] dark:text-gray-400" />
          </div>
        </div>
      </div>
    </Card>
  );
};
