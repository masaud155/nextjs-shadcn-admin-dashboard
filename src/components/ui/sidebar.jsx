import { cn } from "@/lib/utils";

export function Sidebar({ className, ...props }) {
  return <aside className={cn("flex h-full w-72 flex-col border-r bg-background", className)} {...props} />;
}

export function SidebarHeader({ className, ...props }) {
  return <div className={cn("border-b p-4", className)} {...props} />;
}

export function SidebarContent({ className, ...props }) {
  return <div className={cn("flex-1 overflow-auto p-3", className)} {...props} />;
}

export function SidebarFooter({ className, ...props }) {
  return <div className={cn("border-t p-3", className)} {...props} />;
}
