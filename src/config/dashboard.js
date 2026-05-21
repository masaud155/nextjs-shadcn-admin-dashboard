import { CheckCircle2, Clock3, DollarSign, FolderKanban, Users } from "lucide-react";

export const dashboardStats = [
  {
    title: "Total Users",
    value: "24,892",
    change: 12.5,
    description: "Across all workspaces",
    icon: Users
  },
  {
    title: "Monthly Revenue",
    value: "$128,430",
    change: 8.2,
    description: "Recurring subscription revenue",
    icon: DollarSign
  },
  {
    title: "Active Projects",
    value: "46",
    change: 4.1,
    description: "Shipping this quarter",
    icon: FolderKanban
  },
  {
    title: "Pending Tasks",
    value: "312",
    change: -3.8,
    description: "Open across all teams",
    icon: Clock3
  }
];

export const recentActivity = [
  { title: "New enterprise workspace created", time: "12 min ago", icon: CheckCircle2 },
  { title: "Billing report exported by Sarah Chen", time: "38 min ago", icon: DollarSign },
  { title: "Atlas mobile redesign moved to review", time: "1 hr ago", icon: FolderKanban },
  { title: "Seven new users joined Growth Ops", time: "2 hrs ago", icon: Users }
];
