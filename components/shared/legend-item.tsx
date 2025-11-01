import React from "react";
import { cn } from "@/lib/utils";

interface LegendItemProps {
  label: string;
  value: string | number;
  color: string;
  className?: string;
  labelClassName?: string;
  valueClassName?: string;
}

export const LegendItem = ({
  label,
  value,
  color,
  className,
  labelClassName,
  valueClassName,
}: LegendItemProps) => {
  return (
    <div className={cn("flex items-center justify-between", className)}>
      <div className="flex items-center gap-2">
        <div
          className="w-3 h-3 rounded-full"
          style={{ backgroundColor: color }}
        />
        <span className={cn("text-xs text-gray-600 dark:text-white", labelClassName)}>
          {label}
        </span>
      </div>
      <span className={cn("text-xs font-medium text-gray-900 dark:text-white", valueClassName)}>
        {value}
      </span>
    </div>
  );
};

