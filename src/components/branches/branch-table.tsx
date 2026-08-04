import { Fragment } from "react";
import { Link } from "@tanstack/react-router";
import {
  BarChart3,
  ChevronDown,
  Clock,
  Eye,
  FileText,
  KeyRound,
  Mail,
  MapPin,
  MoreHorizontal,
  PencilLine,
  Phone,
  PowerOff,
  UserCog,
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
import { formatDate, formatNumber, initialsOf } from "@/lib/format";
import { formatTaka } from "@/constants/dashboard-data";
import { BRANCH_STATUS_TONE, type Branch } from "@/constants/branch-data";

const HEADERS = [
  "Branch Code",
  "Branch Name",
  "Branch Manager",
  "Manager Key",
  "Phone",
  "City",
  "Patients",
  "Staff",
  "Monthly Revenue",
  "Status",
  "Created Date",
];

export function BranchTable({
  rows,
  expandedId,
  onToggleExpand,
}: {
  rows: Branch[];
  expandedId: string | null;
  onToggleExpand: (id: string) => void;
}) {
  return (
    <div className="overflow-auto" style={{ maxHeight: "640px" }}>
      <Table>
        <caption className="sr-only">Organisation branches</caption>
        <TableHeader>
          <TableRow className="border-border hover:bg-transparent">
            <TableHead className="sticky top-0 z-10 h-11 w-10 bg-muted/50 px-4 backdrop-blur">
              <span className="sr-only">Expand</span>
            </TableHead>
            {HEADERS.map((header) => (
              <TableHead
                key={header}
                scope="col"
                className={cn(
                  "sticky top-0 z-10 h-11 whitespace-nowrap bg-muted/50 px-5 text-[11px] font-semibold uppercase tracking-[0.08em] text-muted-foreground backdrop-blur",
                  ["Patients", "Staff", "Monthly Revenue"].includes(header) && "text-right",
                )}
              >
                {header}
              </TableHead>
            ))}
            <TableHead className="sticky top-0 z-10 h-11 bg-muted/50 px-5 text-right text-[11px] font-semibold uppercase tracking-[0.08em] text-muted-foreground backdrop-blur">
              Actions
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {rows.map((branch) => {
            const expanded = expandedId === branch.id;
            return (
              <Fragment key={branch.id}>
                <TableRow
                  onClick={() => onToggleExpand(branch.id)}
                  aria-expanded={expanded}
                  className={cn(
                    "cursor-pointer border-border transition-enterprise hover:bg-surface-hover",
                    expanded && "bg-surface-hover",
                  )}
                >
                  <TableCell className="px-4 py-3.5">
                    <ChevronDown
                      className={cn(
                        "h-4 w-4 text-muted-foreground transition-enterprise",
                        expanded && "rotate-180 text-foreground",
                      )}
                      aria-hidden="true"
                    />
                  </TableCell>
                  <TableCell className="whitespace-nowrap px-5 py-3.5 font-mono text-[12.5px] text-muted-foreground">
                    {branch.code}
                  </TableCell>
                  <TableCell className="px-5 py-3.5">
                    <span className="font-medium text-foreground">{branch.name}</span>
                    <span className="block text-[12.5px] text-muted-foreground">
                      {branch.division} division
                    </span>
                  </TableCell>
                  <TableCell className="px-5 py-3.5">
                    <span className="flex items-center gap-2.5">
                      <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-primary/10 text-[11px] font-semibold text-primary">
                        {initialsOf(branch.manager.name)}
                      </span>
                      <span className="min-w-0">
                        <span className="block truncate text-sm text-foreground">
                          {branch.manager.name}
                        </span>
                        <span className="block truncate text-[12.5px] text-muted-foreground">
                          Branch Manager
                        </span>
                      </span>
                    </span>
                  </TableCell>
                  <TableCell className="whitespace-nowrap px-5 py-3.5">
                    <span className="inline-flex items-center gap-1.5 rounded-md border border-border bg-muted/40 px-2 py-1 font-mono text-[12px] font-medium text-foreground">
                      <KeyRound className="h-3.5 w-3.5 text-muted-foreground" aria-hidden="true" />
                      {branch.manager.managerId}
                    </span>
                  </TableCell>
                  <TableCell className="whitespace-nowrap px-5 py-3.5 text-sm tabular-nums text-muted-foreground">
                    {branch.phone}
                  </TableCell>
                  <TableCell className="px-5 py-3.5 text-sm">{branch.city}</TableCell>
                  <TableCell className="px-5 py-3.5 text-right text-sm tabular-nums">
                    {formatNumber(branch.patients)}
                  </TableCell>
                  <TableCell className="px-5 py-3.5 text-right text-sm tabular-nums">
                    {branch.staff}
                  </TableCell>
                  <TableCell className="whitespace-nowrap px-5 py-3.5 text-right text-sm font-medium tabular-nums">
                    {formatTaka(branch.monthlyRevenue)}
                  </TableCell>
                  <TableCell className="px-5 py-3.5">
                    <StatusBadge
                      tone={BRANCH_STATUS_TONE[branch.status]}
                      label={branch.status}
                    />
                  </TableCell>
                  <TableCell className="whitespace-nowrap px-5 py-3.5 text-sm text-muted-foreground">
                    {formatDate(branch.createdAt)}
                  </TableCell>
                  <TableCell
                    className="px-5 py-3.5 text-right"
                    onClick={(event) => event.stopPropagation()}
                  >
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button
                          variant="ghost"
                          size="icon-sm"
                          className="text-muted-foreground"
                          aria-label={`Actions for ${branch.name}`}
                        >
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end" className="w-48">
                        <DropdownMenuItem asChild>
                          <Link
                            to="/super-admin/branches/$branchId"
                            params={{ branchId: branch.id }}
                          >
                            <Eye className="h-4 w-4" aria-hidden="true" />
                            View Details
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <PencilLine className="h-4 w-4" aria-hidden="true" />
                          Edit Branch
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <UserCog className="h-4 w-4" aria-hidden="true" />
                          Assign Manager
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <FileText className="h-4 w-4" aria-hidden="true" />
                          View Reports
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <BarChart3 className="h-4 w-4" aria-hidden="true" />
                          View Performance
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="text-danger focus:text-danger">
                          <PowerOff className="h-4 w-4" aria-hidden="true" />
                          Deactivate
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>

                {expanded ? (
                  <TableRow className="border-border bg-muted/30 hover:bg-muted/30">
                    <TableCell colSpan={HEADERS.length + 2} className="p-0">
                      <BranchDetailPanel branch={branch} />
                    </TableCell>
                  </TableRow>
                ) : null}
              </Fragment>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
}

function BranchDetailPanel({ branch }: { branch: Branch }) {
  return (
    <div className="grid gap-6 px-5 py-6 lg:grid-cols-3">
      <div className="space-y-3">
        <h3 className="text-[11px] font-semibold uppercase tracking-[0.08em] text-muted-foreground">
          Branch information
        </h3>
        <DetailLine icon={MapPin} label="Address" value={branch.address} />
        <DetailLine icon={Mail} label="Email" value={branch.email} />
        <DetailLine icon={Clock} label="Working hours" value={branch.workingHours} />
      </div>

      <div className="space-y-3">
        <h3 className="text-[11px] font-semibold uppercase tracking-[0.08em] text-muted-foreground">
          Performance
        </h3>
        <div className="grid grid-cols-2 gap-3">
          <MiniStat label="Monthly revenue" value={formatTaka(branch.monthlyRevenue)} />
          <MiniStat label="Today's collection" value={formatTaka(branch.todaysCollection)} />
          <MiniStat label="Patients" value={formatNumber(branch.patients)} />
          <MiniStat label="Sessions today" value={String(branch.sessions)} />
        </div>
      </div>

      <div className="space-y-3">
        <h3 className="text-[11px] font-semibold uppercase tracking-[0.08em] text-muted-foreground">
          Manager information
        </h3>
        <div className="flex items-center gap-3 rounded-lg border border-border bg-card p-3.5">
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-primary/10 text-xs font-semibold text-primary">
            {initialsOf(branch.manager.name)}
          </span>
          <div className="min-w-0">
            <p className="truncate text-sm font-medium text-foreground">{branch.manager.name}</p>
            <p className="truncate text-[12.5px] text-muted-foreground">
              Manager since {formatDate(branch.manager.since)}
            </p>
          </div>
        </div>
        <DetailLine icon={Phone} label="Phone" value={branch.manager.phone} />
        <DetailLine icon={Mail} label="Email" value={branch.manager.email} />
        <DetailLine icon={KeyRound} label="Manager unique key" value={branch.manager.managerId} />
        <Button variant="outline" size="sm" asChild>
          <Link to="/super-admin/branches/$branchId" params={{ branchId: branch.id }}>
            Open branch profile
          </Link>
        </Button>
      </div>
    </div>
  );
}

function DetailLine({
  icon: Icon,
  label,
  value,
}: {
  icon: typeof MapPin;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-start gap-2.5">
      <Icon className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground" aria-hidden="true" />
      <div className="min-w-0">
        <p className="text-[12px] text-muted-foreground">{label}</p>
        <p className="text-sm text-foreground">{value}</p>
      </div>
    </div>
  );
}

function MiniStat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg border border-border bg-card p-3.5">
      <p className="text-[12px] text-muted-foreground">{label}</p>
      <p className="mt-1 text-sm font-semibold tabular-nums text-foreground">{value}</p>
    </div>
  );
}
