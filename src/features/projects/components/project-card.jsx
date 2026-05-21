import { CalendarDays } from "lucide-react";
import { PriorityBadge } from "@/components/common/priority-badge";
import { StatusBadge } from "@/components/common/status-badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { formatDate } from "@/lib/formatters";

export function ProjectCard({ project }) {
  return (
    <Card>
      <CardHeader className="space-y-3">
        <div className="flex items-start justify-between gap-3">
          <CardTitle className="text-base">{project.title}</CardTitle>
          <StatusBadge status={project.status} />
        </div>
        <p className="text-sm text-muted-foreground">{project.description}</p>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between text-sm"><span className="text-muted-foreground">Progress</span><span className="font-medium">{project.progress}%</span></div>
        <Progress value={project.progress} />
        <div className="flex items-center justify-between">
          <PriorityBadge priority={project.priority} />
          <div className="flex -space-x-2">{project.team.map((member) => <Avatar key={member} className="h-8 w-8 border-2 border-background"><AvatarFallback>{member}</AvatarFallback></Avatar>)}</div>
        </div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground"><CalendarDays className="h-4 w-4" /> {formatDate(project.deadline)}</div>
      </CardContent>
    </Card>
  );
}
