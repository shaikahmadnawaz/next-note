import { DashboardHeader } from "@/components/dashboard/header";
import { DashboardShell } from "@/components/dashboard/shell";
import { Skeleton } from "@/components/ui/skeleton";

export default function DashboardBillingLoading() {
  return (
    <DashboardShell>
      <DashboardHeader
        heading="Subscription"
        text="Manage your subscription plan."
      />
      <div className="grid gap-10">
        <Skeleton />
      </div>
    </DashboardShell>
  );
}
