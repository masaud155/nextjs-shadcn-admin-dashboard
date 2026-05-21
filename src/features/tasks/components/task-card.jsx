import { CalendarDays } from "lucide-react";
import { PriorityBadge } from "@/components/common/priority-badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { formatDate } from "@/lib/formatters";

export function TaskCard({ task }) {
  return (
    <Card className="cursor-grab shadow-none">
      <CardContent className="space-y-3 p-4">
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-sm font-semibold">{task.title}</h3>
          <PriorityBadge priority={task.priority} />
        </div>
        <p className="line-clamp-2 text-sm text-muted-foreground">{task.description}</p>
        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <span className="flex items-center gap-1"><CalendarDays className="h-4 w-4" /> {formatDate(task.dueDate)}</span>
          <Avatar className="h-7 w-7"><AvatarFallback>{task.assignee}</AvatarFallback></Avatar>
        </div>
      </CardContent>
    </Card>
  );
}
