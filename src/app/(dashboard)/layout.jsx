import { AppSidebar } from "@/components/layout/app-sidebar";
import { DashboardHeader } from "@/components/layout/dashboard-header";

export default function DashboardLayout({ children }) {
  return (
    <div className="min-h-screen bg-muted/25">
      <div className="fixed inset-y-0 hidden lg:flex"><AppSidebar /></div>
      <div className="lg:pl-72">
        <DashboardHeader />
        {children}
      </div>
    </div>
  );
}
