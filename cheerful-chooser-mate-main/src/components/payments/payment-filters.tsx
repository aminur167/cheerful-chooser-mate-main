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
  PACKAGE_TYPES,
  PAYMENT_DATE_RANGES,
  PAYMENT_METHODS,
  PAYMENT_STATUSES,
} from "@/constants/payment-data";
import { PAYMENT_COLUMNS, type PaymentColumnKey } from "@/components/payments/payment-columns";

export type PaymentFilterState = {
  search: string;
  type: string;
  status: string;
  method: string;
  range: string;
};

export const DEFAULT_PAYMENT_FILTERS: PaymentFilterState = {
  search: "",
  type: "all",
  status: "all",
  method: "all",
  range: "all",
};

export function PaymentFilters({
  value,
  onChange,
  onRefresh,
  isRefreshing = false,
  visibleColumns,
  onToggleColumn,
  searchPlaceholder = "Search patient, receipt, invoice or phone…",
}: {
  value: PaymentFilterState;
  onChange: (next: PaymentFilterState) => void;
  onRefresh?: () => void;
  isRefreshing?: boolean;
  visibleColumns?: PaymentColumnKey[];
  onToggleColumn?: (key: PaymentColumnKey) => void;
  searchPlaceholder?: string;
}) {
  const set = (patch: Partial<PaymentFilterState>) => onChange({ ...value, ...patch });

  return (
    <div className="space-y-3 border-b border-border px-4 py-3.5 sm:px-5">
      <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
        <div className="relative w-full lg:max-w-[400px]">
          <Search
            className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground/70"
            aria-hidden="true"
          />
          <Input
            type="search"
            value={value.search}
            onChange={(event) => set({ search: event.target.value })}
            placeholder={searchPlaceholder}
            aria-label="Search payments"
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
                {PAYMENT_COLUMNS.filter((column) => column.hideable).map((column) => (
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
          label="package type"
          placeholder="Package type"
          width="w-[180px]"
          value={value.type}
          onChange={(next) => set({ type: next })}
          options={PACKAGE_TYPES}
        />
        <FilterSelect
          label="payment status"
          placeholder="Status"
          width="w-[160px]"
          value={value.status}
          onChange={(next) => set({ status: next })}
          options={PAYMENT_STATUSES}
        />
        <FilterSelect
          label="payment method"
          placeholder="Method"
          width="w-[180px]"
          value={value.method}
          onChange={(next) => set({ method: next })}
          options={PAYMENT_METHODS}
        />
        <Select value={value.range} onValueChange={(next) => set({ range: next })}>
          <SelectTrigger className="h-9 w-[160px]" aria-label="Filter by date">
            <SelectValue placeholder="Date" />
          </SelectTrigger>
          <SelectContent align="start">
            {PAYMENT_DATE_RANGES.map((option) => (
              <SelectItem key={option.key} value={option.key}>
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Button
          variant="ghost"
          size="sm"
          className="text-muted-foreground"
          onClick={() => onChange(DEFAULT_PAYMENT_FILTERS)}
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
