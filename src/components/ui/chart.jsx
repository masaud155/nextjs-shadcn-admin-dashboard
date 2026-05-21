"use client";

import * as React from "react";
import * as RechartsPrimitive from "recharts";
import { cn } from "@/lib/utils";

const ChartContext = React.createContext(null);

function ChartContainer({ id, className, children, config, ...props }) {
  const [mounted, setMounted] = React.useState(false);
  const uniqueId = React.useId();
  const chartId = `chart-${id || uniqueId.replace(/:/g, "")}`;

  React.useEffect(() => {
    const frame = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <ChartContext.Provider value={{ config }}>
      <div data-chart={chartId} className={cn("flex aspect-video min-h-1 min-w-0 justify-center text-xs [&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-grid_line]:stroke-border/70 [&_.recharts-tooltip-cursor]:stroke-border", className)} {...props}>
        {mounted ? <RechartsPrimitive.ResponsiveContainer minWidth={1} minHeight={1}>{children}</RechartsPrimitive.ResponsiveContainer> : null}
      </div>
    </ChartContext.Provider>
  );
}

function ChartTooltipContent({ active, payload, label, className }) {
  if (!active || !payload?.length) return null;
  return (
    <div className={cn("grid min-w-32 gap-1.5 rounded-lg border bg-background px-2.5 py-2 text-xs shadow-xl", className)}>
      {label ? <div className="font-medium">{label}</div> : null}
      {payload.map((item) => (
        <div key={item.dataKey} className="flex items-center justify-between gap-4">
          <span className="flex items-center gap-2 text-muted-foreground">
            <span className="h-2.5 w-2.5 rounded-sm" style={{ background: item.color }} />
            {item.name || item.dataKey}
          </span>
          <span className="font-mono font-medium">{item.value}</span>
        </div>
      ))}
    </div>
  );
}

const ChartTooltip = RechartsPrimitive.Tooltip;
const ChartLegend = RechartsPrimitive.Legend;

export { ChartContainer, ChartLegend, ChartTooltip, ChartTooltipContent };
