"use client";

import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { trafficData } from "@/data/mock-analytics";

export function TrafficSourceChart() {
  return (
    <ChartContainer className="h-72" config={{ visitors: { label: "Visitors" } }}>
      <BarChart data={trafficData}>
        <CartesianGrid vertical={false} />
        <XAxis dataKey="source" tickLine={false} axisLine={false} />
        <ChartTooltip content={<ChartTooltipContent />} />
        <Bar dataKey="visitors" fill="hsl(var(--chart-3))" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ChartContainer>
  );
}
