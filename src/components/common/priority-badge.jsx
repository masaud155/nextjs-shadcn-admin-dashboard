import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const styles = {
  Low: "bg-slate-500/10 text-slate-700 dark:text-slate-300",
  Medium: "bg-blue-500/10 text-blue-700 dark:text-blue-300",
  High: "bg-orange-500/10 text-orange-700 dark:text-orange-300",
  Urgent: "bg-red-500/10 text-red-700 dark:text-red-300"
};

export function PriorityBadge({ priority }) {
  return <Badge variant="secondary" className={cn("border-transparent", styles[priority])}>{priority}</Badge>;
}
