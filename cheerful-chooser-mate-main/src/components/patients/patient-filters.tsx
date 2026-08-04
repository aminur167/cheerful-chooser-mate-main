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
  BRANCH_OPTIONS,
  GENDERS,
  PATIENT_DATE_RANGES,
  PATIENT_STATUSES,
  PAYMENT_STATUSES,
  PAYMENT_TYPES,
  THERAPY_TYPES,
} from "@/constants/patient-data";
import { PATIENT_COLUMNS, type PatientColumnKey } from "@/components/patients/patient-columns";

export type PatientFilterState = {
  search: string;
  status: string;
  therapyType: string;
  paymentType: string;
  gender: string;
  range: string;
  branch: string;
};

export const DEFAULT_PATIENT_FILTERS: PatientFilterState = {
  search: "",
  status: "all",
  therapyType: "all",
  paymentType: "all",
  gender: "all",
  range: "all",
  branch: "all",
};

export function PatientFilters({
  value,
  onChange,
  onRefresh,
  isRefreshing = false,
  visibleColumns,
  onToggleColumn,
}: {
  value: PatientFilterState;
  onChange: (next: PatientFilterState) => void;
  onRefresh?: () => void;
  isRefreshing?: boolean;
  visibleColumns: PatientColumnKey[];
  onToggleColumn: (key: PatientColumnKey) => void;
}) {
  const set = (patch: Partial<PatientFilterState>) => onChange({ ...value, ...patch });

  return (
    <div className="space-y-3 border-b border-border px-4 py-3.5 sm:px-5">
      <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
        <div className="relative w-full lg:max-w-[340px]">
          <Search
            className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground/70"
            aria-hidden="true"
          />
          <Input
            type="search"
            value={value.search}
            onChange={(event) => set({ search: event.target.value })}
            placeholder="Search name, phone, patient ID or guardian…"
            aria-label="Search patients"
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
            <DropdownMenuContent align="end" className="w-52">
              <DropdownMenuLabel>Visible columns</DropdownMenuLabel>
              <DropdownMenuSeparator />
              {PATIENT_COLUMNS.filter((column) => column.hideable).map((column) => (
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
          label="Patient status"
          placeholder="Status"
          width="w-[170px]"
          value={value.status}
          onValueChange={(status) => set({ status })}
          allLabel="All statuses"
          options={PATIENT_STATUSES}
        />
        <FilterSelect
          label="Therapy type"
          placeholder="Therapy"
          width="w-[170px]"
          value={value.therapyType}
          onValueChange={(therapyType) => set({ therapyType })}
          allLabel="All therapies"
          options={THERAPY_TYPES}
        />
        <FilterSelect
          label="Payment type"
          placeholder="Payment"
          width="w-[160px]"
          value={value.paymentType}
          onValueChange={(paymentType) => set({ paymentType })}
          allLabel="All payment types"
          options={PAYMENT_TYPES}
        />
        <FilterSelect
          label="Gender"
          placeholder="Gender"
          width="w-[130px]"
          value={value.gender}
          onValueChange={(gender) => set({ gender })}
          allLabel="All genders"
          options={GENDERS}
        />

        <Select value={value.range} onValueChange={(range) => set({ range })}>
          <SelectTrigger className="h-9 w-[160px]" aria-label="Filter by registration date">
            <SelectValue placeholder="Date range" />
          </SelectTrigger>
          <SelectContent>
            {PATIENT_DATE_RANGES.map((range) => (
              <SelectItem key={range.key} value={range.key}>
                {range.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <FilterSelect
          label="Branch"
          placeholder="Branch"
          width="w-[180px]"
          value={value.branch}
          onValueChange={(branch) => set({ branch })}
          allLabel="All branches"
          options={BRANCH_OPTIONS}
        />

        <Button
          variant="ghost"
          size="sm"
          className="text-muted-foreground"
          onClick={() => onChange(DEFAULT_PATIENT_FILTERS)}
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
      <SelectTrigger className={`h-9 ${width}`} aria-label={`Filter by ${label.toLowerCase()}`}>
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

export { PAYMENT_STATUSES };
