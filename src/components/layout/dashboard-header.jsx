"use client";

import { Bell } from "lucide-react";
import { BreadcrumbNav } from "@/components/layout/breadcrumb-nav";
import { CommandMenu } from "@/components/layout/command-menu";
import { MobileSidebar } from "@/components/layout/mobile-sidebar";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import { UserNav } from "@/components/layout/user-nav";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

export function DashboardHeader() {
  return (
    <header className="sticky top-0 z-30 flex h-16 items-center gap-3 border-b bg-background/95 px-4 backdrop-blur lg:px-6">
      <MobileSidebar />
      <div className="hidden lg:block"><BreadcrumbNav /></div>
      <div className="ml-auto flex items-center gap-2">
        <CommandMenu />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" aria-label="Open notifications" className="relative">
              <Bell className="h-4 w-4" />
              <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-primary" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-80">
            <DropdownMenuLabel className="flex items-center justify-between">Notifications <Badge variant="secondary">3</Badge></DropdownMenuLabel>
            <DropdownMenuItem>New user invite pending approval</DropdownMenuItem>
            <DropdownMenuItem>Atlas project health changed</DropdownMenuItem>
            <DropdownMenuItem>Revenue report is ready</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <ThemeToggle />
        <UserNav />
      </div>
    </header>
  );
}
