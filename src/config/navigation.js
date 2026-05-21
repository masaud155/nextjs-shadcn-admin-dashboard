import { BarChart3, CheckSquare, FolderKanban, LayoutDashboard, Settings, Users } from "lucide-react";

export const dashboardNav = [
  { title: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { title: "Analytics", href: "/analytics", icon: BarChart3 },
  { title: "Users", href: "/users", icon: Users, badge: "12" },
  { title: "Projects", href: "/projects", icon: FolderKanban },
  { title: "Tasks", href: "/tasks", icon: CheckSquare, badge: "8" },
  { title: "Settings", href: "/settings", icon: Settings }
];
