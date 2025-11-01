import React from "react";
import { MdSearch } from "react-icons/md";
import { cn } from "@/lib/utils";

interface SearchInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
  iconClassName?: string;
}

export const SearchInput = ({
  value,
  onChange,
  placeholder = "Search",
  className,
  iconClassName,
}: SearchInputProps) => {
  return (
    <div className={cn(
      "flex items-center gap-2 px-2 py-1 bg-gray-50 dark:bg-[#232323] rounded-lg border border-gray-200 dark:border-[#393939]",
      className
    )}>
      <MdSearch className={cn("text-gray-400 dark:text-[#7E7E7E] w-6 h-6", iconClassName)} />
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="bg-transparent outline-none text-sm flex-1 text-gray-900 dark:text-[#7E7E7E] placeholder:text-gray-400 dark:placeholder:text-[#7E7E7E]"
      />
    </div>
  );
};

