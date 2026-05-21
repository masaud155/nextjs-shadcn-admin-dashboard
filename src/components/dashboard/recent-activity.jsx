import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { recentActivity } from "@/config/dashboard";

export function RecentActivity() {
  return (
    <Card>
      <CardHeader><CardTitle>Recent activity</CardTitle></CardHeader>
      <CardContent className="space-y-4">
        {recentActivity.map((item) => (
          <div key={item.title} className="flex items-start gap-3">
            <div className="rounded-md bg-muted p-2"><item.icon className="h-4 w-4" /></div>
            <div className="min-w-0 flex-1">
              <p className="text-sm font-medium">{item.title}</p>
              <p className="text-xs text-muted-foreground">{item.time}</p>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
