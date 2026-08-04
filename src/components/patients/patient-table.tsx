import { Link } from "@tanstack/react-router";
import {
  Archive,
  CalendarPlus,
  ClipboardCheck,
  Eye,
  History,
  MoreHorizontal,
  PencilLine,
  Printer,
  Wallet,
  Waves,
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
import { formatDate, initialsOf } from "@/lib/format";
import {
  PATIENT_STATUS_TONE,
  PAYMENT_STATUS_TONE,
  type Patient,
} from "@/constants/patient-data";
import {
  PATIENT_COLUMNS,
  type PatientColumnKey,
} from "@/components/patients/patient-columns";

export function PatientTable({
  rows,
  visibleColumns,
}: {
  rows: Patient[];
  visibleColumns: PatientColumnKey[];
}) {
  const columns = PATIENT_COLUMNS.filter((column) => visibleColumns.includes(column.key));

  return (
    <>
      {/* Desktop / tablet data table */}
      <div className="hidden overflow-auto md:block" style={{ maxHeight: "660px" }}>
        <Table>
          <caption className="sr-only">Registered patients</caption>
          <TableHeader>
            <TableRow className="border-border hover:bg-transparent">
              {columns.map((column) => (
                <TableHead
                  key={column.key}
                  scope="col"
                  className={cn(
                    "sticky top-0 z-10 h-11 whitespace-nowrap bg-muted/50 px-5 text-[11px] font-semibold uppercase tracking-[0.08em] text-muted-foreground backdrop-blur",
                    column.numeric && "text-right",
                  )}
                >
                  {column.key === "photo" ? <span className="sr-only">Photo</span> : column.label}
                </TableHead>
              ))}
              <TableHead className="sticky top-0 z-10 h-11 bg-muted/50 px-5 text-right text-[11px] font-semibold uppercase tracking-[0.08em] text-muted-foreground backdrop-blur">
                Actions
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {rows.map((patient) => (
              <TableRow
                key={patient.id}
                className="border-border transition-enterprise hover:bg-surface-hover"
              >
                {columns.map((column) => (
                  <TableCell
                    key={column.key}
                    className={cn(
                      "px-5 py-3.5 text-sm",
                      column.numeric && "text-right tabular-nums",
                    )}
                  >
                    <PatientCell column={column.key} patient={patient} />
                  </TableCell>
                ))}
                <TableCell className="px-5 py-3.5 text-right">
                  <PatientRowActions patient={patient} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Mobile card list */}
      <ul className="divide-y divide-border md:hidden">
        {rows.map((patient) => (
          <li key={patient.id} className="px-4 py-4">
            <div className="flex items-start gap-3">
              <PatientAvatar name={patient.name} />
              <div className="min-w-0 flex-1">
                <div className="flex items-start justify-between gap-2">
                  <div className="min-w-0">
                    <Link
                      to="/manager/patients/$patientId"
                      params={{ patientId: patient.id }}
                      className="block truncate text-sm font-medium text-foreground hover:underline"
                    >
                      {patient.name}
                    </Link>
                    <p className="truncate font-mono text-[12px] text-muted-foreground">
                      {patient.code}
                    </p>
                  </div>
                  <PatientRowActions patient={patient} />
                </div>

                <div className="mt-2.5 flex flex-wrap items-center gap-2">
                  <StatusBadge
                    tone={PATIENT_STATUS_TONE[patient.status]}
                    label={patient.status}
                  />
                  <StatusBadge
                    tone={PAYMENT_STATUS_TONE[patient.paymentStatus]}
                    label={patient.paymentStatus}
                  />
                </div>

                <dl className="mt-3 grid grid-cols-2 gap-x-3 gap-y-2 text-[12.5px]">
                  <MobileField label="Age / Gender" value={`${patient.age} yrs · ${patient.gender}`} />
                  <MobileField label="Therapy" value={patient.program.therapyType} />
                  <MobileField label="Guardian" value={patient.guardian.name} />
                  <MobileField label="Phone" value={patient.guardian.phone} />
                  <MobileField label="Last visit" value={formatDate(patient.lastVisit)} />
                  <MobileField
                    label="Next session"
                    value={patient.nextSession ? formatDate(patient.nextSession) : "Not scheduled"}
                  />
                </dl>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

function MobileField({ label, value }: { label: string; value: string }) {
  return (
    <div className="min-w-0">
      <dt className="text-[11px] uppercase tracking-[0.06em] text-muted-foreground">{label}</dt>
      <dd className="truncate text-foreground">{value}</dd>
    </div>
  );
}

export function PatientAvatar({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "grid h-9 w-9 shrink-0 place-items-center rounded-full bg-primary/10 text-[11px] font-semibold text-primary ring-1 ring-inset ring-primary/15",
        className,
      )}
      aria-hidden="true"
    >
      {initialsOf(name)}
    </span>
  );
}

function PatientCell({ column, patient }: { column: PatientColumnKey; patient: Patient }) {
  switch (column) {
    case "code":
      return (
        <span className="whitespace-nowrap font-mono text-[12.5px] text-muted-foreground">
          {patient.code}
        </span>
      );
    case "photo":
      return <PatientAvatar name={patient.name} />;
    case "name":
      return (
        <span className="block min-w-[160px]">
          <Link
            to="/manager/patients/$patientId"
            params={{ patientId: patient.id }}
            className="font-medium text-foreground hover:underline"
          >
            {patient.name}
          </Link>
          <span className="block truncate text-[12.5px] text-muted-foreground">
            {patient.branch}
          </span>
        </span>
      );
    case "age":
      return <span>{patient.age}</span>;
    case "gender":
      return <span className="whitespace-nowrap">{patient.gender}</span>;
    case "guardian":
      return (
        <span className="block min-w-[150px]">
          <span className="block truncate text-foreground">{patient.guardian.name}</span>
          <span className="block truncate text-[12.5px] text-muted-foreground">
            {patient.guardian.relation}
          </span>
        </span>
      );
    case "phone":
      return (
        <span className="whitespace-nowrap tabular-nums text-muted-foreground">
          {patient.guardian.phone}
        </span>
      );
    case "therapyType":
      return <span className="whitespace-nowrap">{patient.program.therapyType}</span>;
    case "package":
      return (
        <span className="block min-w-[170px] truncate text-muted-foreground">
          {patient.billing.packageName}
        </span>
      );
    case "paymentStatus":
      return (
        <StatusBadge
          tone={PAYMENT_STATUS_TONE[patient.paymentStatus]}
          label={patient.paymentStatus}
        />
      );
    case "status":
      return (
        <StatusBadge tone={PATIENT_STATUS_TONE[patient.status]} label={patient.status} />
      );
    case "lastVisit":
      return (
        <span className="whitespace-nowrap text-muted-foreground">
          {formatDate(patient.lastVisit)}
        </span>
      );
    case "nextSession":
      return patient.nextSession ? (
        <span className="whitespace-nowrap text-foreground">
          {formatDate(patient.nextSession)}
        </span>
      ) : (
        <span className="whitespace-nowrap text-muted-foreground">Not scheduled</span>
      );
    default:
      return null;
  }
}

function PatientRowActions({ patient }: { patient: Patient }) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="icon-sm"
          className="text-muted-foreground"
          aria-label={`Actions for ${patient.name}`}
        >
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-52">
        <DropdownMenuItem asChild>
          <Link to="/manager/patients/$patientId" params={{ patientId: patient.id }}>
            <Eye className="h-4 w-4" aria-hidden="true" />
            View Profile
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <PencilLine className="h-4 w-4" aria-hidden="true" />
          Edit Patient
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <ClipboardCheck className="h-4 w-4" aria-hidden="true" />
          Schedule Assessment
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Waves className="h-4 w-4" aria-hidden="true" />
          Schedule Therapy
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Wallet className="h-4 w-4" aria-hidden="true" />
          Collect Payment
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link
            to="/manager/patients/$patientId"
            params={{ patientId: patient.id }}
            search={{ tab: "timeline" }}
          >
            <History className="h-4 w-4" aria-hidden="true" />
            View Timeline
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Printer className="h-4 w-4" aria-hidden="true" />
          Print Card
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="text-danger focus:text-danger">
          <Archive className="h-4 w-4" aria-hidden="true" />
          Archive
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export { CalendarPlus };
