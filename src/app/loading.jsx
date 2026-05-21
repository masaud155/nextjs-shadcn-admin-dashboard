import { DashboardShell } from "@/components/dashboard/dashboard-shell";
import { LoadingCard } from "@/components/common/loading-card";

export default function Loading() {
  return (
    <DashboardShell>
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">{Array.from({ length: 4 }).map((_, index) => <LoadingCard key={index} />)}</div>
    </DashboardShell>
  );
}
