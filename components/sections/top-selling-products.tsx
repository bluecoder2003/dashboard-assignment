"use client";

import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { topSellingProducts } from "@/config/products-data";

export const TopSellingProducts = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-sm font-semibold">Top Selling Products</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto px-2">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200 dark:border-[#333333]">
                <th className="text-left py-3 px-4 text-xs font-medium text-[#9FA1A2] dark:text-[#7E7E7E]">Name</th>
                <th className="text-left py-3 px-4 text-xs font-medium text-[#9FA1A2] dark:text-[#7E7E7E]">Price</th>
                <th className="text-left py-3 px-4 text-xs font-medium text-[#9FA1A2] dark:text-[#7E7E7E]">Quantity</th>
                <th className="text-left py-3 px-4 text-xs font-medium text-[#9FA1A2] dark:text-[#7E7E7E]">Amount</th>
              </tr>
            </thead>
            <tbody>
              {topSellingProducts.map((product, index) => (
                <tr key={index} className="border-b border-gray-100 dark:border-[#333333] last:border-0">
                  <td className="py-3 px-4 text-xs text-gray-900 dark:text-white">{product.name}</td>
                  <td className="py-3 px-4 text-xs text-gray-600 dark:text-white">{product.price}</td>
                  <td className="py-3 px-4 text-xs text-gray-600 dark:text-white">{product.quantity}</td>
                  <td className="py-3 px-4 text-xs font-medium text-gray-900 dark:text-white">{product.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  );
};

