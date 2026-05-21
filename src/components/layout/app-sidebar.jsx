"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader } from "@/components/ui/sidebar";
import { dashboardNav } from "@/config/navigation";
import { cn } from "@/lib/utils";

export function AppSidebar({ onNavigate }) {
  const pathname = usePathname();
  return (
    <Sidebar>
      <SidebarHeader>
        <Link href="/dashboard" className="flex items-center gap-3 font-semibold" onClick={onNavigate}>
          <span className="flex h-9 w-9 items-center justify-center rounded-md bg-primary text-sm text-primary-foreground">NK</span>
          <span>Dashboard Kit</span>
        </Link>
      </SidebarHeader>
      <SidebarContent>
        <nav className="grid gap-1">
          {dashboardNav.map((item) => {
            const Icon = item.icon;
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={onNavigate}
                className={cn("flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-accent hover:text-foreground", active && "bg-accent text-foreground")}
              >
                <Icon className="h-4 w-4" />
                <span className="flex-1">{item.title}</span>
                {item.badge ? <Badge variant="secondary">{item.badge}</Badge> : null}
              </Link>
            );
          })}
        </nav>
      </SidebarContent>
      <SidebarFooter>
        <div className="rounded-md border bg-muted/40 p-3 text-xs text-muted-foreground">Ship faster with reusable UI, clean data boundaries, and production-minded patterns.</div>
      </SidebarFooter>
    </Sidebar>
  );
}
