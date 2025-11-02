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
  titleColor?: string;
  valueColor?: string;
  changeColor?: string;
}

export const MetricCard = ({
  title,
  value,
  change,
  isHighlighted = false,
  backgroundColor,
  titleColor = "text-[#1C1C1C] dark:text-white",
  valueColor = "text-[#1C1C1C] dark:text-white",
  changeColor = "text-[#1C1C1C] dark:text-white",
}: MetricCardProps) => {
  return (
    <Card
      className={cn(
        "p-4 sm:p-5 md:p-6 border-0",
        backgroundColor ? backgroundColor : (isHighlighted ? "bg-[#E3F5FF] dark:bg-blue-950 border-blue-100 dark:border-blue-900" : "")
      )}
    >
      <div className="flex flex-col justify-between h-full gap-2 sm:gap-3">
        <p className={cn("text-xs sm:text-sm font-semibold", titleColor)}>
          {title}
        </p>
        <div className="flex items-center justify-between">
          <p className={cn("text-xl sm:text-2xl font-semibold", valueColor)}>
            {value}
          </p>
          <div className="flex items-center gap-0.5">
            <span className={cn("text-xs font-medium", changeColor)}>
              {change}
            </span>
            <MdTrendingUp className={cn("text-sm sm:text-base", changeColor)} />
          </div>
        </div>
      </div>
    </Card>
  );
};
