import { Download, RefreshCw, Search } from "lucide-react";
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
  BRANCH_STATUSES,
  DATE_RANGES,
  DIVISIONS,
  MANAGERS,
} from "@/constants/branch-data";

export type BranchFilterState = {
  search: string;
  status: string;
  division: string;
  manager: string;
  range: string;
};

export const DEFAULT_BRANCH_FILTERS: BranchFilterState = {
  search: "",
  status: "all",
  division: "all",
  manager: "all",
  range: "all",
};

export function BranchFilters({
  value,
  onChange,
  onRefresh,
  isRefreshing = false,
}: {
  value: BranchFilterState;
  onChange: (next: BranchFilterState) => void;
  onRefresh?: () => void;
  isRefreshing?: boolean;
}) {
  const set = (patch: Partial<BranchFilterState>) => onChange({ ...value, ...patch });

  return (
    <div className="flex flex-col gap-3 border-b border-border px-4 py-3.5 lg:flex-row lg:items-center lg:justify-between sm:px-5">
      <div className="flex min-w-0 flex-1 flex-wrap items-center gap-2.5">
        <div className="relative w-full min-w-[220px] flex-1 sm:w-auto sm:max-w-[260px] sm:basis-[240px]">
          <Search
            className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground/70"
            aria-hidden="true"
          />
          <Input
            type="search"
            value={value.search}
            onChange={(event) => set({ search: event.target.value })}
            placeholder="Search branch, code, city…"
            aria-label="Search branches"
            className="h-9 bg-muted/40 pl-9 shadow-none"
          />
        </div>

        <Select value={value.status} onValueChange={(status) => set({ status })}>
          <SelectTrigger className="h-9 w-[140px]" aria-label="Filter by status">
            <SelectValue placeholder="Status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All statuses</SelectItem>
            {BRANCH_STATUSES.map((status) => (
              <SelectItem key={status} value={status}>
                {status}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select value={value.division} onValueChange={(division) => set({ division })}>
          <SelectTrigger className="h-9 w-[150px]" aria-label="Filter by division">
            <SelectValue placeholder="Division" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All divisions</SelectItem>
            {DIVISIONS.map((division) => (
              <SelectItem key={division} value={division}>
                {division}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select value={value.manager} onValueChange={(manager) => set({ manager })}>
          <SelectTrigger className="h-9 w-[170px]" aria-label="Filter by manager">
            <SelectValue placeholder="Manager" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All managers</SelectItem>
            {MANAGERS.map((manager) => (
              <SelectItem key={manager} value={manager}>
                {manager}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select value={value.range} onValueChange={(range) => set({ range })}>
          <SelectTrigger className="h-9 w-[160px]" aria-label="Filter by created date">
            <SelectValue placeholder="Date range" />
          </SelectTrigger>
          <SelectContent>
            {DATE_RANGES.map((range) => (
              <SelectItem key={range.key} value={range.key}>
                {range.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="flex shrink-0 items-center gap-2.5">
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
      </div>
    </div>
  );
}
