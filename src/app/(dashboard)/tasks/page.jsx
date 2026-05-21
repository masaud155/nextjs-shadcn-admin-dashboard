import { PageHeader } from "@/components/common/page-header";
import { DashboardShell } from "@/components/dashboard/dashboard-shell";
import { TaskBoard } from "@/features/tasks/components/task-board";
import { tasks } from "@/features/tasks/data/tasks";

export const metadata = { title: "Tasks" };

export default function TasksPage() {
  return (
    <DashboardShell>
      <PageHeader title="Tasks" description="A kanban-ready task workflow with filter controls and reusable task cards." />
      <TaskBoard tasks={tasks} />
    </DashboardShell>
  );
}
