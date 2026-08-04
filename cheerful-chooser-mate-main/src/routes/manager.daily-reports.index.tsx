import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { CalendarDays, FileDown, FileText } from "lucide-react";
import { toast } from "sonner";
import { PageHeader } from "@/components/common/page-header";
import { EmptyState } from "@/components/common/empty-state";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { KpiCard } from "@/components/dashboard/kpi-card";
import { StatusBadge } from "@/components/common/status-badge";
import {
  DailyTimeline,
  PendingTasksWidget,
  PerformanceProgressWidget,
  TodaysGoalWidget,
  TodaysSummaryWidget,
  UpcomingTomorrowWidget,
  WeatherWidget,
} from "@/components/daily-reports/daily-widgets";
import { DailyPatientTable } from "@/components/daily-reports/daily-patient-table";
import {
  ClinicalActivityCards,
  SessionDistributionChart,
  TherapyTypeDistributionChart,
} from "@/components/daily-reports/clinical-panels";
import {
  DailyPaymentDistributionChart,
  FinanceCards,
} from "@/components/daily-reports/finance-panels";
import {
  InventoryCards,
  InventoryMovementTable,
  LowStockTodayPanel,
} from "@/components/daily-reports/inventory-panels";
import { ManagerNotesEditor } from "@/components/daily-reports/manager-notes";
import {
  EndOfDayClosing,
  ReportPreviewDialog,
} from "@/components/daily-reports/closing-section";
import {
  DAILY_KPIS,
  DAILY_REPORTS,
  DAILY_TABS,
  REPORT_STATUS_TONE,
  TODAY_LABEL,
  TODAYS_REPORT,
} from "@/constants/daily-report-data";

const TITLE = "Daily Operations Report — Speech Therapy ERP";
const DESCRIPTION =
  "End-of-day operations centre for Dhaka Main Branch: patient activity, clinical sessions, collections, inventory movement and manager notes in one daily closing report.";

export const Route = createFileRoute("/manager/daily-reports/")({
  validateSearch: (search: Record<string, unknown>): { tab?: string } => ({
    tab: typeof search.tab === "string" ? search.tab : undefined,
  }),
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
  component: DailyReportsPage,
});

function DailyReportsPage() {
  const { tab } = Route.useSearch();
  const navigate = Route.useNavigate();
  const activeTab = DAILY_TABS.some((item) => item.value === tab) ? tab! : "overview";

  const [previewOpen, setPreviewOpen] = useState(false);
  const [generated, setGenerated] = useState(true);

  const generateButton = (
    <Button
      onClick={() => {
        setGenerated(true);
        toast.success("Daily report generated for 31 July 2026");
      }}
    >
      <FileText className="h-4 w-4" aria-hidden="true" />
      Generate Daily Report
    </Button>
  );

  return (
    <div className="space-y-8">
      <PageHeader
        title="Daily Operations Report"
        description="Monitor today's operational performance and daily closing report."
        breadcrumbs={[
          { label: "Branch Manager", to: "/manager" },
          { label: "Daily Reports" },
        ]}
        actions={
          <>
            <span className="inline-flex h-9 items-center gap-2 rounded-lg border border-border bg-muted/40 px-3 text-[12.5px] font-medium text-muted-foreground">
              <CalendarDays className="h-4 w-4" aria-hidden="true" />
              {TODAY_LABEL}
            </span>
            {generateButton}
            <Button
              variant="outline"
              onClick={() => toast.info("PDF export is a placeholder in this build")}
            >
              <FileDown className="h-4 w-4" aria-hidden="true" />
              Export PDF
            </Button>
          </>
        }
      />

      {!generated ? (
        <EmptyState
          icon={FileText}
          title="No Daily Report Available"
          description="Today's report will appear after activities are recorded."
          action={generateButton}
        />
      ) : (
        <>
          <section
            aria-label="Today's key metrics"
            className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5"
          >
            {DAILY_KPIS.map((kpi) => (
              <KpiCard key={kpi.id} kpi={kpi} />
            ))}
          </section>

          <div className="grid items-start gap-6 2xl:grid-cols-[minmax(0,1fr)_360px]">
            <Tabs
              value={activeTab}
              onValueChange={(next) => navigate({ search: { tab: next } })}
              className="min-w-0"
            >
              <div className="-mx-1 overflow-x-auto px-1 pb-1">
                <TabsList className="w-max">
                  {DAILY_TABS.map((item) => (
                    <TabsTrigger key={item.value} value={item.value}>
                      {item.label}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </div>

              <TabsContent value="overview" className="mt-6 space-y-6">
                <TodaysSummaryWidget />
                <PerformanceProgressWidget />
                <DailyTimeline />
              </TabsContent>

              <TabsContent value="patients" className="mt-6">
                <div className="overflow-hidden rounded-xl border border-border bg-card shadow-card">
                  <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border px-5 py-4">
                    <div>
                      <h2 className="text-[15px] font-semibold tracking-tight text-foreground">
                        Today's Patient Activity
                      </h2>
                      <p className="mt-0.5 text-[12.5px] text-muted-foreground">
                        Registration, assessment, therapy, payment and follow-up per patient
                      </p>
                    </div>
                    <StatusBadge tone="info" label="12 patients today" />
                  </div>
                  <DailyPatientTable />
                </div>
              </TabsContent>

              <TabsContent value="clinical" className="mt-6 space-y-6">
                <ClinicalActivityCards />
                <div className="grid gap-6 xl:grid-cols-2">
                  <SessionDistributionChart />
                  <TherapyTypeDistributionChart />
                </div>
              </TabsContent>

              <TabsContent value="finance" className="mt-6 space-y-6">
                <FinanceCards />
                <div className="grid gap-6 xl:grid-cols-2">
                  <DailyPaymentDistributionChart />
                  <Card className="p-5">
                    <h2 className="text-[15px] font-semibold tracking-tight text-foreground">
                      Recent Daily Reports
                    </h2>
                    <p className="mt-0.5 text-[12.5px] text-muted-foreground">
                      Open a previous closing report for full details.
                    </p>
                    <ul className="mt-4 space-y-2.5">
                      {DAILY_REPORTS.map((report) => (
                        <li key={report.id}>
                          <Link
                            to="/manager/daily-reports/$reportId"
                            params={{ reportId: report.id }}
                            className="flex items-center justify-between gap-3 rounded-xl border border-border bg-muted/25 px-4 py-3 transition-colors hover:border-border-strong hover:bg-muted/50"
                          >
                            <span className="min-w-0">
                              <span className="block truncate text-sm font-medium text-foreground">
                                {report.code}
                              </span>
                              <span className="mt-0.5 block text-[12px] text-muted-foreground">
                                {report.date} · {report.patientsServed} patients
                              </span>
                            </span>
                            <StatusBadge
                              tone={REPORT_STATUS_TONE[report.status]}
                              label={report.status}
                            />
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="inventory" className="mt-6 space-y-6">
                <InventoryCards />
                <div className="grid items-start gap-6 xl:grid-cols-[minmax(0,1fr)_320px]">
                  <InventoryMovementTable />
                  <LowStockTodayPanel />
                </div>
              </TabsContent>

              <TabsContent value="notes" className="mt-6">
                <ManagerNotesEditor />
              </TabsContent>
            </Tabs>

            <aside className="space-y-6" aria-label="Daily operations widgets">
              <TodaysGoalWidget />
              <PendingTasksWidget />
              <UpcomingTomorrowWidget />
              <WeatherWidget />
            </aside>
          </div>

          <EndOfDayClosing report={TODAYS_REPORT} />
        </>
      )}

      <ReportPreviewDialog
        open={previewOpen}
        onOpenChange={setPreviewOpen}
        report={TODAYS_REPORT}
      />
    </div>
  );
}
