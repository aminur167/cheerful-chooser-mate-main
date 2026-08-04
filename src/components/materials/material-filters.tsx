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
  MATERIAL_BRANCHES,
  MATERIAL_CATEGORY_NAMES,
  MATERIAL_STATUSES,
  STORAGE_LOCATIONS,
} from "@/constants/material-data";
import {
  MATERIAL_COLUMNS,
  type MaterialColumnKey,
} from "@/components/materials/material-columns";

export type MaterialFilterState = {
  search: string;
  category: string;
  status: string;
  location: string;
  branch: string;
};

export const DEFAULT_MATERIAL_FILTERS: MaterialFilterState = {
  search: "",
  category: "all",
  status: "all",
  location: "all",
  branch: "all",
};

export function MaterialFilters({
  value,
  onChange,
  onRefresh,
  isRefreshing = false,
  visibleColumns,
  onToggleColumn,
}: {
  value: MaterialFilterState;
  onChange: (next: MaterialFilterState) => void;
  onRefresh?: () => void;
  isRefreshing?: boolean;
  visibleColumns?: MaterialColumnKey[];
  onToggleColumn?: (key: MaterialColumnKey) => void;
}) {
  const set = (patch: Partial<MaterialFilterState>) => onChange({ ...value, ...patch });

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
            placeholder="Search material name, code, brand or supplier…"
            aria-label="Search materials"
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
                {MATERIAL_COLUMNS.filter((column) => column.hideable).map((column) => (
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
          label="category"
          placeholder="Category"
          width="w-[190px]"
          value={value.category}
          onChange={(next) => set({ category: next })}
          options={MATERIAL_CATEGORY_NAMES}
        />
        <FilterSelect
          label="status"
          placeholder="Status"
          width="w-[165px]"
          value={value.status}
          onChange={(next) => set({ status: next })}
          options={MATERIAL_STATUSES}
        />
        <FilterSelect
          label="location"
          placeholder="Location"
          width="w-[215px]"
          value={value.location}
          onChange={(next) => set({ location: next })}
          options={STORAGE_LOCATIONS}
        />
        <FilterSelect
          label="branch"
          placeholder="Branch"
          width="w-[190px]"
          value={value.branch}
          onChange={(next) => set({ branch: next })}
          options={MATERIAL_BRANCHES}
        />

        <Button
          variant="ghost"
          size="sm"
          className="text-muted-foreground"
          onClick={() => onChange(DEFAULT_MATERIAL_FILTERS)}
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
        <SelectItem value="all">All {label === "category" ? "categories" : `${label}s`}</SelectItem>
        {options.map((option) => (
          <SelectItem key={option} value={option}>
            {option}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
