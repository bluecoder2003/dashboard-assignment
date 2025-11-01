import React from "react";
import { cn } from "@/lib/utils";

interface BreadcrumbItem {
  label: string;
  isActive?: boolean;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  separator?: string;
  className?: string;
}

export const Breadcrumb = ({ items, separator = "/", className }: BreadcrumbProps) => {
  return (
    <div className={cn("flex items-center gap-2 text-sm", className)}>
      {items.map((item, index) => (
        <React.Fragment key={index}>
          <span
            className={cn(
              "font-normal",
              item.isActive
                ? "text-gray-900 dark:text-white"
                : "text-[#A4A4A4] dark:text-[#7E7E7E]"
            )}
          >
            {item.label}
          </span>
          {index < items.length - 1 && (
            <span className="text-[#A4A4A4] dark:text-[#7E7E7E] font-normal">
              {separator}
            </span>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

