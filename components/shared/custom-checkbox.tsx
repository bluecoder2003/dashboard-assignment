import React from "react";
import { cn } from "@/lib/utils";

interface CustomCheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> {
  className?: string;
}

export const CustomCheckbox = React.forwardRef<HTMLInputElement, CustomCheckboxProps>(
  ({ className, ...props }, ref) => {
    return (
      <input
        ref={ref}
        type="checkbox"
        className={cn(
          "w-4 h-4 rounded border border-gray-300 focus:ring-0 focus:ring-offset-0 appearance-none",
          "bg-white dark:bg-[#1C1C1C]",
          "checked:bg-[#1C1C1C] dark:checked:bg-[#C6C7F8]",
          "relative checked:after:content-['✓']",
          "checked:after:absolute checked:after:inset-0",
          "checked:after:flex checked:after:items-center checked:after:justify-center",
          "checked:after:text-white checked:after:text-xs",
          "dark:checked:after:text-[#1C1C1C]",
          className
        )}
        {...props}
      />
    );
  }
);

CustomCheckbox.displayName = "CustomCheckbox";

