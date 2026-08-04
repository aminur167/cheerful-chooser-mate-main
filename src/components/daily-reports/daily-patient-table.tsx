import { Eye, MoreHorizontal, PhoneCall, Printer, Receipt } from "lucide-react";
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
  ACTIVITY_STATE_LABEL,
  ACTIVITY_STATE_TONE,
  DAILY_PATIENT_ROWS,
  DAILY_PATIENT_STATUS_TONE,
  type DailyActivityState,
  type DailyPatientRow,
} from "@/constants/daily-report-data";

const HEAD_CLASS =
  "sticky top-0 z-10 h-11 whitespace-nowrap bg-muted/50 px-5 text-[11px] font-semibold uppercase tracking-[0.08em] text-muted-foreground backdrop-blur";

const HEADS = [
  "Patient ID",
  "Patient Name",
  "Registration",
  "Assessment",
  "Therapy",
  "Payment",
  "Follow-up",
  "Status",
  "",
];

function ActivityCell({ state }: { state: DailyActivityState }) {
  return <StatusBadge tone={ACTIVITY_STATE_TONE[state]} label={ACTIVITY_STATE_LABEL[state]} />;
}

function RowActions({ row }: { row: DailyPatientRow }) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="h-8 w-8 text-muted-foreground"
          aria-label={`Actions for ${row.patientName}`}
        >
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-52">
        <DropdownMenuItem>
          <Eye className="h-4 w-4" aria-hidden="true" />
          View patient
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Receipt className="h-4 w-4" aria-hidden="true" />
          View invoice
        </DropdownMenuItem>
        <DropdownMenuItem>
          <PhoneCall className="h-4 w-4" aria-hidden="true" />
          Log follow-up
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Printer className="h-4 w-4" aria-hidden="true" />
          Print day sheet
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export function DailyPatientTable({ rows = DAILY_PATIENT_ROWS }: { rows?: DailyPatientRow[] }) {
  return (
    <>
      {/* Desktop / tablet */}
      <div className="hidden max-h-[620px] overflow-auto md:block">
        <Table>
          <TableHeader>
            <TableRow className="hover:bg-transparent">
              {HEADS.map((head, index) => (
                <TableHead key={head || `actions-${index}`} className={HEAD_CLASS}>
                  {head}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.id}>
                <TableCell className="px-5 font-medium tabular-nums text-foreground">
                  {row.patientId}
                </TableCell>
                <TableCell className="px-5">
                  <div className="flex items-center gap-3">
                    <PatientAvatar name={row.patientName} />
                    <span className="truncate text-sm font-medium text-foreground">
                      {row.patientName}
                    </span>
                  </div>
                </TableCell>
                <TableCell className="px-5">
                  <ActivityCell state={row.registration} />
                </TableCell>
                <TableCell className="px-5">
                  <ActivityCell state={row.assessment} />
                </TableCell>
                <TableCell className="px-5">
                  <ActivityCell state={row.therapy} />
                </TableCell>
                <TableCell className="px-5">
                  <ActivityCell state={row.payment} />
                </TableCell>
                <TableCell className="px-5">
                  <ActivityCell state={row.followUp} />
                </TableCell>
                <TableCell className="px-5">
                  <StatusBadge tone={DAILY_PATIENT_STATUS_TONE[row.status]} label={row.status} />
                </TableCell>
                <TableCell className="px-3 text-right">
                  <RowActions row={row} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Mobile */}
      <ul className="divide-y divide-border md:hidden">
        {rows.map((row) => (
          <li key={row.id} className="space-y-3 px-4 py-4">
            <div className="flex items-start gap-3">
              <PatientAvatar name={row.patientName} />
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-medium text-foreground">{row.patientName}</p>
                <p className="mt-0.5 text-[12px] tabular-nums text-muted-foreground">
                  {row.patientId}
                </p>
              </div>
              <StatusBadge tone={DAILY_PATIENT_STATUS_TONE[row.status]} label={row.status} />
            </div>
            <dl className="grid grid-cols-2 gap-2.5">
              {(
                [
                  ["Registration", row.registration],
                  ["Assessment", row.assessment],
                  ["Therapy", row.therapy],
                  ["Payment", row.payment],
                  ["Follow-up", row.followUp],
                ] as const
              ).map(([label, state]) => (
                <div key={label} className="flex items-center justify-between gap-2">
                  <dt className="truncate text-[12px] text-muted-foreground">{label}</dt>
                  <dd>
                    <ActivityCell state={state} />
                  </dd>
                </div>
              ))}
            </dl>
          </li>
        ))}
      </ul>
    </>
  );
}
