"use client";

import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { revenueData } from "@/data/mock-analytics";

export function OverviewChart() {
  return (
    <ChartContainer className="h-80" config={{ revenue: { label: "Revenue" } }}>
      <AreaChart data={revenueData}>
        <CartesianGrid vertical={false} />
        <XAxis dataKey="month" tickLine={false} axisLine={false} />
        <ChartTooltip content={<ChartTooltipContent />} />
        <Area dataKey="revenue" type="monotone" fill="hsl(var(--chart-1) / 0.22)" stroke="hsl(var(--chart-1))" strokeWidth={2} />
      </AreaChart>
    </ChartContainer>
  );
}
