import { Link } from "@tanstack/react-router";
import {
  CheckCircle2,
  Eye,
  MoreHorizontal,
  PencilLine,
  PlayCircle,
  Printer,
  Users,
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
import { Progress } from "@/components/ui/progress";
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
  ATTENDANCE_TONE,
  THERAPY_STATUS_TONE,
  formatTimeRange,
  type TherapySession,
} from "@/constants/therapy-data";
import { THERAPY_COLUMNS, type TherapyColumnKey } from "@/components/therapy/therapy-columns";

export function TherapyAvatar({ name, className }: { name: string; className?: string }) {
  return (
    <span
      className={cn(
        "grid h-9 w-9 shrink-0 place-items-center rounded-full border border-border bg-muted/60 text-[12px] font-semibold text-muted-foreground",
        className,
      )}
      aria-hidden="true"
    >
      {initialsOf(name)}
    </span>
  );
}

export function TherapyTable({
  rows,
  visibleColumns,
}: {
  rows: TherapySession[];
  visibleColumns: TherapyColumnKey[];
}) {
  const columns = THERAPY_COLUMNS.filter((column) => visibleColumns.includes(column.key));

  return (
    <>
      {/* Desktop / tablet data table */}
      <div className="hidden overflow-auto md:block" style={{ maxHeight: "660px" }}>
        <Table>
          <caption className="sr-only">Therapy sessions</caption>
          <TableHeader>
            <TableRow className="border-border hover:bg-transparent">
              {columns.map((column) => (
                <TableHead
                  key={column.key}
                  scope="col"
                  className="sticky top-0 z-10 h-11 whitespace-nowrap bg-muted/50 px-5 text-[11px] font-semibold uppercase tracking-[0.08em] text-muted-foreground backdrop-blur"
                >
                  {column.label}
                </TableHead>
              ))}
              <TableHead className="sticky top-0 z-10 h-11 bg-muted/50 px-5 text-right text-[11px] font-semibold uppercase tracking-[0.08em] text-muted-foreground backdrop-blur">
                Actions
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {rows.map((session) => (
              <TableRow
                key={session.id}
                className="border-border transition-enterprise hover:bg-surface-hover"
              >
                {columns.map((column) => (
                  <TableCell key={column.key} className="px-5 py-3.5 text-sm">
                    <TherapyCell column={column.key} session={session} />
                  </TableCell>
                ))}
                <TableCell className="px-5 py-3.5 text-right">
                  <TherapyRowActions session={session} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Mobile card list */}
      <ul className="divide-y divide-border md:hidden">
        {rows.map((session) => (
          <li key={session.id} className="px-4 py-4">
            <div className="flex items-start gap-3">
              <TherapyAvatar name={session.patientName} />
              <div className="min-w-0 flex-1">
                <div className="flex items-start justify-between gap-2">
                  <div className="min-w-0">
                    <Link
                      to="/manager/therapy/$sessionId"
                      params={{ sessionId: session.id }}
                      className="block truncate text-sm font-medium text-foreground hover:underline"
                    >
                      {session.patientName}
                    </Link>
                    <p className="truncate font-mono text-[12px] text-muted-foreground">
                      {session.code} · {session.patientCode}
                    </p>
                  </div>
                  <TherapyRowActions session={session} />
                </div>

                <div className="mt-2.5 flex flex-wrap items-center gap-2">
                  <StatusBadge
                    tone={THERAPY_STATUS_TONE[session.status]}
                    label={session.status}
                  />
                  <StatusBadge
                    tone={ATTENDANCE_TONE[session.attendance]}
                    label={session.attendance}
                  />
                  {session.mode === "Group Therapy" ? (
                    <StatusBadge tone="info" label="Group" dot={false} />
                  ) : null}
                </div>

                <dl className="mt-3 grid grid-cols-2 gap-x-3 gap-y-2 text-[12.5px]">
                  <MobileField label="Program" value={session.program} />
                  <MobileField
                    label="Session"
                    value={`${session.sessionNumber} of ${session.totalSessions}`}
                  />
                  <MobileField label="Date" value={formatDate(session.sessionDate)} />
                  <MobileField
                    label="Time"
                    value={formatTimeRange(session.startTime, session.endTime)}
                  />
                  <MobileField label="Therapist" value={session.therapist} />
                  <MobileField label="Room" value={session.room} />
                </dl>

                <div className="mt-3">
                  <div className="flex items-center justify-between text-[12px] text-muted-foreground">
                    <span>Progress</span>
                    <span className="tabular-nums">{session.progress}%</span>
                  </div>
                  <Progress value={session.progress} className="mt-1.5" />
                </div>
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

function TherapyCell({
  column,
  session,
}: {
  column: TherapyColumnKey;
  session: TherapySession;
}) {
  switch (column) {
    case "code":
      return (
        <Link
          to="/manager/therapy/$sessionId"
          params={{ sessionId: session.id }}
          className="whitespace-nowrap font-mono text-[12.5px] font-medium text-primary hover:underline"
        >
          {session.code}
        </Link>
      );
    case "patient":
      return (
        <div className="flex min-w-0 items-center gap-3">
          <TherapyAvatar name={session.patientName} />
          <div className="min-w-0">
            <Link
              to="/manager/patients/$patientId"
              params={{ patientId: session.patientId }}
              className="block truncate font-medium text-foreground hover:underline"
            >
              {session.patientName}
            </Link>
            <p className="truncate text-[12px] text-muted-foreground">
              {session.patientCode} · {session.patientAge} yrs · {session.guardianName}
            </p>
          </div>
        </div>
      );
    case "mode":
      return (
        <span className="inline-flex items-center gap-1.5 whitespace-nowrap text-foreground">
          {session.mode === "Group Therapy" ? (
            <Users className="h-3.5 w-3.5 text-muted-foreground" aria-hidden="true" />
          ) : null}
          {session.mode}
        </span>
      );
    case "program":
      return <span className="whitespace-nowrap text-foreground">{session.program}</span>;
    case "sessionNumber":
      return (
        <span className="whitespace-nowrap tabular-nums text-foreground">
          {session.sessionNumber}
          <span className="text-muted-foreground"> / {session.totalSessions}</span>
        </span>
      );
    case "sessionDate":
      return (
        <span className="whitespace-nowrap text-muted-foreground">
          {formatDate(session.sessionDate)}
        </span>
      );
    case "time":
      return (
        <span className="whitespace-nowrap tabular-nums text-muted-foreground">
          {formatTimeRange(session.startTime, session.endTime)}
        </span>
      );
    case "attendance":
      return (
        <StatusBadge tone={ATTENDANCE_TONE[session.attendance]} label={session.attendance} />
      );
    case "status":
      return <StatusBadge tone={THERAPY_STATUS_TONE[session.status]} label={session.status} />;
    case "progress":
      return (
        <div className="min-w-[120px]">
          <div className="flex items-center justify-between text-[12px] text-muted-foreground">
            <span className="tabular-nums text-foreground">{session.progress}%</span>
          </div>
          <Progress value={session.progress} className="mt-1.5" />
        </div>
      );
    default:
      return null;
  }
}

function TherapyRowActions({ session }: { session: TherapySession }) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="icon-sm"
          className="text-muted-foreground"
          aria-label={`Actions for session ${session.code}`}
        >
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-52">
        <DropdownMenuItem asChild>
          <Link to="/manager/therapy/$sessionId" params={{ sessionId: session.id }}>
            <Eye className="h-4 w-4" aria-hidden="true" />
            View
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <PencilLine className="h-4 w-4" aria-hidden="true" />
          Edit
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem disabled={session.status !== "Scheduled"}>
          <PlayCircle className="h-4 w-4" aria-hidden="true" />
          Start Session
        </DropdownMenuItem>
        <DropdownMenuItem disabled={session.status === "Completed"}>
          <CheckCircle2 className="h-4 w-4" aria-hidden="true" />
          Complete Session
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Printer className="h-4 w-4" aria-hidden="true" />
          Print
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
