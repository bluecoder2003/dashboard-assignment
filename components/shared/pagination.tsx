import React from "react";
import { Button } from "@/components/ui/button";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { cn } from "@/lib/utils";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  className?: string;
  maxVisiblePages?: number;
}

export const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
  className,
  maxVisiblePages = 5,
}: PaginationProps) => {
  const goToPage = (page: number) => {
    onPageChange(Math.max(1, Math.min(page, totalPages)));
  };

  const getPageNumbers = () => {
    const pages: (number | string)[] = [];
    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 3) {
        pages.push(1, 2, 3, 4, "...", totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(1, "...", totalPages - 3, totalPages - 2, totalPages - 1, totalPages);
      } else {
        pages.push(1, "...", currentPage - 1, currentPage, currentPage + 1, "...", totalPages);
      }
    }
    return pages;
  };

  return (
    <div className={cn(
      "flex bg-white dark:bg-[#1C1C1C] items-center justify-center sm:justify-end gap-1 sm:gap-2 p-3 sm:p-4 border-t border-gray-200 dark:border-[#333333] flex-wrap",
      className
    )}>
      <Button
        size="sm"
        variant="ghost"
        onClick={() => goToPage(currentPage - 1)}
        disabled={currentPage === 1}
        className="h-8 w-8 p-0"
      >
        <MdChevronLeft />
      </Button>
      {getPageNumbers().map((page, index) => (
        <React.Fragment key={index}>
          {typeof page === "number" ? (
            <Button
              size="sm"
              variant={currentPage === page ? "default" : "ghost"}
              onClick={() => goToPage(page)}
              className={cn(
                "min-w-[32px] h-8 text-xs sm:text-sm",
                currentPage === page && "bg-[#F4F4F4] dark:bg-[#333333] text-[#1C1C1C] dark:text-white hover:bg-[#E4E4E4] dark:hover:bg-[#494949]"
              )}
            >
              {page}
            </Button>
          ) : (
            <span className="px-1 sm:px-2 text-gray-400 dark:text-gray-500 text-xs sm:text-sm">...</span>
          )}
        </React.Fragment>
      ))}
      <Button
        size="sm"
        variant="ghost"
        onClick={() => goToPage(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="h-8 w-8 p-0"
      >
        <MdChevronRight />
      </Button>
    </div>
  );
};

