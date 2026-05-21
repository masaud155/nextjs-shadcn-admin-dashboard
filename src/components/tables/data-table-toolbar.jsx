"use client";

import { SlidersHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";

export function DataTableToolbar({ table, searchKey = "email" }) {
  return (
    <div className="flex flex-col gap-3 py-4 sm:flex-row sm:items-center sm:justify-between">
      <Input placeholder="Search..." value={table.getColumn(searchKey)?.getFilterValue() ?? ""} onChange={(event) => table.getColumn(searchKey)?.setFilterValue(event.target.value)} className="max-w-sm" />
      <DropdownMenu>
        <DropdownMenuTrigger asChild><Button variant="outline"><SlidersHorizontal className="mr-2 h-4 w-4" /> View</Button></DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          {table.getAllColumns().filter((column) => column.getCanHide()).map((column) => (
            <DropdownMenuCheckboxItem key={column.id} className="capitalize" checked={column.getIsVisible()} onCheckedChange={(value) => column.toggleVisibility(!!value)}>
              {column.id}
            </DropdownMenuCheckboxItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
