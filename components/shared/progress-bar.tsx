import React from "react";
import { cn } from "@/lib/utils";

interface ProgressBarProps {
  value: number; // 0-100
  label?: string;
  showValue?: boolean;
  valueFormat?: (value: number) => string;
  className?: string;
  barClassName?: string;
  labelClassName?: string;
  valueClassName?: string;
}

export const ProgressBar = ({
  value,
  label,
  showValue = false,
  valueFormat = (v) => `${v}%`,
  className,
  barClassName,
  labelClassName,
  valueClassName,
}: ProgressBarProps) => {
  const clampedValue = Math.max(0, Math.min(100, value));

  return (
    <div className={cn("space-y-1.5", className)}>
      {(label || showValue) && (
        <div className="flex justify-between items-center">
          {label && (
            <span className={cn("text-xs font-medium text-[#1C1C1C] dark:text-white", labelClassName)}>
              {label}
            </span>
          )}
          {showValue && (
            <span className={cn("text-xs font-semibold text-[#1C1C1C] dark:text-white", valueClassName)}>
              {valueFormat(clampedValue)}
            </span>
          )}
        </div>
      )}
      <div className="w-full h-0.5 bg-gray-200 dark:bg-[#333333] rounded-full overflow-hidden">
        <div
          className={cn(
            "h-full bg-[#A8C5DA] dark:bg-[#60a5fa] rounded-full transition-all duration-300",
            barClassName
          )}
          style={{ width: `${clampedValue}%` }}
        />
      </div>
    </div>
  );
};

