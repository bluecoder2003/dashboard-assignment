// Metrics data
export interface MetricData {
  title: string;
  value: string;
  change: string;
  isPositive: boolean;
  backgroundColor: string;
  titleColor: string;
  valueColor: string;
  changeColor: string;
}

export const metricsData: MetricData[] = [
  {
    title: "Customers",
    value: "3,781",
    change: "+11.01%",
    isPositive: true,
    backgroundColor: "bg-[#E3F5FF] dark:bg-[#E3F5FF]",
    titleColor: "text-[#1C1C1C] dark:text-[#1C1C1C]",
    valueColor: "text-[#1C1C1C] dark:text-[#1C1C1C]",
    changeColor: "text-[#1C1C1C] dark:text-[#1C1C1C]",
  },
  {
    title: "Orders",
    value: "1,219",
    change: "-0.03%",
    isPositive: false,
    backgroundColor: "bg-[#F7F9FB] dark:bg-[#272727]",
    titleColor: "text-[#1C1C1C] dark:text-white",
    valueColor: "text-[#1C1C1C] dark:text-white",
    changeColor: "text-[#1C1C1C] dark:text-white",
  },
  {
    title: "Revenue",
    value: "$695",
    change: "+15.03%",
    isPositive: true,
    backgroundColor: "bg-[#F7F9FB] dark:bg-[#272727]",
    titleColor: "text-[#1C1C1C] dark:text-white",
    valueColor: "text-[#1C1C1C] dark:text-white",
    changeColor: "text-[#1C1C1C] dark:text-white",
  },
  {
    title: "Growth",
    value: "30.1%",
    change: "+6.08%",
    isPositive: true,
    backgroundColor: "bg-[#E5ECF6] dark:bg-[#E5ECF6]",
    titleColor: "text-[#1C1C1C] dark:text-[#1C1C1C]",
    valueColor: "text-[#1C1C1C] dark:text-[#1C1C1C]",
    changeColor: "text-[#1C1C1C] dark:text-[#1C1C1C]",
  },
];

