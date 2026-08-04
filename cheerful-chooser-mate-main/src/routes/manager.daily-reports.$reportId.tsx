import { useState } from "react";
import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import {
  Activity,
  ArrowLeft,
  Boxes,
  Building2,
  ClipboardCheck,
  Eye,
  FileDown,
  MapPinned,
  PhoneCall,
  UsersRound,
  Wallet,
} from "lucide-react";
import { toast } from "sonner";
import { PageHeader } from "@/components/common/page-header";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { WidgetCard } from "@/components/dashboard/widget-card";
import { StatusBadge } from "@/components/common/status-badge";
import {
  CircularProgress,
  DailyTimeline,
  PendingTasksWidget,
  TodaysGoalWidget,
  UpcomingTomorrowWidget,
  WeatherWidget,
} from "@/components/daily-reports/daily-widgets";
import { ManagerNotesSummary } from "@/components/daily-reports/manager-notes";
import { ReportPreviewDialog } from "@/components/daily-reports/closing-section";
import { formatTaka } from "@/constants/dashboard-data";
import {
  DAILY_BRANCH,
  REPORT_STATUS_TONE,
  getDailyReport,
  type DailyReport,
} from "@/constants/daily-report-data";

export const Route = createFileRoute("/manager/daily-reports/$reportId")({
  loader: ({ params }) => {
    const report = getDailyReport(params.reportId);
    if (!report) throw notFound();
    return { report };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Daily report unavailable" }, { name: "robots", content: "noindex" }],
      };
    }
    const title = `Daily Report ${loaderData.report.code} — ${loaderData.report.branch}`;
    const description = `Closing report for ${loaderData.report.date}: ${loaderData.report.patientsServed} patients served, ${loaderData.report.completedSessions} sessions completed and ${formatTaka(loaderData.report.collection)} collected.`;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary" },
      ],
    };
  },
  component: DailyReportDetailPage,
});

function SummaryBlock({
  title,
  icon: Icon,
  rows,
}: {
  title: string;
  icon: typeof Activity;
  rows: { label: string; value: string }[];
}) {
  return (
    <WidgetCard title={title} icon={Icon} showMenu={false}>
      <dl className="space-y-0.5">
        {rows.map((row) => (
          <div
            key={row.label}
            className="flex items-baseline justify-between gap-3 border-b border-dashed border-border py-2 last:border-0"
          >
            <dt className="min-w-0 text-[12.5px] text-muted-foreground">{row.label}</dt>
            <dd className="shrink-0 text-[13px] font-medium tabular-nums text-foreground">
              {row.value}
            </dd>
          </div>
        ))}
      </dl>
    </WidgetCard>
  );
}

function DailyReportDetailPage() {
  const { report } = Route.useLoaderData() as { report: DailyReport };
  const [previewOpen, setPreviewOpen] = useState(false);

  return (
    <div className="space-y-8">
      <PageHeader
        title={`Daily Report ${report.code}`}
        description={`${report.branch} · ${report.date} · closing report prepared by ${report.manager}.`}
        breadcrumbs={[
          { label: "Branch Manager", to: "/manager" },
          { label: "Daily Reports", to: "/manager/daily-reports" },
          { label: report.code },
        ]}
        actions={
          <>
            <Button variant="outline" asChild>
              <Link to="/manager/daily-reports">
                <ArrowLeft className="h-4 w-4" aria-hidden="true" />
                Back
              </Link>
            </Button>
            <Button variant="outline" onClick={() => setPreviewOpen(true)}>
              <Eye className="h-4 w-4" aria-hidden="true" />
              Preview Report
            </Button>
            <Button onClick={() => toast.info("PDF export is a placeholder in this build")}>
              <FileDown className="h-4 w-4" aria-hidden="true" />
              Export PDF
            </Button>
          </>
        }
      />

      <div className="grid items-start gap-6 2xl:grid-cols-[minmax(0,1fr)_360px]">
        <div className="min-w-0 space-y-6">
          <Card className="flex flex-wrap items-center justify-between gap-6 p-5">
            <div className="flex min-w-0 items-start gap-3">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
                <Building2 className="h-5 w-5" aria-hidden="true" />
              </span>
              <div className="min-w-0">
                <div className="flex flex-wrap items-center gap-2.5">
                  <h2 className="text-[16px] font-semibold tracking-tight text-foreground">
                    {report.branch}
                  </h2>
                  <StatusBadge tone={REPORT_STATUS_TONE[report.status]} label={report.status} />
                </div>
                <p className="mt-1 text-[12.5px] text-muted-foreground">{DAILY_BRANCH.address}</p>
                <p className="text-[12.5px] text-muted-foreground">
                  {report.openingTime} – {report.closingTime} · {report.workingHours} ·{" "}
                  {DAILY_BRANCH.therapists} therapists · {DAILY_BRANCH.rooms} rooms
                </p>
              </div>
            </div>
            <CircularProgress value={report.performanceScore} label="Score" size={104} />
          </Card>

          <div className="grid gap-6 xl:grid-cols-2">
            <SummaryBlock
              title="Patient Summary"
              icon={UsersRound}
              rows={[
                { label: "Patients served", value: String(report.patientsServed) },
                { label: "New registrations", value: String(report.newRegistrations) },
                { label: "Pending tasks", value: String(report.pendingTasks) },
              ]}
            />
            <SummaryBlock
              title="Clinical Summary"
              icon={ClipboardCheck}
              rows={[
                { label: "Assessments", value: String(report.assessments) },
                { label: "Individual therapy", value: String(report.individualSessions) },
                { label: "Group therapy", value: String(report.groupSessions) },
                { label: "Completed sessions", value: String(report.completedSessions) },
                { label: "Missed sessions", value: String(report.missedSessions) },
                { label: "Cancelled sessions", value: String(report.cancelledSessions) },
              ]}
            />
            <SummaryBlock
              title="Financial Summary"
              icon={Wallet}
              rows={[
                { label: "Collection", value: formatTaka(report.collection) },
                { label: "Due collected", value: formatTaka(report.dueCollected) },
                { label: "Discounts", value: formatTaka(report.discounts) },
                { label: "Pending due", value: formatTaka(report.pendingDue) },
                { label: "Target", value: formatTaka(report.targetCollection) },
              ]}
            />
            <SummaryBlock
              title="Inventory Summary"
              icon={Boxes}
              rows={[
                { label: "Stock in", value: `${report.stockIn} units` },
                { label: "Stock out", value: `${report.stockOut} units` },
                { label: "Materials used", value: `${report.materialsUsed} items` },
                { label: "Low stock items", value: String(report.lowStock) },
              ]}
            />
            <SummaryBlock
              title="Outdoor Summary"
              icon={MapPinned}
              rows={[
                { label: "Outdoor visits", value: String(report.outdoorVisits) },
                { label: "Home visits", value: "3" },
                { label: "School visits", value: "2" },
                { label: "Areas covered", value: "Mirpur, Uttara, Mohammadpur" },
              ]}
            />
            <SummaryBlock
              title="Follow-up Summary"
              icon={PhoneCall}
              rows={[
                { label: "Calls made", value: String(report.followUps) },
                { label: "Connected", value: "12" },
                { label: "Rescheduled", value: "3" },
                { label: "Retention rate", value: "88%" },
              ]}
            />
          </div>

          <DailyTimeline />

          <Card className="p-5">
            <h2 className="text-[15px] font-semibold tracking-tight text-foreground">
              Manager Notes
            </h2>
            <p className="mt-0.5 text-[12.5px] text-muted-foreground">
              Recorded by {report.manager} at {report.closingTime}
            </p>
            <div className="mt-4">
              <ManagerNotesSummary notes={report.notes} />
            </div>
          </Card>
        </div>

        <aside className="space-y-6" aria-label="Daily report widgets">
          <TodaysGoalWidget />
          <PendingTasksWidget />
          <UpcomingTomorrowWidget />
          <WeatherWidget />
        </aside>
      </div>

      <ReportPreviewDialog open={previewOpen} onOpenChange={setPreviewOpen} report={report} />
    </div>
  );
}
