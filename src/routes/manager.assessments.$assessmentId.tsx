import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import {
  ArrowLeft,
  Building2,
  CalendarClock,
  CalendarPlus,
  ClipboardCheck,
  FileText,
  Gauge,
  HeartPulse,
  PencilLine,
  Phone,
  Printer,
  Stethoscope,
  Target,
  UserRound,
  Waves,
} from "lucide-react";
import { PageHeader } from "@/components/common/page-header";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { StatusBadge } from "@/components/common/status-badge";
import { WidgetCard } from "@/components/dashboard/widget-card";
import { ScoreMeter } from "@/components/assessments/score-rating";
import { AssessmentAvatar } from "@/components/assessments/assessment-table";
import { formatDate, formatDateTime } from "@/lib/format";
import {
  ASSESSMENT_STATUS_TONE,
  SEVERITY_TONE,
  averageScore,
  findAssessment,
  type Assessment,
} from "@/constants/assessment-data";

export const Route = createFileRoute("/manager/assessments/$assessmentId")({
  loader: ({ params }) => {
    const assessment = findAssessment(params.assessmentId);
    if (!assessment) throw notFound();
    return { assessment };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Assessment not found — Speech Therapy ERP" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const { assessment } = loaderData;
    const title = `${assessment.code} — ${assessment.patientName} | Speech Therapy ERP`;
    const description = `Clinical assessment ${assessment.code} for ${assessment.patientName}: evaluation scores, diagnosis, therapy recommendation and treatment plan.`;
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
  notFoundComponent: AssessmentNotFound,
  component: AssessmentDetailsPage,
});

function AssessmentNotFound() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Assessment not found"
        description="This assessment record no longer exists or has been archived."
      />
      <Button asChild variant="outline">
        <Link to="/manager/assessments">
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          Back to assessments
        </Link>
      </Button>
    </div>
  );
}

function AssessmentDetailsPage() {
  const { assessment } = Route.useLoaderData() as { assessment: Assessment };

  return (
    <div className="space-y-8">
      <PageHeader
        title={`${assessment.code} — ${assessment.patientName}`}
        description={`${assessment.assessmentType} · ${formatDate(assessment.assessmentDate)} · ${assessment.branch}`}
        breadcrumbs={[
          { label: "Branch Manager", to: "/manager" },
          { label: "Assessment Management", to: "/manager/assessments" },
          { label: assessment.code },
        ]}
        actions={
          <Button variant="outline" asChild>
            <Link to="/manager/assessments">
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              Back
            </Link>
          </Button>
        }
      />

      <DetailHeader assessment={assessment} />

      <div className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_320px]">
        <div className="min-w-0 space-y-6">
          <Section title="Patient Summary" icon={UserRound}>
            <dl className="grid gap-4 sm:grid-cols-2">
              <Field label="Patient" value={assessment.patientName} />
              <Field label="Patient ID" value={assessment.patientCode} />
              <Field
                label="Age / Gender"
                value={`${assessment.patientAge} years · ${assessment.patientGender}`}
              />
              <Field label="Guardian" value={assessment.guardianName} />
              <Field label="Guardian phone" value={assessment.guardianPhone} />
              <Field label="Branch" value={assessment.branch} />
              <Field
                label="Medical summary"
                value={assessment.medicalSummary}
                className="sm:col-span-2"
              />
            </dl>
            <div className="mt-5 border-t border-border pt-4">
              <Button variant="outline" size="sm" asChild>
                <Link to="/manager/patients/$patientId" params={{ patientId: assessment.patientId }}>
                  <UserRound className="h-4 w-4" aria-hidden="true" />
                  Open patient profile
                </Link>
              </Button>
            </div>
          </Section>

          <Section title="Assessment Details" icon={ClipboardCheck}>
            <dl className="grid gap-4 sm:grid-cols-2">
              <Field label="Assessment ID" value={assessment.code} />
              <Field label="Assessment type" value={assessment.assessmentType} />
              <Field label="Assessment date" value={formatDate(assessment.assessmentDate)} />
              <Field label="Assessed by" value={assessment.assessor} />
              <Field
                label="Reason for visit"
                value={assessment.reasonForVisit}
                className="sm:col-span-2"
              />
              <Field
                label="Chief complaint"
                value={assessment.chiefComplaint}
                className="sm:col-span-2"
              />
              <Field
                label="Observation notes"
                value={assessment.observationNotes}
                className="sm:col-span-2"
              />
            </dl>
          </Section>

          <Section
            title="Clinical Evaluation"
            icon={Gauge}
            aside={
              <StatusBadge
                tone="info"
                label={`Average ${averageScore(assessment.evaluation)}/5`}
                dot={false}
              />
            }
          >
            <div className="grid gap-4 sm:grid-cols-2">
              {assessment.evaluation.map((skill) => (
                <ScoreMeter
                  key={skill.key}
                  label={skill.label}
                  score={skill.score}
                  note={skill.note}
                />
              ))}
            </div>
          </Section>

          <Section title="Diagnosis" icon={Stethoscope}>
            <div className="flex flex-wrap items-center gap-2">
              <StatusBadge tone="neutral" label={assessment.diagnosis.primary} dot={false} />
              {assessment.diagnosis.secondary !== "None" ? (
                <StatusBadge tone="neutral" label={assessment.diagnosis.secondary} dot={false} />
              ) : null}
              <StatusBadge
                tone={SEVERITY_TONE[assessment.diagnosis.severity]}
                label={`${assessment.diagnosis.severity} severity`}
              />
            </div>
            <dl className="mt-5 grid gap-4 sm:grid-cols-2">
              <Field label="Primary diagnosis" value={assessment.diagnosis.primary} />
              <Field label="Secondary diagnosis" value={assessment.diagnosis.secondary} />
              <Field
                label="Clinical summary"
                value={assessment.diagnosis.summary}
                className="sm:col-span-2"
              />
            </dl>
          </Section>

          <Section title="Recommendation" icon={Waves}>
            <dl className="grid gap-4 sm:grid-cols-2">
              <Field label="Recommended therapy" value={assessment.recommendation.therapy} />
              <Field label="Frequency" value={assessment.recommendation.frequency} />
              <Field
                label="Sessions per week"
                value={String(assessment.recommendation.sessionsPerWeek)}
              />
              <Field label="Expected duration" value={assessment.recommendation.expectedDuration} />
              <Field
                label="Home instructions"
                value={assessment.recommendation.homeInstructions}
                className="sm:col-span-2"
              />
            </dl>

            <div className="mt-5 border-t border-border pt-5">
              <p className="text-[12px] font-medium uppercase tracking-[0.08em] text-muted-foreground">
                Therapy goals
              </p>
              <ol className="mt-3 space-y-3">
                {assessment.recommendation.goals.map((goal, index) => (
                  <li key={goal} className="flex items-start gap-3">
                    <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full border border-border bg-muted/50 text-[11px] font-semibold text-muted-foreground">
                      {index + 1}
                    </span>
                    <span className="min-w-0 break-words text-sm leading-relaxed text-foreground">
                      {goal}
                    </span>
                  </li>
                ))}
              </ol>
            </div>
          </Section>

          <Section title="Treatment Plan" icon={Target}>
            <ol className="relative space-y-6 border-l border-border pl-6">
              <TimelineStep
                label="Suggested package"
                value={assessment.treatmentPlan.package}
                caption={`${assessment.treatmentPlan.estimatedSessions} estimated sessions`}
                tone="info"
              />
              <TimelineStep
                label="Expected start date"
                value={formatDate(assessment.treatmentPlan.expectedStart)}
                caption={`${assessment.recommendation.sessionsPerWeek} sessions per week`}
                tone="success"
              />
              <TimelineStep
                label="Expected review date"
                value={formatDate(assessment.treatmentPlan.expectedReview)}
                caption={`After ${assessment.recommendation.expectedDuration} of therapy`}
                tone="warning"
              />
              <TimelineStep
                label="Next follow-up"
                value={
                  assessment.nextFollowUp ? formatDate(assessment.nextFollowUp) : "Not scheduled"
                }
                caption="Guardian review appointment"
                tone="neutral"
              />
            </ol>
          </Section>
        </div>

        <aside className="min-w-0 space-y-6">
          <WidgetCard
            title="Assessment Progress"
            description="Completion of the clinical workflow"
            icon={Gauge}
            showMenu={false}
          >
            <p className="text-[26px] font-semibold leading-none tabular-nums text-foreground">
              {assessment.progress}%
            </p>
            <Progress value={assessment.progress} className="mt-3" />
            <p className="mt-3 text-[12.5px] text-muted-foreground">
              {assessment.reportReady
                ? "Report generated and shared with the guardian."
                : "Report pending clinical sign-off."}
            </p>
          </WidgetCard>

          <WidgetCard
            title="Assigned Branch"
            description="Where the assessment was conducted"
            icon={Building2}
            showMenu={false}
          >
            <p className="text-sm font-medium text-foreground">{assessment.branch}</p>
            <p className="mt-1 text-[12.5px] text-muted-foreground">
              Assessed by {assessment.assessor}
            </p>
          </WidgetCard>

          <WidgetCard
            title="Expected Therapy"
            description="Recommended programme"
            icon={Waves}
            showMenu={false}
          >
            <p className="text-sm font-medium text-foreground">
              {assessment.recommendation.therapy}
            </p>
            <p className="mt-1 text-[12.5px] text-muted-foreground">
              {assessment.recommendation.sessionsPerWeek}× per week ·{" "}
              {assessment.recommendation.expectedDuration}
            </p>
          </WidgetCard>

          <WidgetCard
            title="Follow-up Date"
            description="Next scheduled review"
            icon={CalendarClock}
            showMenu={false}
          >
            <p className="text-sm font-medium text-foreground">
              {assessment.nextFollowUp ? formatDate(assessment.nextFollowUp) : "Not scheduled"}
            </p>
            <p className="mt-1 text-[12.5px] text-muted-foreground">
              Guardian contact: {assessment.guardianPhone}
            </p>
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

function DetailHeader({ assessment }: { assessment: Assessment }) {
  return (
    <Card className="p-5 sm:p-6">
      <div className="grid gap-5 xl:grid-cols-[minmax(0,1fr)_auto] xl:items-start">
        <div className="grid grid-cols-[auto_minmax(0,1fr)] items-start gap-4">
          <AssessmentAvatar
            name={assessment.patientName}
            className="h-14 w-14 shrink-0 text-sm sm:h-16 sm:w-16 sm:text-base"
          />
          <div className="min-w-0 space-y-2">
            <div className="flex flex-wrap items-center gap-2">
              <span className="font-mono text-[12.5px] font-medium text-primary">
                {assessment.code}
              </span>
              <StatusBadge
                tone={ASSESSMENT_STATUS_TONE[assessment.status]}
                label={assessment.status}
              />
              <StatusBadge
                tone={SEVERITY_TONE[assessment.diagnosis.severity]}
                label={assessment.diagnosis.severity}
              />
            </div>
            <h2 className="truncate text-[19px] font-semibold tracking-tight text-foreground">
              {assessment.patientName}
            </h2>
            <p className="text-[13px] text-muted-foreground">
              {assessment.patientCode} · {assessment.patientAge} years ·{" "}
              {assessment.patientGender} · Guardian {assessment.guardianName}
            </p>
            <p className="flex flex-wrap items-center gap-x-4 gap-y-1 text-[12.5px] text-muted-foreground">
              <span className="inline-flex items-center gap-1.5">
                <HeartPulse className="h-3.5 w-3.5" aria-hidden="true" />
                {assessment.diagnosis.primary}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <CalendarClock className="h-3.5 w-3.5" aria-hidden="true" />
                Created {formatDateTime(assessment.createdAt)}
              </span>
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2.5">
          <Button variant="outline" size="sm">
            <Printer className="h-4 w-4" aria-hidden="true" />
            Print
          </Button>
          <Button variant="outline" size="sm">
            <PencilLine className="h-4 w-4" aria-hidden="true" />
            Edit
          </Button>
          <Button variant="outline" size="sm">
            <FileText className="h-4 w-4" aria-hidden="true" />
            Generate Report
          </Button>
          <Button size="sm">
            <CalendarPlus className="h-4 w-4" aria-hidden="true" />
            Schedule Therapy
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
      <p className="text-[12px] uppercase tracking-[0.06em] text-muted-foreground">{label}</p>
      <p className="mt-0.5 text-sm font-medium text-foreground">{value}</p>
      <p className="mt-0.5 text-[12.5px] text-muted-foreground">{caption}</p>
    </li>
  );
}
