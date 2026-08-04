import { useMemo, useState } from "react";
import { useNavigate } from "@tanstack/react-router";
import { CalendarPlus, Check, Loader2, Search, UserRound } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
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
import { TherapyAvatar } from "@/components/therapy/therapy-table";
import { formatDate } from "@/lib/format";
import { PATIENTS, type Patient } from "@/constants/patient-data";
import {
  SESSION_GOAL_SKILLS,
  THERAPISTS,
  THERAPY_EQUIPMENT,
  THERAPY_MODES,
  THERAPY_PROGRAMS,
  THERAPY_ROOMS,
  TODAY_ISO,
  formatTimeRange,
  type TherapyMode,
} from "@/constants/therapy-data";

export const THERAPY_WIZARD_STEPS = [
  { id: 1, title: "Patient", description: "Select the patient record" },
  { id: 2, title: "Therapy", description: "Type, program and schedule" },
  { id: 3, title: "Therapist", description: "Assign therapist and room" },
  { id: 4, title: "Goals", description: "Session goals and activities" },
  { id: 5, title: "Review", description: "Confirm and schedule" },
] as const;

type WizardState = {
  patientId: string | null;
  mode: TherapyMode;
  program: string;
  sessionNumber: string;
  sessionDate: string;
  startTime: string;
  endTime: string;
  room: string;
  therapist: string;
  equipment: string[];
  assignmentNotes: string;
  groupName: string;
  sessionTopic: string;
  totalChildren: string;
  sessionGoal: string;
  targetSkills: string[];
  activities: string;
  materials: string;
  expectedOutcome: string;
};

const INITIAL_STATE: WizardState = {
  patientId: null,
  mode: "Individual Therapy",
  program: "Speech Therapy",
  sessionNumber: "1",
  sessionDate: TODAY_ISO,
  startTime: "10:00",
  endTime: "10:45",
  room: "",
  therapist: "",
  equipment: [],
  assignmentNotes: "",
  groupName: "",
  sessionTopic: "",
  totalChildren: "6",
  sessionGoal: "",
  targetSkills: [],
  activities: "",
  materials: "",
  expectedOutcome: "",
};

/**
 * UI-only 5-step therapy scheduling wizard.
 * Nothing is persisted — submission is simulated until the API is connected.
 */
export function TherapyWizard() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [state, setState] = useState<WizardState>(INITIAL_STATE);
  const [submitting, setSubmitting] = useState<"draft" | "schedule" | null>(null);

  const set = <K extends keyof WizardState>(key: K, value: WizardState[K]) =>
    setState((current) => ({ ...current, [key]: value }));

  const patient = useMemo(
    () => PATIENTS.find((item) => item.id === state.patientId) ?? null,
    [state.patientId],
  );

  const submit = (mode: "draft" | "schedule") => {
    setSubmitting(mode);
    setTimeout(() => {
      setSubmitting(null);
      navigate({ to: "/manager/therapy" });
    }, 900);
  };

  const current = THERAPY_WIZARD_STEPS[step - 1];
  const canContinue = step !== 1 || Boolean(patient);

  return (
    <div className="space-y-6">
      <StepIndicator step={step} onSelect={setStep} />

      <Card className="p-5 sm:p-6">
        <div className="border-b border-border pb-4">
          <p className="text-[12px] font-medium uppercase tracking-[0.08em] text-muted-foreground">
            Step {step} of {THERAPY_WIZARD_STEPS.length}
          </p>
          <h2 className="mt-1 text-[17px] font-semibold tracking-tight text-foreground">
            {current.title}
          </h2>
          <p className="mt-0.5 text-[13px] text-muted-foreground">{current.description}</p>
        </div>

        <div className="pt-5">
          {step === 1 ? (
            <StepPatient
              selectedId={state.patientId}
              onSelect={(id) => set("patientId", id)}
              patient={patient}
            />
          ) : step === 2 ? (
            <StepTherapy state={state} set={set} />
          ) : step === 3 ? (
            <StepTherapist state={state} set={set} />
          ) : step === 4 ? (
            <StepGoals state={state} set={set} />
          ) : (
            <StepReview state={state} patient={patient} />
          )}
        </div>

        <div className="mt-6 flex flex-col gap-3 border-t border-border pt-5 sm:flex-row sm:items-center sm:justify-between">
          <Button
            variant="ghost"
            onClick={() => navigate({ to: "/manager/therapy" })}
            className="sm:order-first"
          >
            Cancel
          </Button>

          <div className="flex flex-wrap items-center gap-2.5">
            {step > 1 ? (
              <Button variant="outline" onClick={() => setStep(step - 1)}>
                Back
              </Button>
            ) : null}
            {step < THERAPY_WIZARD_STEPS.length ? (
              <Button onClick={() => setStep(step + 1)} disabled={!canContinue}>
                Continue
              </Button>
            ) : (
              <>
                <Button
                  variant="outline"
                  onClick={() => submit("draft")}
                  disabled={submitting !== null}
                >
                  {submitting === "draft" ? (
                    <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
                  ) : null}
                  Save Draft
                </Button>
                <Button onClick={() => submit("schedule")} disabled={submitting !== null}>
                  {submitting === "schedule" ? (
                    <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
                  ) : (
                    <CalendarPlus className="h-4 w-4" aria-hidden="true" />
                  )}
                  Schedule Session
                </Button>
              </>
            )}
          </div>
        </div>

        {step === 1 && !patient ? (
          <p className="mt-3 text-[12.5px] text-muted-foreground">
            Select a patient to continue to the therapy details.
          </p>
        ) : null}
      </Card>
    </div>
  );
}

function StepIndicator({ step, onSelect }: { step: number; onSelect: (step: number) => void }) {
  return (
    <>
      {/* Desktop rail */}
      <ol className="hidden items-center gap-2 lg:flex">
        {THERAPY_WIZARD_STEPS.map((item) => {
          const state = step === item.id ? "current" : step > item.id ? "done" : "todo";
          return (
            <li key={item.id} className="flex min-w-0 flex-1 items-center gap-2.5">
              <button
                type="button"
                onClick={() => onSelect(item.id)}
                className="flex min-w-0 items-center gap-2.5 text-left"
                aria-current={state === "current" ? "step" : undefined}
              >
                <span
                  className={cn(
                    "grid h-7 w-7 shrink-0 place-items-center rounded-full border text-[12px] font-semibold transition-enterprise",
                    state === "current" && "border-primary bg-primary text-primary-foreground",
                    state === "done" && "border-success/40 bg-success/12 text-success",
                    state === "todo" && "border-border bg-muted/50 text-muted-foreground",
                  )}
                >
                  {state === "done" ? <Check className="h-3.5 w-3.5" /> : item.id}
                </span>
                <span className="min-w-0">
                  <span
                    className={cn(
                      "block truncate text-[13px] font-medium",
                      state === "todo" ? "text-muted-foreground" : "text-foreground",
                    )}
                  >
                    {item.title}
                  </span>
                </span>
              </button>
              {item.id < THERAPY_WIZARD_STEPS.length ? (
                <span className="h-px flex-1 bg-border" aria-hidden="true" />
              ) : null}
            </li>
          );
        })}
      </ol>

      {/* Mobile / tablet progress */}
      <div className="lg:hidden">
        <div className="flex items-center justify-between gap-3">
          <p className="text-[13px] font-medium text-foreground">
            Step {step} of {THERAPY_WIZARD_STEPS.length} · {THERAPY_WIZARD_STEPS[step - 1].title}
          </p>
          <p className="text-[12.5px] text-muted-foreground">
            {Math.round((step / THERAPY_WIZARD_STEPS.length) * 100)}%
          </p>
        </div>
        <div className="mt-2 flex gap-1.5" aria-hidden="true">
          {THERAPY_WIZARD_STEPS.map((item) => (
            <span
              key={item.id}
              className={cn(
                "h-1.5 flex-1 rounded-full",
                item.id <= step ? "bg-primary" : "bg-muted",
              )}
            />
          ))}
        </div>
      </div>
    </>
  );
}

function StepPatient({
  selectedId,
  onSelect,
  patient,
}: {
  selectedId: string | null;
  onSelect: (id: string) => void;
  patient: Patient | null;
}) {
  const [query, setQuery] = useState("");

  const results = useMemo(() => {
    const term = query.trim().toLowerCase();
    const list = term
      ? PATIENTS.filter((item) =>
          [item.name, item.code, item.phone, item.guardian.name, item.guardian.phone]
            .join(" ")
            .toLowerCase()
            .includes(term),
        )
      : PATIENTS;
    return list.slice(0, 6);
  }, [query]);

  return (
    <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,340px)]">
      <div className="min-w-0 space-y-4">
        <FormField
          id="therapy-patient-search"
          label="Search existing patient"
          hint="Search by name, patient ID, phone or guardian"
        >
          <div className="relative">
            <Search
              className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground/70"
              aria-hidden="true"
            />
            <Input
              id="therapy-patient-search"
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="e.g. Rahim Ahmed or PT-DHK-1001"
              className="pl-9"
            />
          </div>
        </FormField>

        <ul className="divide-y divide-border overflow-hidden rounded-lg border border-border">
          {results.length === 0 ? (
            <li className="px-4 py-6 text-center text-[13px] text-muted-foreground">
              No patients match this search.
            </li>
          ) : (
            results.map((item) => (
              <li key={item.id}>
                <button
                  type="button"
                  onClick={() => onSelect(item.id)}
                  aria-pressed={selectedId === item.id}
                  className={cn(
                    "flex w-full items-center gap-3 px-4 py-3 text-left transition-enterprise",
                    selectedId === item.id ? "bg-primary/8" : "hover:bg-surface-hover",
                  )}
                >
                  <TherapyAvatar name={item.name} />
                  <span className="min-w-0 flex-1">
                    <span className="block truncate text-sm font-medium text-foreground">
                      {item.name}
                    </span>
                    <span className="block truncate text-[12px] text-muted-foreground">
                      {item.code} · {item.age} yrs · {item.gender} · {item.branch}
                    </span>
                  </span>
                  {selectedId === item.id ? (
                    <Check className="h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                  ) : null}
                </button>
              </li>
            ))
          )}
        </ul>
      </div>

      <div className="min-w-0">
        {patient ? (
          <Card className="p-5">
            <div className="flex min-w-0 items-center gap-3">
              <TherapyAvatar name={patient.name} className="h-12 w-12 text-sm" />
              <div className="min-w-0">
                <p className="truncate text-[15px] font-semibold text-foreground">{patient.name}</p>
                <p className="truncate font-mono text-[12px] text-muted-foreground">
                  {patient.code}
                </p>
              </div>
            </div>
            <dl className="mt-4 space-y-3 border-t border-border pt-4 text-[13px]">
              <SummaryRow label="Age" value={`${patient.age} years`} />
              <SummaryRow
                label="Guardian"
                value={`${patient.guardian.name} (${patient.guardian.relation})`}
              />
              <SummaryRow label="Phone" value={patient.guardian.phone} />
              <SummaryRow label="Diagnosis" value={patient.medical.diagnosis} />
              <SummaryRow label="Current package" value={patient.billing.packageName} />
              <SummaryRow
                label="Sessions"
                value={`${patient.program.sessionsCompleted} of ${patient.program.sessionsPlanned} completed`}
              />
            </dl>
          </Card>
        ) : (
          <Card className="flex h-full flex-col items-center justify-center gap-3 border-dashed p-6 text-center">
            <span className="grid h-11 w-11 place-items-center rounded-full border border-border bg-muted/50 text-muted-foreground">
              <UserRound className="h-5 w-5" aria-hidden="true" />
            </span>
            <p className="text-[13px] font-medium text-foreground">No patient selected</p>
            <p className="text-[12.5px] text-muted-foreground">
              Pick a patient from the list to load their therapy information card.
            </p>
          </Card>
        )}
      </div>
    </div>
  );
}

function SummaryRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="grid grid-cols-[minmax(0,120px)_minmax(0,1fr)] gap-3">
      <dt className="text-[12px] text-muted-foreground">{label}</dt>
      <dd className="min-w-0 break-words text-[13px] text-foreground">{value}</dd>
    </div>
  );
}

type SetFn = <K extends keyof WizardState>(key: K, value: WizardState[K]) => void;

function StepTherapy({ state, set }: { state: WizardState; set: SetFn }) {
  return (
    <div className="space-y-6">
      <div className="grid gap-3 sm:grid-cols-2">
        {THERAPY_MODES.map((mode) => (
          <button
            key={mode}
            type="button"
            onClick={() => set("mode", mode)}
            aria-pressed={state.mode === mode}
            className={cn(
              "rounded-lg border p-4 text-left transition-enterprise",
              state.mode === mode
                ? "border-primary bg-primary/8"
                : "border-border hover:bg-surface-hover",
            )}
          >
            <p className="text-sm font-medium text-foreground">{mode}</p>
            <p className="mt-1 text-[12.5px] text-muted-foreground">
              {mode === "Individual Therapy"
                ? "One-to-one session with a single patient."
                : "Small group batch with shared goals and activities."}
            </p>
          </button>
        ))}
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <FormField id="therapy-program" label="Program" required>
          <Select value={state.program} onValueChange={(value) => set("program", value)}>
            <SelectTrigger id="therapy-program">
              <SelectValue placeholder="Select program" />
            </SelectTrigger>
            <SelectContent>
              {THERAPY_PROGRAMS.map((program) => (
                <SelectItem key={program} value={program}>
                  {program}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </FormField>
        <FormField id="therapy-session-number" label="Session number" required>
          <Input
            id="therapy-session-number"
            type="number"
            min={1}
            value={state.sessionNumber}
            onChange={(event) => set("sessionNumber", event.target.value)}
          />
        </FormField>
        <FormField id="therapy-date" label="Session date" required>
          <Input
            id="therapy-date"
            type="date"
            value={state.sessionDate}
            onChange={(event) => set("sessionDate", event.target.value)}
          />
        </FormField>
        <FormField id="therapy-room" label="Room">
          <Select value={state.room} onValueChange={(value) => set("room", value)}>
            <SelectTrigger id="therapy-room">
              <SelectValue placeholder="Select room" />
            </SelectTrigger>
            <SelectContent>
              {THERAPY_ROOMS.map((room) => (
                <SelectItem key={room} value={room}>
                  {room}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </FormField>
        <FormField id="therapy-start" label="Start time" required>
          <Input
            id="therapy-start"
            type="time"
            value={state.startTime}
            onChange={(event) => set("startTime", event.target.value)}
          />
        </FormField>
        <FormField id="therapy-end" label="End time" required>
          <Input
            id="therapy-end"
            type="time"
            value={state.endTime}
            onChange={(event) => set("endTime", event.target.value)}
          />
        </FormField>
      </div>

      {state.mode === "Group Therapy" ? (
        <div className="grid gap-5 rounded-lg border border-border bg-muted/25 p-4 sm:grid-cols-2 sm:p-5">
          <FormField id="group-name" label="Group name" required>
            <Input
              id="group-name"
              value={state.groupName}
              onChange={(event) => set("groupName", event.target.value)}
              placeholder="e.g. Little Talkers — Group B"
            />
          </FormField>
          <FormField id="group-children" label="Total children">
            <Input
              id="group-children"
              type="number"
              min={2}
              value={state.totalChildren}
              onChange={(event) => set("totalChildren", event.target.value)}
            />
          </FormField>
          <FormField id="group-topic" label="Session topic" className="sm:col-span-2">
            <Input
              id="group-topic"
              value={state.sessionTopic}
              onChange={(event) => set("sessionTopic", event.target.value)}
              placeholder="e.g. Turn taking and greeting peers"
            />
          </FormField>
        </div>
      ) : null}
    </div>
  );
}

function StepTherapist({ state, set }: { state: WizardState; set: SetFn }) {
  const toggleEquipment = (item: string) =>
    set(
      "equipment",
      state.equipment.includes(item)
        ? state.equipment.filter((value) => value !== item)
        : [...state.equipment, item],
    );

  return (
    <div className="space-y-6">
      <div className="grid gap-5 sm:grid-cols-2">
        <FormField id="therapy-therapist" label="Therapist" hint="Staff module connects later">
          <Select value={state.therapist} onValueChange={(value) => set("therapist", value)}>
            <SelectTrigger id="therapy-therapist">
              <SelectValue placeholder="Select therapist" />
            </SelectTrigger>
            <SelectContent>
              {THERAPISTS.map((name) => (
                <SelectItem key={name} value={name}>
                  {name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </FormField>
        <FormField id="therapy-room-assign" label="Room">
          <Select value={state.room} onValueChange={(value) => set("room", value)}>
            <SelectTrigger id="therapy-room-assign">
              <SelectValue placeholder="Select room" />
            </SelectTrigger>
            <SelectContent>
              {THERAPY_ROOMS.map((room) => (
                <SelectItem key={room} value={room}>
                  {room}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </FormField>
      </div>

      <div>
        <p className="text-[13px] font-medium text-foreground">Equipment</p>
        <p className="mt-0.5 text-[12.5px] text-muted-foreground">
          Inventory module connects later — pick from the standard therapy kit.
        </p>
        <div className="mt-3 flex flex-wrap gap-2">
          {THERAPY_EQUIPMENT.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => toggleEquipment(item)}
              aria-pressed={state.equipment.includes(item)}
              className={cn(
                "rounded-full border px-3 py-1.5 text-[12.5px] transition-enterprise",
                state.equipment.includes(item)
                  ? "border-primary bg-primary/10 text-primary"
                  : "border-border text-muted-foreground hover:bg-surface-hover",
              )}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      <FormField id="therapy-notes" label="Notes">
        <Textarea
          id="therapy-notes"
          rows={3}
          value={state.assignmentNotes}
          onChange={(event) => set("assignmentNotes", event.target.value)}
          placeholder="Any preparation notes for the therapist or front desk"
        />
      </FormField>
    </div>
  );
}

function StepGoals({ state, set }: { state: WizardState; set: SetFn }) {
  const toggleSkill = (skill: string) =>
    set(
      "targetSkills",
      state.targetSkills.includes(skill)
        ? state.targetSkills.filter((value) => value !== skill)
        : [...state.targetSkills, skill],
    );

  return (
    <div className="space-y-6">
      <FormField id="session-goal" label="Session goal" required>
        <Textarea
          id="session-goal"
          rows={2}
          value={state.sessionGoal}
          onChange={(event) => set("sessionGoal", event.target.value)}
          placeholder="e.g. Produce /r/ in initial word position with 80% accuracy"
        />
      </FormField>

      <div>
        <p className="text-[13px] font-medium text-foreground">Target skills</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {SESSION_GOAL_SKILLS.map((skill) => (
            <button
              key={skill}
              type="button"
              onClick={() => toggleSkill(skill)}
              aria-pressed={state.targetSkills.includes(skill)}
              className={cn(
                "rounded-full border px-3 py-1.5 text-[12.5px] transition-enterprise",
                state.targetSkills.includes(skill)
                  ? "border-primary bg-primary/10 text-primary"
                  : "border-border text-muted-foreground hover:bg-surface-hover",
              )}
            >
              {skill}
            </button>
          ))}
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <FormField id="session-activities" label="Activities" hint="One per line">
          <Textarea
            id="session-activities"
            rows={4}
            value={state.activities}
            onChange={(event) => set("activities", event.target.value)}
            placeholder={"Mirror drills\nPicture naming\nSentence repetition"}
          />
        </FormField>
        <FormField id="session-materials" label="Materials required" hint="One per line">
          <Textarea
            id="session-materials"
            rows={4}
            value={state.materials}
            onChange={(event) => set("materials", event.target.value)}
            placeholder={"Articulation card set\nMirror station"}
          />
        </FormField>
      </div>

      <FormField id="session-outcome" label="Expected outcome">
        <Textarea
          id="session-outcome"
          rows={2}
          value={state.expectedOutcome}
          onChange={(event) => set("expectedOutcome", event.target.value)}
          placeholder="e.g. Independent target sound production in 8 of 10 words"
        />
      </FormField>
    </div>
  );
}

function StepReview({ state, patient }: { state: WizardState; patient: Patient | null }) {
  const lines = (value: string) =>
    value
      .split("\n")
      .map((item) => item.trim())
      .filter(Boolean);

  return (
    <div className="space-y-5">
      <div className="flex flex-wrap items-center gap-2">
        <StatusBadge tone="info" label={state.mode} dot={false} />
        <StatusBadge tone="neutral" label={state.program} dot={false} />
        <StatusBadge tone="warning" label="Not scheduled yet" />
      </div>

      <div className="grid gap-5 lg:grid-cols-2">
        <ReviewCard title="Patient">
          {patient ? (
            <dl className="space-y-3">
              <SummaryRow label="Name" value={patient.name} />
              <SummaryRow label="Patient ID" value={patient.code} />
              <SummaryRow label="Age" value={`${patient.age} years`} />
              <SummaryRow label="Guardian" value={patient.guardian.name} />
              <SummaryRow label="Phone" value={patient.guardian.phone} />
              <SummaryRow label="Package" value={patient.billing.packageName} />
            </dl>
          ) : (
            <p className="text-[13px] text-muted-foreground">No patient selected.</p>
          )}
        </ReviewCard>

        <ReviewCard title="Therapy">
          <dl className="space-y-3">
            <SummaryRow label="Therapy type" value={state.mode} />
            <SummaryRow label="Program" value={state.program} />
            <SummaryRow label="Session no." value={state.sessionNumber || "—"} />
            <SummaryRow label="Therapist" value={state.therapist || "Not assigned"} />
            <SummaryRow label="Room" value={state.room || "Not assigned"} />
            <SummaryRow
              label="Equipment"
              value={state.equipment.length > 0 ? state.equipment.join(", ") : "None selected"}
            />
          </dl>
        </ReviewCard>

        <ReviewCard title="Schedule">
          <dl className="space-y-3">
            <SummaryRow
              label="Date"
              value={state.sessionDate ? formatDate(state.sessionDate) : "—"}
            />
            <SummaryRow label="Time" value={formatTimeRange(state.startTime, state.endTime)} />
            {state.mode === "Group Therapy" ? (
              <>
                <SummaryRow label="Group" value={state.groupName || "Not named"} />
                <SummaryRow label="Topic" value={state.sessionTopic || "Not set"} />
                <SummaryRow label="Children" value={state.totalChildren || "—"} />
              </>
            ) : null}
          </dl>
        </ReviewCard>

        <ReviewCard title="Goals">
          <dl className="space-y-3">
            <SummaryRow label="Session goal" value={state.sessionGoal || "Not set"} />
            <SummaryRow
              label="Target skills"
              value={
                state.targetSkills.length > 0 ? state.targetSkills.join(", ") : "None selected"
              }
            />
            <SummaryRow
              label="Activities"
              value={lines(state.activities).join(", ") || "Not set"}
            />
            <SummaryRow label="Materials" value={lines(state.materials).join(", ") || "Not set"} />
            <SummaryRow label="Expected outcome" value={state.expectedOutcome || "Not set"} />
          </dl>
        </ReviewCard>
      </div>

      <p className="text-[12.5px] text-muted-foreground">
        Nothing is saved yet — this wizard is UI only until the therapy API is connected.
      </p>
    </div>
  );
}

function ReviewCard({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <Card className="p-5">
      <p className="border-b border-border pb-3 text-[12px] font-medium uppercase tracking-[0.08em] text-muted-foreground">
        {title}
      </p>
      <div className="pt-4">{children}</div>
    </Card>
  );
}
