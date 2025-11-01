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
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-sm font-semibold">Projections vs Actuals</CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="h-[200px] w-full pr-8">
          <BarChart accessibilityLayer data={chartData} barSize={24}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <YAxis
              tickLine={false}
              axisLine={false}
              tickFormatter={(value) => `${value / 1000000}M`}
              ticks={[0, 10000000, 20000000, 30000000]}
              domain={[0, 30000000]}
            />
            <ChartTooltip content={<ChartTooltipContent hideLabel />} />
            <Bar
              dataKey="actuals"
              stackId="a"
              fill="#A8C5DA"
              radius={[0, 0, 4, 4]}
            />
            <Bar
              dataKey="projections"
              stackId="a"
              fill="#E3ECF3"
              radius={[4, 4, 0, 0]}
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};

