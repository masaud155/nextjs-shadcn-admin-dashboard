import { Plus } from "lucide-react";
import { PageHeader } from "@/components/common/page-header";
import { UserForm } from "@/components/forms/user-form";
import { DashboardShell } from "@/components/dashboard/dashboard-shell";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { UsersTable } from "@/features/users/components/users-table";
import { users } from "@/features/users/data/users";

export const metadata = { title: "Users" };

export default function UsersPage() {
  return (
    <DashboardShell>
      <PageHeader title="Users" description="Manage teammates, roles, statuses, and workspace access.">
        <Dialog>
          <DialogTrigger asChild><Button><Plus className="h-4 w-4" /> Add user</Button></DialogTrigger>
          <DialogContent>
            <DialogHeader><DialogTitle>Add user</DialogTitle><DialogDescription>Invite a teammate and assign their workspace role.</DialogDescription></DialogHeader>
            <UserForm />
          </DialogContent>
        </Dialog>
      </PageHeader>
      <Card>
        <CardHeader><CardTitle>Workspace members</CardTitle><CardDescription>Sortable, filterable, selectable TanStack Table implementation.</CardDescription></CardHeader>
        <CardContent><UsersTable data={users} /></CardContent>
      </Card>
    </DashboardShell>
  );
}
