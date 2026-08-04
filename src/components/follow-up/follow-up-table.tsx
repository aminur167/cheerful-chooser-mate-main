import { Link } from "@tanstack/react-router";
import {
  CalendarClock,
  CheckCircle2,
  Eye,
  MoreHorizontal,
  PencilLine,
  PhoneCall,
  UserRound,
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
  FOLLOW_UP_PRIORITY_TONE,
  FOLLOW_UP_STATUS_TONE,
  type FollowUp,
} from "@/constants/follow-up-data";
import {
  FOLLOW_UP_COLUMNS,
  type FollowUpColumnKey,
} from "@/components/follow-up/follow-up-columns";

export function FollowUpAvatar({ name, className }: { name: string; className?: string }) {
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

export function PriorityIndicator({ item }: { item: FollowUp }) {
  return (
    <span className="inline-flex items-center gap-2">
      <span
        className={cn(
          "h-2 w-2 shrink-0 rounded-full",
          item.priority === "High" && "bg-danger",
          item.priority === "Medium" && "bg-warning",
          item.priority === "Low" && "bg-muted-foreground/50",
        )}
        aria-hidden="true"
      />
      <StatusBadge
        tone={FOLLOW_UP_PRIORITY_TONE[item.priority]}
        label={item.priority}
        dot={false}
      />
    </span>
  );
}

export function FollowUpRowActions({
  item,
  onComplete,
  onReschedule,
  onEdit,
  onCall,
}: {
  item: FollowUp;
  onComplete?: (item: FollowUp) => void;
  onReschedule?: (item: FollowUp) => void;
  onEdit?: (item: FollowUp) => void;
  onCall?: (item: FollowUp) => void;
}) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="h-8 w-8 text-muted-foreground"
          aria-label={`Actions for ${item.code}`}
        >
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-52">
        <DropdownMenuItem asChild>
          <Link to="/manager/follow-up/$followUpId" params={{ followUpId: item.id }}>
            <Eye className="h-4 w-4" aria-hidden="true" />
            View
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem onSelect={() => onEdit?.(item)}>
          <PencilLine className="h-4 w-4" aria-hidden="true" />
          Edit
        </DropdownMenuItem>
        <DropdownMenuItem onSelect={() => onComplete?.(item)}>
          <CheckCircle2 className="h-4 w-4" aria-hidden="true" />
          Complete
        </DropdownMenuItem>
        <DropdownMenuItem onSelect={() => onReschedule?.(item)}>
          <CalendarClock className="h-4 w-4" aria-hidden="true" />
          Reschedule
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem onSelect={() => onCall?.(item)}>
          <PhoneCall className="h-4 w-4" aria-hidden="true" />
          Call patient
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link to="/manager/patients/$patientId" params={{ patientId: item.patientId }}>
            <UserRound className="h-4 w-4" aria-hidden="true" />
            View patient profile
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export function FollowUpTable({
  rows,
  visibleColumns,
  onComplete,
  onReschedule,
  onEdit,
  onCall,
}: {
  rows: FollowUp[];
  visibleColumns: FollowUpColumnKey[];
  onComplete?: (item: FollowUp) => void;
  onReschedule?: (item: FollowUp) => void;
  onEdit?: (item: FollowUp) => void;
  onCall?: (item: FollowUp) => void;
}) {
  const columns = FOLLOW_UP_COLUMNS.filter((column) => visibleColumns.includes(column.key));
  const actions = { onComplete, onReschedule, onEdit, onCall };

  return (
    <>
      {/* Desktop / tablet data table with sticky header */}
      <div className="hidden overflow-auto md:block" style={{ maxHeight: "660px" }}>
        <Table>
          <caption className="sr-only">Patient follow-ups</caption>
          <TableHeader>
            <TableRow className="border-border hover:bg-transparent">
              {columns.map((column) => (
                <TableHead
                  key={column.key}
                  scope="col"
                  className={cn(
                    "sticky top-0 z-10 h-11 whitespace-nowrap bg-muted/50 px-5 text-[11px] font-semibold uppercase tracking-[0.08em] text-muted-foreground backdrop-blur",
                    column.align === "right" && "text-right",
                  )}
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
            {rows.map((item) => (
              <TableRow
                key={item.id}
                className="border-border transition-enterprise hover:bg-surface-hover"
              >
                {columns.map((column) => (
                  <TableCell
                    key={column.key}
                    className={cn(
                      "px-5 py-3.5 text-sm",
                      column.align === "right" && "text-right",
                    )}
                  >
                    <FollowUpCell column={column.key} item={item} />
                  </TableCell>
                ))}
                <TableCell className="px-5 py-3.5 text-right">
                  <FollowUpRowActions item={item} {...actions} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Mobile card list */}
      <ul className="divide-y divide-border md:hidden">
        {rows.map((item) => (
          <li key={item.id} className="px-4 py-4">
            <div className="flex items-start gap-3">
              <FollowUpAvatar name={item.patientName} />
              <div className="min-w-0 flex-1">
                <div className="flex items-start justify-between gap-2">
                  <div className="min-w-0">
                    <Link
                      to="/manager/follow-up/$followUpId"
                      params={{ followUpId: item.id }}
                      className="block truncate text-sm font-medium text-foreground hover:underline"
                    >
                      {item.patientName}
                    </Link>
                    <p className="truncate font-mono text-[12px] text-muted-foreground">
                      {item.code} · {item.patientCode}
                    </p>
                  </div>
                  <FollowUpRowActions item={item} {...actions} />
                </div>

                <div className="mt-2.5 flex flex-wrap items-center gap-2">
                  <StatusBadge
                    tone={FOLLOW_UP_STATUS_TONE[item.status]}
                    label={item.status}
                  />
                  <StatusBadge
                    tone={FOLLOW_UP_PRIORITY_TONE[item.priority]}
                    label={`${item.priority} priority`}
                    dot={false}
                  />
                </div>

                <dl className="mt-3 grid grid-cols-2 gap-x-3 gap-y-2 text-[12.5px]">
                  <MobileField label="Guardian" value={item.guardianName} />
                  <MobileField label="Phone" value={item.guardianPhone} />
                  <MobileField label="Reason" value={item.reason} />
                  <MobileField label="Last visit" value={formatDate(item.lastVisit)} />
                  <MobileField label="Assigned" value={formatDate(item.assignedDate)} />
                  <MobileField label="Next follow-up" value={formatDate(item.nextFollowUp)} />
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

function FollowUpCell({ column, item }: { column: FollowUpColumnKey; item: FollowUp }) {
  switch (column) {
    case "code":
      return (
        <Link
          to="/manager/follow-up/$followUpId"
          params={{ followUpId: item.id }}
          className="whitespace-nowrap font-mono text-[12.5px] font-medium text-primary hover:underline"
        >
          {item.code}
        </Link>
      );
    case "patient":
      return (
        <div className="flex min-w-0 items-center gap-3">
          <FollowUpAvatar name={item.patientName} />
          <div className="min-w-0">
            <Link
              to="/manager/patients/$patientId"
              params={{ patientId: item.patientId }}
              className="block truncate font-medium text-foreground hover:underline"
            >
              {item.patientName}
            </Link>
            <p className="truncate text-[12px] text-muted-foreground">
              {item.patientCode} · {item.patientAge} yrs
            </p>
          </div>
        </div>
      );
    case "guardian":
      return (
        <div className="min-w-0">
          <p className="truncate text-foreground">{item.guardianName}</p>
          <p className="truncate text-[12px] text-muted-foreground">{item.guardianRelation}</p>
        </div>
      );
    case "phone":
      return (
        <span className="whitespace-nowrap font-mono text-[12.5px] text-muted-foreground">
          {item.guardianPhone}
        </span>
      );
    case "lastVisit":
      return (
        <span className="whitespace-nowrap text-muted-foreground">
          {formatDate(item.lastVisit)}
        </span>
      );
    case "reason":
      return (
        <div className="min-w-0">
          <p className="truncate text-foreground">{item.reason}</p>
          <p className="truncate text-[12px] text-muted-foreground">{item.assignedTo}</p>
        </div>
      );
    case "assignedDate":
      return (
        <span className="whitespace-nowrap text-muted-foreground">
          {formatDate(item.assignedDate)}
        </span>
      );
    case "nextFollowUp":
      return (
        <span className="whitespace-nowrap font-medium text-foreground">
          {formatDate(item.nextFollowUp)}
        </span>
      );
    case "priority":
      return <PriorityIndicator item={item} />;
    case "status":
      return <StatusBadge tone={FOLLOW_UP_STATUS_TONE[item.status]} label={item.status} />;
    default:
      return null;
  }
}
