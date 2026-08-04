import type { ReactNode } from "react";
import { Search } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { TableSkeleton } from "@/components/common/loading-skeletons";
import { EmptyState } from "@/components/common/empty-state";

export type Column<T> = {
  key: string;
  header: string;
  align?: "left" | "right" | "center";
  className?: string;
  cell: (row: T) => ReactNode;
};

export function DataTableToolbar({
  searchValue,
  onSearchChange,
  searchPlaceholder = "Search…",
  actions,
  filters,
  className,
}: {
  searchValue?: string;
  onSearchChange?: (value: string) => void;
  searchPlaceholder?: string;
  actions?: ReactNode;
  filters?: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-3 border-b border-border px-4 py-3.5 sm:flex-row sm:items-center sm:justify-between sm:px-5",
        className,
      )}
    >
      <div className="flex min-w-0 flex-1 flex-wrap items-center gap-2.5">
        {onSearchChange ? (
          <div className="relative min-w-0 flex-1 sm:max-w-xs">
            <Search
              className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground/70"
              aria-hidden="true"
            />
            <Input
              type="search"
              value={searchValue ?? ""}
              onChange={(event) => onSearchChange(event.target.value)}
              placeholder={searchPlaceholder}
              aria-label={searchPlaceholder}
              className="h-9 bg-muted/40 pl-9 shadow-none"
            />
          </div>
        ) : null}
        {filters}
      </div>
      {actions ? <div className="flex shrink-0 items-center gap-2.5">{actions}</div> : null}
    </div>
  );
}

export function DataTable<T>({
  columns,
  rows,
  getRowId,
  isLoading = false,
  emptyTitle = "Nothing to show",
  emptyDescription,
  emptyAction,
  caption,
  toolbar,
  footer,
  stickyHeader = true,
  maxBodyHeight,
  className,
}: {
  columns: Column<T>[];
  rows: T[];
  getRowId: (row: T, index: number) => string;
  isLoading?: boolean;
  emptyTitle?: string;
  emptyDescription?: string;
  emptyAction?: ReactNode;
  caption?: string;
  /** Optional toolbar rendered above the table, e.g. <DataTableToolbar />. */
  toolbar?: ReactNode;
  /** Optional footer area, typically <TablePagination />. */
  footer?: ReactNode;
  stickyHeader?: boolean;
  /** Enables vertical scroll so the sticky header stays visible. */
  maxBodyHeight?: string;
  className?: string;
}) {
  const alignClass = (align?: Column<T>["align"]) =>
    align === "right" ? "text-right" : align === "center" ? "text-center" : "text-left";

  const body = isLoading ? (
    <div className="p-4 sm:p-5">
      <TableSkeleton columns={columns.length} />
    </div>
  ) : rows.length === 0 ? (
    <EmptyState
      title={emptyTitle}
      description={emptyDescription}
      action={emptyAction}
      className="rounded-none border-0 shadow-none"
    />
  ) : (
    <div
      className="overflow-auto"
      style={maxBodyHeight ? { maxHeight: maxBodyHeight } : undefined}
    >
      <Table>
        {caption ? <caption className="sr-only">{caption}</caption> : null}
        <TableHeader>
          <TableRow className="border-border hover:bg-transparent">
            {columns.map((column) => (
              <TableHead
                key={column.key}
                scope="col"
                className={cn(
                  "h-11 bg-muted/50 px-5 text-[11px] font-semibold uppercase tracking-[0.08em] text-muted-foreground backdrop-blur",
                  stickyHeader && "sticky top-0 z-10",
                  alignClass(column.align),
                  column.className,
                )}
              >
                {column.header}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow
              key={getRowId(row, index)}
              className="border-border transition-enterprise hover:bg-surface-hover"
            >
              {columns.map((column) => (
                <TableCell
                  key={column.key}
                  className={cn(
                    "px-5 py-3.5 text-sm text-foreground",
                    alignClass(column.align),
                    column.className,
                  )}
                >
                  {column.cell(row)}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );

  return (
    <div
      className={cn(
        "overflow-hidden rounded-xl border border-border bg-card shadow-card",
        className,
      )}
    >
      {toolbar}
      {body}
      {footer ? (
        <div className="border-t border-border px-4 py-3.5 sm:px-5">{footer}</div>
      ) : null}
    </div>
  );
}
