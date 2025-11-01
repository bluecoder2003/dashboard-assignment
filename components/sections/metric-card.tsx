import React from "react";
import { Card } from "@/components/ui/card";
import { MdTrendingUp, MdTrendingDown } from "react-icons/md";
import { cn } from "@/lib/utils";

interface MetricCardProps {
  title: string;
  value: string;
  change: string;
  isPositive: boolean;
  isHighlighted?: boolean;
}

export const MetricCard = ({
  title,
  value,
  change,
  isPositive,
  isHighlighted = false,
}: MetricCardProps) => {
  return (
    <Card
      className={cn(
        "p-6",
        isHighlighted && "bg-blue-50 dark:bg-blue-950 border-blue-100 dark:border-blue-900"
      )}
    >
      <div className="space-y-2">
        <p className="text-sm text-gray-600 dark:text-gray-400">{title}</p>
        <p className="text-3xl font-bold text-gray-900 dark:text-gray-100">{value}</p>
        <div className="flex items-center gap-1">
          {isPositive ? (
            <MdTrendingUp className="text-green-600" />
          ) : (
            <MdTrendingDown className="text-red-600" />
          )}
          <span
            className={cn(
              "text-sm font-medium",
              isPositive ? "text-green-600" : "text-red-600"
            )}
          >
            {change}
          </span>
        </div>
      </div>
    </Card>
  );
};

