import { Columns3, Download, RefreshCw, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  ASSESSMENT_DATE_RANGES,
  ASSESSMENT_STATUSES,
  ASSESSMENT_TYPES,
  BRANCH_FILTER_OPTIONS,
  THERAPY_RECOMMENDATIONS,
} from "@/constants/assessment-data";
import {
  ASSESSMENT_COLUMNS,
  type AssessmentColumnKey,
} from "@/components/assessments/assessment-columns";

export type AssessmentFilterState = {
  search: string;
  status: string;
  assessmentType: string;
  therapy: string;
  branch: string;
  range: string;
};

export const DEFAULT_ASSESSMENT_FILTERS: AssessmentFilterState = {
  search: "",
  status: "all",
  assessmentType: "all",
  therapy: "all",
  branch: "all",
  range: "all",
};

export function AssessmentFilters({
  value,
  onChange,
  onRefresh,
  isRefreshing = false,
  visibleColumns,
  onToggleColumn,
}: {
  value: AssessmentFilterState;
  onChange: (next: AssessmentFilterState) => void;
  onRefresh?: () => void;
  isRefreshing?: boolean;
  visibleColumns: AssessmentColumnKey[];
  onToggleColumn: (key: AssessmentColumnKey) => void;
}) {
  const set = (patch: Partial<AssessmentFilterState>) => onChange({ ...value, ...patch });

  return (
    <div className="space-y-3 border-b border-border px-4 py-3.5 sm:px-5">
      <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
        <div className="relative w-full lg:max-w-[360px]">
          <Search
            className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground/70"
            aria-hidden="true"
          />
          <Input
            type="search"
            value={value.search}
            onChange={(event) => set({ search: event.target.value })}
            placeholder="Search patient, patient ID, guardian phone or assessment ID…"
            aria-label="Search assessments"
            className="h-9 bg-muted/40 pl-9 shadow-none"
          />
        </div>

        <div className="flex shrink-0 flex-wrap items-center gap-2.5">
          <Button variant="outline" size="sm" onClick={onRefresh} disabled={isRefreshing}>
            <RefreshCw
              className={isRefreshing ? "h-4 w-4 animate-spin" : "h-4 w-4"}
              aria-hidden="true"
            />
            Refresh
          </Button>
          <Button variant="outline" size="sm">
            <Download className="h-4 w-4" aria-hidden="true" />
            Export
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm">
                <Columns3 className="h-4 w-4" aria-hidden="true" />
                Columns
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuLabel>Visible columns</DropdownMenuLabel>
              <DropdownMenuSeparator />
              {ASSESSMENT_COLUMNS.filter((column) => column.hideable).map((column) => (
                <DropdownMenuCheckboxItem
                  key={column.key}
                  checked={visibleColumns.includes(column.key)}
                  onCheckedChange={() => onToggleColumn(column.key)}
                  onSelect={(event) => event.preventDefault()}
                >
                  {column.label}
                </DropdownMenuCheckboxItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-2.5">
        <FilterSelect
          label="assessment status"
          placeholder="Status"
          width="w-[160px]"
          value={value.status}
          onValueChange={(status) => set({ status })}
          allLabel="All statuses"
          options={ASSESSMENT_STATUSES}
        />
        <FilterSelect
          label="assessment type"
          placeholder="Assessment type"
          width="w-[185px]"
          value={value.assessmentType}
          onValueChange={(assessmentType) => set({ assessmentType })}
          allLabel="All assessment types"
          options={ASSESSMENT_TYPES}
        />
        <FilterSelect
          label="therapy type"
          placeholder="Therapy"
          width="w-[185px]"
          value={value.therapy}
          onValueChange={(therapy) => set({ therapy })}
          allLabel="All therapies"
          options={THERAPY_RECOMMENDATIONS}
        />
        <FilterSelect
          label="branch"
          placeholder="Branch"
          width="w-[180px]"
          value={value.branch}
          onValueChange={(branch) => set({ branch })}
          allLabel="All branches"
          options={BRANCH_FILTER_OPTIONS}
        />

        <Select value={value.range} onValueChange={(range) => set({ range })}>
          <SelectTrigger className="h-9 w-[165px]" aria-label="Filter by assessment date range">
            <SelectValue placeholder="Date range" />
          </SelectTrigger>
          <SelectContent>
            {ASSESSMENT_DATE_RANGES.map((range) => (
              <SelectItem key={range.key} value={range.key}>
                {range.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Button
          variant="ghost"
          size="sm"
          className="text-muted-foreground"
          onClick={() => onChange(DEFAULT_ASSESSMENT_FILTERS)}
        >
          Reset
        </Button>

        <span className="ml-auto hidden text-[12px] text-muted-foreground xl:inline">
          Filters apply instantly and combine with the search box
        </span>
      </div>
    </div>
  );
}

function FilterSelect({
  label,
  placeholder,
  width,
  value,
  onValueChange,
  allLabel,
  options,
}: {
  label: string;
  placeholder: string;
  width: string;
  value: string;
  onValueChange: (value: string) => void;
  allLabel: string;
  options: readonly string[];
}) {
  return (
    <Select value={value} onValueChange={onValueChange}>
      <SelectTrigger className={`h-9 ${width}`} aria-label={`Filter by ${label}`}>
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="all">{allLabel}</SelectItem>
        {options.map((option) => (
          <SelectItem key={option} value={option}>
            {option}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
