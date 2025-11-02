"use client";

import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { useTheme } from "@/components/custom/theme-provider";
import { projectionsChartData } from "@/config/charts-data";

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
    <Card className="bg-[#F7F9FB] dark:bg-[#272727]">
      <CardHeader>
        <CardTitle className="text-sm font-semibold text-[#1C1C1C] dark:text-white">Projections vs Actuals</CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="h-[180px] sm:h-[200px] w-full pb-4 sm:pb-6 pr-2 sm:pr-4 md:pr-8">
          <BarChart accessibilityLayer data={projectionsChartData} barSize={20}>
            <CartesianGrid vertical={false} stroke={isDark ? "#7E7E7E" : "#e5e7eb"} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={8}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
              tick={{ fill: isDark ? "#7E7E7E" : "#6b7280", fontSize: 10 }}
            />
            <YAxis
              tickLine={false}
              axisLine={false}
              tickFormatter={(value) => `${value / 1000000}M`}
              ticks={[0, 10000000, 20000000, 30000000]}
              domain={[0, 30000000]}
              tick={{ fill: isDark ? "#7E7E7E" : "#6b7280", fontSize: 10 }}
              width={35}
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
      </CardContent>
    </Card>
  );
};

