import { Link } from "@tanstack/react-router";
import {
  Archive,
  CalendarPlus,
  Eye,
  FileText,
  MoreHorizontal,
  PencilLine,
  Printer,
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
  ASSESSMENT_STATUS_TONE,
  SEVERITY_TONE,
  type Assessment,
} from "@/constants/assessment-data";
import {
  ASSESSMENT_COLUMNS,
  type AssessmentColumnKey,
} from "@/components/assessments/assessment-columns";

export function AssessmentAvatar({ name, className }: { name: string; className?: string }) {
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

export function AssessmentTable({
  rows,
  visibleColumns,
}: {
  rows: Assessment[];
  visibleColumns: AssessmentColumnKey[];
}) {
  const columns = ASSESSMENT_COLUMNS.filter((column) => visibleColumns.includes(column.key));

  return (
    <>
      {/* Desktop / tablet data table */}
      <div className="hidden overflow-auto md:block" style={{ maxHeight: "660px" }}>
        <Table>
          <caption className="sr-only">Clinical assessments</caption>
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
            {rows.map((assessment) => (
              <TableRow
                key={assessment.id}
                className="border-border transition-enterprise hover:bg-surface-hover"
              >
                {columns.map((column) => (
                  <TableCell key={column.key} className="px-5 py-3.5 text-sm">
                    <AssessmentCell column={column.key} assessment={assessment} />
                  </TableCell>
                ))}
                <TableCell className="px-5 py-3.5 text-right">
                  <AssessmentRowActions assessment={assessment} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Mobile card list */}
      <ul className="divide-y divide-border md:hidden">
        {rows.map((assessment) => (
          <li key={assessment.id} className="px-4 py-4">
            <div className="flex items-start gap-3">
              <AssessmentAvatar name={assessment.patientName} />
              <div className="min-w-0 flex-1">
                <div className="flex items-start justify-between gap-2">
                  <div className="min-w-0">
                    <Link
                      to="/manager/assessments/$assessmentId"
                      params={{ assessmentId: assessment.id }}
                      className="block truncate text-sm font-medium text-foreground hover:underline"
                    >
                      {assessment.patientName}
                    </Link>
                    <p className="truncate font-mono text-[12px] text-muted-foreground">
                      {assessment.code} · {assessment.patientCode}
                    </p>
                  </div>
                  <AssessmentRowActions assessment={assessment} />
                </div>

                <div className="mt-2.5 flex flex-wrap items-center gap-2">
                  <StatusBadge
                    tone={ASSESSMENT_STATUS_TONE[assessment.status]}
                    label={assessment.status}
                  />
                  <StatusBadge
                    tone={SEVERITY_TONE[assessment.diagnosis.severity]}
                    label={assessment.diagnosis.severity}
                  />
                </div>

                <dl className="mt-3 grid grid-cols-2 gap-x-3 gap-y-2 text-[12.5px]">
                  <MobileField label="Assessment date" value={formatDate(assessment.assessmentDate)} />
                  <MobileField label="Type" value={assessment.assessmentType} />
                  <MobileField label="Diagnosis" value={assessment.diagnosis.primary} />
                  <MobileField label="Recommendation" value={assessment.recommendation.therapy} />
                  <MobileField label="Guardian" value={assessment.guardianPhone} />
                  <MobileField
                    label="Next follow-up"
                    value={
                      assessment.nextFollowUp ? formatDate(assessment.nextFollowUp) : "Not scheduled"
                    }
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

function AssessmentCell({
  column,
  assessment,
}: {
  column: AssessmentColumnKey;
  assessment: Assessment;
}) {
  switch (column) {
    case "code":
      return (
        <Link
          to="/manager/assessments/$assessmentId"
          params={{ assessmentId: assessment.id }}
          className="whitespace-nowrap font-mono text-[12.5px] font-medium text-primary hover:underline"
        >
          {assessment.code}
        </Link>
      );
    case "patient":
      return (
        <div className="flex min-w-0 items-center gap-3">
          <AssessmentAvatar name={assessment.patientName} />
          <div className="min-w-0">
            <Link
              to="/manager/patients/$patientId"
              params={{ patientId: assessment.patientId }}
              className="block truncate font-medium text-foreground hover:underline"
            >
              {assessment.patientName}
            </Link>
            <p className="truncate text-[12px] text-muted-foreground">
              {assessment.patientAge} yrs · {assessment.patientGender} · {assessment.guardianName}
            </p>
          </div>
        </div>
      );
    case "patientCode":
      return (
        <span className="whitespace-nowrap font-mono text-[12.5px] text-muted-foreground">
          {assessment.patientCode}
        </span>
      );
    case "assessmentDate":
      return (
        <span className="whitespace-nowrap text-muted-foreground">
          {formatDate(assessment.assessmentDate)}
        </span>
      );
    case "assessmentType":
      return <span className="whitespace-nowrap text-foreground">{assessment.assessmentType}</span>;
    case "diagnosis":
      return (
        <div className="min-w-0">
          <p className="truncate text-foreground">{assessment.diagnosis.primary}</p>
          <p className="truncate text-[12px] text-muted-foreground">
            {assessment.diagnosis.severity}
            {assessment.diagnosis.secondary !== "None"
              ? ` · ${assessment.diagnosis.secondary}`
              : ""}
          </p>
        </div>
      );
    case "recommendation":
      return (
        <div className="min-w-0">
          <p className="truncate text-foreground">{assessment.recommendation.therapy}</p>
          <p className="truncate text-[12px] text-muted-foreground">
            {assessment.recommendation.sessionsPerWeek}× / week ·{" "}
            {assessment.recommendation.expectedDuration}
          </p>
        </div>
      );
    case "status":
      return (
        <StatusBadge
          tone={ASSESSMENT_STATUS_TONE[assessment.status]}
          label={assessment.status}
        />
      );
    case "nextFollowUp":
      return assessment.nextFollowUp ? (
        <span className="whitespace-nowrap text-foreground">
          {formatDate(assessment.nextFollowUp)}
        </span>
      ) : (
        <span className="whitespace-nowrap text-muted-foreground">Not scheduled</span>
      );
    default:
      return null;
  }
}

function AssessmentRowActions({ assessment }: { assessment: Assessment }) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="icon-sm"
          className="text-muted-foreground"
          aria-label={`Actions for assessment ${assessment.code}`}
        >
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-52">
        <DropdownMenuItem asChild>
          <Link
            to="/manager/assessments/$assessmentId"
            params={{ assessmentId: assessment.id }}
          >
            <Eye className="h-4 w-4" aria-hidden="true" />
            View Assessment
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <PencilLine className="h-4 w-4" aria-hidden="true" />
          Edit
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Printer className="h-4 w-4" aria-hidden="true" />
          Print
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <FileText className="h-4 w-4" aria-hidden="true" />
          Generate Report
        </DropdownMenuItem>
        <DropdownMenuItem>
          <CalendarPlus className="h-4 w-4" aria-hidden="true" />
          Schedule Therapy
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
