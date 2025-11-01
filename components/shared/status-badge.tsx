import React from "react";
import { cn } from "@/lib/utils";

export type StatusType = "In Progress" | "Complete" | "Pending" | "Approved" | "Rejected";

interface StatusBadgeProps {
  status: StatusType | string;
  showDot?: boolean;
  className?: string;
  customColors?: {
    dot?: string;
    text?: string;
  };
}

const defaultStatusColors: Record<StatusType, { dot: string; text: string }> = {
  "In Progress": { dot: "bg-[#95A4FC]", text: "text-[#95A4FC]" },
  "Complete": { dot: "bg-[#4AA785]", text: "text-[#4AA785]" },
  "Pending": { dot: "bg-[#59A8D4]", text: "text-[#59A8D4]" },
  "Approved": { dot: "bg-[#FFC555]", text: "text-[#FFC555]" },
  "Rejected": { dot: "bg-[#A4A4A4]", text: "text-[#A4A4A4]" },
};

export const StatusBadge = ({ 
  status, 
  showDot = true, 
  className,
  customColors 
}: StatusBadgeProps) => {
  const colors = customColors || defaultStatusColors[status as StatusType] || { 
    dot: "bg-[#A4A4A4]", 
    text: "text-[#A4A4A4]" 
  };

  return (
    <div className={cn("flex items-center gap-1 sm:gap-2", className)}>
      {showDot && (
        <div className={cn("w-2 h-2 rounded-full shrink-0", colors.dot)} />
      )}
      <span className={cn("text-xs whitespace-nowrap", colors.text)}>
        {status}
      </span>
    </div>
  );
};

