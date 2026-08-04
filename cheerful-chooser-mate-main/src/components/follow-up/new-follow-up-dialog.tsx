import { useMemo, useState } from "react";
import { Check, Loader2, Phone, Search, UserRound } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FormField } from "@/components/forms/form-field";
import { StatusBadge } from "@/components/common/status-badge";
import { initialsOf } from "@/lib/format";
import { PATIENTS, type Patient } from "@/constants/patient-data";
import {
  CONTACT_TIME_SLOTS,
  FOLLOW_UP_PRIORITIES,
  FOLLOW_UP_REASONS,
  FOLLOW_UP_TODAY_ISO,
  type FollowUpPriority,
  type FollowUpReason,
} from "@/constants/follow-up-data";

const STEPS = [
  { id: 1, title: "Select Patient", description: "Find the patient to follow up" },
  { id: 2, title: "Follow-up Details", description: "Reason, priority and schedule" },
  { id: 3, title: "Communication Notes", description: "Discussion and next action" },
  { id: 4, title: "Review", description: "Confirm before scheduling" },
];

/**
 * UI-only 4-step follow-up scheduler.
 * Nothing is persisted — the Django REST API will own this later.
 */
export function NewFollowUpDialog({
  open,
  onOpenChange,
  presetPatientId,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  presetPatientId?: string;
}) {
  const [step, setStep] = useState(1);
  const [submitting, setSubmitting] = useState(false);
  const [query, setQuery] = useState("");
  const [patientId, setPatientId] = useState<string | undefined>(presetPatientId);
  const [reason, setReason] = useState<FollowUpReason>("Therapy Progress");
  const [priority, setPriority] = useState<FollowUpPriority>("Medium");
  const [date, setDate] = useState(FOLLOW_UP_TODAY_ISO);
  const [time, setTime] = useState(CONTACT_TIME_SLOTS[0]);

  const patient = useMemo(
    () => PATIENTS.find((item) => item.id === patientId),
    [patientId],
  );

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    const list = q
      ? PATIENTS.filter((item) =>
          [item.name, item.code, item.phone, item.guardian.name, item.guardian.phone]
            .join(" ")
            .toLowerCase()
            .includes(q),
        )
      : PATIENTS;
    return list.slice(0, 6);
  }, [query]);

  const close = () => {
    onOpenChange(false);
    setTimeout(() => {
      setStep(1);
      setQuery("");
      setPatientId(presetPatientId);
    }, 200);
  };

  const submit = () => {
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      close();
    }, 900);
  };

  const current = STEPS[step - 1];
  const canContinue = step !== 1 || Boolean(patient);

  return (
    <Dialog
      open={open}
      onOpenChange={(next) => {
        if (!next) close();
        else onOpenChange(true);
      }}
    >
      <DialogContent className="max-h-[92vh] max-w-2xl overflow-y-auto rounded-xl">
        <DialogHeader>
          <DialogTitle>New follow-up</DialogTitle>
          <DialogDescription>
            Schedule a retention follow-up for a patient after assessment, therapy or package
            completion.
          </DialogDescription>
        </DialogHeader>

        <ol className="flex items-center gap-2 border-b border-border pb-5">
          {STEPS.map((item, index) => {
            const state = step === item.id ? "current" : step > item.id ? "done" : "todo";
            return (
              <li key={item.id} className="flex min-w-0 flex-1 items-center gap-2.5">
                <span
                  className={cn(
                    "grid h-7 w-7 shrink-0 place-items-center rounded-full border text-[12px] font-semibold transition-enterprise",
                    state === "current" && "border-primary bg-primary text-primary-foreground",
                    state === "done" && "border-success/40 bg-success/12 text-success",
                    state === "todo" && "border-border bg-muted/50 text-muted-foreground",
                  )}
                  aria-current={state === "current" ? "step" : undefined}
                >
                  {state === "done" ? <Check className="h-3.5 w-3.5" /> : item.id}
                </span>
                <span className="hidden min-w-0 sm:block">
                  <span
                    className={cn(
                      "block truncate text-[13px] font-medium",
                      state === "todo" ? "text-muted-foreground" : "text-foreground",
                    )}
                  >
                    {item.title}
                  </span>
                </span>
                {index < STEPS.length - 1 ? (
                  <span className="h-px flex-1 bg-border" aria-hidden="true" />
                ) : null}
              </li>
            );
          })}
        </ol>

        <div className="sm:hidden">
          <p className="text-[13px] font-medium text-foreground">
            Step {step} of {STEPS.length} — {current.title}
          </p>
          <p className="text-[12.5px] text-muted-foreground">{current.description}</p>
        </div>

        {step === 1 ? (
          <StepPatient
            query={query}
            onQuery={setQuery}
            results={results}
            selected={patient}
            onSelect={setPatientId}
          />
        ) : step === 2 ? (
          <StepDetails
            reason={reason}
            onReason={setReason}
            priority={priority}
            onPriority={setPriority}
            date={date}
            onDate={setDate}
            time={time}
            onTime={setTime}
          />
        ) : step === 3 ? (
          <StepNotes />
        ) : (
          <StepReview
            patient={patient}
            reason={reason}
            priority={priority}
            date={date}
            time={time}
          />
        )}

        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-border pt-5">
          <Button variant="ghost" onClick={close}>
            Cancel
          </Button>
          <div className="flex flex-wrap items-center gap-2.5">
            {step > 1 ? (
              <Button variant="outline" onClick={() => setStep(step - 1)}>
                Back
              </Button>
            ) : null}
            {step < STEPS.length ? (
              <Button onClick={() => setStep(step + 1)} disabled={!canContinue}>
                Continue
              </Button>
            ) : (
              <>
                <Button variant="outline" onClick={close}>
                  Save Draft
                </Button>
                <Button onClick={submit} disabled={submitting}>
                  {submitting ? (
                    <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
                  ) : null}
                  Schedule Follow-up
                </Button>
              </>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

function StepPatient({
  query,
  onQuery,
  results,
  selected,
  onSelect,
}: {
  query: string;
  onQuery: (value: string) => void;
  results: Patient[];
  selected?: Patient;
  onSelect: (id: string) => void;
}) {
  return (
    <div className="space-y-5 py-2">
      <FormField id="follow-up-patient-search" label="Search existing patient" required>
        <div className="relative">
          <Search
            className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground/70"
            aria-hidden="true"
          />
          <Input
            id="follow-up-patient-search"
            value={query}
            onChange={(event) => onQuery(event.target.value)}
            placeholder="Name, patient ID or guardian phone…"
            className="pl-9"
          />
        </div>
      </FormField>

      <ul className="max-h-56 space-y-1.5 overflow-y-auto pr-1">
        {results.map((item) => (
          <li key={item.id}>
            <button
              type="button"
              onClick={() => onSelect(item.id)}
              aria-pressed={selected?.id === item.id}
              className={cn(
                "flex w-full items-center gap-3 rounded-lg border px-3 py-2.5 text-left transition-enterprise",
                selected?.id === item.id
                  ? "border-primary bg-primary/5"
                  : "border-border hover:bg-surface-hover",
              )}
            >
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-border bg-muted/60 text-[12px] font-semibold text-muted-foreground">
                {initialsOf(item.name)}
              </span>
              <span className="min-w-0 flex-1">
                <span className="block truncate text-sm font-medium text-foreground">
                  {item.name}
                </span>
                <span className="block truncate text-[12px] text-muted-foreground">
                  {item.code} · {item.guardian.phone}
                </span>
              </span>
              {selected?.id === item.id ? (
                <Check className="h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
              ) : null}
            </button>
          </li>
        ))}
        {results.length === 0 ? (
          <li className="rounded-lg border border-dashed border-border px-3 py-6 text-center text-[13px] text-muted-foreground">
            No patient matched this search.
          </li>
        ) : null}
      </ul>

      {selected ? <PatientSummaryCard patient={selected} /> : null}
    </div>
  );
}

export function PatientSummaryCard({ patient }: { patient: Patient }) {
  return (
    <section
      aria-label="Patient summary"
      className="rounded-xl border border-border bg-muted/30 p-4 shadow-card"
    >
      <div className="flex items-start gap-4">
        <span className="grid h-14 w-14 shrink-0 place-items-center rounded-xl border border-border bg-background text-sm font-semibold text-muted-foreground">
          {initialsOf(patient.name)}
        </span>
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <p className="truncate text-sm font-semibold text-foreground">{patient.name}</p>
            <StatusBadge tone="info" label={`${patient.age} yrs`} dot={false} />
            <StatusBadge tone="neutral" label={patient.code} dot={false} />
          </div>
          <dl className="mt-3 grid gap-x-4 gap-y-2 text-[12.5px] sm:grid-cols-2">
            <Field icon={<UserRound className="h-3.5 w-3.5" />} label="Guardian">
              {patient.guardian.name} · {patient.guardian.relation}
            </Field>
            <Field icon={<Phone className="h-3.5 w-3.5" />} label="Phone">
              {patient.guardian.phone}
            </Field>
            <div className="min-w-0 sm:col-span-2">
              <dt className="text-[11px] uppercase tracking-[0.06em] text-muted-foreground">
                Current package
              </dt>
              <dd className="truncate text-foreground">
                {patient.billing.packageName} · {patient.billing.paymentType}
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}

function Field({
  icon,
  label,
  children,
}: {
  icon: React.ReactNode;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="min-w-0">
      <dt className="flex items-center gap-1.5 text-[11px] uppercase tracking-[0.06em] text-muted-foreground">
        <span aria-hidden="true">{icon}</span>
        {label}
      </dt>
      <dd className="truncate text-foreground">{children}</dd>
    </div>
  );
}

function StepDetails({
  reason,
  onReason,
  priority,
  onPriority,
  date,
  onDate,
  time,
  onTime,
}: {
  reason: FollowUpReason;
  onReason: (value: FollowUpReason) => void;
  priority: FollowUpPriority;
  onPriority: (value: FollowUpPriority) => void;
  date: string;
  onDate: (value: string) => void;
  time: string;
  onTime: (value: string) => void;
}) {
  return (
    <div className="grid gap-5 py-2 sm:grid-cols-2">
      <FormField id="follow-up-reason" label="Reason" required>
        <Select value={reason} onValueChange={(next) => onReason(next as FollowUpReason)}>
          <SelectTrigger id="follow-up-reason">
            <SelectValue placeholder="Select reason" />
          </SelectTrigger>
          <SelectContent>
            {FOLLOW_UP_REASONS.map((item) => (
              <SelectItem key={item} value={item}>
                {item}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </FormField>
      <FormField id="follow-up-priority" label="Priority" required>
        <Select value={priority} onValueChange={(next) => onPriority(next as FollowUpPriority)}>
          <SelectTrigger id="follow-up-priority">
            <SelectValue placeholder="Select priority" />
          </SelectTrigger>
          <SelectContent>
            {FOLLOW_UP_PRIORITIES.map((item) => (
              <SelectItem key={item} value={item}>
                {item}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </FormField>
      <FormField id="follow-up-date" label="Follow-up date" required>
        <Input
          id="follow-up-date"
          type="date"
          value={date}
          onChange={(event) => onDate(event.target.value)}
        />
      </FormField>
      <FormField
        id="follow-up-time"
        label="Preferred contact time"
        hint="When the guardian prefers to be contacted"
      >
        <Select value={time} onValueChange={onTime}>
          <SelectTrigger id="follow-up-time">
            <SelectValue placeholder="Select time slot" />
          </SelectTrigger>
          <SelectContent>
            {CONTACT_TIME_SLOTS.map((item) => (
              <SelectItem key={item} value={item}>
                {item}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </FormField>
    </div>
  );
}

function StepNotes() {
  return (
    <div className="grid gap-5 py-2">
      <FormField id="follow-up-summary" label="Discussion summary">
        <Textarea
          id="follow-up-summary"
          rows={3}
          placeholder="What will be discussed with the guardian…"
        />
      </FormField>
      <div className="grid gap-5 sm:grid-cols-2">
        <FormField id="follow-up-response" label="Patient response">
          <Textarea id="follow-up-response" rows={3} placeholder="Patient's engagement…" />
        </FormField>
        <FormField id="follow-up-feedback" label="Guardian feedback">
          <Textarea id="follow-up-feedback" rows={3} placeholder="Guardian's observations…" />
        </FormField>
      </div>
      <FormField id="follow-up-recommendations" label="Recommendations">
        <Textarea
          id="follow-up-recommendations"
          rows={3}
          placeholder="Clinical or scheduling recommendations…"
        />
      </FormField>
      <FormField id="follow-up-next-action" label="Next action" required>
        <Input id="follow-up-next-action" placeholder="e.g. Confirm attendance for next 4 sessions" />
      </FormField>
    </div>
  );
}

function StepReview({
  patient,
  reason,
  priority,
  date,
  time,
}: {
  patient?: Patient;
  reason: FollowUpReason;
  priority: FollowUpPriority;
  date: string;
  time: string;
}) {
  return (
    <div className="space-y-5 py-2">
      {patient ? <PatientSummaryCard patient={patient} /> : null}
      <dl className="grid gap-4 rounded-xl border border-border p-4 text-[13px] sm:grid-cols-2">
        <ReviewRow label="Patient" value={patient ? `${patient.name} · ${patient.code}` : "—"} />
        <ReviewRow label="Reason" value={reason} />
        <ReviewRow label="Priority" value={priority} />
        <ReviewRow label="Follow-up date" value={date} />
        <ReviewRow label="Preferred contact time" value={time} />
        <ReviewRow label="Assigned to" value="Tanjila Rahman (CRM)" />
      </dl>
    </div>
  );
}

function ReviewRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="min-w-0">
      <dt className="text-[11px] uppercase tracking-[0.06em] text-muted-foreground">{label}</dt>
      <dd className="mt-0.5 truncate font-medium text-foreground">{value}</dd>
    </div>
  );
}
