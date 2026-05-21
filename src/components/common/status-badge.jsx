import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const styles = {
  Active: "bg-emerald-500/10 text-emerald-700 dark:text-emerald-300",
  Completed: "bg-blue-500/10 text-blue-700 dark:text-blue-300",
  Delayed: "bg-red-500/10 text-red-700 dark:text-red-300",
  Planning: "bg-amber-500/10 text-amber-700 dark:text-amber-300",
  Invited: "bg-amber-500/10 text-amber-700 dark:text-amber-300",
  Suspended: "bg-red-500/10 text-red-700 dark:text-red-300",
  Todo: "bg-muted text-muted-foreground",
  "In Progress": "bg-blue-500/10 text-blue-700 dark:text-blue-300",
  Review: "bg-violet-500/10 text-violet-700 dark:text-violet-300",
  Done: "bg-emerald-500/10 text-emerald-700 dark:text-emerald-300"
};

export function StatusBadge({ status }) {
  return <Badge variant="secondary" className={cn("border-transparent", styles[status])}>{status}</Badge>;
}
