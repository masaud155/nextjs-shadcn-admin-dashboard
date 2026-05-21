"use client";

import { usePathname } from "next/navigation";
import { Breadcrumb, BreadcrumbItem, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";

export function BreadcrumbNav() {
  const pathname = usePathname();
  const current = pathname.split("/").filter(Boolean).at(-1) || "dashboard";
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>Workspace</BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage className="capitalize">{current.replace("-", " ")}</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
}
