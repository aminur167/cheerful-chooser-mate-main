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
  FOLLOW_UP_BRANCHES,
  FOLLOW_UP_DATE_RANGES,
  FOLLOW_UP_PRIORITIES,
  FOLLOW_UP_REASONS,
  FOLLOW_UP_STATUSES,
} from "@/constants/follow-up-data";
import {
  FOLLOW_UP_COLUMNS,
  type FollowUpColumnKey,
} from "@/components/follow-up/follow-up-columns";

export type FollowUpFilterState = {
  search: string;
  priority: string;
  status: string;
  reason: string;
  range: string;
  branch: string;
};

export const DEFAULT_FOLLOW_UP_FILTERS: FollowUpFilterState = {
  search: "",
  priority: "all",
  status: "all",
  reason: "all",
  range: "all",
  branch: "all",
};

export function FollowUpFilters({
  value,
  onChange,
  onRefresh,
  isRefreshing = false,
  visibleColumns,
  onToggleColumn,
}: {
  value: FollowUpFilterState;
  onChange: (next: FollowUpFilterState) => void;
  onRefresh?: () => void;
  isRefreshing?: boolean;
  visibleColumns?: FollowUpColumnKey[];
  onToggleColumn?: (key: FollowUpColumnKey) => void;
}) {
  const set = (patch: Partial<FollowUpFilterState>) => onChange({ ...value, ...patch });

  return (
    <div className="space-y-3 border-b border-border px-4 py-3.5 sm:px-5">
      <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
        <div className="relative w-full lg:max-w-[420px]">
          <Search
            className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground/70"
            aria-hidden="true"
          />
          <Input
            type="search"
            value={value.search}
            onChange={(event) => set({ search: event.target.value })}
            placeholder="Search patient name, patient ID or guardian phone…"
            aria-label="Search follow-ups"
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
          {visibleColumns && onToggleColumn ? (
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
                {FOLLOW_UP_COLUMNS.filter((column) => column.hideable).map((column) => (
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
          ) : null}
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-2.5">
        <FilterSelect
          label="priority"
          placeholder="Priority"
          width="w-[150px]"
          value={value.priority}
          onChange={(next) => set({ priority: next })}
          options={FOLLOW_UP_PRIORITIES}
        />
        <FilterSelect
          label="status"
          placeholder="Status"
          width="w-[160px]"
          value={value.status}
          onChange={(next) => set({ status: next })}
          options={FOLLOW_UP_STATUSES}
        />
        <FilterSelect
          label="reason"
          placeholder="Reason"
          width="w-[190px]"
          value={value.reason}
          onChange={(next) => set({ reason: next })}
          options={FOLLOW_UP_REASONS}
        />
        <Select value={value.range} onValueChange={(next) => set({ range: next })}>
          <SelectTrigger className="h-9 w-[165px]" aria-label="Filter by date range">
            <SelectValue placeholder="Date range" />
          </SelectTrigger>
          <SelectContent align="start">
            {FOLLOW_UP_DATE_RANGES.map((option) => (
              <SelectItem key={option.key} value={option.key}>
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <FilterSelect
          label="branch"
          placeholder="Branch"
          width="w-[190px]"
          value={value.branch}
          onChange={(next) => set({ branch: next })}
          options={FOLLOW_UP_BRANCHES}
        />

        <Button
          variant="ghost"
          size="sm"
          className="text-muted-foreground"
          onClick={() => onChange(DEFAULT_FOLLOW_UP_FILTERS)}
        >
          Clear
        </Button>
      </div>
    </div>
  );
}

function FilterSelect({
  label,
  placeholder,
  width,
  value,
  onChange,
  options,
}: {
  label: string;
  placeholder: string;
  width: string;
  value: string;
  onChange: (value: string) => void;
  options: readonly string[];
}) {
  return (
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger className={`h-9 ${width}`} aria-label={`Filter by ${label}`}>
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent align="start">
        <SelectItem value="all">All {label}s</SelectItem>
        {options.map((option) => (
          <SelectItem key={option} value={option}>
            {option}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
