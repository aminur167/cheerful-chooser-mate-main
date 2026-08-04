import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import {
  Activity,
  AlertTriangle,
  ArrowLeft,
  Banknote,
  CalendarClock,
  CalendarPlus,
  ClipboardCheck,
  ClipboardList,
  FileText,
  HeartPulse,
  Mail,
  MapPin,
  Phone,
  PhoneCall,
  StickyNote,
  Stethoscope,
  User,
  Users,
  Wallet,
  Waves,
} from "lucide-react";
import { PageHeader } from "@/components/common/page-header";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { StatusBadge } from "@/components/common/status-badge";
import { WidgetCard } from "@/components/dashboard/widget-card";
import { ComingSoonCard } from "@/components/patients/coming-soon-card";
import { PatientTimeline } from "@/components/patients/patient-timeline";
import { PatientAvatar } from "@/components/patients/patient-table";
import { formatDate } from "@/lib/format";
import { formatTaka } from "@/constants/dashboard-data";
import {
  PATIENT_STATUS_TONE,
  PAYMENT_STATUS_TONE,
  findPatient,
  type Patient,
} from "@/constants/patient-data";

const TABS = [
  { value: "overview", label: "Overview" },
  { value: "assessment", label: "Assessment" },
  { value: "therapy", label: "Therapy" },
  { value: "payments", label: "Payments" },
  { value: "followup", label: "Follow-up" },
  { value: "documents", label: "Documents" },
  { value: "notes", label: "Notes" },
  { value: "timeline", label: "Activity Timeline" },
] as const;

export const Route = createFileRoute("/manager/patients/$patientId")({
  validateSearch: (search: Record<string, unknown>): { tab?: string } => ({
    tab: typeof search.tab === "string" ? search.tab : undefined,
  }),
  loader: ({ params }) => {
    const patient = findPatient(params.patientId);
    if (!patient) throw notFound();
    return { patient };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Patient not found — Speech Therapy ERP" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const { patient } = loaderData;
    const title = `${patient.name} — Patient Profile | Speech Therapy ERP`;
    const description = `Patient profile for ${patient.name} (${patient.code}): personal details, guardian information, therapy programme, package and payment summary.`;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { name: "robots", content: "noindex" },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "profile" },
        { name: "twitter:card", content: "summary" },
      ],
    };
  },
  notFoundComponent: PatientNotFound,
  component: PatientProfilePage,
});

function PatientNotFound() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Patient not found"
        description="This patient record no longer exists or has been archived."
      />
      <Button asChild variant="outline">
        <Link to="/manager/patients">
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          Back to patients
        </Link>
      </Button>
    </div>
  );
}

function PatientProfilePage() {
  const { patient } = Route.useLoaderData() as { patient: Patient };
  const { tab } = Route.useSearch();
  const navigate = Route.useNavigate();

  const activeTab = TABS.some((item) => item.value === tab) ? tab : "overview";

  return (
    <div className="space-y-8">
      <PageHeader
        title={patient.name}
        description={`${patient.code} · ${patient.age} years · ${patient.gender} · ${patient.branch}`}
        breadcrumbs={[
          { label: "Branch Manager", to: "/manager" },
          { label: "Patient Management", to: "/manager/patients" },
          { label: patient.name },
        ]}
        actions={
          <Button variant="outline" asChild>
            <Link to="/manager/patients">
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              Back
            </Link>
          </Button>
        }
      />

      <ProfileHeader patient={patient} />

      <div className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_320px]">
        <Tabs
          value={activeTab}
          onValueChange={(next) => navigate({ search: { tab: next } })}
          className="min-w-0"
        >
          <div className="-mx-1 overflow-x-auto px-1 pb-1">
            <TabsList className="w-max">
              {TABS.map((item) => (
                <TabsTrigger key={item.value} value={item.value}>
                  {item.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          <TabsContent value="overview" className="mt-6 space-y-6">
            <OverviewTab patient={patient} />
          </TabsContent>

          <TabsContent value="assessment" className="mt-6">
            <ComingSoonCard
              icon={ClipboardCheck}
              title="Assessment records"
              description="Standardised assessment forms, scoring and clinical reports for this patient will appear here."
              capabilities={[
                "Initial and periodic assessment forms",
                "Automatic score calculation and severity bands",
                "Therapist observations with attachments",
                "Printable assessment report for guardians",
              ]}
            />
          </TabsContent>

          <TabsContent value="therapy" className="mt-6">
            <ComingSoonCard
              icon={Waves}
              title="Therapy sessions"
              description="Session-by-session therapy planning, attendance and progress tracking for this patient."
              capabilities={[
                "Session plans mapped to programme goals",
                "Attendance and cancellation history",
                "Goal-wise progress charts over time",
                "Home practice assignments for guardians",
              ]}
            />
          </TabsContent>

          <TabsContent value="payments" className="mt-6">
            <ComingSoonCard
              icon={Wallet}
              title="Payments and invoices"
              description="Full billing ledger with invoices, receipts and outstanding balances for this patient."
              capabilities={[
                "Invoice and receipt history with ৳ totals",
                "Package purchases and instalment schedules",
                "Partial payments and adjustment notes",
                "Due reminders sent to the guardian",
              ]}
            />
          </TabsContent>

          <TabsContent value="followup" className="mt-6">
            <ComingSoonCard
              icon={PhoneCall}
              title="Follow-up management"
              description="Scheduled follow-up calls, outcomes and re-engagement tasks for this patient."
              capabilities={[
                "Follow-up queue with owner and due date",
                "Call outcome logging and next action",
                "Automatic follow-up after missed sessions",
                "Guardian satisfaction check-ins",
              ]}
            />
          </TabsContent>

          <TabsContent value="documents" className="mt-6">
            <ComingSoonCard
              icon={FileText}
              title="Documents"
              description="Referral letters, medical reports and consent forms stored against this patient record."
              capabilities={[
                "Secure upload of referrals and reports",
                "Consent form versioning and signatures",
                "Document type tagging and expiry alerts",
                "Download bundle for external specialists",
              ]}
            />
          </TabsContent>

          <TabsContent value="notes" className="mt-6">
            <ComingSoonCard
              icon={StickyNote}
              title="Clinical notes"
              description="Chronological internal notes from therapists, managers and the front desk."
              capabilities={[
                "Rich text notes with author and timestamp",
                "Pin important notes to the profile header",
                "Role-based visibility for sensitive notes",
                "Mentions to notify colleagues",
              ]}
            />
          </TabsContent>

          <TabsContent value="timeline" className="mt-6">
            <WidgetCard
              title="Activity timeline"
              description="Complete history of this patient's journey"
              icon={Activity}
              showMenu={false}
            >
              <PatientTimeline events={patient.timeline} />
            </WidgetCard>
          </TabsContent>
        </Tabs>

        <ProfileSidebar patient={patient} />
      </div>
    </div>
  );
}

function ProfileHeader({ patient }: { patient: Patient }) {
  return (
    <Card className="p-5 sm:p-6">
      <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center">
        <div className="flex min-w-0 flex-col gap-4 sm:flex-row sm:items-center">
          <PatientAvatar
            name={patient.name}
            className="h-16 w-16 text-lg sm:h-20 sm:w-20 sm:text-xl"
          />
          <div className="min-w-0 space-y-2">
            <div className="flex flex-wrap items-center gap-2.5">
              <h2 className="text-lg font-semibold tracking-tight text-foreground">
                {patient.name}
              </h2>
              <StatusBadge tone={PATIENT_STATUS_TONE[patient.status]} label={patient.status} />
              <StatusBadge
                tone={PAYMENT_STATUS_TONE[patient.paymentStatus]}
                label={patient.paymentStatus}
              />
            </div>
            <dl className="flex flex-wrap items-center gap-x-5 gap-y-1.5 text-[13px] text-muted-foreground">
              <HeaderMeta label="Patient ID" value={patient.code} mono />
              <HeaderMeta label="Age" value={`${patient.age} years`} />
              <HeaderMeta label="Gender" value={patient.gender} />
              <HeaderMeta label="Guardian" value={patient.guardian.name} />
              <HeaderMeta label="Phone" value={patient.guardian.phone} />
            </dl>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2.5 sm:flex sm:flex-wrap lg:justify-end">
          <Button variant="outline" size="sm">
            <ClipboardCheck className="h-4 w-4" aria-hidden="true" />
            Assessment
          </Button>
          <Button variant="outline" size="sm">
            <Waves className="h-4 w-4" aria-hidden="true" />
            Therapy
          </Button>
          <Button variant="outline" size="sm">
            <Wallet className="h-4 w-4" aria-hidden="true" />
            Collect Payment
          </Button>
          <Button size="sm">
            <PhoneCall className="h-4 w-4" aria-hidden="true" />
            Follow-up
          </Button>
        </div>
      </div>
    </Card>
  );
}

function HeaderMeta({
  label,
  value,
  mono = false,
}: {
  label: string;
  value: string;
  mono?: boolean;
}) {
  return (
    <div className="flex min-w-0 items-center gap-1.5">
      <dt className="shrink-0 text-[12px] uppercase tracking-[0.06em] text-muted-foreground/80">
        {label}
      </dt>
      <dd className={`truncate text-foreground ${mono ? "font-mono text-[12.5px]" : ""}`}>
        {value}
      </dd>
    </div>
  );
}

function OverviewTab({ patient }: { patient: Patient }) {
  const progress =
    patient.program.sessionsPlanned > 0
      ? Math.round(
          (patient.program.sessionsCompleted / patient.program.sessionsPlanned) * 100,
        )
      : 0;

  return (
    <>
      <div className="grid gap-6 lg:grid-cols-2">
        <WidgetCard
          title="Personal information"
          description="Identity and contact details"
          icon={User}
          showMenu={false}
        >
          <dl className="grid gap-5 sm:grid-cols-2">
            <Field label="Full name" value={patient.name} />
            <Field label="Patient ID" value={patient.code} />
            <Field label="Date of birth" value={formatDate(patient.dob)} />
            <Field label="Age" value={`${patient.age} years`} />
            <Field label="Gender" value={patient.gender} />
            <Field label="Blood group" value={patient.bloodGroup} />
            <Field icon={Phone} label="Contact number" value={patient.phone} />
            <Field icon={Mail} label="Email" value={patient.email} />
            <Field
              icon={MapPin}
              label="Address"
              value={patient.address}
              className="sm:col-span-2"
            />
          </dl>
        </WidgetCard>

        <WidgetCard
          title="Guardian information"
          description="Primary caregiver and point of contact"
          icon={Users}
          showMenu={false}
        >
          <dl className="grid gap-5 sm:grid-cols-2">
            <Field label="Guardian name" value={patient.guardian.name} />
            <Field label="Relationship" value={patient.guardian.relation} />
            <Field icon={Phone} label="Phone" value={patient.guardian.phone} />
            <Field icon={Mail} label="Email" value={patient.guardian.email} />
            <Field label="Occupation" value={patient.guardian.occupation} />
            <Field label="Registered on" value={formatDate(patient.registeredAt)} />
          </dl>

          <div className="mt-6 rounded-lg border border-warning/30 bg-warning/8 p-4">
            <div className="flex items-start gap-2.5">
              <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-warning" aria-hidden="true" />
              <div className="min-w-0">
                <p className="text-[13px] font-medium text-foreground">Emergency contact</p>
                <p className="mt-0.5 text-[13px] text-muted-foreground">
                  {patient.emergencyContact.name} ({patient.emergencyContact.relation}) ·{" "}
                  <span className="tabular-nums">{patient.emergencyContact.phone}</span>
                </p>
              </div>
            </div>
          </div>
        </WidgetCard>
      </div>

      <WidgetCard
        title="Medical summary"
        description="Clinical background captured at registration"
        icon={Stethoscope}
        showMenu={false}
      >
        <dl className="grid gap-5 sm:grid-cols-2">
          <Field label="Primary concern" value={patient.medical.primaryConcern} />
          <Field label="Diagnosis" value={patient.medical.diagnosis} />
          <Field label="Referral doctor" value={patient.medical.referralDoctor} />
          <Field label="Blood group" value={patient.bloodGroup} />
          <Field
            label="Medical history"
            value={patient.medical.history}
            className="sm:col-span-2"
          />
          <Field label="Notes" value={patient.medical.notes} className="sm:col-span-2" />
        </dl>
      </WidgetCard>

      <div className="grid gap-6 lg:grid-cols-2">
        <WidgetCard
          title="Current therapy"
          description="Assigned programme and progress"
          icon={Waves}
          showMenu={false}
        >
          <dl className="grid gap-5 sm:grid-cols-2">
            <Field label="Therapy type" value={patient.program.therapyType} />
            <Field label="Programme" value={patient.program.program} />
            <Field label="Assigned therapist" value={patient.program.therapist} />
            <Field label="Assessment date" value={formatDate(patient.program.assessmentDate)} />
            <Field label="Expected start" value={formatDate(patient.program.expectedStart)} />
            <Field
              label="Sessions"
              value={
                patient.program.sessionsPlanned > 0
                  ? `${patient.program.sessionsCompleted} of ${patient.program.sessionsPlanned} completed`
                  : "Not started"
              }
            />
          </dl>
          <div className="mt-6">
            <div className="mb-2 flex items-center justify-between text-[12.5px]">
              <span className="text-muted-foreground">Programme progress</span>
              <span className="font-medium tabular-nums text-foreground">{progress}%</span>
            </div>
            <Progress value={progress} />
          </div>
        </WidgetCard>

        <WidgetCard
          title="Current package & payments"
          description="Billing setup and outstanding balance"
          icon={Banknote}
          showMenu={false}
        >
          <dl className="grid gap-5 sm:grid-cols-2">
            <Field label="Package" value={patient.billing.packageName} />
            <Field label="Payment type" value={patient.billing.paymentType} />
            <Field label="Registration fee" value={formatTaka(patient.billing.registrationFee)} />
            <Field label="Total billed" value={formatTaka(patient.billing.totalBilled)} />
            <Field label="Total paid" value={formatTaka(patient.billing.totalPaid)} />
            <Field label="Outstanding due" value={formatTaka(patient.billing.due)} />
            <Field
              label="Last payment"
              value={`${formatTaka(patient.billing.lastPaymentAmount)} on ${formatDate(
                patient.billing.lastPaymentDate,
              )}`}
              className="sm:col-span-2"
            />
            <Field label="Remarks" value={patient.billing.remarks} className="sm:col-span-2" />
          </dl>
        </WidgetCard>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <WidgetCard
          title="Upcoming appointment"
          description="Next scheduled visit for this patient"
          icon={CalendarClock}
          showMenu={false}
        >
          {patient.nextSession ? (
            <div className="flex flex-wrap items-center justify-between gap-4 rounded-lg border border-border bg-muted/30 p-4">
              <div className="min-w-0">
                <p className="text-sm font-semibold text-foreground">
                  {formatDate(patient.nextSession)}
                </p>
                <p className="mt-0.5 text-[13px] text-muted-foreground">
                  {patient.program.therapyType} with {patient.program.therapist}
                </p>
              </div>
              <Button variant="outline" size="sm">
                <CalendarPlus className="h-4 w-4" aria-hidden="true" />
                Reschedule
              </Button>
            </div>
          ) : (
            <div className="rounded-lg border border-dashed border-border bg-muted/20 p-4">
              <p className="text-[13px] text-muted-foreground">
                No upcoming appointment scheduled for this patient.
              </p>
              <Button variant="outline" size="sm" className="mt-3">
                <CalendarPlus className="h-4 w-4" aria-hidden="true" />
                Schedule session
              </Button>
            </div>
          )}
        </WidgetCard>

        <WidgetCard
          title="Latest follow-up"
          description="Most recent guardian contact"
          icon={PhoneCall}
          showMenu={false}
        >
          <div className="rounded-lg border border-border bg-muted/30 p-4">
            <p className="text-[13px] leading-relaxed text-foreground">{patient.followUp.note}</p>
            <p className="mt-2.5 text-[12.5px] text-muted-foreground">
              {formatDate(patient.followUp.date)} · {patient.followUp.by}
            </p>
          </div>
        </WidgetCard>
      </div>

      <WidgetCard
        title="Activity timeline"
        description="Key milestones in this patient's journey"
        icon={Activity}
        showMenu={false}
      >
        <PatientTimeline events={patient.timeline} />
      </WidgetCard>
    </>
  );
}

function ProfileSidebar({ patient }: { patient: Patient }) {
  return (
    <aside aria-label="Patient quick facts" className="space-y-4 xl:sticky xl:top-24 xl:self-start">
      <SideWidget icon={ClipboardList} label="Patient status">
        <StatusBadge tone={PATIENT_STATUS_TONE[patient.status]} label={patient.status} />
        <p className="mt-2 text-[12.5px] text-muted-foreground">
          Registered {formatDate(patient.registeredAt)}
        </p>
      </SideWidget>

      <SideWidget icon={CalendarClock} label="Next appointment">
        <p className="text-sm font-semibold text-foreground">
          {patient.nextSession ? formatDate(patient.nextSession) : "Not scheduled"}
        </p>
        <p className="mt-1 text-[12.5px] text-muted-foreground">
          {patient.nextSession ? patient.program.therapyType : "Awaiting scheduling"}
        </p>
      </SideWidget>

      <SideWidget icon={Banknote} label="Last payment">
        <p className="text-sm font-semibold tabular-nums text-foreground">
          {formatTaka(patient.billing.lastPaymentAmount)}
        </p>
        <p className="mt-1 text-[12.5px] text-muted-foreground">
          {formatDate(patient.billing.lastPaymentDate)}
        </p>
      </SideWidget>

      <SideWidget icon={Wallet} label="Outstanding due">
        <p
          className={`text-sm font-semibold tabular-nums ${
            patient.billing.due > 0 ? "text-danger" : "text-success"
          }`}
        >
          {formatTaka(patient.billing.due)}
        </p>
        <p className="mt-1 text-[12.5px] text-muted-foreground">
          {patient.billing.due > 0 ? "Collection pending" : "No balance outstanding"}
        </p>
      </SideWidget>

      <SideWidget icon={HeartPulse} label="Latest follow-up">
        <p className="text-[13px] leading-relaxed text-foreground">{patient.followUp.note}</p>
        <p className="mt-2 text-[12.5px] text-muted-foreground">
          {formatDate(patient.followUp.date)} · {patient.followUp.by}
        </p>
      </SideWidget>
    </aside>
  );
}

function SideWidget({
  icon: Icon,
  label,
  children,
}: {
  icon: typeof Wallet;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <Card interactive className="p-4">
      <div className="flex items-center gap-2.5">
        <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg border border-border bg-muted/50 text-muted-foreground">
          <Icon className="h-4 w-4" aria-hidden="true" />
        </span>
        <p className="min-w-0 truncate text-[11px] font-semibold uppercase tracking-[0.08em] text-muted-foreground">
          {label}
        </p>
      </div>
      <div className="mt-3">{children}</div>
    </Card>
  );
}

function Field({
  icon: Icon,
  label,
  value,
  className,
}: {
  icon?: typeof MapPin;
  label: string;
  value: string;
  className?: string;
}) {
  return (
    <div className={`flex items-start gap-2.5 ${className ?? ""}`}>
      {Icon ? (
        <Icon className="mt-1 h-4 w-4 shrink-0 text-muted-foreground" aria-hidden="true" />
      ) : null}
      <div className="min-w-0">
        <dt className="text-[12px] text-muted-foreground">{label}</dt>
        <dd className="text-sm leading-relaxed break-words text-foreground">{value}</dd>
      </div>
    </div>
  );
}
