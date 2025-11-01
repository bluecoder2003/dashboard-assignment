import * as React from "react"
import { cn } from "@/lib/utils"

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "ghost" | "outline"
  size?: "default" | "sm" | "lg" | "icon"
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", ...props }, ref) => {
    return (
      <button
        className={cn(
          "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
          {
            "bg-[#F4F4F4] dark:bg-[#333333] text-[#1C1C1C] dark:text-white hover:bg-gray-300 dark:hover:bg-[#494949]": variant === "default",
            "hover:bg-gray-100 dark:hover:bg-[#333333] hover:text-gray-900 dark:hover:text-gray-100": variant === "ghost",
            "border border-gray-200 dark:border-[#333333] bg-white dark:bg-[#1C1C1C] hover:bg-gray-100 dark:hover:bg-[#333333]": variant === "outline",
          },
          {
            "h-10 px-4 py-2": size === "default",
            "h-9 rounded-md px-3": size === "sm",
            "h-11 rounded-md px-8": size === "lg",
            "h-10 w-10": size === "icon",
          },
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button }

