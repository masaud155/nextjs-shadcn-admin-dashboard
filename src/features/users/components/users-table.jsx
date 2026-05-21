"use client";

import { useMemo, useState } from "react";
import { toast } from "sonner";
import { DataTable } from "@/components/tables/data-table";
import { DataTableColumnHeader } from "@/components/tables/data-table-column-header";
import { DataTableRowActions } from "@/components/tables/data-table-row-actions";
import { ConfirmDialog } from "@/components/common/confirm-dialog";
import { StatusBadge } from "@/components/common/status-badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Checkbox } from "@/components/ui/checkbox";
import { formatDate } from "@/lib/formatters";

export function UsersTable({ data }) {
  const [selectedUser, setSelectedUser] = useState(null);
  const columns = useMemo(() => [
    {
      id: "select",
      header: ({ table }) => <Checkbox checked={table.getIsAllPageRowsSelected()} onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)} aria-label="Select all" />,
      cell: ({ row }) => <Checkbox checked={row.getIsSelected()} onCheckedChange={(value) => row.toggleSelected(!!value)} aria-label="Select row" />,
      enableSorting: false,
      enableHiding: false
    },
    {
      accessorKey: "name",
      header: ({ column }) => <DataTableColumnHeader column={column} title="User" />,
      cell: ({ row }) => <div className="flex items-center gap-3"><Avatar className="h-8 w-8"><AvatarFallback>{row.original.avatar}</AvatarFallback></Avatar><div><div className="font-medium">{row.original.name}</div><div className="text-xs text-muted-foreground">{row.original.email}</div></div></div>
    },
    { accessorKey: "email", header: "Email" },
    { accessorKey: "role", header: ({ column }) => <DataTableColumnHeader column={column} title="Role" /> },
    { accessorKey: "department", header: "Department" },
    { accessorKey: "status", header: "Status", cell: ({ row }) => <StatusBadge status={row.original.status} /> },
    { accessorKey: "joined", header: ({ column }) => <DataTableColumnHeader column={column} title="Joined" />, cell: ({ row }) => formatDate(row.original.joined) },
    { id: "actions", cell: ({ row }) => <DataTableRowActions row={row} onDelete={setSelectedUser} /> }
  ], []);

  return (
    <>
      <DataTable columns={columns} data={data} searchKey="email" />
      <ConfirmDialog open={!!selectedUser} onOpenChange={(open) => !open && setSelectedUser(null)} title="Delete user?" description={`This will remove ${selectedUser?.name || "this user"} from the workspace.`} onConfirm={() => { toast.success("User removed."); setSelectedUser(null); }} />
    </>
  );
}
