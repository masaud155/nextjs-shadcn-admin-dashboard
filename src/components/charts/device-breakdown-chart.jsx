"use client";

import { Pie, PieChart } from "recharts";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { deviceData } from "@/data/mock-analytics";

export function DeviceBreakdownChart() {
  return (
    <ChartContainer className="h-72" config={{ value: { label: "Share" } }}>
      <PieChart>
        <ChartTooltip content={<ChartTooltipContent />} />
        <Pie data={deviceData} dataKey="value" nameKey="device" innerRadius={58} outerRadius={92} paddingAngle={3} />
      </PieChart>
    </ChartContainer>
  );
}
