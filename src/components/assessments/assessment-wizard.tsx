import { useMemo, useState } from "react";
import { useNavigate } from "@tanstack/react-router";
import {
  Check,
  ClipboardCheck,
  Loader2,
  Search,
  Stethoscope,
  UserRound,
} from "lucide-react";
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
import { ScoreRating } from "@/components/assessments/score-rating";
import { AssessmentAvatar } from "@/components/assessments/assessment-table";
import { formatDate } from "@/lib/format";
import { PATIENTS, type Patient } from "@/constants/patient-data";
import {
  ASSESSMENT_TYPES,
  ASSESSORS,
  DIAGNOSIS_OPTIONS,
  DURATION_OPTIONS,
  EVALUATION_SKILLS,
  PACKAGE_SUGGESTIONS,
  SEVERITY_OPTIONS,
  SEVERITY_TONE,
  SESSION_FREQUENCIES,
  THERAPY_RECOMMENDATIONS,
  type AssessmentSeverity,
} from "@/constants/assessment-data";

export const WIZARD_STEPS = [
  { id: 1, title: "Patient", description: "Select the patient record" },
  { id: 2, title: "Assessment", description: "Visit details and complaint" },
  { id: 3, title: "Evaluation", description: "Clinical skill ratings" },
  { id: 4, title: "Diagnosis", description: "Findings and severity" },
  { id: 5, title: "Recommendation", description: "Therapy plan and goals" },
  { id: 6, title: "Treatment Plan", description: "Package and schedule" },
  { id: 7, title: "Review", description: "Confirm and submit" },
] as const;

type WizardState = {
  patientId: string | null;
  assessmentDate: string;
  assessmentType: string;
  assessor: string;
  reasonForVisit: string;
  chiefComplaint: string;
  observationNotes: string;
  scores: Record<string, number>;
  primaryDiagnosis: string;
  secondaryDiagnosis: string;
  severity: AssessmentSeverity;
  clinicalSummary: string;
  therapy: string;
  frequency: string;
  sessionsPerWeek: string;
  duration: string;
  goals: string;
  homeInstructions: string;
  packageType: string;
  estimatedSessions: string;
  expectedStart: string;
  expectedReview: string;
};

const INITIAL_STATE: WizardState = {
  patientId: null,
  assessmentDate: "2026-07-31",
  assessmentType: "Initial Assessment",
  assessor: "",
  reasonForVisit: "",
  chiefComplaint: "",
  observationNotes: "",
  scores: Object.fromEntries(EVALUATION_SKILLS.map((skill) => [skill.key, 3])),
  primaryDiagnosis: "",
  secondaryDiagnosis: "",
  severity: "Moderate",
  clinicalSummary: "",
  therapy: "",
  frequency: "Twice a week",
  sessionsPerWeek: "2",
  duration: "3 months",
  goals: "",
  homeInstructions: "",
  packageType: "Session Wise",
  estimatedSessions: "24",
  expectedStart: "",
  expectedReview: "",
};

/**
 * UI-only 7-step clinical assessment wizard.
 * Nothing is persisted — submission is simulated until the API is connected.
 */
export function AssessmentWizard() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [state, setState] = useState<WizardState>(INITIAL_STATE);
  const [submitting, setSubmitting] = useState<"draft" | "complete" | null>(null);

  const set = <K extends keyof WizardState>(key: K, value: WizardState[K]) =>
    setState((current) => ({ ...current, [key]: value }));

  const patient = useMemo(
    () => PATIENTS.find((item) => item.id === state.patientId) ?? null,
    [state.patientId],
  );

  const submit = (mode: "draft" | "complete") => {
    setSubmitting(mode);
    setTimeout(() => {
      setSubmitting(null);
      navigate({ to: "/manager/assessments" });
    }, 900);
  };

  const current = WIZARD_STEPS[step - 1];
  const canContinue = step !== 1 || Boolean(patient);

  return (
    <div className="space-y-6">
      <StepIndicator step={step} onSelect={setStep} />

      <Card className="p-5 sm:p-6">
        <div className="border-b border-border pb-4">
          <p className="text-[12px] font-medium uppercase tracking-[0.08em] text-muted-foreground">
            Step {step} of {WIZARD_STEPS.length}
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
            <StepAssessment state={state} set={set} />
          ) : step === 3 ? (
            <StepEvaluation
              scores={state.scores}
              onScore={(key, score) => set("scores", { ...state.scores, [key]: score })}
            />
          ) : step === 4 ? (
            <StepDiagnosis state={state} set={set} />
          ) : step === 5 ? (
            <StepRecommendation state={state} set={set} />
          ) : step === 6 ? (
            <StepTreatmentPlan state={state} set={set} />
          ) : (
            <StepReview state={state} patient={patient} />
          )}
        </div>

        <div className="mt-6 flex flex-col gap-3 border-t border-border pt-5 sm:flex-row sm:items-center sm:justify-between">
          <Button
            variant="ghost"
            onClick={() => navigate({ to: "/manager/assessments" })}
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
            {step < WIZARD_STEPS.length ? (
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
                <Button onClick={() => submit("complete")} disabled={submitting !== null}>
                  {submitting === "complete" ? (
                    <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
                  ) : (
                    <ClipboardCheck className="h-4 w-4" aria-hidden="true" />
                  )}
                  Complete Assessment
                </Button>
              </>
            )}
          </div>
        </div>

        {step === 1 && !patient ? (
          <p className="mt-3 text-[12.5px] text-muted-foreground">
            Select a patient to continue to the assessment details.
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
        {WIZARD_STEPS.map((item) => {
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
              {item.id < WIZARD_STEPS.length ? (
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
            Step {step} of {WIZARD_STEPS.length} · {WIZARD_STEPS[step - 1].title}
          </p>
          <p className="text-[12.5px] text-muted-foreground">
            {Math.round((step / WIZARD_STEPS.length) * 100)}%
          </p>
        </div>
        <div className="mt-2 flex gap-1.5" aria-hidden="true">
          {WIZARD_STEPS.map((item) => (
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
          id="patient-search"
          label="Search existing patient"
          hint="Search by name, patient ID, phone or guardian"
        >
          <div className="relative">
            <Search
              className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground/70"
              aria-hidden="true"
            />
            <Input
              id="patient-search"
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="e.g. Rahim Ahmed or PT-1042"
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
                  <AssessmentAvatar name={item.name} />
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
              <AssessmentAvatar name={patient.name} className="h-12 w-12 text-sm" />
              <div className="min-w-0">
                <p className="truncate text-[15px] font-semibold text-foreground">{patient.name}</p>
                <p className="truncate font-mono text-[12px] text-muted-foreground">
                  {patient.code}
                </p>
              </div>
            </div>
            <dl className="mt-4 space-y-3 border-t border-border pt-4 text-[13px]">
              <SummaryRow label="Age" value={`${patient.age} years`} />
              <SummaryRow label="Gender" value={patient.gender} />
              <SummaryRow
                label="Guardian"
                value={`${patient.guardian.name} (${patient.guardian.relation})`}
              />
              <SummaryRow label="Phone" value={patient.guardian.phone} />
              <SummaryRow label="Branch" value={patient.branch} />
              <div>
                <dt className="text-[12px] text-muted-foreground">Medical summary</dt>
                <dd className="mt-1 text-[13px] leading-relaxed break-words text-foreground">
                  {patient.medical.primaryConcern}
                </dd>
              </div>
            </dl>
          </Card>
        ) : (
          <Card className="flex h-full flex-col items-center justify-center gap-3 border-dashed p-6 text-center">
            <span className="grid h-11 w-11 place-items-center rounded-full border border-border bg-muted/50 text-muted-foreground">
              <UserRound className="h-5 w-5" aria-hidden="true" />
            </span>
            <p className="text-[13px] font-medium text-foreground">No patient selected</p>
            <p className="text-[12.5px] text-muted-foreground">
              Pick a patient from the list to load their information card.
            </p>
          </Card>
        )}
      </div>
    </div>
  );
}

function SummaryRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="grid grid-cols-[minmax(0,110px)_minmax(0,1fr)] gap-3">
      <dt className="text-[12px] text-muted-foreground">{label}</dt>
      <dd className="min-w-0 break-words text-[13px] text-foreground">{value}</dd>
    </div>
  );
}

type SetFn = <K extends keyof WizardState>(key: K, value: WizardState[K]) => void;

function StepAssessment({ state, set }: { state: WizardState; set: SetFn }) {
  return (
    <div className="grid gap-5 sm:grid-cols-2">
      <FormField id="assessment-date" label="Assessment date" required>
        <Input
          id="assessment-date"
          type="date"
          value={state.assessmentDate}
          onChange={(event) => set("assessmentDate", event.target.value)}
        />
      </FormField>
      <FormField id="assessment-type" label="Assessment type" required>
        <Select
          value={state.assessmentType}
          onValueChange={(value) => set("assessmentType", value)}
        >
          <SelectTrigger id="assessment-type">
            <SelectValue placeholder="Select assessment type" />
          </SelectTrigger>
          <SelectContent>
            {ASSESSMENT_TYPES.map((type) => (
              <SelectItem key={type} value={type}>
                {type}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </FormField>
      <FormField id="assessor" label="Assessed by" className="sm:col-span-2">
        <Select value={state.assessor} onValueChange={(value) => set("assessor", value)}>
          <SelectTrigger id="assessor">
            <SelectValue placeholder="Select clinician" />
          </SelectTrigger>
          <SelectContent>
            {ASSESSORS.map((name) => (
              <SelectItem key={name} value={name}>
                {name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </FormField>
      <FormField id="reason-for-visit" label="Reason for visit" required className="sm:col-span-2">
        <Textarea
          id="reason-for-visit"
          rows={2}
          value={state.reasonForVisit}
          onChange={(event) => set("reasonForVisit", event.target.value)}
          placeholder="e.g. Referred by paediatrician for delayed speech development"
        />
      </FormField>
      <FormField id="chief-complaint" label="Chief complaint" required className="sm:col-span-2">
        <Textarea
          id="chief-complaint"
          rows={2}
          value={state.chiefComplaint}
          onChange={(event) => set("chiefComplaint", event.target.value)}
          placeholder="Guardian's own words describing the main concern"
        />
      </FormField>
      <FormField
        id="observation-notes"
        label="Observation notes"
        hint="Behaviour during the session, cooperation, response to cues"
        className="sm:col-span-2"
      >
        <Textarea
          id="observation-notes"
          rows={4}
          value={state.observationNotes}
          onChange={(event) => set("observationNotes", event.target.value)}
          placeholder="Clinical observations recorded during the assessment"
        />
      </FormField>
    </div>
  );
}

function StepEvaluation({
  scores,
  onScore,
}: {
  scores: Record<string, number>;
  onScore: (key: string, score: number) => void;
}) {
  return (
    <div className="space-y-4">
      <p className="text-[13px] text-muted-foreground">
        Rate each domain from 1 (significant concern) to 5 (age appropriate).
      </p>
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {EVALUATION_SKILLS.map((skill) => (
          <ScoreRating
            key={skill.key}
            id={`score-${skill.key}`}
            label={skill.label}
            value={scores[skill.key] ?? 3}
            onChange={(score) => onScore(skill.key, score)}
          />
        ))}
      </div>
    </div>
  );
}

function StepDiagnosis({ state, set }: { state: WizardState; set: SetFn }) {
  return (
    <div className="grid gap-5 sm:grid-cols-2">
      <FormField id="primary-diagnosis" label="Primary diagnosis" required>
        <Select
          value={state.primaryDiagnosis}
          onValueChange={(value) => set("primaryDiagnosis", value)}
        >
          <SelectTrigger id="primary-diagnosis">
            <SelectValue placeholder="Select primary diagnosis" />
          </SelectTrigger>
          <SelectContent>
            {DIAGNOSIS_OPTIONS.map((option) => (
              <SelectItem key={option} value={option}>
                {option}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </FormField>
      <FormField id="secondary-diagnosis" label="Secondary diagnosis">
        <Select
          value={state.secondaryDiagnosis}
          onValueChange={(value) => set("secondaryDiagnosis", value)}
        >
          <SelectTrigger id="secondary-diagnosis">
            <SelectValue placeholder="Select secondary diagnosis" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="None">None</SelectItem>
            {DIAGNOSIS_OPTIONS.map((option) => (
              <SelectItem key={option} value={option}>
                {option}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </FormField>

      <FormField id="severity" label="Severity" required className="sm:col-span-2">
        <div id="severity" className="grid gap-3 sm:grid-cols-3">
          {SEVERITY_OPTIONS.map((option) => (
            <button
              key={option}
              type="button"
              aria-pressed={state.severity === option}
              onClick={() => set("severity", option)}
              className={cn(
                "rounded-lg border p-4 text-left transition-enterprise",
                state.severity === option
                  ? "border-primary bg-primary/8"
                  : "border-border bg-card hover:bg-surface-hover",
              )}
            >
              <span className="flex items-center justify-between gap-2">
                <span className="text-[13px] font-semibold text-foreground">{option}</span>
                <StatusBadge tone={SEVERITY_TONE[option]} label={option} dot={false} />
              </span>
              <span className="mt-2 block text-[12px] text-muted-foreground">
                {option === "Mild"
                  ? "Minimal functional impact"
                  : option === "Moderate"
                    ? "Noticeable impact on daily communication"
                    : "Significant impact requiring intensive support"}
              </span>
            </button>
          ))}
        </div>
      </FormField>

      <FormField id="clinical-summary" label="Clinical summary" required className="sm:col-span-2">
        <Textarea
          id="clinical-summary"
          rows={4}
          value={state.clinicalSummary}
          onChange={(event) => set("clinicalSummary", event.target.value)}
          placeholder="Summarise findings, developmental gaps and prognosis"
        />
      </FormField>
    </div>
  );
}

function StepRecommendation({ state, set }: { state: WizardState; set: SetFn }) {
  return (
    <div className="grid gap-5 sm:grid-cols-2">
      <FormField id="recommended-therapy" label="Recommended therapy" required>
        <Select value={state.therapy} onValueChange={(value) => set("therapy", value)}>
          <SelectTrigger id="recommended-therapy">
            <SelectValue placeholder="Select therapy" />
          </SelectTrigger>
          <SelectContent>
            {THERAPY_RECOMMENDATIONS.map((option) => (
              <SelectItem key={option} value={option}>
                {option}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </FormField>
      <FormField id="frequency" label="Frequency" required>
        <Select value={state.frequency} onValueChange={(value) => set("frequency", value)}>
          <SelectTrigger id="frequency">
            <SelectValue placeholder="Select frequency" />
          </SelectTrigger>
          <SelectContent>
            {SESSION_FREQUENCIES.map((option) => (
              <SelectItem key={option} value={option}>
                {option}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </FormField>
      <FormField id="sessions-per-week" label="Sessions per week" required>
        <Input
          id="sessions-per-week"
          type="number"
          min={1}
          max={7}
          value={state.sessionsPerWeek}
          onChange={(event) => set("sessionsPerWeek", event.target.value)}
        />
      </FormField>
      <FormField id="expected-duration" label="Expected duration" required>
        <Select value={state.duration} onValueChange={(value) => set("duration", value)}>
          <SelectTrigger id="expected-duration">
            <SelectValue placeholder="Select duration" />
          </SelectTrigger>
          <SelectContent>
            {DURATION_OPTIONS.map((option) => (
              <SelectItem key={option} value={option}>
                {option}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </FormField>
      <FormField
        id="goals"
        label="Therapy goals"
        hint="One goal per line"
        required
        className="sm:col-span-2"
      >
        <Textarea
          id="goals"
          rows={4}
          value={state.goals}
          onChange={(event) => set("goals", event.target.value)}
          placeholder={"Expand expressive vocabulary to 250 words\nProduce three-word phrases"}
        />
      </FormField>
      <FormField id="home-instructions" label="Home instructions" className="sm:col-span-2">
        <Textarea
          id="home-instructions"
          rows={3}
          value={state.homeInstructions}
          onChange={(event) => set("homeInstructions", event.target.value)}
          placeholder="Daily practice routine and guidance for guardians"
        />
      </FormField>
    </div>
  );
}

function StepTreatmentPlan({ state, set }: { state: WizardState; set: SetFn }) {
  return (
    <div className="grid gap-5 sm:grid-cols-2">
      <FormField id="package-type" label="Suggested package" required className="sm:col-span-2">
        <div id="package-type" className="grid gap-3 sm:grid-cols-3">
          {PACKAGE_SUGGESTIONS.map((option) => (
            <button
              key={option}
              type="button"
              aria-pressed={state.packageType === option}
              onClick={() => set("packageType", option)}
              className={cn(
                "rounded-lg border p-4 text-left transition-enterprise",
                state.packageType === option
                  ? "border-primary bg-primary/8"
                  : "border-border bg-card hover:bg-surface-hover",
              )}
            >
              <span className="block text-[13px] font-semibold text-foreground">{option}</span>
              <span className="mt-1 block text-[12px] text-muted-foreground">
                {option === "Daily"
                  ? "Billed per attended day"
                  : option === "Session Wise"
                    ? "Billed per completed session"
                    : "Fixed monthly programme fee"}
              </span>
            </button>
          ))}
        </div>
      </FormField>
      <FormField id="estimated-sessions" label="Estimated sessions" required>
        <Input
          id="estimated-sessions"
          type="number"
          min={1}
          value={state.estimatedSessions}
          onChange={(event) => set("estimatedSessions", event.target.value)}
        />
      </FormField>
      <FormField id="expected-start" label="Expected start date" required>
        <Input
          id="expected-start"
          type="date"
          value={state.expectedStart}
          onChange={(event) => set("expectedStart", event.target.value)}
        />
      </FormField>
      <FormField id="expected-review" label="Expected review date" required>
        <Input
          id="expected-review"
          type="date"
          value={state.expectedReview}
          onChange={(event) => set("expectedReview", event.target.value)}
        />
      </FormField>
    </div>
  );
}

function StepReview({ state, patient }: { state: WizardState; patient: Patient | null }) {
  const goals = state.goals
    .split("\n")
    .map((goal) => goal.trim())
    .filter(Boolean);

  return (
    <div className="grid gap-5 lg:grid-cols-2">
      <ReviewCard title="Patient" icon={UserRound}>
        {patient ? (
          <dl className="space-y-3">
            <SummaryRow label="Name" value={patient.name} />
            <SummaryRow label="Patient ID" value={patient.code} />
            <SummaryRow label="Age / Gender" value={`${patient.age} yrs · ${patient.gender}`} />
            <SummaryRow label="Guardian" value={patient.guardian.name} />
            <SummaryRow label="Phone" value={patient.guardian.phone} />
            <SummaryRow label="Branch" value={patient.branch} />
          </dl>
        ) : (
          <p className="text-[13px] text-muted-foreground">No patient selected.</p>
        )}
      </ReviewCard>

      <ReviewCard title="Assessment & Diagnosis" icon={Stethoscope}>
        <dl className="space-y-3">
          <SummaryRow
            label="Date"
            value={state.assessmentDate ? formatDate(state.assessmentDate) : "—"}
          />
          <SummaryRow label="Type" value={state.assessmentType} />
          <SummaryRow label="Assessed by" value={state.assessor || "—"} />
          <SummaryRow label="Primary" value={state.primaryDiagnosis || "—"} />
          <SummaryRow label="Secondary" value={state.secondaryDiagnosis || "None"} />
          <SummaryRow label="Severity" value={state.severity} />
          <SummaryRow label="Summary" value={state.clinicalSummary || "—"} />
        </dl>
      </ReviewCard>

      <ReviewCard title="Recommendation" icon={ClipboardCheck}>
        <dl className="space-y-3">
          <SummaryRow label="Therapy" value={state.therapy || "—"} />
          <SummaryRow label="Frequency" value={state.frequency} />
          <SummaryRow label="Sessions / week" value={state.sessionsPerWeek} />
          <SummaryRow label="Duration" value={state.duration} />
          <SummaryRow label="Home plan" value={state.homeInstructions || "—"} />
        </dl>
        {goals.length > 0 ? (
          <ul className="mt-4 space-y-2 border-t border-border pt-4">
            {goals.map((goal) => (
              <li key={goal} className="flex items-start gap-2 text-[13px] text-foreground">
                <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-success" aria-hidden="true" />
                <span className="min-w-0 break-words">{goal}</span>
              </li>
            ))}
          </ul>
        ) : null}
      </ReviewCard>

      <ReviewCard title="Treatment Plan" icon={ClipboardCheck}>
        <dl className="space-y-3">
          <SummaryRow label="Package" value={state.packageType} />
          <SummaryRow label="Estimated sessions" value={state.estimatedSessions} />
          <SummaryRow
            label="Expected start"
            value={state.expectedStart ? formatDate(state.expectedStart) : "—"}
          />
          <SummaryRow
            label="Expected review"
            value={state.expectedReview ? formatDate(state.expectedReview) : "—"}
          />
        </dl>
      </ReviewCard>
    </div>
  );
}

function ReviewCard({
  title,
  icon: Icon,
  children,
}: {
  title: string;
  icon: typeof UserRound;
  children: React.ReactNode;
}) {
  return (
    <Card className="p-5">
      <div className="flex items-center gap-3 border-b border-border pb-4">
        <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-border bg-muted/50 text-muted-foreground">
          <Icon className="h-[18px] w-[18px]" aria-hidden="true" />
        </span>
        <h3 className="truncate text-[15px] font-semibold tracking-tight text-foreground">
          {title}
        </h3>
      </div>
      <div className="pt-4">{children}</div>
    </Card>
  );
}
