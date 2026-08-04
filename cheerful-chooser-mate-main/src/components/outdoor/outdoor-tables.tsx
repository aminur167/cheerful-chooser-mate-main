import { Link } from "@tanstack/react-router";
import {
  CheckCircle2,
  Eye,
  MoreHorizontal,
  PencilLine,
  Printer,
  CalendarClock,
} from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { StatusBadge } from "@/components/common/status-badge";
import { PatientAvatar } from "@/components/patients/patient-table";
import {
  OUTDOOR_PATIENT_STATUS_TONE,
  VISIT_OUTCOME_TONE,
  VISIT_PRIORITY_TONE,
  VISIT_STATUS_TONE,
  type OutdoorPatient,
  type OutdoorVisit,
} from "@/constants/outdoor-data";

const HEAD_CLASS =
  "sticky top-0 z-10 h-11 whitespace-nowrap bg-muted/50 px-5 text-[11px] font-semibold uppercase tracking-[0.08em] text-muted-foreground backdrop-blur";

export function VisitRowActions({ visit }: { visit: OutdoorVisit }) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="h-8 w-8 text-muted-foreground"
          aria-label={`Actions for ${visit.visitId}`}
        >
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-52">
        <DropdownMenuItem asChild>
          <Link to="/manager/outdoor/$visitId" params={{ visitId: visit.id }}>
            <Eye className="h-4 w-4" aria-hidden="true" />
            View
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <PencilLine className="h-4 w-4" aria-hidden="true" />
          Edit
        </DropdownMenuItem>
        <DropdownMenuItem>
          <CalendarClock className="h-4 w-4" aria-hidden="true" />
          Reschedule
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <CheckCircle2 className="h-4 w-4" aria-hidden="true" />
          Complete Visit
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Printer className="h-4 w-4" aria-hidden="true" />
          Print Visit Sheet
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

/* ---------------- Tab 1 — Outdoor visits ---------------- */

const VISIT_HEADS = [
  "Visit ID",
  "Visit Date",
  "Visit Time",
  "Patient",
  "Guardian",
  "Therapist",
  "Visit Type",
  "Location",
  "Status",
];

export function OutdoorVisitTable({ rows }: { rows: OutdoorVisit[] }) {
  return (
    <>
      <div className="hidden overflow-auto md:block" style={{ maxHeight: "660px" }}>
        <Table>
          <caption className="sr-only">Outdoor therapy visits</caption>
          <TableHeader>
            <TableRow className="border-border hover:bg-transparent">
              {VISIT_HEADS.map((label) => (
                <TableHead key={label} scope="col" className={HEAD_CLASS}>
                  {label}
                </TableHead>
              ))}
              <TableHead className={cn(HEAD_CLASS, "text-right")}>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {rows.map((visit) => (
              <TableRow
                key={visit.id}
                className="border-border transition-enterprise hover:bg-surface-hover"
              >
                <TableCell className="px-5 py-3.5">
                  <Link
                    to="/manager/outdoor/$visitId"
                    params={{ visitId: visit.id }}
                    className="whitespace-nowrap font-mono text-[12.5px] font-medium text-primary hover:underline"
                  >
                    {visit.visitId}
                  </Link>
                </TableCell>
                <TableCell className="whitespace-nowrap px-5 py-3.5 text-sm text-foreground">
                  {formatDate(visit.date)}
                </TableCell>
                <TableCell className="whitespace-nowrap px-5 py-3.5 text-sm text-muted-foreground">
                  {visit.time}
                  <span className="ml-1 text-[12px]">· {visit.duration}</span>
                </TableCell>
                <TableCell className="px-5 py-3.5">
                  <div className="flex min-w-0 items-center gap-2.5">
                    <PatientAvatar name={visit.patientName} />
                    <div className="min-w-0">
                      <p className="truncate text-sm font-medium text-foreground">
                        {visit.patientName}
                      </p>
                      <p className="truncate font-mono text-[12px] text-muted-foreground">
                        {visit.patientCode}
                      </p>
                    </div>
                  </div>
                </TableCell>
                <TableCell className="px-5 py-3.5 text-sm">
                  <p className="truncate text-foreground">{visit.guardian}</p>
                  <p className="truncate text-[12px] text-muted-foreground">
                    {visit.guardianRelation} · {visit.guardianPhone}
                  </p>
                </TableCell>
                <TableCell className="px-5 py-3.5 text-sm text-foreground">
                  <p className="truncate">{visit.therapistName}</p>
                  <p className="truncate text-[12px] text-muted-foreground">
                    {visit.supportStaff}
                  </p>
                </TableCell>
                <TableCell className="whitespace-nowrap px-5 py-3.5">
                  <StatusBadge label={visit.type} tone="info" dot={false} />
                </TableCell>
                <TableCell className="px-5 py-3.5 text-sm">
                  <p className="max-w-[200px] truncate text-foreground">{visit.area}</p>
                  <p className="max-w-[200px] truncate text-[12px] text-muted-foreground">
                    {visit.district}, {visit.division}
                  </p>
                </TableCell>
                <TableCell className="px-5 py-3.5">
                  <StatusBadge label={visit.status} tone={VISIT_STATUS_TONE[visit.status]} />
                </TableCell>
                <TableCell className="px-5 py-3.5 text-right">
                  <VisitRowActions visit={visit} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <ul className="divide-y divide-border md:hidden">
        {rows.map((visit) => (
          <li key={visit.id} className="px-4 py-4">
            <div className="flex items-start gap-3">
              <PatientAvatar name={visit.patientName} />
              <div className="min-w-0 flex-1">
                <div className="flex items-start justify-between gap-2">
                  <div className="min-w-0">
                    <Link
                      to="/manager/outdoor/$visitId"
                      params={{ visitId: visit.id }}
                      className="block truncate text-sm font-medium text-foreground hover:underline"
                    >
                      {visit.patientName}
                    </Link>
                    <p className="truncate font-mono text-[12px] text-muted-foreground">
                      {visit.visitId}
                    </p>
                  </div>
                  <VisitRowActions visit={visit} />
                </div>
                <div className="mt-2.5 flex flex-wrap items-center gap-2">
                  <StatusBadge label={visit.status} tone={VISIT_STATUS_TONE[visit.status]} />
                  <StatusBadge label={visit.type} tone="info" dot={false} />
                  <StatusBadge
                    label={visit.priority}
                    tone={VISIT_PRIORITY_TONE[visit.priority]}
                    dot={false}
                  />
                </div>
                <dl className="mt-3 grid grid-cols-2 gap-x-3 gap-y-2 text-[12.5px]">
                  <Field label="Date" value={`${formatDate(visit.date)} · ${visit.time}`} />
                  <Field label="Therapist" value={visit.therapistName} />
                  <Field label="Guardian" value={visit.guardian} />
                  <Field label="Location" value={`${visit.area}, ${visit.district}`} />
                </dl>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

/* ---------------- Tab 2 — Outdoor patients ---------------- */

const PATIENT_HEADS = [
  "Patient ID",
  "Patient Name",
  "Guardian",
  "Phone",
  "Last Outdoor Visit",
  "Next Visit",
  "Therapy Program",
  "Status",
];

export function OutdoorPatientTable({ rows }: { rows: OutdoorPatient[] }) {
  return (
    <>
      <div className="hidden overflow-auto md:block" style={{ maxHeight: "660px" }}>
        <Table>
          <caption className="sr-only">Outdoor patients</caption>
          <TableHeader>
            <TableRow className="border-border hover:bg-transparent">
              {PATIENT_HEADS.map((label) => (
                <TableHead key={label} scope="col" className={HEAD_CLASS}>
                  {label}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {rows.map((patient) => (
              <TableRow
                key={patient.id}
                className="border-border transition-enterprise hover:bg-surface-hover"
              >
                <TableCell className="whitespace-nowrap px-5 py-3.5 font-mono text-[12.5px] text-muted-foreground">
                  {patient.code}
                </TableCell>
                <TableCell className="px-5 py-3.5">
                  <div className="flex min-w-0 items-center gap-2.5">
                    <PatientAvatar name={patient.name} />
                    <div className="min-w-0">
                      <p className="truncate text-sm font-medium text-foreground">{patient.name}</p>
                      <p className="truncate text-[12px] text-muted-foreground">
                        {patient.age} yrs · {patient.diagnosis}
                      </p>
                    </div>
                  </div>
                </TableCell>
                <TableCell className="px-5 py-3.5 text-sm">
                  <p className="truncate text-foreground">{patient.guardian}</p>
                  <p className="truncate text-[12px] text-muted-foreground">{patient.relation}</p>
                </TableCell>
                <TableCell className="whitespace-nowrap px-5 py-3.5 text-sm text-muted-foreground">
                  {patient.phone}
                </TableCell>
                <TableCell className="whitespace-nowrap px-5 py-3.5 text-sm text-foreground">
                  {formatDate(patient.lastVisit)}
                </TableCell>
                <TableCell className="whitespace-nowrap px-5 py-3.5 text-sm text-foreground">
                  {formatDate(patient.nextVisit)}
                </TableCell>
                <TableCell className="px-5 py-3.5 text-sm">
                  <p className="max-w-[220px] truncate text-foreground">{patient.therapyProgram}</p>
                  <p className="text-[12px] text-muted-foreground">
                    {patient.totalVisits} visits · {patient.area}
                  </p>
                </TableCell>
                <TableCell className="px-5 py-3.5">
                  <StatusBadge
                    label={patient.status}
                    tone={OUTDOOR_PATIENT_STATUS_TONE[patient.status]}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <ul className="divide-y divide-border md:hidden">
        {rows.map((patient) => (
          <li key={patient.id} className="px-4 py-4">
            <div className="flex items-start gap-3">
              <PatientAvatar name={patient.name} />
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-medium text-foreground">{patient.name}</p>
                <p className="truncate font-mono text-[12px] text-muted-foreground">
                  {patient.code}
                </p>
                <div className="mt-2.5">
                  <StatusBadge
                    label={patient.status}
                    tone={OUTDOOR_PATIENT_STATUS_TONE[patient.status]}
                  />
                </div>
                <dl className="mt-3 grid grid-cols-2 gap-x-3 gap-y-2 text-[12.5px]">
                  <Field label="Guardian" value={patient.guardian} />
                  <Field label="Phone" value={patient.phone} />
                  <Field label="Last visit" value={formatDate(patient.lastVisit)} />
                  <Field label="Next visit" value={formatDate(patient.nextVisit)} />
                  <Field label="Program" value={patient.therapyProgram} />
                  <Field label="Area" value={`${patient.area}, ${patient.district}`} />
                </dl>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

/* ---------------- Tab 4 — Visit history ---------------- */

export function VisitHistoryTable({ rows }: { rows: OutdoorVisit[] }) {
  return (
    <>
      <div className="hidden overflow-auto md:block" style={{ maxHeight: "660px" }}>
        <Table>
          <caption className="sr-only">Outdoor visit history</caption>
          <TableHeader>
            <TableRow className="border-border hover:bg-transparent">
              {["Visit Date", "Patient", "Therapist", "Visit Type", "Outcome", "Remarks"].map(
                (label) => (
                  <TableHead key={label} scope="col" className={HEAD_CLASS}>
                    {label}
                  </TableHead>
                ),
              )}
            </TableRow>
          </TableHeader>
          <TableBody>
            {rows.map((visit) => (
              <TableRow
                key={visit.id}
                className="border-border transition-enterprise hover:bg-surface-hover"
              >
                <TableCell className="whitespace-nowrap px-5 py-3.5 text-sm">
                  <span className="font-medium text-foreground">{formatDate(visit.date)}</span>
                  <p className="text-[12px] text-muted-foreground">{visit.time}</p>
                </TableCell>
                <TableCell className="px-5 py-3.5 text-sm">
                  <Link
                    to="/manager/outdoor/$visitId"
                    params={{ visitId: visit.id }}
                    className="block max-w-[180px] truncate font-medium text-foreground hover:underline"
                  >
                    {visit.patientName}
                  </Link>
                  <p className="truncate font-mono text-[12px] text-muted-foreground">
                    {visit.patientCode}
                  </p>
                </TableCell>
                <TableCell className="px-5 py-3.5 text-sm text-foreground">
                  {visit.therapistName}
                </TableCell>
                <TableCell className="whitespace-nowrap px-5 py-3.5">
                  <StatusBadge label={visit.type} tone="info" dot={false} />
                </TableCell>
                <TableCell className="whitespace-nowrap px-5 py-3.5">
                  <StatusBadge label={visit.outcome} tone={VISIT_OUTCOME_TONE[visit.outcome]} />
                </TableCell>
                <TableCell className="px-5 py-3.5 text-sm text-muted-foreground">
                  <p className="max-w-[280px] truncate">{visit.remarks || "—"}</p>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <ol className="space-y-0 md:hidden">
        {rows.map((visit) => (
          <li key={visit.id} className="relative px-4 py-4 pl-10">
            <span
              aria-hidden="true"
              className="absolute left-4 top-6 h-full w-px bg-border last:hidden"
            />
            <span
              aria-hidden="true"
              className="absolute left-[11px] top-5 h-2.5 w-2.5 rounded-full bg-primary ring-4 ring-primary/10"
            />
            <p className="text-sm font-medium text-foreground">{visit.patientName}</p>
            <p className="text-[12px] text-muted-foreground">
              {formatDate(visit.date)} · {visit.therapistName}
            </p>
            <div className="mt-2 flex flex-wrap items-center gap-2">
              <StatusBadge label={visit.type} tone="info" dot={false} />
              <StatusBadge label={visit.outcome} tone={VISIT_OUTCOME_TONE[visit.outcome]} />
            </div>
            {visit.remarks ? (
              <p className="mt-2 text-[12.5px] text-muted-foreground">{visit.remarks}</p>
            ) : null}
          </li>
        ))}
      </ol>
    </>
  );
}

export function formatDate(iso: string) {
  const date = new Date(iso);
  return date.toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" });
}

function Field({ label, value }: { label: string; value: string }) {
  return (
    <div className="min-w-0">
      <dt className="text-[11px] uppercase tracking-[0.06em] text-muted-foreground">{label}</dt>
      <dd className="truncate text-foreground">{value}</dd>
    </div>
  );
}
