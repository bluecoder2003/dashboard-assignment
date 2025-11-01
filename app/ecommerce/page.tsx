"use client";

import { DashboardLayout } from "@/components/custom/dashboard-layout";
import { OrderList } from "@/components/sections/order-list";

export default function EcommercePage() {
  return (
    <DashboardLayout>
      <OrderList />
    </DashboardLayout>
  );
}

