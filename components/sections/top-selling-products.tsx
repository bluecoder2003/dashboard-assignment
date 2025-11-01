"use client";

import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const products = [
  {
    name: "ASOS Ridley High Waist",
    price: "$79.49",
    quantity: 82,
    amount: "$6,518.18",
  },
  {
    name: "Marco Lightweight Shirt",
    price: "$128.50",
    quantity: 37,
    amount: "$4,754.50",
  },
  {
    name: "Half Sleeve Shirt",
    price: "$39.99",
    quantity: 64,
    amount: "$2,559.36",
  },
  {
    name: "Lightweight Jacket",
    price: "$20.00",
    quantity: 184,
    amount: "$3,680.00",
  },
  {
    name: "Marco Shoes",
    price: "$79.49",
    quantity: 64,
    amount: "$5,087.36",
  },
];

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
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <th className="text-left py-3 px-4 text-xs font-medium text-[#9FA1A2] dark:text-gray-400">Name</th>
                <th className="text-left py-3 px-4 text-xs font-medium text-[#9FA1A2] dark:text-gray-400">Price</th>
                <th className="text-left py-3 px-4 text-xs font-medium text-[#9FA1A2] dark:text-gray-400">Quantity</th>
                <th className="text-left py-3 px-4 text-xs font-medium text-[#9FA1A2] dark:text-gray-400">Amount</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product, index) => (
                <tr key={index} className="border-b border-gray-100 dark:border-gray-700 last:border-0">
                  <td className="py-3 px-4 text-xs text-gray-900 dark:text-gray-100">{product.name}</td>
                  <td className="py-3 px-4 text-xs text-gray-600 dark:text-gray-400">{product.price}</td>
                  <td className="py-3 px-4 text-xs text-gray-600 dark:text-gray-400">{product.quantity}</td>
                  <td className="py-3 px-4 text-xs font-medium text-gray-900 dark:text-gray-100">{product.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  );
};

