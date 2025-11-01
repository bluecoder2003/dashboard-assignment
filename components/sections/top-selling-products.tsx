"use client";

import React from "react";
import { ChartCard, DataTable, Column } from "@/components/shared";

interface Product {
  name: string;
  price: string;
  quantity: number;
  amount: string;
}

const products: Product[] = [
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

const columns: Column<Product>[] = [
  {
    key: "name",
    header: "Name",
    render: (product) => product.name,
  },
  {
    key: "price",
    header: "Price",
    render: (product) => product.price,
    className: "text-gray-600 dark:text-white",
  },
  {
    key: "quantity",
    header: "Quantity",
    render: (product) => product.quantity,
    className: "text-gray-600 dark:text-white",
  },
  {
    key: "amount",
    header: "Amount",
    render: (product) => product.amount,
    className: "font-medium",
  },
];

export const TopSellingProducts = () => {
  return (
    <ChartCard title="Top Selling Products" contentClassName="px-2">
      <DataTable
        data={products}
        columns={columns}
        keyExtractor={(product) => product.name}
      />
    </ChartCard>
  );
};

