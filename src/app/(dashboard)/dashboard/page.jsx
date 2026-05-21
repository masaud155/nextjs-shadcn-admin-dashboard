import { Plus, Send, Users } from "lucide-react";
import { PageHeader } from "@/components/common/page-header";
import { PriorityBadge } from "@/components/common/priority-badge";
import { StatusBadge } from "@/components/common/status-badge";
import { DashboardShell } from "@/components/dashboard/dashboard-shell";
import { OverviewChart } from "@/components/dashboard/overview-chart";
import { RecentActivity } from "@/components/dashboard/recent-activity";
import { SectionHeader } from "@/components/dashboard/section-header";
import { StatsCard } from "@/components/dashboard/stats-card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { dashboardStats } from "@/config/dashboard";
import { projects } from "@/data/mock-projects";
import { tasks } from "@/data/mock-tasks";

export const metadata = { title: "Dashboard" };

export default function DashboardPage() {
  return (
    <DashboardShell>
      <PageHeader title="Dashboard" description="Monitor revenue, product delivery, and team activity from one workspace.">
        <Button variant="outline"><Users className="h-4 w-4" /> Invite team</Button>
        <Button><Plus className="h-4 w-4" /> New project</Button>
      </PageHeader>
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">{dashboardStats.map((stat) => <StatsCard key={stat.title} {...stat} />)}</div>
      <div className="grid gap-4 xl:grid-cols-[1fr_360px]">
        <Card>
          <CardHeader><CardTitle>Revenue overview</CardTitle></CardHeader>
          <CardContent><OverviewChart /></CardContent>
        </Card>
        <RecentActivity />
      </div>
      <div className="grid gap-4 xl:grid-cols-[1fr_360px]">
        <Card>
          <CardHeader><SectionHeader title="Latest projects" description="Current delivery health across active work." /></CardHeader>
          <CardContent>
            <Table>
              <TableHeader><TableRow><TableHead>Project</TableHead><TableHead>Status</TableHead><TableHead>Priority</TableHead><TableHead className="text-right">Progress</TableHead></TableRow></TableHeader>
              <TableBody>{projects.map((project) => <TableRow key={project.id}><TableCell className="font-medium">{project.title}</TableCell><TableCell><StatusBadge status={project.status} /></TableCell><TableCell><PriorityBadge priority={project.priority} /></TableCell><TableCell className="text-right">{project.progress}%</TableCell></TableRow>)}</TableBody>
            </Table>
          </CardContent>
        </Card>
        <Card>
          <CardHeader><CardTitle>Task progress</CardTitle></CardHeader>
          <CardContent className="space-y-4">
            {tasks.slice(0, 4).map((task, index) => (
              <div key={task.id} className="space-y-2">
                <div className="flex items-center justify-between gap-3 text-sm"><span className="font-medium">{task.title}</span><Avatar className="h-7 w-7"><AvatarFallback>{task.assignee}</AvatarFallback></Avatar></div>
                <Progress value={[28, 55, 78, 100][index]} />
              </div>
            ))}
            <Button variant="outline" className="w-full"><Send className="h-4 w-4" /> Review queue</Button>
          </CardContent>
        </Card>
      </div>
    </DashboardShell>
  );
}
