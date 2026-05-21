"use client";

import { useMemo, useState } from "react";
import { Plus } from "lucide-react";
import { EmptyState } from "@/components/common/empty-state";
import { ProjectForm } from "@/components/forms/project-form";
import { ProjectCard } from "@/features/projects/components/project-card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

const filters = ["All", "Active", "Completed", "Delayed"];

export function ProjectsView({ projects }) {
  const [filter, setFilter] = useState("All");
  const [open, setOpen] = useState(false);
  const filteredProjects = useMemo(() => filter === "All" ? projects : projects.filter((project) => project.status === filter), [filter, projects]);
  return (
    <div className="space-y-4">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <Tabs value={filter} onValueChange={setFilter}>
          <TabsList>{filters.map((item) => <TabsTrigger key={item} value={item}>{item}</TabsTrigger>)}</TabsList>
        </Tabs>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild><Button><Plus className="h-4 w-4" /> New project</Button></DialogTrigger>
          <DialogContent className="max-w-2xl">
            <DialogHeader><DialogTitle>Create project</DialogTitle><DialogDescription>Define the first version of a project record.</DialogDescription></DialogHeader>
            <ProjectForm onSuccess={() => setOpen(false)} />
          </DialogContent>
        </Dialog>
      </div>
      {filteredProjects.length ? <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">{filteredProjects.map((project) => <ProjectCard key={project.id} project={project} />)}</div> : <EmptyState title="No projects found" description="Try a different filter or create a project for this status." />}
    </div>
  );
}
