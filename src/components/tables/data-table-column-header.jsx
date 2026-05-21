"use client";

import { ArrowUpDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export function DataTableColumnHeader({ column, title }) {
  if (!column.getCanSort()) return <span>{title}</span>;
  return (
    <Button variant="ghost" className="-ml-3 h-8" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
      {title}
      <ArrowUpDown className="ml-2 h-4 w-4" />
    </Button>
  );
}
