"use client";

import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { revenueData } from "@/data/mock-analytics";

export function RevenueTrendChart() {
  return (
    <ChartContainer className="h-72" config={{ revenue: { label: "Revenue" }, target: { label: "Target" } }}>
      <AreaChart data={revenueData}>
        <CartesianGrid vertical={false} />
        <XAxis dataKey="month" tickLine={false} axisLine={false} />
        <ChartTooltip content={<ChartTooltipContent />} />
        <Area dataKey="target" type="monotone" fill="hsl(var(--chart-2) / 0.12)" stroke="hsl(var(--chart-2))" strokeWidth={2} />
        <Area dataKey="revenue" type="monotone" fill="hsl(var(--chart-1) / 0.18)" stroke="hsl(var(--chart-1))" strokeWidth={2} />
      </AreaChart>
    </ChartContainer>
  );
}
