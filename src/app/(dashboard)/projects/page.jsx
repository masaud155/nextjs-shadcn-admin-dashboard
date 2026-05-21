import { PageHeader } from "@/components/common/page-header";
import { DashboardShell } from "@/components/dashboard/dashboard-shell";
import { ProjectsView } from "@/features/projects/components/projects-view";
import { projects } from "@/features/projects/data/projects";

export const metadata = { title: "Projects" };

export default function ProjectsPage() {
  return (
    <DashboardShell>
      <PageHeader title="Projects" description="Track delivery status, ownership, progress, deadlines, and priority." />
      <ProjectsView projects={projects} />
    </DashboardShell>
  );
}
