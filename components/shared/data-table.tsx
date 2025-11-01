import React from "react";
import { cn } from "@/lib/utils";

export interface Column<T> {
  key: string;
  header: string;
  render?: (item: T) => React.ReactNode;
  className?: string;
  headerClassName?: string;
  hidden?: boolean; // For responsive hiding
}

interface DataTableProps<T> {
  data: T[];
  columns: Column<T>[];
  keyExtractor: (item: T) => string;
  className?: string;
  headerClassName?: string;
  rowClassName?: string | ((item: T) => string);
  onRowClick?: (item: T) => void;
}

export function DataTable<T>({
  data,
  columns,
  keyExtractor,
  className,
  headerClassName,
  rowClassName,
  onRowClick,
}: DataTableProps<T>) {
  const visibleColumns = columns.filter(col => !col.hidden);

  const getRowClassName = (item: T) => {
    if (typeof rowClassName === "function") {
      return rowClassName(item);
    }
    return rowClassName;
  };

  return (
    <div className="overflow-x-auto">
      <table className={cn("w-full", className)}>
        <thead>
          <tr className={cn("border-b border-gray-200 dark:border-[#333333]", headerClassName)}>
            {visibleColumns.map((column) => (
              <th
                key={column.key}
                className={cn(
                  "text-left py-3 px-4 text-xs font-medium text-[#9FA1A2] dark:text-[#7E7E7E]",
                  column.headerClassName
                )}
              >
                {column.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr
              key={keyExtractor(item)}
              onClick={() => onRowClick?.(item)}
              className={cn(
                "border-b border-gray-100 dark:border-[#333333] last:border-0",
                onRowClick && "cursor-pointer hover:bg-gray-50 dark:hover:bg-[#272727]",
                getRowClassName(item)
              )}
            >
              {visibleColumns.map((column) => (
                <td
                  key={column.key}
                  className={cn("py-3 px-4 text-xs text-gray-900 dark:text-white", column.className)}
                >
                  {column.render ? column.render(item) : String((item as any)[column.key])}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

