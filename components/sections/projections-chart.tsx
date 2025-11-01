"use client";

import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { useTheme } from "@/components/custom/theme-provider";
import { ChartCard } from "@/components/shared";

const chartData = [
  { month: "January", projections: 18000000, actuals: 16000000 },
  { month: "February", projections: 20000000, actuals: 19000000 },
  { month: "March", projections: 17000000, actuals: 18000000 },
  { month: "April", projections: 22000000, actuals: 21000000 },
  { month: "May", projections: 24000000, actuals: 23000000 },
  { month: "June", projections: 26000000, actuals: 25000000 },
];

const chartConfig = {
  projections: {
    label: "Projections",
    color: "#E3ECF3",
  },
  actuals: {
    label: "Actuals",
    color: "#A8C5DA",
  },
} satisfies ChartConfig;

export const ProjectionsChart = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  
  // Colors that adapt to theme
  const actualsColor = isDark ? "#6B8CAE" : "#A8C5DA";
  const projectionsColor = isDark ? "#3D4A5C" : "#E3ECF3";
  
  return (
    <ChartCard 
      title="Projections vs Actuals" 
      className="bg-[#F7F9FB] dark:bg-[#272727]"
    >
      <ChartContainer config={chartConfig} className="h-[200px] w-full pb-6 pr-8">
        <BarChart accessibilityLayer data={chartData} barSize={24}>
          <CartesianGrid vertical={false} stroke={isDark ? "#7E7E7E" : "#e5e7eb"} />
          <XAxis
            dataKey="month"
            tickLine={false}
            tickMargin={10}
            axisLine={false}
            tickFormatter={(value) => value.slice(0, 3)}
            tick={{ fill: isDark ? "#7E7E7E" : "#6b7280" }}
          />
          <YAxis
            tickLine={false}
            axisLine={false}
            tickFormatter={(value) => `${value / 1000000}M`}
            ticks={[0, 10000000, 20000000, 30000000]}
            domain={[0, 30000000]}
            tick={{ fill: isDark ? "#7E7E7E" : "#6b7280" }}
          />
          <ChartTooltip content={<ChartTooltipContent hideLabel />} />
          <Bar
            dataKey="actuals"
            stackId="a"
            fill={actualsColor}
            radius={[0, 0, 4, 4]}
          />
          <Bar
            dataKey="projections"
            stackId="a"
            fill={projectionsColor}
            radius={[4, 4, 0, 0]}
          />
        </BarChart>
      </ChartContainer>
    </ChartCard>
  );
};

