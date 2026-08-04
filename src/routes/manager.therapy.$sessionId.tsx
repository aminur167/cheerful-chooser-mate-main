import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import {
  Activity,
  ArrowLeft,
  CalendarClock,
  CheckCircle2,
  ClipboardList,
  DoorOpen,
  Gauge,
  HeartPulse,
  NotebookPen,
  PencilLine,
  Phone,
  Printer,
  Target,
  UserRound,
  Users,
  Wallet,
} from "lucide-react";
import { PageHeader } from "@/components/common/page-header";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { StatusBadge } from "@/components/common/status-badge";
import { WidgetCard } from "@/components/dashboard/widget-card";
import { ProgressTracker } from "@/components/therapy/progress-tracker";
import { TherapyAvatar } from "@/components/therapy/therapy-table";
import { formatDate, formatDateTime } from "@/lib/format";
import {
  ATTENDANCE_TONE,
  THERAPY_STATUS_TONE,
  averageProgress,
  findTherapySession,
  formatTimeRange,
  type TherapySession,
} from "@/constants/therapy-data";

export const Route = createFileRoute("/manager/therapy/$sessionId")({
  loader: ({ params }) => {
    const session = findTherapySession(params.sessionId);
    if (!session) throw notFound();
    return { session };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Therapy session not found — Speech Therapy ERP" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const { session } = loaderData;
    const title = `${session.code} — ${session.patientName} | Speech Therapy ERP`;
    const description = `Therapy session ${session.code} for ${session.patientName}: session notes, goals, attendance and progress tracking.`;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { name: "robots", content: "noindex" },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary" },
      ],
    };
  },
  notFoundComponent: TherapySessionNotFound,
  component: TherapySessionDetailsPage,
});

function TherapySessionNotFound() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Therapy session not found"
        description="This session record no longer exists or has been archived."
      />
      <Button asChild variant="outline">
        <Link to="/manager/therapy">
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          Back to therapy sessions
        </Link>
      </Button>
    </div>
  );
}

function TherapySessionDetailsPage() {
  const { session } = Route.useLoaderData() as { session: TherapySession };

  return (
    <div className="space-y-8">
      <PageHeader
        title={`${session.code} — ${session.patientName}`}
        description={`${session.mode} · ${session.program} · ${formatDate(session.sessionDate)} · ${session.branch}`}
        breadcrumbs={[
          { label: "Branch Manager", to: "/manager" },
          { label: "Therapy Management", to: "/manager/therapy" },
          { label: session.code },
        ]}
        actions={
          <Button variant="outline" asChild>
            <Link to="/manager/therapy">
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              Back
            </Link>
          </Button>
        }
      />

      <DetailHeader session={session} />

      <div className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_320px]">
        <div className="min-w-0 space-y-6">
          <Section title="Patient Summary" icon={UserRound}>
            <dl className="grid gap-4 sm:grid-cols-2">
              <Field label="Patient" value={session.patientName} />
              <Field label="Patient ID" value={session.patientCode} />
              <Field
                label="Age / Gender"
                value={`${session.patientAge} years · ${session.patientGender}`}
              />
              <Field label="Guardian" value={session.guardianName} />
              <Field label="Guardian phone" value={session.guardianPhone} />
              <Field label="Branch" value={session.branch} />
            </dl>
            <div className="mt-5 border-t border-border pt-4">
              <Button variant="outline" size="sm" asChild>
                <Link to="/manager/patients/$patientId" params={{ patientId: session.patientId }}>
                  <UserRound className="h-4 w-4" aria-hidden="true" />
                  Open patient profile
                </Link>
              </Button>
            </div>
          </Section>

          <Section title="Assessment Summary" icon={ClipboardList}>
            <dl className="grid gap-4">
              <Field label="Diagnosis" value={session.diagnosis} />
              <Field label="Clinical summary" value={session.assessmentSummary} />
            </dl>
          </Section>

          <Section title="Current Therapy Plan" icon={Target}>
            <dl className="grid gap-4 sm:grid-cols-2">
              <Field label="Therapy type" value={session.mode} />
              <Field label="Program" value={session.program} />
              <Field
                label="Session"
                value={`${session.sessionNumber} of ${session.totalSessions}`}
              />
              <Field label="Therapist" value={session.therapist} />
              <Field label="Room" value={session.room} />
              <Field
                label="Equipment"
                value={session.equipment.length > 0 ? session.equipment.join(", ") : "None"}
              />
              <Field label="Plan" value={session.therapyPlan} className="sm:col-span-2" />
            </dl>
          </Section>

          <Section title="Package Information" icon={Wallet}>
            <dl className="grid gap-4 sm:grid-cols-2">
              <Field label="Package" value={session.packageName} />
              <Field
                label="Sessions used"
                value={`${session.packageSessionsUsed} of ${session.packageSessionsTotal}`}
              />
            </dl>
            <Progress
              value={Math.round(
                (session.packageSessionsUsed / session.packageSessionsTotal) * 100,
              )}
              className="mt-4"
            />
          </Section>

          {session.mode === "Individual Therapy" ? (
            <Section title="Individual Therapy" icon={UserRound}>
              <dl className="grid gap-4 sm:grid-cols-2">
                <Field label="Session goal" value={session.goals.sessionGoal} />
                <Field
                  label="Target skills"
                  value={session.goals.targetSkills.join(", ") || "Not set"}
                />
                <Field label="Objectives" value={session.notes.objectives} />
                <Field label="Homework" value={session.notes.homework} />
                <Field
                  label="Expected outcome"
                  value={session.goals.expectedOutcome}
                  className="sm:col-span-2"
                />
              </dl>
            </Section>
          ) : session.group ? (
            <Section
              title="Group Therapy"
              icon={Users}
              aside={<StatusBadge tone="info" label={session.group.groupName} dot={false} />}
            >
              <dl className="grid gap-4 sm:grid-cols-2">
                <Field label="Group name" value={session.group.groupName} />
                <Field label="Session topic" value={session.group.sessionTopic} />
                <Field label="Total children" value={String(session.group.totalChildren)} />
                <Field
                  label="Present / Absent"
                  value={`${session.group.present} present · ${session.group.absent} absent`}
                />
                <Field
                  label="Group activities"
                  value={session.group.activities.join(", ")}
                  className="sm:col-span-2"
                />
                <Field
                  label="Remarks"
                  value={session.group.remarks}
                  className="sm:col-span-2"
                />
              </dl>

              <div className="mt-5 border-t border-border pt-4">
                <p className="text-[12px] font-medium uppercase tracking-[0.08em] text-muted-foreground">
                  Group members
                </p>
                <ul className="mt-3 divide-y divide-border overflow-hidden rounded-lg border border-border">
                  {session.group.members.map((member) => (
                    <li
                      key={member.id}
                      className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3 px-4 py-3"
                    >
                      <div className="flex min-w-0 items-center gap-3">
                        <TherapyAvatar name={member.name} className="h-8 w-8 text-[11px]" />
                        <div className="min-w-0">
                          <p className="truncate text-[13px] font-medium text-foreground">
                            {member.name}
                          </p>
                          <p className="truncate text-[12px] text-muted-foreground">
                            {member.patientCode} · {member.age} yrs
                          </p>
                        </div>
                      </div>
                      <StatusBadge
                        tone={ATTENDANCE_TONE[member.attendance]}
                        label={member.attendance}
                      />
                    </li>
                  ))}
                </ul>
              </div>
            </Section>
          ) : null}

          <Section title="Session Notes" icon={NotebookPen}>
            <dl className="grid gap-4 sm:grid-cols-2">
              <Field label="Objectives" value={session.notes.objectives} />
              <Field label="Activities performed" value={session.notes.activitiesPerformed} />
              <Field label="Patient response" value={session.notes.patientResponse} />
              <Field label="Behavior" value={session.notes.behavior} />
              <Field label="Homework" value={session.notes.homework} />
              <Field label="Recommendations" value={session.notes.recommendations} />
              <Field
                label="Therapist notes"
                value={session.notes.therapistNotes}
                className="sm:col-span-2"
              />
            </dl>
          </Section>

          <Section
            title="Progress Tracker"
            icon={Gauge}
            aside={
              <StatusBadge
                tone="info"
                label={`Average ${averageProgress(session.progressSkills)}%`}
                dot={false}
              />
            }
          >
            <ProgressTracker skills={session.progressSkills} />
          </Section>

          <Section title="Therapy Timeline" icon={Activity}>
            <ol className="relative space-y-6 border-l border-border pl-6">
              {session.timeline.map((event) => (
                <TimelineStep
                  key={event.id}
                  label={event.title}
                  value={formatDate(event.date)}
                  caption={event.description}
                  tone={event.tone === "danger" ? "warning" : event.tone}
                />
              ))}
            </ol>
          </Section>
        </div>

        <aside className="min-w-0 space-y-6">
          <WidgetCard
            title="Session Progress"
            description="Overall therapy goal completion"
            icon={Gauge}
            showMenu={false}
          >
            <p className="text-[26px] font-semibold leading-none tabular-nums text-foreground">
              {session.progress}%
            </p>
            <Progress value={session.progress} className="mt-3" />
            <p className="mt-3 text-[12.5px] text-muted-foreground">
              Session {session.sessionNumber} of {session.totalSessions} in the current plan.
            </p>
          </WidgetCard>

          <WidgetCard
            title="Schedule"
            description="Date, time and room"
            icon={CalendarClock}
            showMenu={false}
          >
            <p className="text-sm font-medium text-foreground">
              {formatDate(session.sessionDate)}
            </p>
            <p className="mt-1 text-[12.5px] tabular-nums text-muted-foreground">
              {formatTimeRange(session.startTime, session.endTime)}
            </p>
            <p className="mt-2 inline-flex items-center gap-1.5 text-[12.5px] text-muted-foreground">
              <DoorOpen className="h-3.5 w-3.5" aria-hidden="true" />
              {session.room}
            </p>
          </WidgetCard>

          <WidgetCard
            title="Assigned Therapist"
            description="Clinician leading this session"
            icon={UserRound}
            showMenu={false}
          >
            <p className="text-sm font-medium text-foreground">{session.therapist}</p>
            <p className="mt-1 text-[12.5px] text-muted-foreground">{session.branch}</p>
          </WidgetCard>

          <WidgetCard
            title="Guardian Contact"
            description="Primary contact for this patient"
            icon={Phone}
            showMenu={false}
          >
            <p className="text-sm font-medium text-foreground">{session.guardianName}</p>
            <p className="mt-1 text-[12.5px] text-muted-foreground">{session.guardianPhone}</p>
            <Button variant="outline" size="sm" className="mt-4 w-full">
              <Phone className="h-4 w-4" aria-hidden="true" />
              Call guardian
            </Button>
          </WidgetCard>
        </aside>
      </div>
    </div>
  );
}

function DetailHeader({ session }: { session: TherapySession }) {
  return (
    <Card className="p-5 sm:p-6">
      <div className="grid gap-5 xl:grid-cols-[minmax(0,1fr)_auto] xl:items-start">
        <div className="grid grid-cols-[auto_minmax(0,1fr)] items-start gap-4">
          <TherapyAvatar
            name={session.patientName}
            className="h-14 w-14 shrink-0 text-sm sm:h-16 sm:w-16 sm:text-base"
          />
          <div className="min-w-0 space-y-2">
            <div className="flex flex-wrap items-center gap-2">
              <span className="font-mono text-[12.5px] font-medium text-primary">
                {session.code}
              </span>
              <StatusBadge tone={THERAPY_STATUS_TONE[session.status]} label={session.status} />
              <StatusBadge tone={ATTENDANCE_TONE[session.attendance]} label={session.attendance} />
              <StatusBadge tone="neutral" label={session.mode} dot={false} />
            </div>
            <h2 className="truncate text-[19px] font-semibold tracking-tight text-foreground">
              {session.patientName}
            </h2>
            <p className="text-[13px] text-muted-foreground">
              {session.patientCode} · {session.patientAge} years · {session.patientGender} ·
              Guardian {session.guardianName}
            </p>
            <p className="flex flex-wrap items-center gap-x-4 gap-y-1 text-[12.5px] text-muted-foreground">
              <span className="inline-flex items-center gap-1.5">
                <HeartPulse className="h-3.5 w-3.5" aria-hidden="true" />
                {session.program}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <CalendarClock className="h-3.5 w-3.5" aria-hidden="true" />
                Created {formatDateTime(session.createdAt)}
              </span>
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2.5">
          <Button variant="outline" size="sm">
            <PencilLine className="h-4 w-4" aria-hidden="true" />
            Edit
          </Button>
          <Button variant="outline" size="sm">
            <Printer className="h-4 w-4" aria-hidden="true" />
            Print
          </Button>
          <Button size="sm" disabled={session.status === "Completed"}>
            <CheckCircle2 className="h-4 w-4" aria-hidden="true" />
            Complete Session
          </Button>
        </div>
      </div>
    </Card>
  );
}

function Section({
  title,
  icon: Icon,
  aside,
  children,
}: {
  title: string;
  icon: typeof UserRound;
  aside?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <Card className="p-5 sm:p-6">
      <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3 border-b border-border pb-4">
        <div className="flex min-w-0 items-center gap-3">
          <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-border bg-muted/50 text-muted-foreground">
            <Icon className="h-[18px] w-[18px]" aria-hidden="true" />
          </span>
          <h2 className="truncate text-[15px] font-semibold tracking-tight text-foreground">
            {title}
          </h2>
        </div>
        {aside ? <div className="shrink-0">{aside}</div> : null}
      </div>
      <div className="pt-5">{children}</div>
    </Card>
  );
}

function Field({
  label,
  value,
  className,
}: {
  label: string;
  value: string;
  className?: string;
}) {
  return (
    <div className={`min-w-0 ${className ?? ""}`}>
      <dt className="text-[12px] text-muted-foreground">{label}</dt>
      <dd className="mt-0.5 break-words text-sm leading-relaxed text-foreground">{value}</dd>
    </div>
  );
}

function TimelineStep({
  label,
  value,
  caption,
  tone,
}: {
  label: string;
  value: string;
  caption: string;
  tone: "info" | "success" | "warning" | "neutral";
}) {
  const dot: Record<typeof tone, string> = {
    info: "bg-info",
    success: "bg-success",
    warning: "bg-warning",
    neutral: "bg-muted-foreground",
  };

  return (
    <li className="relative">
      <span
        className={`absolute -left-[31px] top-1.5 h-2.5 w-2.5 rounded-full ring-4 ring-card ${dot[tone]}`}
        aria-hidden="true"
      />
      <p className="text-[12px] uppercase tracking-[0.06em] text-muted-foreground">{value}</p>
      <p className="mt-0.5 text-sm font-medium text-foreground">{label}</p>
      <p className="mt-0.5 text-[12.5px] leading-relaxed text-muted-foreground">{caption}</p>
    </li>
  );
}
