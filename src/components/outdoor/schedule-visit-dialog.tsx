import { useMemo, useState } from "react";
import { Check, Loader2, MapPin, Search } from "lucide-react";
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
import { PatientAvatar } from "@/components/patients/patient-table";
import {
  DISTRICTS_BY_DIVISION,
  DIVISIONS,
  EQUIPMENT_OPTIONS,
  OUTDOOR_AREAS,
  OUTDOOR_PATIENTS,
  OUTDOOR_THERAPISTS,
  SUPPORT_STAFF,
  VEHICLES,
  VISIT_PRIORITIES,
  VISIT_TYPES,
  type OutdoorPatient,
} from "@/constants/outdoor-data";

const STEPS = [
  { id: 1, title: "Select Patient", description: "Search an existing outdoor patient" },
  { id: 2, title: "Visit Information", description: "Type, schedule, priority and purpose" },
  { id: 3, title: "Location", description: "Division, district, area and address" },
  { id: 4, title: "Assign Therapist", description: "Team, vehicle and equipment" },
  { id: 5, title: "Review", description: "Confirm before scheduling" },
];

type Draft = {
  patientId: string;
  type: string;
  date: string;
  time: string;
  duration: string;
  priority: string;
  purpose: string;
  division: string;
  district: string;
  area: string;
  address: string;
  mapLink: string;
  locationNotes: string;
  therapist: string;
  support: string;
  vehicle: string;
  equipment: string[];
};

const EMPTY: Draft = {
  patientId: "",
  type: "Home Visit",
  date: "2026-08-03",
  time: "10:00",
  duration: "60 min",
  priority: "Normal",
  purpose: "",
  division: "Dhaka",
  district: "Dhaka",
  area: "Dhanmondi",
  address: "",
  mapLink: "",
  locationNotes: "",
  therapist: OUTDOOR_THERAPISTS[0].name,
  support: SUPPORT_STAFF[0],
  vehicle: VEHICLES[0],
  equipment: ["Speech Cards Set"],
};

/** UI-only 5-step outdoor visit scheduling wizard. Nothing is persisted. */
export function ScheduleVisitDialog({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const [step, setStep] = useState(1);
  const [submitting, setSubmitting] = useState(false);
  const [query, setQuery] = useState("");
  const [draft, setDraft] = useState<Draft>(EMPTY);

  const set = (patch: Partial<Draft>) => setDraft((current) => ({ ...current, ...patch }));
  const patient = OUTDOOR_PATIENTS.find((item) => item.id === draft.patientId);

  const results = useMemo(() => {
    const term = query.trim().toLowerCase();
    if (!term) return OUTDOOR_PATIENTS.slice(0, 5);
    return OUTDOOR_PATIENTS.filter((item) =>
      [item.name, item.code, item.guardian, item.phone].join(" ").toLowerCase().includes(term),
    );
  }, [query]);

  const close = () => {
    onOpenChange(false);
    setTimeout(() => {
      setStep(1);
      setQuery("");
      setDraft(EMPTY);
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
  const canContinue = step !== 1 || Boolean(draft.patientId);

  return (
    <Dialog
      open={open}
      onOpenChange={(next) => (next ? onOpenChange(true) : close())}
    >
      <DialogContent className="max-h-[92vh] max-w-2xl overflow-y-auto rounded-xl">
        <DialogHeader>
          <DialogTitle>Schedule outdoor visit</DialogTitle>
          <DialogDescription>
            Plan a home visit, school visit or community program for an outdoor patient.
          </DialogDescription>
        </DialogHeader>

        <ol className="flex items-center gap-2 border-b border-border pb-5">
          {STEPS.map((item) => {
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
                <span className="hidden min-w-0 lg:block">
                  <span className="block truncate text-[12.5px] font-medium text-foreground">
                    {item.title}
                  </span>
                </span>
              </li>
            );
          })}
        </ol>

        <div className="space-y-1">
          <h3 className="text-sm font-semibold text-foreground">{current.title}</h3>
          <p className="text-[12.5px] text-muted-foreground">{current.description}</p>
        </div>

        {step === 1 ? (
          <div className="space-y-4">
            <div className="relative">
              <Search
                className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground/70"
                aria-hidden="true"
              />
              <Input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search patient name, ID, guardian or phone…"
                aria-label="Search existing patient"
                className="h-9 pl-9"
              />
            </div>
            <ul className="space-y-2">
              {results.map((item) => (
                <li key={item.id}>
                  <button
                    type="button"
                    onClick={() => set({ patientId: item.id, area: item.area, division: item.division, district: item.district })}
                    aria-pressed={draft.patientId === item.id}
                    className={cn(
                      "w-full rounded-xl border p-3.5 text-left transition-enterprise hover:bg-surface-hover",
                      draft.patientId === item.id
                        ? "border-primary/50 bg-primary/5"
                        : "border-border bg-card",
                    )}
                  >
                    <div className="flex items-start gap-3">
                      <PatientAvatar name={item.name} />
                      <div className="min-w-0 flex-1">
                        <div className="flex items-start justify-between gap-2">
                          <p className="truncate text-sm font-medium text-foreground">
                            {item.name}
                          </p>
                          <span className="shrink-0 font-mono text-[12px] text-muted-foreground">
                            {item.code}
                          </span>
                        </div>
                        <p className="truncate text-[12.5px] text-muted-foreground">
                          {item.guardian} ({item.relation}) · {item.phone}
                        </p>
                        <p className="truncate text-[12.5px] text-muted-foreground">
                          {item.diagnosis} · {item.therapyProgram}
                        </p>
                      </div>
                    </div>
                  </button>
                </li>
              ))}
              {results.length === 0 ? (
                <li className="rounded-xl border border-border p-4 text-center text-[13px] text-muted-foreground">
                  No patient matched that search.
                </li>
              ) : null}
            </ul>
          </div>
        ) : step === 2 ? (
          <div className="grid gap-5 sm:grid-cols-2">
            <FormField id="visit-type" label="Visit type" required>
              <Select value={draft.type} onValueChange={(next) => set({ type: next })}>
                <SelectTrigger id="visit-type">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {VISIT_TYPES.map((option) => (
                    <SelectItem key={option} value={option}>
                      {option}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </FormField>
            <FormField id="visit-priority" label="Priority">
              <Select value={draft.priority} onValueChange={(next) => set({ priority: next })}>
                <SelectTrigger id="visit-priority">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {VISIT_PRIORITIES.map((option) => (
                    <SelectItem key={option} value={option}>
                      {option}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </FormField>
            <FormField id="visit-date" label="Visit date" required>
              <Input
                id="visit-date"
                type="date"
                value={draft.date}
                onChange={(event) => set({ date: event.target.value })}
              />
            </FormField>
            <FormField id="visit-time" label="Visit time" required>
              <Input
                id="visit-time"
                type="time"
                value={draft.time}
                onChange={(event) => set({ time: event.target.value })}
              />
            </FormField>
            <FormField id="visit-duration" label="Expected duration">
              <Select value={draft.duration} onValueChange={(next) => set({ duration: next })}>
                <SelectTrigger id="visit-duration">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {["30 min", "45 min", "60 min", "90 min", "120 min", "180 min"].map((option) => (
                    <SelectItem key={option} value={option}>
                      {option}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </FormField>
            <FormField id="visit-purpose" label="Purpose" className="sm:col-span-2">
              <Textarea
                id="visit-purpose"
                rows={3}
                value={draft.purpose}
                onChange={(event) => set({ purpose: event.target.value })}
                placeholder="e.g. Weekly articulation therapy and parent coaching."
              />
            </FormField>
          </div>
        ) : step === 3 ? (
          <div className="grid gap-5 sm:grid-cols-2">
            <FormField id="division" label="Division" required>
              <Select
                value={draft.division}
                onValueChange={(next) =>
                  set({ division: next, district: DISTRICTS_BY_DIVISION[next][0] })
                }
              >
                <SelectTrigger id="division">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {DIVISIONS.map((option) => (
                    <SelectItem key={option} value={option}>
                      {option}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </FormField>
            <FormField id="district" label="District" required>
              <Select value={draft.district} onValueChange={(next) => set({ district: next })}>
                <SelectTrigger id="district">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {(DISTRICTS_BY_DIVISION[draft.division] ?? []).map((option) => (
                    <SelectItem key={option} value={option}>
                      {option}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </FormField>
            <FormField id="area" label="Area">
              <Select value={draft.area} onValueChange={(next) => set({ area: next })}>
                <SelectTrigger id="area">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {OUTDOOR_AREAS.map((option) => (
                    <SelectItem key={option} value={option}>
                      {option}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </FormField>
            <FormField id="map-link" label="Google Map link" hint="Placeholder — no map integration">
              <Input
                id="map-link"
                value={draft.mapLink}
                onChange={(event) => set({ mapLink: event.target.value })}
                placeholder="https://maps.google.com/?q=…"
              />
            </FormField>
            <FormField id="address" label="Full address" required className="sm:col-span-2">
              <Textarea
                id="address"
                rows={2}
                value={draft.address}
                onChange={(event) => set({ address: event.target.value })}
                placeholder="House 42, Road 9/A, Dhanmondi, Dhaka 1209"
              />
            </FormField>
            <FormField id="location-notes" label="Location notes" className="sm:col-span-2">
              <Textarea
                id="location-notes"
                rows={2}
                value={draft.locationNotes}
                onChange={(event) => set({ locationNotes: event.target.value })}
                placeholder="Lift available, call guardian before arrival…"
              />
            </FormField>
          </div>
        ) : step === 4 ? (
          <div className="grid gap-5 sm:grid-cols-2">
            <FormField id="therapist" label="Assigned therapist" required>
              <Select value={draft.therapist} onValueChange={(next) => set({ therapist: next })}>
                <SelectTrigger id="therapist">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {OUTDOOR_THERAPISTS.map((option) => (
                    <SelectItem key={option.id} value={option.name}>
                      {option.name} — {option.status}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </FormField>
            <FormField id="support" label="Support staff">
              <Select value={draft.support} onValueChange={(next) => set({ support: next })}>
                <SelectTrigger id="support">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {SUPPORT_STAFF.map((option) => (
                    <SelectItem key={option} value={option}>
                      {option}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </FormField>
            <FormField id="vehicle" label="Vehicle" className="sm:col-span-2">
              <Select value={draft.vehicle} onValueChange={(next) => set({ vehicle: next })}>
                <SelectTrigger id="vehicle">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {VEHICLES.map((option) => (
                    <SelectItem key={option} value={option}>
                      {option}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </FormField>
            <div className="space-y-2 sm:col-span-2">
              <p className="text-sm font-medium text-foreground">Equipment required</p>
              <div className="flex flex-wrap gap-2">
                {EQUIPMENT_OPTIONS.map((option) => {
                  const active = draft.equipment.includes(option);
                  return (
                    <button
                      key={option}
                      type="button"
                      aria-pressed={active}
                      onClick={() =>
                        set({
                          equipment: active
                            ? draft.equipment.filter((item) => item !== option)
                            : [...draft.equipment, option],
                        })
                      }
                      className={cn(
                        "rounded-full border px-3 py-1.5 text-[12.5px] transition-enterprise",
                        active
                          ? "border-primary/50 bg-primary/10 text-primary"
                          : "border-border text-muted-foreground hover:bg-surface-hover",
                      )}
                    >
                      {option}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        ) : (
          <Review draft={draft} patient={patient} />
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
                  Schedule Visit
                </Button>
              </>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

function Review({ draft, patient }: { draft: Draft; patient?: OutdoorPatient }) {
  const rows: { label: string; value: string }[] = [
    { label: "Patient", value: patient ? `${patient.name} (${patient.code})` : "—" },
    { label: "Guardian", value: patient ? `${patient.guardian} · ${patient.phone}` : "—" },
    { label: "Visit type", value: draft.type },
    { label: "Schedule", value: `${draft.date} at ${draft.time} · ${draft.duration}` },
    { label: "Priority", value: draft.priority },
    { label: "Purpose", value: draft.purpose || "—" },
    {
      label: "Location",
      value: `${draft.area}, ${draft.district}, ${draft.division}`,
    },
    { label: "Address", value: draft.address || "—" },
    { label: "Therapist", value: draft.therapist },
    { label: "Support staff", value: draft.support },
    { label: "Vehicle", value: draft.vehicle },
    { label: "Equipment", value: draft.equipment.join(", ") || "—" },
  ];

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center gap-2">
        <StatusBadge label="Scheduled" tone="info" />
        <StatusBadge label={draft.type} tone="neutral" dot={false} />
        <span className="inline-flex items-center gap-1.5 text-[12.5px] text-muted-foreground">
          <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
          {draft.area}
        </span>
      </div>
      <dl className="divide-y divide-border rounded-xl border border-border">
        {rows.map((row) => (
          <div
            key={row.label}
            className="grid gap-1 px-4 py-3 text-[13px] sm:grid-cols-[minmax(0,160px)_minmax(0,1fr)]"
          >
            <dt className="text-muted-foreground">{row.label}</dt>
            <dd className="font-medium text-foreground">{row.value}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
