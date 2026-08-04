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
  DIVISIONS,
  VISIT_STATUSES,
  VISIT_TYPES,
  OUTDOOR_THERAPISTS,
} from "@/constants/outdoor-data";

export type OutdoorFilterState = {
  search: string;
  type: string;
  status: string;
  division: string;
  therapist: string;
};

export const DEFAULT_OUTDOOR_FILTERS: OutdoorFilterState = {
  search: "",
  type: "all",
  status: "all",
  division: "all",
  therapist: "all",
};

export function OutdoorFilters({
  value,
  onChange,
  onRefresh,
  isRefreshing = false,
  searchPlaceholder = "Search visit ID, patient, guardian or area…",
}: {
  value: OutdoorFilterState;
  onChange: (next: OutdoorFilterState) => void;
  onRefresh?: () => void;
  isRefreshing?: boolean;
  searchPlaceholder?: string;
}) {
  const set = (patch: Partial<OutdoorFilterState>) => onChange({ ...value, ...patch });

  return (
    <div className="space-y-3 border-b border-border px-4 py-3.5 sm:px-5">
      <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
        <div className="relative w-full lg:max-w-[430px]">
          <Search
            className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground/70"
            aria-hidden="true"
          />
          <Input
            type="search"
            value={value.search}
            onChange={(event) => set({ search: event.target.value })}
            placeholder={searchPlaceholder}
            aria-label="Search outdoor visits"
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
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-2.5">
        <Picker
          label="visit types"
          placeholder="Visit type"
          width="w-[185px]"
          value={value.type}
          onChange={(next) => set({ type: next })}
          options={VISIT_TYPES}
        />
        <Picker
          label="statuses"
          placeholder="Status"
          width="w-[165px]"
          value={value.status}
          onChange={(next) => set({ status: next })}
          options={VISIT_STATUSES}
        />
        <Picker
          label="divisions"
          placeholder="Division"
          width="w-[165px]"
          value={value.division}
          onChange={(next) => set({ division: next })}
          options={DIVISIONS}
        />
        <Picker
          label="therapists"
          placeholder="Therapist"
          width="w-[210px]"
          value={value.therapist}
          onChange={(next) => set({ therapist: next })}
          options={OUTDOOR_THERAPISTS.map((therapist) => therapist.name)}
        />
        <Button
          variant="ghost"
          size="sm"
          className="text-muted-foreground"
          onClick={() => onChange(DEFAULT_OUTDOOR_FILTERS)}
        >
          Clear
        </Button>
      </div>
    </div>
  );
}

function Picker({
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
        <SelectItem value="all">All {label}</SelectItem>
        {options.map((option) => (
          <SelectItem key={option} value={option}>
            {option}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
