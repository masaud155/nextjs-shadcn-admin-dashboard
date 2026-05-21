import { PlusCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export function EmptyState({ title, description, actionLabel = "Create new", onAction }) {
  return (
    <div className="flex min-h-64 flex-col items-center justify-center rounded-lg border border-dashed p-8 text-center">
      <div className="mb-4 rounded-full bg-muted p-3"><PlusCircle className="h-6 w-6 text-muted-foreground" /></div>
      <h3 className="text-base font-semibold">{title}</h3>
      <p className="mt-1 max-w-sm text-sm text-muted-foreground">{description}</p>
      <Button className="mt-4" onClick={onAction}>{actionLabel}</Button>
    </div>
  );
}
