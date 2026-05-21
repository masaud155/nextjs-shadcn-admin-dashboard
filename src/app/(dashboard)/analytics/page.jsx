import { CalendarDays, Filter } from "lucide-react";
import { DeviceBreakdownChart } from "@/components/charts/device-breakdown-chart";
import { RevenueTrendChart } from "@/components/charts/revenue-trend-chart";
import { TrafficSourceChart } from "@/components/charts/traffic-source-chart";
import { UserGrowthChart } from "@/components/charts/user-growth-chart";
import { PageHeader } from "@/components/common/page-header";
import { DashboardShell } from "@/components/dashboard/dashboard-shell";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export const metadata = { title: "Analytics" };

export default function AnalyticsPage() {
  return (
    <DashboardShell>
      <PageHeader title="Analytics" description="Understand acquisition, conversion, revenue, and product usage trends.">
        <Button variant="outline"><CalendarDays className="h-4 w-4" /> Last 30 days</Button>
        <Select defaultValue="all"><SelectTrigger className="w-40"><Filter className="mr-2 h-4 w-4" /><SelectValue /></SelectTrigger><SelectContent><SelectItem value="all">All channels</SelectItem><SelectItem value="organic">Organic</SelectItem><SelectItem value="paid">Paid</SelectItem></SelectContent></Select>
      </PageHeader>
      <div className="grid gap-4 md:grid-cols-3">
        {["Conversion rate 8.4%", "Traffic quality 92", "Expansion revenue $24k"].map((item) => <Card key={item}><CardContent className="p-6"><p className="text-sm text-muted-foreground">{item.split(" ").slice(0, -1).join(" ")}</p><p className="mt-2 text-2xl font-semibold">{item.split(" ").at(-1)}</p></CardContent></Card>)}
      </div>
      <div className="grid gap-4 xl:grid-cols-2">
        <Card><CardHeader><CardTitle>Revenue trend</CardTitle><CardDescription>Actual revenue against monthly target.</CardDescription></CardHeader><CardContent><RevenueTrendChart /></CardContent></Card>
        <Card><CardHeader><CardTitle>User growth</CardTitle><CardDescription>Total and active user growth.</CardDescription></CardHeader><CardContent><UserGrowthChart /></CardContent></Card>
        <Card><CardHeader><CardTitle>Traffic overview</CardTitle><CardDescription>Visitors by acquisition source.</CardDescription></CardHeader><CardContent><TrafficSourceChart /></CardContent></Card>
        <Card><CardHeader><CardTitle>Device breakdown</CardTitle><CardDescription>Session share by device category.</CardDescription></CardHeader><CardContent><DeviceBreakdownChart /></CardContent></Card>
      </div>
    </DashboardShell>
  );
}
