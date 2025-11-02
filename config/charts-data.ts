// Revenue Chart Data
export interface RevenueChartData {
  month: string;
  current: number;
  previous: number;
}

export const revenueChartData: RevenueChartData[] = [
  { month: "Jan", current: 10000000, previous: 8000000 },
  { month: "Feb", current: 15000000, previous: 12000000 },
  { month: "Mar", current: 12000000, previous: 14000000 },
  { month: "Apr", current: 18000000, previous: 16000000 },
  { month: "May", current: 22000000, previous: 20000000 },
  { month: "Jun", current: 25000000, previous: 23000000 },
];

// Projections Chart Data
export interface ProjectionsChartData {
  month: string;
  projections: number;
  actuals: number;
}

export const projectionsChartData: ProjectionsChartData[] = [
  { month: "January", projections: 18000000, actuals: 16000000 },
  { month: "February", projections: 20000000, actuals: 19000000 },
  { month: "March", projections: 17000000, actuals: 18000000 },
  { month: "April", projections: 22000000, actuals: 21000000 },
  { month: "May", projections: 24000000, actuals: 23000000 },
  { month: "June", projections: 26000000, actuals: 25000000 },
];

// Revenue by Location Data
export interface LocationRevenueData {
  name: string;
  revenue: string;
  percentage: number;
}

export const locationRevenueData: LocationRevenueData[] = [
  { name: "New York", revenue: "72K", percentage: 72 },
  { name: "San Francisco", revenue: "39K", percentage: 39 },
  { name: "Sydney", revenue: "25K", percentage: 25 },
  { name: "Singapore", revenue: "61K", percentage: 61 },
];

// Total Sales Data
export interface SalesChannelData {
  name: "Direct" | "Affiliate" | "Sponsored" | "E-mail";
  value: number;
}

export const totalSalesData: SalesChannelData[] = [
  { name: "Direct", value: 300.56 },
  { name: "Affiliate", value: 135.18 },
  { name: "Sponsored", value: 154.02 },
  { name: "E-mail", value: 48.96 },
];

