import { useState } from "react";
import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import {
  Activity,
  AlertTriangle,
  ArrowLeft,
  CalendarClock,
  CheckCircle2,
  ClipboardCheck,
  MessageSquare,
  PencilLine,
  PhoneCall,
  Printer,
  Receipt,
  UserRound,
  Wallet,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { PageHeader } from "@/components/common/page-header";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { WidgetCard } from "@/components/dashboard/widget-card";
import { StatusBadge } from "@/components/common/status-badge";
import { CommunicationTimeline } from "@/components/follow-up/communication-timeline";
import { NewFollowUpDialog } from "@/components/follow-up/new-follow-up-dialog";
import { formatDate, initialsOf } from "@/lib/format";
import { formatTaka } from "@/constants/dashboard-data";
import {
  FOLLOW_UP_PRIORITY_TONE,
  FOLLOW_UP_STATUS_TONE,
  RISK_TONE,
  getFollowUp,
  type FollowUp,
} from "@/constants/follow-up-data";

export const Route = createFileRoute("/manager/follow-up/$followUpId")({
  loader: ({ params }) => {
    const followUp = getFollowUp(params.followUpId);
    if (!followUp) throw notFound();
    return { followUp };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Follow-up unavailable" }, { name: "robots", content: "noindex" }],
      };
    }
    const title = `${loaderData.followUp.patientName} — Follow-up ${loaderData.followUp.code}`;
    const description = `Follow-up record for ${loaderData.followUp.patientName}: ${loaderData.followUp.reason}, ${loaderData.followUp.priority} priority, next contact ${loaderData.followUp.nextFollowUp}.`;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "profile" },
        { name: "twitter:card", content: "summary" },
      ],
    };
  },
  notFoundComponent: FollowUpNotFound,
  component: FollowUpDetailPage,
});

function FollowUpNotFound() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Follow-up not found"
        description="This follow-up record does not exist or has been removed."
        breadcrumbs={[
          { label: "Branch Manager", to: "/manager" },
          { label: "Follow-up Management", to: "/manager/follow-up" },
          { label: "Not found" },
        ]}
        actions={
          <Button asChild variant="outline">
            <Link to="/manager/follow-up">
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              Back to follow-ups
            </Link>
          </Button>
        }
      />
    </div>
  );
}

function FollowUpDetailPage() {
  const { followUp } = Route.useLoaderData() as { followUp: FollowUp };
  const [dialogOpen, setDialogOpen] = useState(false);
  const sessionProgress = Math.round(
    (followUp.clinical.sessionsCompleted / followUp.clinical.sessionsPlanned) * 100,
  );
  const paidProgress = Math.round(
    (followUp.billing.totalPaid / followUp.billing.totalBilled) * 100,
  );

  return (
    <div className="space-y-8">
      <PageHeader
        title={`${followUp.patientName} — Follow-up`}
        description={`${followUp.code} · ${followUp.reason} · ${followUp.branch}`}
        breadcrumbs={[
          { label: "Branch Manager", to: "/manager" },
          { label: "Follow-up Management", to: "/manager/follow-up" },
          { label: followUp.code },
        ]}
        actions={
          <>
            <Button variant="outline" onClick={() => setDialogOpen(true)}>
              <PencilLine className="h-4 w-4" aria-hidden="true" />
              Edit
            </Button>
            <Button variant="outline">
              <Printer className="h-4 w-4" aria-hidden="true" />
              Print
            </Button>
            <Button>
              <CheckCircle2 className="h-4 w-4" aria-hidden="true" />
              Complete Follow-up
            </Button>
          </>
        }
      />

      {/* Header summary */}
      <Card className="p-5">
        <div className="flex flex-wrap items-start gap-5">
          <span className="grid h-14 w-14 shrink-0 place-items-center rounded-xl border border-border bg-muted/50 text-sm font-semibold text-muted-foreground">
            {initialsOf(followUp.patientName)}
          </span>
          <div className="min-w-0 flex-1">
            <h2 className="text-lg font-semibold tracking-tight text-foreground">
              {followUp.patientName}
            </h2>
            <p className="mt-0.5 text-[13px] text-muted-foreground">
              {followUp.patientCode} · {followUp.patientAge} yrs · Guardian{" "}
              {followUp.guardianName} ({followUp.guardianRelation})
            </p>
            <div className="mt-3 flex flex-wrap items-center gap-2">
              <StatusBadge
                tone={FOLLOW_UP_STATUS_TONE[followUp.status]}
                label={followUp.status}
              />
              <StatusBadge
                tone={FOLLOW_UP_PRIORITY_TONE[followUp.priority]}
                label={`${followUp.priority} priority`}
                dot={false}
              />
              <StatusBadge tone="neutral" label={followUp.reason} dot={false} />
            </div>
          </div>
          <dl className="grid gap-4 sm:grid-cols-3">
            <HeaderStat label="Assigned" value={formatDate(followUp.assignedDate)} />
            <HeaderStat label="Next follow-up" value={formatDate(followUp.nextFollowUp)} />
            <HeaderStat label="Assigned to" value={followUp.assignedTo} />
          </dl>
        </div>
        <div className="mt-5 flex flex-wrap gap-2.5 border-t border-border pt-4">
          <Button variant="outline" size="sm">
            <PhoneCall className="h-4 w-4" aria-hidden="true" />
            Call {followUp.guardianRelation.toLowerCase()}
          </Button>
          <Button variant="outline" size="sm">
            <CalendarClock className="h-4 w-4" aria-hidden="true" />
            Reschedule
          </Button>
          <Button variant="outline" size="sm" asChild>
            <Link to="/manager/patients/$patientId" params={{ patientId: followUp.patientId }}>
              <UserRound className="h-4 w-4" aria-hidden="true" />
              Open patient profile
            </Link>
          </Button>
        </div>
      </Card>

      <div className="grid items-start gap-6 xl:grid-cols-[minmax(0,1fr)_360px]">
        <div className="min-w-0 space-y-6">
          {/* Patient summary */}
          <WidgetCard
            title="Patient summary"
            description="Registry details for this follow-up"
            icon={UserRound}
            showMenu={false}
          >
            <dl className="grid gap-4 sm:grid-cols-2">
              <Detail label="Patient" value={followUp.patientName} />
              <Detail label="Patient ID" value={followUp.patientCode} />
              <Detail label="Guardian" value={followUp.guardianName} />
              <Detail label="Guardian phone" value={followUp.guardianPhone} />
              <Detail label="Branch" value={followUp.branch} />
              <Detail label="Last visit" value={formatDate(followUp.lastVisit)} />
              <Detail label="Current package" value={followUp.packageName} />
              <Detail label="Preferred contact time" value={followUp.preferredTime} />
            </dl>
          </WidgetCard>

          {/* Assessment summary */}
          <WidgetCard
            title="Assessment summary"
            description="Latest clinical assessment findings"
            icon={ClipboardCheck}
            showMenu={false}
          >
            <dl className="grid gap-4 sm:grid-cols-2">
              <Detail label="Assessment date" value={formatDate(followUp.clinical.assessmentDate)} />
              <Detail label="Diagnosis" value={followUp.clinical.diagnosis} />
              <Detail label="Severity" value={followUp.clinical.severity} />
              <Detail label="Therapist" value={followUp.clinical.therapist} />
            </dl>
            <p className="mt-4 rounded-lg border border-border bg-muted/30 p-3.5 text-[13px] leading-relaxed text-muted-foreground">
              {followUp.clinical.assessmentSummary}
            </p>
          </WidgetCard>

          {/* Therapy progress */}
          <WidgetCard
            title="Therapy progress"
            description={followUp.clinical.therapyProgram}
            icon={Activity}
            showMenu={false}
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between text-[13px]">
                <span className="text-muted-foreground">Sessions completed</span>
                <span className="font-medium tabular-nums text-foreground">
                  {followUp.clinical.sessionsCompleted} of {followUp.clinical.sessionsPlanned}
                </span>
              </div>
              <Progress value={sessionProgress} aria-label="Therapy progress" />
              <p className="text-[13px] leading-relaxed text-muted-foreground">
                {followUp.clinical.progressNote}
              </p>
            </div>
          </WidgetCard>

          {/* Payment status */}
          <WidgetCard
            title="Payment status"
            description={followUp.billing.packageName}
            icon={Receipt}
            showMenu={false}
          >
            <dl className="grid gap-4 sm:grid-cols-4">
              <Detail label="Total billed" value={formatTaka(followUp.billing.totalBilled)} />
              <Detail label="Total paid" value={formatTaka(followUp.billing.totalPaid)} />
              <Detail label="Outstanding" value={formatTaka(followUp.billing.due)} />
              <Detail label="Last payment" value={formatDate(followUp.billing.lastPaymentDate)} />
            </dl>
            <div className="mt-4 space-y-2">
              <div className="flex items-center justify-between text-[13px]">
                <span className="text-muted-foreground">Collected against billed amount</span>
                <span className="font-medium tabular-nums text-foreground">{paidProgress}%</span>
              </div>
              <Progress value={paidProgress} aria-label="Collection progress" />
            </div>
            <div className="mt-4">
              <Button variant="outline" size="sm" asChild>
                <Link to="/manager/payments">
                  <Wallet className="h-4 w-4" aria-hidden="true" />
                  Open billing
                </Link>
              </Button>
            </div>
          </WidgetCard>

          {/* Communication history */}
          <WidgetCard
            title="Communication history"
            description="Notes captured during this follow-up"
            icon={MessageSquare}
            showMenu={false}
          >
            <dl className="grid gap-4">
              <Detail label="Discussion summary" value={followUp.notes.summary} wrap />
              <Detail label="Patient response" value={followUp.notes.patientResponse} wrap />
              <Detail label="Guardian feedback" value={followUp.notes.guardianFeedback} wrap />
              <Detail label="Recommendations" value={followUp.notes.recommendations} wrap />
              <Detail label="Next action" value={followUp.notes.nextAction} wrap />
            </dl>
          </WidgetCard>

          {/* Timeline */}
          <WidgetCard
            title="Communication timeline"
            description="Full patient journey with this branch"
            icon={CalendarClock}
            showMenu={false}
          >
            <CommunicationTimeline items={followUp.timeline} />
          </WidgetCard>
        </div>

        {/* Right sidebar widgets */}
        <aside className="min-w-0 space-y-6" aria-label="Retention widgets">
          <WidgetCard
            title="Risk level"
            description="Retention risk for this patient"
            icon={AlertTriangle}
            showMenu={false}
          >
            <div className="flex items-center justify-between gap-3">
              <StatusBadge
                tone={RISK_TONE[followUp.metrics.risk]}
                label={`${followUp.metrics.risk} risk`}
              />
              <span
                className={cn(
                  "text-[26px] font-semibold leading-none tabular-nums",
                  followUp.metrics.risk === "High"
                    ? "text-danger"
                    : followUp.metrics.risk === "Moderate"
                      ? "text-warning"
                      : "text-success",
                )}
              >
                {followUp.metrics.attendance}%
              </span>
            </div>
            <p className="mt-3 text-[12.5px] leading-relaxed text-muted-foreground">
              Based on attendance, outstanding dues and missed sessions.
            </p>
          </WidgetCard>

          <Card className="divide-y divide-border p-0">
            <SidebarStat label="Attendance" value={`${followUp.metrics.attendance}%`} />
            <SidebarStat
              label="Remaining sessions"
              value={String(followUp.metrics.remainingSessions)}
            />
            <SidebarStat
              label="Outstanding due"
              value={formatTaka(followUp.metrics.outstandingDue)}
              tone={followUp.metrics.outstandingDue > 0 ? "danger" : "muted"}
            />
            <SidebarStat
              label="Next appointment"
              value={
                followUp.metrics.nextAppointment
                  ? formatDate(followUp.metrics.nextAppointment)
                  : "Not booked"
              }
            />
          </Card>

          <WidgetCard
            title="Quick actions"
            description="Placeholder actions for this follow-up"
            icon={PhoneCall}
            showMenu={false}
            contentClassName="space-y-2.5"
          >
            <Button variant="outline" className="w-full justify-start">
              <PhoneCall className="h-4 w-4" aria-hidden="true" />
              Call patient
            </Button>
            <Button variant="outline" className="w-full justify-start">
              <CalendarClock className="h-4 w-4" aria-hidden="true" />
              Book next appointment
            </Button>
            <Button variant="outline" className="w-full justify-start" asChild>
              <Link to="/manager/follow-up">
                <ArrowLeft className="h-4 w-4" aria-hidden="true" />
                Back to follow-ups
              </Link>
            </Button>
          </WidgetCard>
        </aside>
      </div>

      <NewFollowUpDialog
        open={dialogOpen}
        onOpenChange={setDialogOpen}
        presetPatientId={followUp.patientId}
      />
    </div>
  );
}

function HeaderStat({ label, value }: { label: string; value: string }) {
  return (
    <div className="min-w-0">
      <dt className="text-[11px] uppercase tracking-[0.06em] text-muted-foreground">{label}</dt>
      <dd className="mt-0.5 truncate text-sm font-medium text-foreground">{value}</dd>
    </div>
  );
}

function Detail({
  label,
  value,
  wrap = false,
}: {
  label: string;
  value: string;
  wrap?: boolean;
}) {
  return (
    <div className="min-w-0">
      <dt className="text-[11px] uppercase tracking-[0.06em] text-muted-foreground">{label}</dt>
      <dd
        className={cn(
          "mt-0.5 text-[13.5px] text-foreground",
          wrap ? "leading-relaxed" : "truncate",
        )}
      >
        {value}
      </dd>
    </div>
  );
}

function SidebarStat({
  label,
  value,
  tone = "default",
}: {
  label: string;
  value: string;
  tone?: "default" | "danger" | "muted";
}) {
  return (
    <div className="flex items-center justify-between gap-3 px-5 py-3.5">
      <span className="text-[13px] text-muted-foreground">{label}</span>
      <span
        className={cn(
          "text-sm font-semibold tabular-nums",
          tone === "danger" ? "text-danger" : tone === "muted" ? "text-muted-foreground" : "text-foreground",
        )}
      >
        {value}
      </span>
    </div>
  );
}
