import React from "react";
import { cn } from "@/lib/utils";

interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon: React.ReactNode;
  size?: "sm" | "md" | "lg";
  variant?: "default" | "ghost";
}

export const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ icon, size = "md", variant = "ghost", className, ...props }, ref) => {
    const sizeClasses = {
      sm: "p-1",
      md: "p-1.5",
      lg: "p-2",
    };

    const variantClasses = {
      default: "bg-gray-100 dark:bg-[#333333] hover:bg-gray-200 dark:hover:bg-[#494949]",
      ghost: "hover:bg-gray-100 dark:hover:bg-[#333333]",
    };

    return (
      <button
        ref={ref}
        className={cn(
          "rounded transition-colors",
          sizeClasses[size],
          variantClasses[variant],
          className
        )}
        {...props}
      >
        {icon}
      </button>
    );
  }
);

IconButton.displayName = "IconButton";

