import { createFileRoute } from "@tanstack/react-router";
import { Download, Plus } from "lucide-react";
import { PageHeader } from "@/components/common/page-header";
import { Button } from "@/components/ui/button";
import { KpiGrid } from "@/components/dashboard/kpi-card";
import { RevenueOverview } from "@/components/dashboard/revenue-overview";
import { BranchPerformance } from "@/components/dashboard/branch-performance";
import { PatientGrowth } from "@/components/dashboard/patient-growth";
import { PaymentDistribution } from "@/components/dashboard/payment-distribution";
import { TherapyStatistics } from "@/components/dashboard/therapy-statistics";
import { RecentBranches } from "@/components/dashboard/recent-branches";
import { RecentActivities } from "@/components/dashboard/recent-activities";
import { QuickActions } from "@/components/dashboard/quick-actions";
import { SystemOverview } from "@/components/dashboard/system-overview";
import { KPIS } from "@/constants/dashboard-data";

const title = "Super Admin Dashboard — Speech Therapy ERP";
const description =
  "Head-office command centre with branch performance, revenue, patient growth and system health across every Speech Therapy ERP location.";

export const Route = createFileRoute("/super-admin/dashboard")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: SuperAdminDashboard,
});

function SuperAdminDashboard() {
  return (
    <div className="space-y-8">
      <PageHeader
        title="Super Admin Dashboard"
        description="Welcome back! Here's what's happening across all branches today."
        actions={
          <>
            <Button variant="outline">
              <Download className="h-4 w-4" aria-hidden="true" />
              Export Report
            </Button>
            <Button>
              <Plus className="h-4 w-4" aria-hidden="true" />
              Create Branch
            </Button>
          </>
        }
      />

      <section aria-label="Key performance indicators">
        <KpiGrid items={KPIS} />
      </section>

      <div className="grid gap-6 xl:grid-cols-3">
        <div className="xl:col-span-2">
          <RevenueOverview />
        </div>
        <BranchPerformance />
      </div>

      <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
        <PatientGrowth />
        <PaymentDistribution />
        <div className="lg:col-span-2 xl:col-span-1">
          <TherapyStatistics />
        </div>
      </div>

      <div className="grid gap-6 xl:grid-cols-3">
        <div className="xl:col-span-2">
          <RecentBranches />
        </div>
        <RecentActivities />
      </div>

      <div className="grid gap-6 xl:grid-cols-3">
        <div className="xl:col-span-2">
          <QuickActions />
        </div>
        <SystemOverview />
      </div>
    </div>
  );
}
