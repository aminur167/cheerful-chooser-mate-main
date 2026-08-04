import { createFileRoute } from "@tanstack/react-router";
import { Download } from "lucide-react";
import { PageHeader } from "@/components/common/page-header";
import { Button } from "@/components/ui/button";
import { KpiCard } from "@/components/dashboard/kpi-card";
import { ManagerRevenueTrend } from "@/components/manager/manager-revenue-trend";
import { TherapySummary } from "@/components/manager/therapy-summary";
import { AppointmentSchedule } from "@/components/manager/appointment-schedule";
import { UpcomingAppointments } from "@/components/manager/upcoming-appointments";
import { RecentPatients } from "@/components/manager/recent-patients";
import { FollowUpList } from "@/components/manager/follow-up-list";
import { PaymentSummary } from "@/components/manager/payment-summary";
import { PackageDistribution } from "@/components/manager/package-distribution";
import { InventoryAlerts } from "@/components/manager/inventory-alerts";
import { ManagerActivities } from "@/components/manager/manager-activities";
import { ManagerQuickActions } from "@/components/manager/manager-quick-actions";
import {
  MonthlyTarget,
  PerformanceScore,
  RecentNotifications,
  TodayGoals,
} from "@/components/manager/side-widgets";
import { MANAGER_KPIS } from "@/constants/manager-dashboard-data";
import { getActiveBranch } from "@/lib/manager-session";

const TITLE = "Branch Dashboard — Speech Therapy ERP";
const DESCRIPTION =
  "Daily operations command centre for a single branch: patients, sessions, payments, follow-ups and inventory.";

export const Route = createFileRoute("/manager/dashboard")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ManagerDashboard,
});

function ManagerDashboard() {
  const branch = getActiveBranch();
  const today = new Intl.DateTimeFormat("en-GB", {
    weekday: "long",
    day: "numeric",
    month: "short",
    year: "numeric",
  }).format(new Date("2026-07-31T09:00:00Z"));

  return (
    <div className="space-y-8">
      <PageHeader
        title="Branch Dashboard"
        description="Welcome back! Here's your branch overview for today."
        breadcrumbs={[
          { label: "Branch Manager", to: "/manager" },
          { label: "Dashboard" },
        ]}
        actions={
          <>
            <span className="hidden rounded-lg border border-border bg-muted/40 px-3 py-2 text-[12.5px] font-medium text-muted-foreground sm:inline-block">
              {branch?.name ?? "Branch"} · {today}
            </span>
            <Button variant="outline">
              <Download className="h-4 w-4" aria-hidden="true" />
              Daily report
            </Button>
          </>
        }
      />

      <section aria-label="Key metrics" className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {MANAGER_KPIS.map((kpi) => (
          <KpiCard key={kpi.id} kpi={kpi} />
        ))}
      </section>

      <div className="grid gap-6 2xl:grid-cols-12">
        {/* Main column */}
        <div className="space-y-6 2xl:col-span-9">
          <div className="grid gap-6 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <ManagerRevenueTrend />
            </div>
            <TherapySummary />
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            <AppointmentSchedule />
            <UpcomingAppointments />
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            <RecentPatients />
            <FollowUpList />
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            <PaymentSummary />
            <PackageDistribution />
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            <InventoryAlerts />
            <ManagerActivities />
          </div>

          <ManagerQuickActions />
        </div>

        {/* Right rail */}
        <aside
          aria-label="Branch highlights"
          className="grid gap-6 md:grid-cols-2 2xl:col-span-3 2xl:grid-cols-1 2xl:content-start"
        >
          <TodayGoals />
          <MonthlyTarget />
          <PerformanceScore />
          <RecentNotifications />
        </aside>
      </div>
    </div>
  );
}
