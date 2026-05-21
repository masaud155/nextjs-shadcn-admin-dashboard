"use client";

import { useMemo, useState } from "react";
import { Plus } from "lucide-react";
import { TaskForm } from "@/components/forms/task-form";
import { TaskCard } from "@/features/tasks/components/task-card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { TASK_STATUSES } from "@/lib/constants";

export function TaskBoard({ tasks }) {
  const [priority, setPriority] = useState("All");
  const [open, setOpen] = useState(false);
  const filteredTasks = useMemo(() => priority === "All" ? tasks : tasks.filter((task) => task.priority === priority), [priority, tasks]);
  return (
    <div className="space-y-4">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <Select value={priority} onValueChange={setPriority}>
          <SelectTrigger className="w-full sm:w-48"><SelectValue placeholder="Priority" /></SelectTrigger>
          <SelectContent>{["All", "Low", "Medium", "High", "Urgent"].map((item) => <SelectItem key={item} value={item}>{item}</SelectItem>)}</SelectContent>
        </Select>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild><Button><Plus className="h-4 w-4" /> Add task</Button></DialogTrigger>
          <DialogContent className="max-w-2xl">
            <DialogHeader><DialogTitle>Add task</DialogTitle><DialogDescription>Create a task card that can later be wired to drag and drop.</DialogDescription></DialogHeader>
            <TaskForm onSuccess={() => setOpen(false)} />
          </DialogContent>
        </Dialog>
      </div>
      <div className="grid gap-4 xl:grid-cols-4">
        {TASK_STATUSES.map((status) => {
          const columnTasks = filteredTasks.filter((task) => task.status === status);
          return (
            <section key={status} className="rounded-lg border bg-muted/30 p-3" data-kanban-column={status}>
              <div className="mb-3 flex items-center justify-between"><h2 className="text-sm font-semibold">{status}</h2><span className="text-xs text-muted-foreground">{columnTasks.length}</span></div>
              <div className="space-y-3" data-droppable-id={status}>{columnTasks.map((task) => <TaskCard key={task.id} task={task} />)}</div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
